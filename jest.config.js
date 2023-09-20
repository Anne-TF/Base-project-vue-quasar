module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
        '^.+\\.html?$': 'html-loader-jest'
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/']
};
