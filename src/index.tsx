// Npm imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Components imports
import App from './App';
// Store import
import { store } from 'redux/store';
// import styles
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);