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
        {isLoggedIn && <Header />}

        <Switch>
          <PrivateRoute auth={isLoggedIn} path="/main" component={MapPage} />
          <PrivateRoute auth={isLoggedIn} path="/main/ProfilePage" component={ProfilePage} />
          <Route path="/LoginPage" component={LoginPage}  />
        </Switch>
      </main>
    </>
  );
}

export default App;
