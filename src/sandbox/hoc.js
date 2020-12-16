import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
    {props.isAuthenticated && <p>You're logged as Admin</p>}
  </div>
);

const RequireAuthentication = (props) => {
  return (
    <div>
      {props.isAuthenticated && <p>This is admin Area</p>}
      <Info {...props} />
    </div>
  );
};

ReactDOM.render(
  <RequireAuthentication info='There are the details' isAuthenticated={true} />,
  document.getElementById('root')
);
