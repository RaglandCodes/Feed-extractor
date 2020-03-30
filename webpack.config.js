const path = require('path')
const webpack = require('webpack')

const mode = process.env.NODE_ENV || 'production'

module.exports = {
  output: {
    filename: `index.js`,
    path: path.join(__dirname, 'build'),
  },
  devtool: 'source-map',
  mode,
  watch: true,
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
}
