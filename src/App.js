import React from 'react';
import {Header} from './components';
import {MapPage, ProfilePage, LoginPage} from './pages'
import './App.css';

const App = () => {
  const [activePage, setActivePage] = React.useState('MapPage');

  const changeActivePageHandler = (evt) => {
    setActivePage(evt.target.name);
  }

  const getPage = () => {
    switch (activePage) {
      case 'ProfilePage':
        return <ProfilePage />;
      
      case 'LoginPage':
        return <LoginPage />;

      default:
        return <MapPage />;
    }
  }

  return (
    <div className="app">
      <Header onClickPage={changeActivePageHandler} />
      {getPage()}
    </div>
  );
}

export default App;
