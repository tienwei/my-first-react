var path = require('path');
var webpack = require('webpack');
var TapWebpackPlugin = require('tap-webpack-plugin');

module.exports = [
  // Main bundle config
  {
    content: '',
    entry: [
      'webpack/hot/dev-server',
      './main'
    ],
    output: {
      path: path.resolve('build/js/'),
      publicPath: '/public/assets/js/',
      filename: 'bundle.js',
    },
    plugins: [
      new webpack.ProvidePlugin({
          React: 'react',
          ReactDOM: 'react-dom',
          path: 'path'
      })
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: '/node_modules/',
          loader: 'babel',
        }
      ],
    },
    devServer: {
        contentBase: 'public',
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  }

];
