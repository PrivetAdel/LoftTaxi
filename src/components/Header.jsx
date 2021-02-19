import React from 'react';
import logoPic from '../assets/logo-pic.svg';
import logoText from '../assets/logo-text.svg';

const Header = ({onClickPage}) => {
  return (
    <div className="header">
      <div className="nav-logo">
        <img width="61" height="61" src={logoPic} alt="loft-taxi logo-pic"/>
        <img width="196" height="32" src={logoText} alt="loft-taxi logo-text"/>
      </div>
      <div className="nav">
        <a onClick={onClickPage} name="MapPage" href="#" className="nav-link">Карта</a>
        <a onClick={onClickPage} name="ProfilePage" href="#" className="nav-link">Профиль</a>
        <a onClick={onClickPage} name="LoginPage" href="#" className="nav-link">Выйти</a>
      </div>
    </div>
  );
};

export default Header;