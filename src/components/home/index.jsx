import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../redux/actionCreators';
import CreateButton from './CreateButton';
import Header from './header';
import Users from './users';

const Home = ({getUsers, isLoading}) => {
  
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if(isLoading) {
    return null;
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
    isLoading: state.loader.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(getUsers())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);