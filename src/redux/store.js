import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './reducer';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['bingo']
}
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, devToolsEnhancer());
const persistor = persistStore(store);

export {
  store,
  persistor
}