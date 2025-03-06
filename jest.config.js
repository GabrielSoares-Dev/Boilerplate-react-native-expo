module.exports = {
    preset: 'jest-expo',
    transformIgnorePatterns: [
        'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)',
    ],
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/node_modules/**',
        '!**/components/types/**',
        '!**/providers/root-provider/**',
        '!**/providers/types/**',
        '!**/tests/**',
        '!**/@types/**',
        '!**/services/apis/**',
    ],
    moduleNameMapper: {
        '^@components$': '<rootDir>/src/components',
        '^@functions$': '<rootDir>/src/functions',
        '^@constants$': '<rootDir>/src/constants',
        '^@hooks$': '<rootDir>/src/hooks',
        '^@store$': '<rootDir>/src/store',
        '^@services$': '<rootDir>/src/services',
        '^@utils$': '<rootDir>/src/utils',
        '^@enums$': '<rootDir>/src/enums',
        '^@providers$': '<rootDir>/src/providers',
        '^@tests/(.*)$': '<rootDir>/tests/$1',
    },
}
