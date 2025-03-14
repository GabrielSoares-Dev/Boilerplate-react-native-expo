# Expo Boilerplate

This repository provides a complete setup for Expo applications, pre-configured with essential libraries, tools, and configurations to streamline development.

## Features

- **Navigation**: React Navigation for efficient routing.
- **State Management**: Zustand for global state control.
- **Forms & Validation**: React Hook Form combined with Zod for validation.
- **API Management**: Axios for HTTP requests, React Query for data caching.
- **Authentication**: Basic authentication setup with token management.
- **UI Components**: Pre-configured with React Native Vector Icons.
- **Styling**: Styled-components for component-based styling.
- **Testing**: Jest setup with React Native Testing Library.

## Dependencies

### Core Dependencies

- `expo`: Framework for React Native development.
- `@react-navigation/native`: Navigation management.
- `@react-navigation/native-stack`: Stack navigation.
- `axios`: Handles HTTP requests.
- `zustand`: State management.
- `react-hook-form`, `zod`: Form handling and validation.
- `react-native-toast-message`: Displays toast messages.
- `styled-components`: Component-based styling.
- `@tanstack/react-query`: Data caching and management.
- `@react-native-async-storage/async-storage`: Secure local storage.

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/GabrielSoares-Dev/Boilerplate-expo.git
cd Boilerplate-expo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Project
To start the development server:

```bash
npm run start
```

To run on Android:

```bash
npm run android
```

To run on iOS:

```bash
npm run ios
```

To run on the web:

```bash
npm run web
```

### Available Commands

- **`npm run start`**: Starts the Metro bundler.
- **`npm run android`**: Builds and runs the app on Android.
- **`npm run ios`**: Builds and runs the app on iOS.
- **`npm run web`**: Runs the app on the web.
- **`npm run build:apk`**: Generates an APK locally.
- **`npm run typecheck`**: Runs TypeScript type checking.
- **`npm run lint:test`**: Lints project files with ESLint.
- **`npm run lint:fix`**: Automatically fixes linting issues.
- **`npm run test`**: Runs unit tests using Jest.
- **`npm run test:coverage`**: Runs tests and generates a coverage report.
- **`npm run test:coverage:silent`**: Runs tests and generates a coverage re