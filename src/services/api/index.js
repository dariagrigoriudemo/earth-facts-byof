import axios from 'axios';

export const cosmosDbApi = {
    getFacts: async () => {
        //const response = await axios.get('http://localhost:7071/api/getFacts');
        const response = await axios.get('api/getFacts');

        return response.data
    }
}

export const testApi = 
{
    getFacts: async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        return response.data
    }
}


export const sentimentApi = 
{
    getSentiment: async (topic) => {
        const response = await axios.get('http://localhost:7073/api/GetSentiment?topic='+ topic);

        return response.data
    }
}

export const authApi = 
{
    getAuth: async () => {
        const response = await axios.get('./.auth/me');

        return response.data
    }
}