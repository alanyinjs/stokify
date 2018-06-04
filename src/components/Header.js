import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Stockify - Transaction Butler</h1>
    <NavLink to='/' activeClassName="header__navlink--active" exact={true}>Dashboard</NavLink>
    <NavLink to='/add' activeClassName="header__navlink--active">Add Stock</NavLink>
    <NavLink to='/help' activeClassName="header__navlink--active">Help</NavLink>
  </header>
)


export default Header;