export const getLoading = state => state.ui.loading;
export const getLoadingSentiment = state => state.ui.loadingSentiment;
export const getTab = state => state.ui.tab;
export const getFacts = state => state.facts.facts;
// export const getFactsLoadingError = state => state.facts.error;
export const getAuth = state => state.auth.me;
export const getSentiment = state =>state.sentiment.sentimentData;
export const getSentimentError = state =>state.sentiment.error;

export default [
    getLoading,
    // getFacts,
    // getFactsLoadingError,
]