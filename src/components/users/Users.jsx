import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get } from '../../redux/actionCreators';
import User from './User';
import './Users.css';

const Users = (props) => {
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token)
    props.get(token)
  }, []);

  const users = props.users.map(user => <User key={user.id} user={user} />);

  return (
    <div className="users">
      <div className="wrapper">
        <div className="users__title">
          <span className="users__id">ID</span>
          <span className="users__name">Firstname</span>
          <span className="users__name">Lastname</span>
          <span className="users__name">Username</span>
        </div>
        <ul>
          {users}
        </ul>
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Users);