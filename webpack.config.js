const path = require('path')

const config = {
  devtool: 'source-map',

  entry: './client/js/app.js',

  resolve: {
    extensions: ['.js']
  },

  output: {
    path: path.join(__dirname, 'client'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
