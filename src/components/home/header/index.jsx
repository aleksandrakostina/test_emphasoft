import React from 'react';
import { connect } from 'react-redux';
import { logout, clear } from '../../../redux/actionCreators';
import './Header.css';

const Header = (props) => {

  const handleClick = () => {
    props.logout();
    props.clear();
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

const mapDispathToProps = (dispath) => {
  return {
    logout: () => {
      dispath(logout())
    },
    clear: () => {
      dispath(clear())
    }
  }
}

export default connect(null, mapDispathToProps)(Header);