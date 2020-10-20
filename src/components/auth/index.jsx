import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/actionCreators';
import Auth from './Auth';

const AuthContainer = (props) => {

  if(props.isAuth) {
    return <Redirect to="/" />
  } 
  
  const handleSubmit = (values) => {
    props.login(values);
  }

  return (
    <Auth onSubmit={handleSubmit} />
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.login.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      dispatch(login(username, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);