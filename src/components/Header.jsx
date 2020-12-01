import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/styles/static/logo-platzi.png';
import userIcon from '../assets/styles/static/user-icon.png';

const Header = () => (
  <header className='header'>
    <img className='header__img' src={logo} alt='Platzi Video' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='Icon-user' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
