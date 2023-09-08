import axios from 'axios'

export const Axios = axios.create({
    baseURL : process.env.REACT_APP_BACKEND_URL,
    // baseURL : 'https://flipkart-api.vercel.app/',
    withCredentials:true
})