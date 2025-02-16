import { VoteRequestModel } from '../models/voteRequest';
import { apiCallFunc } from './api';

export const sendVoteData = async (vote: VoteRequestModel) => {
    return await apiCallFunc('POST', 'votes', vote);
};
