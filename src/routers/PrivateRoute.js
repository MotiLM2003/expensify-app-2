import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Loader from '../components/Loader';

const PrivateRoute = ({
  isAuthenticated,
  loader,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <React.Fragment>
            <Loader isloading={loader.isloading} />
            <Header /> <Component {...props} />){' '}
          </React.Fragment>
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.uid,
    loader: state.loader,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
