import React from 'react';

const InputField = ({meta, input, className, placeholder, type}) => {

  return (
    <>
      <input {...input} className={className} placeholder={placeholder} type={type} />
      <div className="form__error">{(meta.touched && meta.error) && meta.error}</div>
    </>
  )
}

export default InputField;