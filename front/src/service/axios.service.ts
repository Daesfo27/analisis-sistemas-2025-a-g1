import axios from "axios"


export const axiosClient = axios.create({
    baseURL: process.env.BACKEND_URL || 'http://localhost:4000/api/v1',
    headers:{
        "Content-Type": 'application/json'
    }
})