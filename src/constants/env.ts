import DefaultConstants from 'expo-constants'
import { ExpoConfig as DefaultExpoConfig } from '@expo/config'

type ExpoConfig = {
  expoConfig: {
    extra: {
      env: {
        API_URL: string
      }
    }
  }
} & DefaultExpoConfig

type NewConstants = typeof DefaultConstants & ExpoConfig

const constants = DefaultConstants as NewConstants

export const { API_URL } = constants.expoConfig.extra.env
