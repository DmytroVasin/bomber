const config = {
  entry: './app/js/app.js',
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: __dirname + '/app',
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
