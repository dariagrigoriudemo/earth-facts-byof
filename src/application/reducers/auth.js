import * as commands from '../commands/ui';

const initialState = {
    me: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (commands.SET_AUTH_DATA_SET):
            return {...state, me : action.payload};
        default:
            return state;
    }
}