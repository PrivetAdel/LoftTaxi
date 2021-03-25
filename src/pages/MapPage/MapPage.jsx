import React from 'react';
import {Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import ProfilePage from '../ProfilePage/ProfilePage';
import OrderPage from '../OrderPage/OrderPage';
import Map from './Map';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '77px',
    alignItems: 'center',
    minHeight: 'calc(100vh - 77px)'
  },
  section: {
    position: 'relative', 
    width: '100%', 
    height: 'calc(100vh - 77px)', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    pointerEvents: 'none'
  }
}));

const MapPage = () => {
  const {path} = useRouteMatch();
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" className={classes.root} >
      <Map />
      <section className={classes.section} >
        <Switch>
          <Route path={`${path}/profile`} component={ProfilePage} />
          <Route path={`${path}/order`} component={OrderPage} />
          <Route path={path}>
            <Redirect to={`${path}/order`} />
          </Route>
        </Switch>
      </section>
    </Grid>
  );
};

export default MapPage;
