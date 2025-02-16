import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import catsReducer, { CatsState } from './cats/catsReducer';

export interface IRootState {
    cats: CatsState;
}

const reducer = combineReducers({
    cats: catsReducer,
});

const store = configureStore({
    reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
