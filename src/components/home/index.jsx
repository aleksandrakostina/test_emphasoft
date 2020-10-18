import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../header/Header';
import Users from '../users/Users';

const Home = (props) => {
  
  if(!props.isAuth) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <Users />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.login.isAuth
  }
}

export default connect(mapStateToProps)(Home);