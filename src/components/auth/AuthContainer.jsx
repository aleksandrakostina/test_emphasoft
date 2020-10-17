import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, loginFail, success } from '../../redux/actionCreators';
import Auth from './Auth';

const AuthContainer = (props) => {

  if(props.isAuth) {
    return <Redirect to="/" />
  }

  const handleSubmit = (values) => {
    if(values.username && values.password) {
      props.getUsers(values.username, values.password);
    } else {
      props.loginFail();
      //alert('Enter your password or username');
    }
  }

  const handleChange = () => {
    props.success();
  }

  return (
    <Auth onSubmit={handleSubmit} 
          err={props.err}
          handleChange={handleChange} />
  )
}

const mapStateToProps = (state) => {
  return {
    err: state.login.err,
    isAuth: state.login.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (username, password) => {
      dispatch(login(username, password))
    },
    loginFail: () => {
      dispatch(loginFail());
    },
    success: () => {
      dispatch(success());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);