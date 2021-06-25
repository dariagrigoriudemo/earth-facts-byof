import { act } from "react-dom/test-utils";
import { FACT_LOADING_FAILURE, FACT_LOADING_SUCCESS } from "../commands";

const initialState = {
    facts: [],
    error: null
};

const reducer = (state = initialState, action) => {
    console.log('reducer', action, state)
    switch (action.type) {
        case FACT_LOADING_SUCCESS:
            return { ...state, facts: action.payload, error: null };
        case FACT_LOADING_FAILURE:
            return {...state, error: action.payload};
        default:
            return state;
    }
}

export default reducer;