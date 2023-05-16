import axios from 'axios'

export const Axios = axios.create({
    // baseURL : "http://localhost:5000/",
    baseURL : 'https://flipkart-clone-bay.vercel.app/',
    withCredentials:true
})