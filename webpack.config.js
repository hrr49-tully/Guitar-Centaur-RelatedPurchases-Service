const path = require('path');
const src = path.join(__dirname, '/client');
const output = path.join(__dirname, '/public');


module.exports = {
  watch: true,
  entry: path.join(__dirname, 'client', 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test : /\.jsx?/,
        include : src,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};