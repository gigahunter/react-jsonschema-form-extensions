import React from 'react';
import PropTypes from 'prop-types';

function DateWidget(props) {
  const {
    value,
    onChange,
    registry: {
      widgets: { BaseInput }
    }
  } = props;

  let nProps = props;
  if (value && value.length > 10) {
    const date = new Date(value);
    const ss = date.format('yyyy-MM-dd');
    nProps = { ...props, value: ss };
  }

  return (
    <BaseInput
      type="date"
      {...nProps}
      onChange={value => {
        if (!value) onChange(undefined);
        if (parseInt(value.substr(0, 4)) < 1000) return;

        const ary = value.split('-').map(d => parseInt(d, 10));
        const date = new Date(ary[0], ary[1] - 1, ary[2]);
        onChange(date.toISOString());
      }}
    />
  );
}

if (process.env.NODE_ENV !== 'production') {
  DateWidget.propTypes = {
    value: PropTypes.string
  };
}

export default DateWidget;
