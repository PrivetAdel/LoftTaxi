import React from 'react';
import {Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import ProfilePage from '../ProfilePage/ProfilePage';
import Map from './Map';

const MapPage = () => {
  const {path} = useRouteMatch();

  return (
    <>
      <Map />
      <section>
        <Switch>
          <Route path={`${path}/profile`} component={ProfilePage} />
          <Route path={`${path}/order`} component={() => <h1>Order</h1>} />
          <Route path={path}>
            <Redirect to={`${path}/order`} />
          </Route>
        </Switch>
      </section>
    </>
  );
};

export default MapPage;
