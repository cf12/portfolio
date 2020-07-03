const withPlugins = require('next-compose-plugins')
const sass = require('@zeit/next-sass')
const images = require('next-optimized-images');
const path = require('path')

const nextConfig = {
  webpack: (config, options) => {
    config.resolve.modules.push(path.resolve('./'))

    return config
  }
}

module.exports = withPlugins([
  [ images ],
  [
    sass, {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:12]",
      }
    }
  ]
], nextConfig)