import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="header__brand">
      <h1>Stockify - Transaction Butler</h1>
    </div>
    <div className="header__message">
      <p>An online tool that helps you organise your transactions</p>
    </div>
  </header>
);


export default Header;