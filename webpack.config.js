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
    // Додати новий екземпляр `HtmlWebpackPlugin` для кожного документу
    new HtmlWebpackPlugin({
      // Встановити шаблон, який буде використовуватися для генерації HTML файлу
      template: './src/pages/index.html',
      // Встановити ім'я файлу вихідного HTML документу
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/pages/about.html',
      filename: 'about.html',
    }),
    new CleanWebpackPlugin(),
    // Додайте інші сторінки, які потрібно опрацювати
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
  // Встановіть шлях до каталогу, де будуть зберігатися HTML файли
 
  // ...
};
