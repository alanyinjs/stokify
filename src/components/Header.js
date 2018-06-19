import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Stockify - Transaction Butler</h1>
    <NavLink to='/' activeClassName="header__navlink--active" exact={true}>Dashboard</NavLink>
    <NavLink to='/add' activeClassName="header__navlink--active">Add Transaction</NavLink>
    <NavLink to='/contact' activeClassName="header__navlink--active">Contact</NavLink>
  </header>
)


export default Header;