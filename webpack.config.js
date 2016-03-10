var path = require('path');

module.exports = {
  content: '',
  entry: [
    'webpack/hot/dev-server',
    './main.jsx'
  ],
  output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
    filename: 'bundle.js',
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
  devServer: {
      contentBase: 'public',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
