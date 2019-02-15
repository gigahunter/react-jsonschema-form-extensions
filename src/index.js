import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-jsonschema-form';

import transformErrors from './transformErrors';
import myWidgets from './widgets';
import myFields from './fields';

class JsonForm extends Component {
  submit() {
    this.form.submit();
  }

  render() {
    const props = this.props;
    let widgets = myWidgets;
    let fields = myFields;

    if (props.fields) fields = { ...fields, ...props.fields };
    if (props.widgets) widgets = { ...widgets, ...props.widgets };

    const formProps = { ...props, widgets, fields }; // to override
    formProps.formContext = props.formData;

    const myTransformErrors = errors => {
      const err = transformErrors(errors);
      if (props.transformErrors) return props.transformErrors(err);
      return err;
    };
    formProps.transformErrors = myTransformErrors;

    return (
      <Form
        noHtml5Validate
        showErrorList={false}
        liveValidate
        {...formProps}
        ref={ref => (this.form = ref)}
        // noValidate
      />
    );
  }
}

JsonForm.propTypes = {
  schema: PropTypes.object,
  uiSchema: PropTypes.object,
  formData: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onError: PropTypes.func,
  validate: PropTypes.func,
};

export default JsonForm;
