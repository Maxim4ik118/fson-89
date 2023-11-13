import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App } from 'components/App';
import { ModalContextProvider } from 'context/ModalContext';

import { store } from 'redux/store';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModalContextProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ModalContextProvider>
);
