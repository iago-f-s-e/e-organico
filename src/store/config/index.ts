import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import stateReconciler from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from '@react-native-async-storage/async-storage';

import { State } from './types';
import * as R from '../reducers';

const reducers = combineReducers<State>({ ...R });

const blacklist: string[] = [];

const persistConfig = { key: 'root', storage, stateReconciler, blacklist };

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (_default) => _default({ serializableCheck: false }),
});

export const persistor = persistStore(store);

type Dispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<Dispatch>(); // eslint-disable-line
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
