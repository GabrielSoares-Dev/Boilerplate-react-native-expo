import axios from 'axios'

const env = process.env
const baseURL = env.EXPO_PUBLIC_API_URL

export const api = axios.create({
  baseURL,
  timeout: 15000, // fifteen seconds
})
