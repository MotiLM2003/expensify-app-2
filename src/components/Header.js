import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

const Header = (props) => (
  <div>
    <h1>My App</h1>
    <ul className='nav'>
      <li>
        <NavLink to='/dashboard' exact activeClassName='active-link'>
          Dashboard
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
    <button
      onClick={() => {
        props.startLogout();
      }}
    >
      Log out
    </button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: dispatch(startLogout),
});

export default connect(undefined, mapDispatchToProps)(Header);
