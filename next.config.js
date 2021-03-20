const withPlugins = require('next-compose-plugins')
const images = require('next-optimized-images');

module.exports = withPlugins([
  [ images ],
], {})