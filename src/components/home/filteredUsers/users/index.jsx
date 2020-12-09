import React from 'react';
import UsersHeader from './usersHeader';
import User from './user';
import './Users.css';

const Users = ({ users, setSelected, selected, handleClickToggle, valueButton, columns }) => {
  
  const renderUsers = users.map(user => <User key={user.id} user={user} setSelected={setSelected} selected={selected} />);

  return (
    <div className="users">
      <div className="wrapper users__wrapper">
        <UsersHeader handleClickToggle={handleClickToggle} valueButton={valueButton} columns={columns} />
          <ul>
            {renderUsers}
          </ul>
      </div>
    </div>
  )
}

export default Users;