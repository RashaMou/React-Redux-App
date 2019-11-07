import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <NavLink to='/'><h1>Studio Ghibli Database</h1></NavLink>
      <h2>Navigation</h2>
    </div>
  )
}

export default Header;