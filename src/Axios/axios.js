import axios from "axios"
const instance = axios.create({
    baseURL:"https://mern-backend-v31-1jih.onrender.com/api"
})
export default instance