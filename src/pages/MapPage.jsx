import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ProfilePage from './ProfilePage';
import {Map} from '../components';

const MapPage = () => {
  return (
    <>
      <Map />
      <section>
        <Switch>
          <Route path="/main/ProfilePage" component={ProfilePage} />
        </Switch>
      </section>
    </>
  );
};

export default MapPage;
