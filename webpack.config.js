const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'build/')
const APP_DIR = path.resolve(__dirname, 'src/')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractStyles = new ExtractTextPlugin({
  filename: '[name].css'
})

const HtmlWebPackPlugin = require('html-webpack-plugin')

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: APP_DIR,
    compress: true,
    port: 3000
  },

  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        include: APP_DIR,
        loader: 'html-loader',
        options: { minimize: true }
      },
      {
        test: /\.scss$/,
        use: extractStyles.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader']
        })
      },
      {
        test: /\.css$/,
        use: extractStyles.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)$/,
        include: APP_DIR,
        loader: 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: APP_DIR,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: APP_DIR + '/index.html',
      filename: './index.html'
    }),
    extractStyles
  ]
}

module.exports = config
