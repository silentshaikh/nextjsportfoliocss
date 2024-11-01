import React from 'react'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import '../../styles/header.css';
import HeaderIcon from '../HeaderIcon/HeaderIcon';

function Header() {
  return (
    <header className='header'>
      <Logo/>
      <NavBar/>
      <HeaderIcon/>
    </header>
  )
}

export default Header
