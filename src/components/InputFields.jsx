import React from 'react';

const InputField = ({meta, input, className, placeholder, type}) => {

  return (
    <div>
      <input {...input} className={className} placeholder={placeholder} type={type} />
      <div className="error">{(meta.touched && meta.error) && meta.error}</div>
    </div>
  )
}

export default InputField;