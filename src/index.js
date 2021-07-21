import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
// import ContactsView from './views/ContactsView';


ReactDOM.render(
  
  <React.StrictMode>  
    <Provider store={store}>
      <BrowserRouter>
        <App />
        {/* <ContactsView/> */}
      </BrowserRouter>
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);


