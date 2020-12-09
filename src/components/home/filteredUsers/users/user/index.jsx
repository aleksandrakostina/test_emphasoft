import React from 'react';
import classname from 'classnames';

const User = ({ setSelected, user, selected }) => {

  const handleClick = () => {
    const selectedId = user.id === selected ? null : user.id;
    setSelected(selectedId);
  }

  return (
    <li className={classname("users__item", {"users__item_active": user.id === selected})} onClick={handleClick}>
      <span className="users__cell users__id">{user.id}</span>
      <span className="users__cell users__name">{user.username}</span>
      <span className="users__cell users__name">{user.first_name ? user.first_name : '-'}</span>
      <span className="users__cell users__name">{user.last_name ? user.last_name : '-'}</span>     
    </li>
  )
}

export default User;