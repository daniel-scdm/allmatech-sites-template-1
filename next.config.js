const withPlugins  = require("next-optimized-images");
const optimizedImages = require("next-compose-plugins");

module.exports = withPlugins([
    [optimizedImages, {
        
    }],
    {
        images: {
            deviceSize: [320, 640, 768, 1024, 1600],
            domains: ['storage.allmatech.com.br']
        },
        distDir: 'build'
    }   
]);