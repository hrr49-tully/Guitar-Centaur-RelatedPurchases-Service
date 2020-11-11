const path = require('path');
const src = path.join(__dirname, '/client');
const output = path.join(__dirname, '/public');


module.exports = {
  watch: true,
  entry: `${src}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: output
  },
  module: {
    rules: [
      {
        test : /\.jsx?/,
        include : src,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ]
  }
};