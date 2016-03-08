module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './main.jsx'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        loader: 'babel',
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
