import React from 'react';
import {Header} from './components';
import {AuthorizationContecxt} from './components/AuthorizationContecxt';
import {MapPage, ProfilePage, LoginPage} from './pages';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  main: {
    marginTop: '77px'
  }
});

const App = () => {
  const classes = useStyles();
  const [activePage, setActivePage] = React.useState('MapPage');
  const {isLoggedIn, login, logout} = React.useContext(AuthorizationContecxt);
  
  const changeActivePageHandler = (evt) => {
    setActivePage(evt.target.name);
  }

  const onSubmitHandler = () => {
    setActivePage('MapPage');
    login();
  }

  const getPage = () => {
    switch (activePage) {
      case 'ProfilePage':
        return <ProfilePage />;
      
      case 'LoginPage':
        return <LoginPage onSubmit={onSubmitHandler} />;

      default:
        return <MapPage />;
    }
  }

  return (
    <>
      <Header onClickPage={changeActivePageHandler} onClickLogout={logout} />
      <main className={classes.main}>
        {isLoggedIn ? getPage() : <LoginPage onSubmit={onSubmitHandler} />}
      </main>
    </>
  );
}

export default App;
