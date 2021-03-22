import React from 'react';
import {Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import ProfilePage from '../ProfilePage/ProfilePage';
import OrderPage from '../OrderPage/OrderPage';
import Map from './Map';

const MapPage = () => {
  const {path} = useRouteMatch();

  return (
    <>
      <Map />
      <section>
        <Switch>
          <Route path={`${path}/profile`} component={ProfilePage} />
          <Route path={`${path}/order`} component={OrderPage} />
          <Route path={path}>
            <Redirect to={`${path}/order`} />
          </Route>
        </Switch>
      </section>
    </>
  );
};

export default MapPage;
