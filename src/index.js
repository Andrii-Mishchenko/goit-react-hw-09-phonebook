import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App';
import initialContacts from './initialContacts.json'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App initialContacts={initialContacts} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


