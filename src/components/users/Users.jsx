import React from 'react';
import User from './User';
import './Users.css';

const Users = (props) => {

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

export default Users;