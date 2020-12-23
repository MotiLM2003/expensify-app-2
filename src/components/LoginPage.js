import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
const LoginPage = (props) => {
  return (
    <div className='box-layout'>
      <div className='box-layout__box'>
        <h1 className='box-layout__title'>Expensify App</h1>
        <p>It's time to get your expenses under control.</p>
        <button
          className='button primary mt-2 fullWidth'
          onClick={() => props.startLogin()}
        >
          Login with google
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: dispatch(startLogin),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
