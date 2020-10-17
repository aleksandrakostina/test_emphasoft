import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { get } from '../../redux/actionCreators';
import Header from '../header/Header';
import Users from '../users/Users';
import './Home.css';

const Home = (props) => {

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token)
    props.get(token)
  }, [])

  return (
    <>
      <Header />
      <Users users={props.users} />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    get: (token) => {
      dispatch(get(token))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);