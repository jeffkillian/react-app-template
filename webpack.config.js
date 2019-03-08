var path = require('path');
 var webpack = require('webpack');
 module.exports = {
    mode:"development",
     entry: './src/js/app',
     output: {
        path: path.resolve(__dirname, 'dist/'),
         filename: 'bundle.js'
     },
     resolve: {
        extensions: ['.js', '.jsx']
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      },
      devtool: 'source-map',
  }