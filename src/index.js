import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'components/App';
import { ModalContextProvider } from 'context/ModalContext';

import { persistor, store } from 'redux/store';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModalContextProvider>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </ModalContextProvider>
);
