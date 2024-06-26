import { combineReducers, configureStore } from '@reduxjs/toolkit';
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

import { trailersSlice } from './trailersSlice';
import { filterReducer } from './filterSlice';

const trailersPersistConfig = {
  key: 'trailers',
  storage,
  whitelist: ['favorite'],
};

export const rootReducer = combineReducers({
  trailers: persistReducer(trailersPersistConfig, trailersSlice.reducer),
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);