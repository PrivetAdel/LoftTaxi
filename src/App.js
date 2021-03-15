import React from 'react';
import {Header, PrivateRoute} from './components';
import {MapPage, LoginPage} from './pages';
import {Switch, Route, Redirect} from 'react-router-dom';
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
    <main className={classes.main}>
      {isLoggedIn && <Header />}

      <Switch>
        <PrivateRoute path="/main" auth={isLoggedIn} component={MapPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/">
          <Redirect to="/main" />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
