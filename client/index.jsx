import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

if (window.item_id === undefined) {
  window.item_id = 1;
}

ReactDOM.render(<App />, document.getElementById('service1'));