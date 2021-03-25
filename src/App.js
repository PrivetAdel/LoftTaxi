import React from 'react';
import {Header, PrivateRoute} from './components';
import {MapPage, LoginPage} from './pages';
import {Switch, Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

const App = () => {
  const isLoggedIn = useSelector(({authReducer}) => authReducer.isLoggedIn);

  return (
    <>
      {isLoggedIn && <Header />}

      <Switch>
        <PrivateRoute path="/main" auth={isLoggedIn} component={MapPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/">
          <Redirect to="/main" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
