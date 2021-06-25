import { SENTIMENT_LOADING_FAILURE, SENTIMENT_LOADING_SUCCESS } from "../commands";

const initialState = {
    sentimentData: [],
    error: null
};

const reducer = (state = initialState, action) => {
    console.log('reducer', action, state)
    switch (action.type) {
        case SENTIMENT_LOADING_SUCCESS:
            return { ...state, sentimentData: action.payload, error: null };
        case SENTIMENT_LOADING_FAILURE:
            return {...state, error: action.payload};
        default:
            return state;
    }
}

export default reducer;