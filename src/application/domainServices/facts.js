import { loadFactsFailure, loadFactsSuccess, FACT_LOADING } from "../commands";
import { loadSentimentFailure, loadSentimentSuccess, SENTIMENT_LOADING } from "../commands";
import * as uiCommands from '../commands/ui';
import * as commands from '../commands';

const loadFactsHandler = ({ facts }) => ({ dispatch }) => next => async (action) => {
    next(action);

    console.log(action.type)

    if (action.type === FACT_LOADING) {
        try {
            dispatch(uiCommands.setLoading(true));
            // const factsData = await facts.getFacts();
            // dispatch(loadFactsSuccess(factsData));
            dispatch(uiCommands.setLoading(false));
        } catch (error) {
            dispatch(loadFactsFailure(error));
        }
    }

    if (action.type == uiCommands.SET_TAB) {
        if (action.payload == "facts") {
            dispatch(commands.loadFacts);
        } else {
            dispatch(commands.loadSentiment);
        }
    }
}

const loadSentimentHandler = ({ sentiment }) => ({ dispatch }) => next => async (action) => {
    next(action);

    console.log('sentiment loader', action.type)

    if (action.type === SENTIMENT_LOADING) {
        try {
            dispatch(uiCommands.setLoading(true));
            const factsData = await sentiment.getSentiment();
            dispatch(loadSentimentSuccess(factsData));
            dispatch(uiCommands.setLoading(false));
        } catch (error) {
            dispatch(loadSentimentFailure(error));
        }
    }
} 

const loadAuthHandler = ({ auth }) => ({ dispatch }) => next => async (action) => {
    next(action);

    console.log(action.type)

    if (action.type === FACT_LOADING) {
        try {
            const authData = await auth.getAuth();
            dispatch(uiCommands.setAuth(authData));
        } catch (error) {
            dispatch(loadFactsFailure(error));
        }
    }
}


export default [
    loadFactsHandler,
    loadSentimentHandler,
    loadAuthHandler,
]