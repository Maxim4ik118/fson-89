import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { productsReducer } from './products/products.reducer';

const rootReducer = combineReducers({
  productsStore: productsReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
