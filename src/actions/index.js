import axios from 'axios';

export const FETCH_FEDD = 'FETCH_FEDD';

const ROOT_URL = 'https://api.reddit.com';

export function fetchFeed() {
    const request = axios.get(`${ROOT_URL}/r/pics/new.json`);

    return {
        type: FETCH_FEDD,
        payload: request
    };
}