# react-jsonschema-form-extensions

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Just a small custom field for the awesome [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form).

This is a fork of [audibene-labs/react-jsonschema-form-layout](https://github.com/audibene-labs/react-jsonschema-form-layout),
for support bootstrap grid system completely.

see [DEMO](https://narazaka.github.io/react-jsonschema-form-layout-grid/demo/dist/index.html)

# Key features:

* support bootstrap's grid
* add non-form elements in between

[build-badge]: https://img.shields.io/travis/Narazaka/react-jsonschema-form-layout-grid/master.png?style=flat-square
[build]: https://travis-ci.org/Narazaka/react-jsonschema-form-layout-grid

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-jsonschema-form-layout-grid

[coveralls-badge]: https://img.shields.io/coveralls/Narazaka/react-jsonschema-form-layout-grid/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/Narazaka/react-jsonschema-form-layout-grid


![2017-03-02 14 09 19](https://cloud.githubusercontent.com/assets/179281/23513296/ce427434-ff63-11e6-8cfd-d3d3ae8467bd.gif)


# Installation

```
npm install react-jsonschema-form-extensions
```

# Usage:

Make sure you checkout the [demo-src](https://github.com/Narazaka/react-jsonschema-form-layout-grid/blob/master/demo/src/index.js)

```javascript
const schema = {
  title: 'Todo',
  type: 'object',
  required: ['title'],
  properties: {
    'password': {
      'type': 'string',
      'title': 'Password'
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
  layout_grid: LayoutGridField
}

const uiSchema = {
  'ui:field': 'layout_grid',
  'ui:layout_grid': { 'ui:row': [
    { 'ui:col': { md: 12, children: [
      { 'ui:group': 'Name', 'ui:row': [
        { 'ui:col': { md: 6, children: ['firstName'] } },
        { 'ui:col': { md: 6, children: ['lastName'] } },
      ] },
      { 'ui:row': [
        { 'ui:col': { md: 6, children: ['password'] } },
        { 'ui:col': { md: 6, children: ['age'] } },
      ] },
      { 'ui:row': [
        { 'ui:col': { md: 12, children: ['bio'] } },
      ] },
    ] } },
  ] },
}
```
