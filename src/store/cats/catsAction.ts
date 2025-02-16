import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCatsData } from '../../api/catsApi';
import { sendVoteData } from '../../api/votesApi';
import { catModel } from '../../models/cat';
import { VoteRequestModel } from '../../models/voteRequest';
import { VoteResponseModel } from '../../models/voteResponse';

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

export const sendVoteForCatAction = createAsyncThunk(
  'send vote for cate',
  async (voteRequest: VoteRequestModel, { rejectWithValue }) => {
    try {
      return (await sendVoteData(voteRequest)) as VoteResponseModel[];
    } catch (err) {
      return rejectWithValue('Failed to send vote');
    }
  },
);