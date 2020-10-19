import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate } from '../../utils/validate';
import InputField from '../InputFields';
import './Auth.css';

const Auth = (props) => {

  return (
    <div className="auth">
      <div className="container">
        <h2 className="auth__title">Sign in</h2>
        <form className="auth-form" onSubmit={props.handleSubmit}>
          <div className="auth-form__item">
            <Field 
              className="auth-form__input"
              component={InputField}
              type="text" 
              placeholder="Username" 
              name="username" />
          </div>
          <div className="auth-form__item">
            <Field 
              className="auth-form__input"
              component={InputField}
              type="password" 
              placeholder="Password" 
              name="password"
              autoComplete="off" />
          </div>  
          <button className="button auth-form__button" type="submit">LogIn</button>
        </form>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'authForm',
  validate
})(Auth);