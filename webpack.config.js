const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  entry:'./src/index.js',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename:'bundle.js'
  },

  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env','@babel/preset-react']
          }
        }
      },
      {
        test:/\.(css|scss)$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test:/\.(jpg|png|svg|gif)$/,
        type:'asset/resource'
      }
    ]
  },

  plugins:[new HtmlWebpackPlugin({
    template:'./src/index.html'
  }), new webpack.ProvidePlugin({
    React:'react'
  })],

  resolve:{
    extensions:['.js','.jsx'],
    alias:{
      react:'preact/compat',
      'react-dom':'preact/compat'
    }
  }

}