import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxStore from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';


ReactDOM.render(
  
  <React.StrictMode>  
    <Provider store={reduxStore.store}>
      <PersistGate loading={null} persistor={reduxStore.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate> 
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);


