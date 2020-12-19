import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>My App</h1>
    <ul className='nav'>
      <li>
        <NavLink to='/' exact activeClassName='active-link'>
          asdasd
        </NavLink>
      </li>
      <li>
        <NavLink to='/create' activeClassName='active-link'>
          Create
        </NavLink>
      </li>

      <li>
        <NavLink to='/expense/' activeClassName='active-link'>
          Expense
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
