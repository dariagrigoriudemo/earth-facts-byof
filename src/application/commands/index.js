export const FACT_LOADING = '[command] facts loading';
export const FACT_LOADING_SUCCESS = '[command] facts loading success';
export const FACT_LOADING_FAILURE = '[command] facts loading failure';

export const AUTH_LOADING = '[command] auth loading';

export const SENTIMENT_LOADING = '[command] sentiment loading';
export const SENTIMENT_LOADING_SUCCESS = '[command] sentiment loading success';
export const SENTIMENT_LOADING_FAILURE = '[command] sentiment loading failure';

export const loadAuth = {
    type: AUTH_LOADING,
};

export const loadFacts = {
    type: FACT_LOADING,
};

export const loadFactsSuccess = facts => ({
    type: FACT_LOADING_SUCCESS,
    payload: facts,
});

export const loadFactsFailure = error => ({
    type: FACT_LOADING_FAILURE,
    payload: error,
});

export const loadSentiment = {
    type: SENTIMENT_LOADING,
};

export const loadSentimentSuccess = sentiment => ({
    type: SENTIMENT_LOADING_SUCCESS,
    payload: sentiment,
});

export const loadSentimentFailure = error => ({
    type: SENTIMENT_LOADING_FAILURE,
    payload: error,
});