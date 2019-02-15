import { getWidget, getUiOptions, getDefaultRegistry } from 'react-jsonschema-form/lib/utils';
import myWidgets from './widgets';

export default function ArrayFieldTemplate(props) {
  const {
    schema,
    uiSchema,
    formData,
    idSchema,
    name,
    disabled,
    readonly,
    autofocus,
    onBlur,
    onFocus,
    onChange,
    registry = getDefaultRegistry(),
    rawErrors,
  } = props;
  const title = schema.title || name;
  const items = formData;
  const { widgets, formContext } = registry;
  const { widget = 'files', ...options } = getUiOptions(uiSchema);
  let Widget = getWidget(schema, widget, myWidgets);
  if (!Widget) Widget = getWidget(schema, widget, widgets);

  return (
    <Widget
      options={options}
      id={idSchema && idSchema.$id}
      multiple
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      schema={schema}
      title={title}
      value={items}
      disabled={disabled}
      readonly={readonly}
      formContext={formContext}
      autofocus={autofocus}
      rawErrors={rawErrors}
    />
  );
}
