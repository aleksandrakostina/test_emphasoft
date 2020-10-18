import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../redux/actionCreators';
import './Header.css';

const Header = (props) => {

  const handleClick = () => {
    props.logout();
  }

  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <h2 className="header__title">Users list</h2>
        <button className="button header__button" onClick={handleClick}>Logout</button>
      </div>
    </header>
    
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.login.isAuth
  }
}

const mapDispathToProps = (dispath) => {
  return {
    logout: () => {
      dispath(logout())
    } 
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);