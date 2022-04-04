import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { toast } from '../slices';

export const store = configureStore({ reducer: { toast } });

type RootState = ReturnType<typeof store.getState>;
type Dispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<Dispatch>(); // eslint-disable-line
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
