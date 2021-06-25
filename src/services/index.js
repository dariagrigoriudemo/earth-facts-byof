import {cosmosDbApi, testApi, sentimentApi, authApi} from './api';

const isProduction = true; 

export const services = {
    facts : isProduction ? cosmosDbApi: testApi,
    sentiment : sentimentApi,
    auth: authApi,
}

export default services;