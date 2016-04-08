/*
 * Webpack config for the server-side.
*/
var path = require('path');
var serverPath = path.resolve('./server');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules').filter(function(x) {
  return ['.bin'].indexOf(x) === -1;
})
.forEach(function(mod) {
  nodeModules[mod] = 'commonjs ' + mod;
});

module.exports = {
  entry: path.resolve(serverPath, 'main.js'),
  target: 'node',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve('./dist')
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        include: serverPath,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  externals: [ nodeModules ],
  resolve: {
    modulesDirectories: ['node_modules', path.resolve('server/src')]
  }
};
