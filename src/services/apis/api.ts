import axios from 'axios'

export const api = axios.create({
  baseURL: '',
  timeout: 15000, // fifteen seconds
})
