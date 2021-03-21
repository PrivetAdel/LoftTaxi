import React from 'react';
import {Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import ProfilePage from '../ProfilePage/ProfilePage';
import OrderPage from '../OrderPage/OrderPage';
import {useSelector} from 'react-redux';
import Map from './Map';

const MapPage = () => {
  const {path} = useRouteMatch();
  const routeCoords = useSelector(({orderReducer}) => orderReducer.routePoints);

  return (
    <>
      <Map routeCoords={routeCoords} />
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
