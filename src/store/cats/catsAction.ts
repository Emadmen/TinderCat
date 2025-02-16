import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCatsData } from '../../api/catsApi';
import { catModel } from '../../models/cat';

export const getCatsDataAction = createAsyncThunk(
  'catsData',
  async (_, { rejectWithValue }) => {
    try {
      return (await getCatsData()) as catModel[];
    } catch (err) {
      return rejectWithValue('Failed to load data');
    }
  },
);