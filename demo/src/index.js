import React from 'react'
import { render } from 'react-dom'
import LayoutField from '../../src'
import Form from 'react-jsonschema-form'
import ImageUploadWidget from './ImageUploadWidget'

import './dnd.less'

export const TitleField = (props) => {
  console.log('titlefield', props)
  const { title, required, id } = props

  let legend = legend = `${title}${(required ? '*' : '')}`
  return <label className="control-label" for={id}>{legend}</label>
}

const schema = {
  title: 'Tell m',
  type: 'object',
  required: ['firstName'],
  properties: {
    'image': {
      type: 'string'
    },
    user: {
      type: 'object',
      'properties': {
        'password': {
          'type': 'string',
          'title': 'Password'
        },
        'username': {
          'type': 'string'
        }
      }
    },
    'details': {
      type: 'boolean'
    },
    'lastName': {
      'type': 'string',
      'title': 'Last name'
    },
    'bio': {
      'type': 'string',
      'title': 'Bio'
    },
    'firstName': {
      'type': 'string',
      'title': 'First name'
    },
    'age': {
      'type': 'integer',
      'title': 'Age'
    }
  }
}

const fields = {
  layout_grid: LayoutField,
  TitleField: TitleField
}

const widgets = {
  ImageUpload: ImageUploadWidget
}

const isFilled = (fieldName) => ({ formData }) => (formData[fieldName] && formData[fieldName].length) ? true : false
const isTrue = (fieldName) => ({ formData }) => (formData[fieldName])

const uiSchema = {
  'ui:field': 'layout_grid',
  'ui:layout_grid': { 'ui:row': [
    { 'ui:col': { md: 12, children: [
      { 'ui:group': 'ABC', 'ui:row': [
        { 'ui:col': { md: 6, children: ['firstName'] } },
        { 'ui:col': { md: 6, children: ['lastName'] } },
      ] },
      { 'ui:row': [
        { 'ui:col': { md: 3, children: ['image'] } },
        { 'ui:col': { md: 9, children: ['user'] } },
      ] },
      { 'ui:row': [
        { 'ui:col': { md: 12, children: ['details'] } },
      ] },
      { 'ui:row': [
        { 'ui:col': { md: 12, children: [
          { name: 'description', render: (props) => {
            const { formData, errorSchema } = props
            const { firstName, lastName } = formData

            return (
              <div>
                <h3>Hello, {firstName} {lastName}!</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sad</p>
              </div>
            )
          } }
        ] } },
      ] },
      { 'ui:row': [
        { 'ui:col': { md: 12, children: ['age'] } },
      ] },
      { 'ui:row': [
        { 'ui:col': { md: 12, children: ['bio'] } },
      ] },
    ] } },
  ] },
  'bio': {
    'ui:widget': 'textarea'
  },
  'image': {
    'ui:widget': 'ImageUpload'
  },
  'user': {
    'ui:field': 'layout_grid',
    'ui:layout_grid': { 'ui:row': [
        { 'ui:col': { md: 6, children: ['username'] } },
        { 'ui:col': { md: 6, children: ['password'] } },
    ] },

  }
}

class MyForm extends React.Component {
  onSubmit(e) {
    console.log('onSubmit', e)
  }
  render() {
    const { formData } = this.props
    return (
      <div className='container'>
        <div className="row">
            <div className="col-xs-8 col-xs-offset-2">
              <Form
                formData={formData}
                schema={schema}
                uiSchema={uiSchema}
                fields={fields}
                widgets={widgets}
                onSubmit={this.onSubmit}
                noHtml5Validate={true}/>
            </div>
        </div>
      </div>
    )
  }
}

class Demo extends React.Component {
  render() {
    return (
      <div>
        <h3>Demo form</h3>
        <MyForm formData={{ firstName: 'hello' }} />
      </div>
    )
  }
}


render(<Demo/>, document.querySelector('#demo'))
