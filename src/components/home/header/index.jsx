import React from 'react';
import { ReactComponent as IconLogout } from './../../../assets/images/logout.svg';
import { ReactComponent as IconUser } from './../../../assets/images/user.svg';
import './header.css';

const Header = ({ logout, currentUser }) => {

  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <h2 className="header__title">React User Application</h2>
        <div className="header__rigt-part">
          <div className="header__link header__link_profile">
            <IconUser className="icon-user" />
            <span className="header__text header__text_user">{currentUser && currentUser.username}</span>
          </div> 
          <div className="header__link" onClick={logout}>              
            <span className="header__text header__text_logout">Logout</span>
            <IconLogout className="icon-action" />
          </div>    
        </div>
      </div>
    </header>   
  )
}

export default Header;