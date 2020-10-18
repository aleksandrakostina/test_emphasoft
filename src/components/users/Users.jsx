import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../redux/actionCreators';
import User from './User';
import './Users.css';

const Users = (props) => {
  
  useEffect(() => {
    props.getUsers()
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
    getUsers: () => {
      dispatch(getUsers())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);