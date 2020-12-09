import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate } from '../../utils/validate';
import InputField from '../common/inputField';
import './Auth.css';
import { ReactComponent as EyeIcon } from './../../assets/images/eye.svg';
import { ReactComponent as InvisibleIcon } from './../../assets/images/invisible.svg';

const Auth = (props) => {

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

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
              name="username"
              autoComplete="username" />
          </div>
          <div className="auth-form__item">
            <Field 
              className="auth-form__input"
              component={InputField}
              type={passwordShown ? "text" : "password"}
              placeholder="Password" 
              name="password"
              autoComplete="current-password" />
              {passwordShown 
                ? <InvisibleIcon className="icon_eye" onClick={togglePasswordVisiblity} /> 
                : <EyeIcon className="icon_eye" onClick={togglePasswordVisiblity} />
              }
          </div>
          <div className="auth-form__error">{props.error && props.error}</div>
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