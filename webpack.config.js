var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'build/')
var APP_DIR = path.resolve(__dirname, 'src/')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: '[name].css'
})

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]!extract-loader!html-loader'
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
        ]
      }
    ]
  },

  plugins: [
    extractSass
  ]
}

module.exports = config
