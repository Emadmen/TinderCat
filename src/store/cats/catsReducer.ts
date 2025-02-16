import { createSlice } from '@reduxjs/toolkit'
import { getCatsDataAction } from './catsAction';
import { catModel } from '../../models/cat';

export interface CatsState {
  cats: catModel[];
}

const initialState = {
  cats: [],
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
  },
})

export default catsSlice.reducer