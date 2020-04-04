const path = require('path');
const webpack = require('webpack');

//const mode = process.env.NODE_ENV || 'production'

module.exports = (env, argv) => {
  const mode = argv ? argv.mode : process.env.NODE_ENV;

  //console.log(`${JSON.stringify(argv, null, 2)} <== argv`)
  //console.log(`${process.env.NODE_ENV} <== process.env.NODE_ENV`)
  let config = {
    output: {
      filename: `index.js`,
      path: path.join(__dirname, 'build'),
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      plugins: [],
    },
    mode: mode,
    watch: mode === 'development',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            transpileOnly: mode === 'production',
            configFile: 'tsconfig.json',
          },
        },
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      ],
    },
    stats: mode === 'development' ? 'errors-warnings' : 'verbose',
  };

  return config;
};
