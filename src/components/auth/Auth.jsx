import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/actionCreators';
import './Auth.css';

const Auth = (props) => {
  return (
    <div className="auth">
      <div className="container">
        <h2 className="auth__title">Sign in</h2>
        <form className="auth-form">
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
          <button className="button auth-form__button" type="submit">LogIn</button>
        </form>
        <button onClick={()=> props.getUsers('test_super', 'Nf<U4f<rDbtDxAPn')}></button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (username, password) => {
      dispatch(login(username, password))
    }
  }
}

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'authForm'
})(Auth));