import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Loader = ({ loader }) => {
  return loader.isLoading ? (
    <div className='loader-layout'>
      <div className='loader-layout__content'>Loading</div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    loader: state.loader,
  };
};
export default connect(mapStateToProps)(Loader);
