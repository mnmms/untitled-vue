import axios from 'axios'

const baseUrl = `/`

const instance = axios.create({
  baseURL: baseUrl
})

export default instance
