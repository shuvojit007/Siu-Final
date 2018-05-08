const devConfig = {
    MONGO_URL: 'mongodb://admin:admin@ds157631.mlab.com:57631/siu',
    JWT_SECRET: 'thisissecret'
};

const testConfig = {
    MONGO_URL: 'mongodb://admin:admin@ds157631.mlab.com:57631/siu',
    JWT_SECRET: 'thisissecret'
};

const prodConfig = {
    MONGO_URL: 'mongodb://admin:admin@ds157631.mlab.com:57631/siu',
    JWT_SECRET: 'thisissecret'
};

const defaultConfig = {
    PORT: process.env.PORT || 5000
};

function envConfig(env) {
    switch (env) {
        case 'development':
            return devConfig;
        case 'test':
            return testConfig
        default:
            return prodConfig;
    }
}
module.exports ={
    ...defaultConfig,
    ...envConfig(process.env.NODE_ENV)
}