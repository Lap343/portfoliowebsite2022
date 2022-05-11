// Npm imports
import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// Components imports
import App from './App';
// Store import
import { store } from 'redux/store';
// import styles
import './styles.css'

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<Provider store={store}><App /></Provider>);