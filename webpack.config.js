const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader', // creates style nodes from JS strings
        'css-loader', // translates CSS into CommonJS
        'sass-loader', // compiles Sass to CSS
      ],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: ['@babel/preset-env'],
    }],
  },
  devServer: {
    hot: true,
    hotOnly: true,
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
