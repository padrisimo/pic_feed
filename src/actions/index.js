import axios from 'axios';

export const FETCH_FEDD = 'FETCH_FEDD';

const ROOT_URL = 'https://api.reddit.com';


export function fetchFeed(topic = "pics") {
    return dispatch => {
        axios.get(`${ROOT_URL}/r/${topic}/new.json`)
            .then(response => {
                dispatch({
                    type: FETCH_FEDD,
                    payload: response
                });
            });
    }
}