import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      auth === true)
        ? <Component {...props} />
        : <Redirect to="/LoginPage" />
    }
  />
);
export default PrivateRoute;