import React from 'react';
import Input from './Input';
function RenderTextField({input, meta, label, type}) {
  return <div>
      <Input {...input} type='text' type={type} errorMessage={ meta.touched && meta.error} label={label} />
  </div>;
}

export default RenderTextField;
