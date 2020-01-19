const withPlugins = require('next-compose-plugins')
const sass = require('@zeit/next-sass')
const optimizedImages = require('next-optimized-images')
const videos = require('next-videos')
const path = require('path')

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(md)$/,
      use: 'raw-loader',
    })

    config.resolve.modules.push(path.resolve('./'))

    return config
  },
}

module.exports = withPlugins([
  [
    optimizedImages, {}
  ],
  [
    sass, {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:12]",
      }
    }
  ],
  [
    videos, {}
  ]
], nextConfig)