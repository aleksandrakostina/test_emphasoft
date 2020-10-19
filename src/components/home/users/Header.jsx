import React from 'react';
import './Users.css';

const Header = () => {

  return (
    <div className="users__title">
      <span className="users__id">ID</span>
      <span className="users__name">Firstname</span>
      <span className="users__name">Lastname</span>
      <span className="users__name">Username</span>
    </div>
  )
}

export default Header;