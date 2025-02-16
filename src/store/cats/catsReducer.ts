import { createSlice } from '@reduxjs/toolkit'
import { getCatsDataAction } from './catsAction';
import { catModel } from '../../models/cat';

export interface CatsState {
  cats: catModel[];
  isLoading: boolean;
  error: any;
}

const initialState = {
  cats: [],
  isLoading: false,
  error: {}
} as CatsState;

export const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCatsDataAction.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(getCatsDataAction.fulfilled, (state, action) => {
        return { ...state, cats: action.payload, isLoading: false };
      })
  },
})

export default catsSlice.reducer