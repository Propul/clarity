/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'clr-icons-all': './src/clr-icons/autoload-all.umd.ts',
    'clr-icons-all.min': './src/clr-icons/autoload-all.umd.ts',
    'clr-icons': './src/clr-icons/api-autoload.umd.ts',
    'clr-icons.min': './src/clr-icons/api-autoload.umd.ts',
    'shapes/all': './src/clr-icons/shapes/all.umd.ts',
    'shapes/all.min': './src/clr-icons/shapes/all.umd.ts',
    'shapes/chart': './src/clr-icons/shapes/chart.umd.ts',
    'shapes/chart.min': './src/clr-icons/shapes/chart.umd.ts',
    'shapes/commerce': './src/clr-icons/shapes/commerce.umd.ts',
    'shapes/commerce.min': './src/clr-icons/shapes/commerce.umd.ts',
    'shapes/core': './src/clr-icons/shapes/core.umd.ts',
    'shapes/core.min': './src/clr-icons/shapes/core.umd.ts',
    'shapes/essential': './src/clr-icons/shapes/essential.umd.ts',
    'shapes/essential.min': './src/clr-icons/shapes/essential.umd.ts',
    'shapes/media': './src/clr-icons/shapes/media.umd.ts',
    'shapes/media.min': './src/clr-icons/shapes/media.umd.ts',
    'shapes/social': './src/clr-icons/shapes/social.umd.ts',
    'shapes/social.min': './src/clr-icons/shapes/social.umd.ts',
    'shapes/technology': './src/clr-icons/shapes/technology.umd.ts',
    'shapes/technology.min': './src/clr-icons/shapes/technology.umd.ts',
    'shapes/text-edit': './src/clr-icons/shapes/text-edit.umd.ts',
    'shapes/text-edit.min': './src/clr-icons/shapes/text-edit.umd.ts',
    'shapes/travel': './src/clr-icons/shapes/travel.umd.ts',
    'shapes/travel.min': './src/clr-icons/shapes/travel.umd.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist/clr-icons'),
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  target: 'web',
  resolve: {
    modules: ['./node_modules'],
    extensions: ['.ts', '.ts', '.js'],
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin({
      include: /\.min\.js$/,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: 'src/clr-icons/tsconfig.icons.json',
            },
          },
        ],
      },
    ],
  },
};
