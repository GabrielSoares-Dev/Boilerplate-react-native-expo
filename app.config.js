export default {
  expo: {
    name: 'boilerplate-react-native-expo',
    slug: 'boilerplate-react-native-expo',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    owner: 'gabrielsoaresdev',
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.gabrielsoaresdev.boilerplatereactnativeexpo',
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.gabrielsoaresdev.boilerplatereactnativeexpo',
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './src/assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-splash-screen',
        {
          image: './src/assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
        },
      ],
      [
        'expo-font',
        {
          fonts: [
            'node_modules/@expo-google-fonts/open-sans/OpenSans_400Regular.ttf',
            'node_modules/@expo-google-fonts/open-sans/OpenSans_500Medium.ttf',
            'node_modules/@expo-google-fonts/open-sans/OpenSans_600SemiBold.ttf',
            'node_modules/@expo-google-fonts/open-sans/OpenSans_700Bold.ttf',
          ],
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: 'e1e535eb-e2a8-4733-916f-5c243aea6321',
      },
      env: {
        API_URL: process.env.EXPO_PUBLIC_API_URL,
      },
    },
  },
}
