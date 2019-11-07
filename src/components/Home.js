import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <NavLink to='/films'><h2>Films Link Image</h2></NavLink>
      <NavLink to='/characters'><h2>Characters Link Image</h2></NavLink>
      <NavLink to='/places'><h2>Places Link Image</h2></NavLink>
      <NavLink to='/vehicles'><h2>Vehicles</h2></NavLink>
    </div>
  )
}

export default Home;

