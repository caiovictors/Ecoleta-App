import axios from 'axios'

const api = axios.create ({
    baseURL: 'http://192.168.0.59:3333'
})

export default api
