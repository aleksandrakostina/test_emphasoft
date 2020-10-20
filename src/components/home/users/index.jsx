import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import User from './User';
import './Users.css';

const Users = ({ users }) => {

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
    users: state.users.users,
  }
}

export default connect(mapStateToProps)(Users);