const path = require('path')

const config = {
  devtool: 'source-map',
  mode: 'development',

  entry: './client/js/app.js',

  resolve: {
    extensions: ['.js']
  },

  output: {
    path: path.join(__dirname, 'client'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
