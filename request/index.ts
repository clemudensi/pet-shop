import axios, { AxiosInstance } from 'axios';

const BASE_URL = '/';

export const waitingListApi: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-type': 'application/json',
    },
});
