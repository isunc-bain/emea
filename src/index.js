import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Header from './shared/Header';

ReactDOM.render(
  <Header>
    <App />
  </Header>,
  document.getElementById('root')
);
