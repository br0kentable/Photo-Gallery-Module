const path = require('path');
ç
module.exports = {
  entry: path.resolve(__dirname, './client/src/components'),
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist/')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader']
      }
    ]
  }
};