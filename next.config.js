const withPlugins = require('next-compose-plugins')
const sass = require('@zeit/next-sass')
const images = require('next-optimized-images');
const videos = require('next-videos')
const mdx = require('@next/mdx')()
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
  [ images ],
  [ videos ],
  [
    sass, {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:12]",
      }
    }
  ],
  [ mdx ]
], nextConfig)