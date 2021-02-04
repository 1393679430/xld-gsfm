import axios from 'axios'
import { message } from "antd";

const http = axios.create({
    timeout: 5 * 1000,
    headers: {
        'Content-type': 'application/json'
    }
})

http.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

http.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        console.log(error ,'error')
        message.warning('请求出错')
    }
)

export default http
