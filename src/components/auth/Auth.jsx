import React from 'react';
import './Auth.css';

const Auth = () => {
  return (
    <div className="auth">
      <div className="container">
        <h2 className="auth__title">Sign in</h2>
        <form className="auth-form">
          <div className="auth-form__item">
            <input className="auth-form__input" type="text" placeholder="Username" name="username" />
          </div>
          <div className="auth-form__item">
            <input className="auth-form__input" type="password" placeholder="Password" name="password" />
          </div>
          
          <button className="button auth-form__button" type="submit">LogIn</button>
        </form>
      </div>
    </div>
  )
}

export default Auth;