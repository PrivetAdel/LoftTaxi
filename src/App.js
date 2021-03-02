import React from 'react';
import {Header, PrivateRoute} from './components';
import {AuthorizationContecxt} from './components/AuthorizationContecxt';
import {MapPage, ProfilePage, LoginPage} from './pages';
import {Switch, Route} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  main: {
    marginTop: '77px'
  }
});

const App = () => {
  const classes = useStyles();
  const {isLoggedIn, logout} = React.useContext(AuthorizationContecxt);

  return (
    <>
      <Header onClickLogout={logout} />
      <main className={classes.main}>
        <Switch>
          <PrivateRoute auth={isLoggedIn} exact path="/" component={() => <MapPage />} />

          <PrivateRoute auth={isLoggedIn} path="/ProfilePage" component={() => <ProfilePage />} />

          <Route path="/LoginPage" component={() => <LoginPage />}  />
        </Switch>
      </main>
    </>
  );
}

export default App;
