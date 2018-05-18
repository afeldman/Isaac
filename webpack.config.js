'use strict';

const path = require('path');
const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

let options ={
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: path.join(__dirname, 'src'),
    filename: 'bundle.js'
  },
  entry: [
    './src/isaac.js',
  ]
};

options.target = webpackTargetElectronRenderer(options);

module.exports = options;
