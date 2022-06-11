module.exports = {
    reactStrictMode: false,
    distDir: process.env.BUILD_DIR ? process.env.BUILD_DIR : '.next',
    env: {
        appName: process.env.APP_NAME,
        baseUrl: process.env.NEXT_URL,
    },
    i18n: {
        locales: ['en', 'fr'],
        defaultLocale: 'en',
    },
    images: {
        domains: [
            'lh3.googleusercontent.com',
            'lh6.googleusercontent.com',
            'cdn.fakercloud.com',
        ],
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve = {
            ...config.resolve,
            fallback: {
                fs: false,
                path: false,
                stream: false,
                http: false,
                https: false,
                url: false,
                process: false,
            },
        }

        return config
    },
}
