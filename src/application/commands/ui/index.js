export const APP_LOADED = "[command] app loaded"
export const SET_LOADING_OFF = '[command] facts loaded off';
export const SET_LOADING_ON = '[command] facts loading on';
export const SET_LOADING_SENTIMENT_OFF = '[command] sentiment loaded off';
export const SET_LOADING_SENTIMENT_ON = '[command] sentiment loading on';
export const SET_TAB = '[command] set tab'
export const SET_AUTH_DATA_SET = "[command] set auth data"

export const setLoading = isLoading => ({
    type: isLoading ? SET_LOADING_ON : SET_LOADING_OFF,
    payload: isLoading,
});

export const setLoadingSentiment = isLoading => ({
    type: isLoading ? SET_LOADING_SENTIMENT_OFF : SET_LOADING_SENTIMENT_OFF,
    payload: isLoading,
});

export const setAuth = authData => ({
    type: SET_AUTH_DATA_SET,
    payload: authData,
});

export const setTab = tabName => (
    {
        type : SET_TAB,
        payload : tabName,
    }
)

export const appLoaded = {
    type: APP_LOADED,
};