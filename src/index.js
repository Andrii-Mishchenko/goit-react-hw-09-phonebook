import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import initialContacts from './initialContacts.json'

ReactDOM.render(
  <React.StrictMode>
    <App initialContacts = {initialContacts}/>
  </React.StrictMode>,
  document.getElementById('root')
);


