import { FETCH_FEDD } from '../actions';

export default function reducer(state = {
    feed: {},
    isfetched: false
}, action) {
    switch (action.type) {
        case FETCH_FEDD:
            return { feed: action.payload.data.data.children, isfetched: true }
        default:
            return state;
    }
};
