const optimizedImages  = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
    [optimizedImages, {

    }],
    {
        images: {
            deviceSize: [320, 640, 768, 1024, 1600],
            domains: ['storage.allmatech.com.br']
        },
        distDir: 'build/site-next',
        assetPrefix: "/site-next",
        basePath: "/site-next",
    }   
]);
