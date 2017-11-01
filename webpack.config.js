var webpack = require('webpack');
var path = require('path');

const config = {
  entry: './app/js/app.js',
  resolve: {
    modules: [
      path.resolve(__dirname, 'app/js')
    ]
  },
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js'
  }
};

module.exports = config;
