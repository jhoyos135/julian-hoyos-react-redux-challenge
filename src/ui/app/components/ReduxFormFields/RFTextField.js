/**
 * RFTextField.js
 *
 * This special component is used within the Redux Form Field component.
 * It renders a textbox component from the Material UI library.
 * It gets passed special props from Redux Form.
 *
 * @see https://redux-form.com/7.4.2/docs/api/field.md/#props
 */

import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export const RFTextField = ({ custom, value, input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      <TextField
      {...custom}
      {...input} 
      type={type} 
      autoComplete='off'
      label={label}
      value={value}
      className='center'/>
      <p className='red'>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </p>
    </div>
  </div>
  
);

RFTextField.propTypes = {
  input: PropTypes.any.isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.any
  }).isRequired
};
