const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './App/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    // ...
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },

  plugins: [
    
    new HtmlWebpackPlugin({
      
      template: './src/pages/index.html',
      
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/pages/about.html',
      filename: 'about.html',
    }),
    new CleanWebpackPlugin(),
    
    // ...
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
 
  // ...
};
