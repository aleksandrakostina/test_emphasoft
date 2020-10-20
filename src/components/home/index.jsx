import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../redux/actionCreators';
import CreateButton from './CreateButton';
import Header from './header';
import Users from './users';

const Home = ({ getUsers }) => {

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <Header />
      <CreateButton />
      <Users />     
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(getUsers())
    }
  }
}

export default connect(null, mapDispatchToProps)(Home);