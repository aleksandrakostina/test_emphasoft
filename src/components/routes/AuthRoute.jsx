import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const AuthRoute = (props) => {
  const { isAuth } = props;

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.login.isAuth
  }
}

export default connect(mapStateToProps)(AuthRoute);