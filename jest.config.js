module.exports = {
    preset: 'jest-expo',
    setupFilesAfterEnv: ['./tests/config/jest/jest.setup.ts'],
    transformIgnorePatterns: [
        "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)"
    ],
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/node_modules/**',
        '!**/app/**',
        '!**/constants/**',
        '!**/providers/root-provider/**',
        '!**/providers/types/**',
        '!**/tests/**',
        '!**/@types/**',
        '!**/services/apis/**',
    ],
    moduleNameMapper: {
        '^@components$': '<rootDir>/src/components',
        '^@functions$': '<rootDir>/src/functions',
        '^@functions$': '<rootDir>/src/functions',
        '^@guards$': '<rootDir>/src/guards',
        '^@guards/(.*)$': '<rootDir>/src/guards/$1',
        '^@hooks$': '<rootDir>/src/hooks',
        '^@store$': '<rootDir>/src/store',
        '^@storages$': '<rootDir>/src/storages',
        '^@services$': '<rootDir>/src/services',
        '^@services/(.*)$': '<rootDir>/src/services/$1',
        '^@pages$': '<rootDir>/src/pages',
        '^@pages/(.*)$': '<rootDir>/src/pages/$1',
        '^@utils$': '<rootDir>/src/utils',
        '^@enums$': '<rootDir>/src/enums',
        '^@providers$': '<rootDir>/src/providers',
        '^@tests/(.*)$': '<rootDir>/tests/$1',
    },
}
