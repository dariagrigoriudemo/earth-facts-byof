import { combineReducers } from 'redux';
import ui from './ui';
import facts from './facts';
import auth from './auth';

export default combineReducers({
    ui,
    facts,
    auth,
})