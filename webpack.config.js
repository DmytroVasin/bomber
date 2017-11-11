const config = {
  entry: './client/js/app.js',
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: __dirname + '/client',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
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
