import React from 'react';
import { Field, reduxForm } from 'redux-form';
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
              component="input"
              type="text" 
              placeholder="Username" 
              name="username" />
          </div>
          <div className="auth-form__item">
            <Field 
              className="auth-form__input"
              component="input"
              type="password" 
              placeholder="Password" 
              name="password"
              autoComplete="off" />
          </div>
          {props.err && <span>Error</span>}       
          <button className="button auth-form__button" type="submit">LogIn</button>
        </form>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'authForm'
})(Auth);