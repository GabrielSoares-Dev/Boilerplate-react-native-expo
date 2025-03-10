import axios from 'axios'
import { EXPO_PUBLIC_API_URL } from '@constants'

export const api = axios.create({
  baseURL: EXPO_PUBLIC_API_URL,
  timeout: 15000, // fifteen seconds
})
