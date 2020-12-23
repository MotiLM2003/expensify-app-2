import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

const Header = (props) => {
  return (
    <header className='header-layout'>
      <NavLink to='/dashboard' exact activeClassName='active-link'>
        <h1>Expensify</h1>
      </NavLink>

      <button
        onClick={() => {
          props.startLogout();
        }}
        className='button header-layout__button'
      >
        Log out
      </button>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: dispatch(startLogout),
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
