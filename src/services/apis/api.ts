import axios from 'axios'

const envTest = process.env
console.log(envTest)
export const api = axios.create({
  baseURL: envTest.EXPO_PUBLIC_API_URL,
  timeout: 15000, // fifteen seconds
})
