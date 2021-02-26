import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from './components';
import {loftTaxiTheme} from './loftTaxiTheme';
import {MuiThemeProvider} from '@material-ui/core/styles';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={loftTaxiTheme}>
      <Provider>
        <App />
      </Provider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
