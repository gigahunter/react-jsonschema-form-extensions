import ArrayField from 'react-jsonschema-form/lib/components/fields/ArrayField';
import { getWidget, getUiOptions } from 'react-jsonschema-form/lib/utils';

import myWidgets from '../widgets';

function Label({ label, required }) {
  if (!label) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }
  return (
    <label className="control-label">
      {label}
      {required && <span className="required">*</span>}
    </label>
  );
}

function ArrayFieldDescription({ DescriptionField, idSchema, description }) {
  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }
  const id = `${idSchema.$id}__description`;
  return <DescriptionField id={id} description={description} />;
}

function myArrayField(props) {
  const { schema, uiSchema } = props;
  const { widget, ...options } = getUiOptions(uiSchema);
  const { DescriptionField } = props.registry.fields;

  if (widget) {
    let Widget = null;

    try {
      Widget = getWidget(schema, widget, myWidgets);
    } catch (ex) {
      Widget = null;
    }

    const {
      autofocus,
      disabled,
      errorSchema,
      formContext,
      formData,
      onBlur,
      onChange,
      onFocus,
      rawErrors,
      readonly
    } = props;

    if (Widget) {
      const title = props.uiSchema['ui:title'] || props.schema.title;
      const desc = props.uiSchema['ui:description'] || props.schema.description;

      return (
        <div className={props.className}>
          <Label label={title} required={props.required} />

          <ArrayFieldDescription
            DescriptionField={DescriptionField}
            idSchema={props.idSchema}
            description={desc}
          />

          <Widget
            autofocus={autofocus}
            disabled={disabled}
            errorSchema={errorSchema}
            formContext={formContext}
            value={formData}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            options={options}
            schema={schema}
            rawErrors={rawErrors}
            readonly={readonly}
          />
        </div>
      );
    }
  }

  return <ArrayField {...props} />;
}

export default myArrayField;
