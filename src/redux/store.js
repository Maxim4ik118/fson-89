import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { productsReducer } from './products/products.reducer';
import { modalReducer } from './modal/modal.reducer';
import { postDetailsReducer } from './postDetails/postDetails.reducer';
import { authReducer } from './auth/auth.reducer';

const productsConfig = {
  key: 'products',
  storage,
  whitelist: ['products'],
};

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    productsStore: persistReducer(productsConfig, productsReducer),
    modal: modalReducer,
    magazine: postDetailsReducer,
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
