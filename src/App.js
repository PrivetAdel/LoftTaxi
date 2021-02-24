import React from 'react';
import {Provider, Header} from './components';
import {MapPage, ProfilePage, LoginPage} from './pages';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  main: {
    marginTop: '77px'
  }
});

const App = () => {
  const classes = useStyles();
  const [activePage, setActivePage] = React.useState('LoginPage');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const changeActivePageHandler = (evt) => {
    setActivePage(evt.target.name);
  }

  const logoutHandler = () => {
    authorizationState.logout()
  }

  const onSubmitHandler = () => {
    setActivePage('MapPage');
    authorizationState.login();
  }

  const getPage = () => {
    switch (activePage) {
      case 'ProfilePage':
        return <ProfilePage />;
      
      case 'MapPage':
        return <MapPage />;

      default:
        return <LoginPage onSubmit={onSubmitHandler} />;
    }
  }

  const loginHandler = (email, password) => {
    if (email && password) {
      setIsLoggedIn(true);
    }

    return;
  }

  const authorizationState = ({
    login: loginHandler,
    logout: () => setIsLoggedIn(false),
    isLoggedIn: isLoggedIn
  });

  return (
    <Provider value={authorizationState}>
      <Header onClickPage={changeActivePageHandler} onClickLogout={logoutHandler} />
      <main className={classes.main}>
        {getPage()}
      </main>
    </Provider>
  );
}

export default App;
