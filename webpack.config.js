const path = require('path');
const src = path.join(__dirname, '/client');
const output = path.join(__dirname, '/public');


module.exports = {
  entry: path.join(__dirname, 'client', 'index.jsx'),
  output: {
    filename: 'service1.js',
    path: path.join(__dirname, 'public/bundles')
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
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};