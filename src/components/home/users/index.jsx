import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../../redux/actionCreators';
import Header from './Header';
import User from './User';
import './Users.css';

const Users = ({ getUsers, users }) => {

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const renderUsers = users.map(user => <User key={user.id} user={user} />);

  return (
    <div className="users">
      <div className="wrapper">
        <Header />
        <ul>
          {renderUsers}
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