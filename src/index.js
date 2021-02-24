import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {loftTaxiTheme} from './loftTaxiTheme';
import {MuiThemeProvider} from '@material-ui/core/styles';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={loftTaxiTheme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
