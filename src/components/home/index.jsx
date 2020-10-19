import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CreateButton from './CreateButton';
import Header from './header';
import Users from './users';

const Home = (props) => {
  
  if(!props.isAuth) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <CreateButton />
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