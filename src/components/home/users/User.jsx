import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {

  return (
    <li className="users__item">
      <span className="users__id">{props.user.id}</span>
      <span className="users__name">{props.user.first_name ? props.user.first_name : '-'}</span>
      <span className="users__name">{props.user.last_name ? props.user.last_name : '-'}</span>
      <span className="users__name">{props.user.username}</span>
      <Link to={`/users/${props.user.id}`}>
        <button className="button users__button">Edit</button>
      </Link>
    </li>
  )
}

export default User;