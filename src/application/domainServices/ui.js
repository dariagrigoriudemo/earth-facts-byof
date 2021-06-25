import { APP_LOADED } from "../commands/ui";
import * as commands from '../commands';

const appLoadedHandler = () => ({ dispatch }) => next => action => {
    next(action);

    if (action.type === APP_LOADED) {
        console.log('page loaded');
        dispatch(commands.loadFacts);
        dispatch(commands.loadAuth);
        dispatch(commands.loadSentiment);
    }
}

export default [
    appLoadedHandler,
]