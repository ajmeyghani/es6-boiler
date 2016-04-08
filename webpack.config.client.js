/*
 * Webpack config for the client-side.
*/
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve('./client/main.js'),
  output: {
    filename: 'client.bundle.js',
    path: path.resolve('./dist')
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', 'web.js', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'bower_components', path.resolve('client/src')]
  }
};
