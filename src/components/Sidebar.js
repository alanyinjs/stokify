import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (


  <div className="sidebar">
    <ul className="sidebar__nav-list">
      <li className="sidebar__nav-item"><i class="fa fa-home" aria-hidden="true"></i><NavLink to='/' activeClassName="sidebar__navlink--active" exact={true}>Dashboard</NavLink></li>
      <li className="sidebar__nav-item"><i class="fa fa-pencil" aria-hidden="true"></i><NavLink to='/add' activeClassName="sidebar__navlink--active">Add Transaction</NavLink></li>
      <li className="sidebar__nav-item"><i class="fa fa-info-circle" aria-hidden="true"></i><NavLink to='/about' activeClassName="sidebar__navlink--active" exact={true}>About</NavLink></li>
      <li className="sidebar__nav-item"><i class="fa fa-question-circle" aria-hidden="true"></i><NavLink to='/help' activeClassName="sidebar__navlink--active">Help</NavLink></li>
      <li className="sidebar__nav-item"><i class="fa fa-id-card" aria-hidden="true"></i><NavLink to='/contact' activeClassName="sidebar__navlink--active">Contact</NavLink></li>
    </ul>
  </div>
)

export default Sidebar;