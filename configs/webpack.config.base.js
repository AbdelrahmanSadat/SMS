/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';
import { dependencies as externals } from '../app/package.json';
// adding unused sequelize dialects, and removing sqlite3
// since it is a used dialect
// TODO: check if you actually need to remove sqlite3 from externals
let modifiedExternals = [...Object.keys(externals || {})]
  .concat([
    'pg',
    'tedious',
    'pg-hstore',
    // 'sqlite3',
    // 'sequelize',
  ])
  .filter((external) => external != 'sqlite3');
  // console.log(modifiedExternals)
export default {
  externals: modifiedExternals,

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, '..', 'app'),
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2',
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [path.join(__dirname, '..', 'app'), 'node_modules'],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),

    new webpack.NamedModulesPlugin(),
  ],
};
