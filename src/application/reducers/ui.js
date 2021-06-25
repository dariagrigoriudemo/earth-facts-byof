import * as commands from '../commands/ui';

const initialState = {
    loading: true,
    loadingSentiment: true,
    tab : "facts",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (commands.SET_LOADING_ON):
        case (commands.SET_LOADING_OFF):
            return { ...state, loading: action.payload };
        case (commands.SET_LOADING_SENTIMENT_OFF):
        case (commands.SET_LOADING_SENTIMENT_ON): 
            return { ...state, loadingSentiment: action.payload };   
        case (commands.SET_TAB) :
            return {...state, tab : action.payload};
        default:
            return state;
    }
}