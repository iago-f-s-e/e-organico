import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { State } from './types';
import * as reducers from '../reducers';

export const store = configureStore<State>({ reducer: { ...reducers } });

type RootState = ReturnType<typeof store.getState>;
type Dispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<Dispatch>(); // eslint-disable-line
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
