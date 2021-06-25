import {cosmosDbApi, testApi, sentimentApi, authApi, devSentimentApi} from './api';

const isProduction = process.env.NODE_ENV != 'development'; 

export const services = {
    // facts : isProduction ? cosmosDbApi: testApi,
    sentiment : isProduction ? sentimentApi : devSentimentApi,
    auth: authApi,
}

export default services;