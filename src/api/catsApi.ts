import { apiCallFunc } from './api';

export const getCatsData = async () => {
    return await apiCallFunc(
        'GET',
        `images/search?limit=10&breed_ids=beng`,
    );
};