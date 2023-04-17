import axios from "axios"


const instance = axios.create({
     headers: {
         'Content-Type': 'application/json'
     },
     mode: 'no-cors',
     baseURL:"http://localhost:8000/",
     timeout: 600_000_000,
     responseType: 'json',
     validateStatus: (status) => status < 500
    //  withCredentials: true
 })

 export default instance