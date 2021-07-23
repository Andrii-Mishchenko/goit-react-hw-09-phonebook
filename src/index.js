import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
// import ContactsView from './views/ContactsView';


ReactDOM.render(
  
  <React.StrictMode>  
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={store.persistor}> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </PersistGate>  */}
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

