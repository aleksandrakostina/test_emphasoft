import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../redux/actionCreators';
import { ReactComponent as IconLogout } from './../../../assets/images/logout.svg';
import './header.css';

const Header = ({ logout, user }) => {

  const handleLogout = () => {
    logout();
  }

  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <h2 className="header__title">React User Application</h2>
        <div className="header__button-logout" onClick={handleLogout}> 
          <span className="header__text">Logout</span>
          <IconLogout className="icon-action" />
        </div>
      </div>
    </header>   
  )
}

const mapDispathToProps = (dispath) => {
  return {
    logout: () => {
      dispath(logout());
    }
  }
}

export default connect(null, mapDispathToProps)(Header);