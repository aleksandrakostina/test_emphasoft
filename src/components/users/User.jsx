import React from 'react';

const User = (props) => {

  return (
    <li className="users__item">
      <span className="users__id">{props.user.id}</span>
      <span className="users__name">{props.user.first_name ? props.user.first_name : '-'}</span>
      <span className="users__name">{props.user.last_name ? props.user.last_name : '-'}</span>
      <span className="users__name">{props.user.username}</span>
    </li>
  )
}

export default User;