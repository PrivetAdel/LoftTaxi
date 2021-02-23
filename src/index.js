import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './theme';
// import {theme} from "loft-taxi-mui-theme";
import {MuiThemeProvider} from '@material-ui/core/styles';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
