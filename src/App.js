import React from 'react';
import {Header} from './components';
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

  const changeActivePageHandler = (evt) => {
    setActivePage(evt.target.name);
  }

  const onSubmitHandler = () => {
    setActivePage('MapPage')
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
    <div>
      <Header onClickPage={changeActivePageHandler} />
      <main className={classes.main}>
        {getPage()}
      </main>
    </div>
  );
}

export default App;
