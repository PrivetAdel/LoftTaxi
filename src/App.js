import React from 'react';
import {Header, PrivateRoute} from './components';
import {MapPage, ProfilePage, LoginPage} from './pages';
import {Switch, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  main: {
    marginTop: '77px'
  }
});

const App = () => {
  const classes = useStyles();
  const isLoggedIn = useSelector(({authReducer}) => authReducer.isLoggedIn);

  return (
    <>
      <main className={classes.main}>
        <Switch>
          {isLoggedIn && <Header />}
          <PrivateRoute auth={isLoggedIn} exact path="/" component={() => <MapPage />} />
          <PrivateRoute auth={isLoggedIn} path="/ProfilePage" component={() => <ProfilePage />} />
          <Route auth={isLoggedIn} path="/LoginPage" component={() => <LoginPage />}  />
        </Switch>
      </main>
    </>
  );
}

export default App;
