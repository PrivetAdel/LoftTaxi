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
  const [activePage, setActivePage] = React.useState('LoginPage');
  const {login, logout} = React.useContext(AuthorizationContecxt);
  
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
      
      case 'MapPage':
        return <MapPage />;

      default:
        return <LoginPage onSubmit={onSubmitHandler} />;
    }
  }

  return (
    <>
      <Header onClickPage={changeActivePageHandler} onClickLogout={logout} />
      <main className={classes.main}>
        {getPage()}
      </main>
    </>
  );
}

export default App;
