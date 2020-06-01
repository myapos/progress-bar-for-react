const webpackPreprocessor = require('@cypress/webpack-preprocessor');
// / <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const path = require('path');
const webpack = require('@cypress/webpack-preprocessor');

// const webpackOptions = {
//   node: {
//     fs: 'empty',
//   },
//   resolve: {
//     extensions: [
//       '.ts', // <-- works fine if commented out
//       '.tsx', // <-- works fine if commented out
//       '.js',
//       '.jsx',
//     ],
//     modules: ['node_modules'],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         loader: 'babel-loader',
//         options: {
//           presets: ['@babel/preset-env', '@babel/preset-react'],
//           plugins: ['@babel/plugin-proposal-class-properties'],
//         },
//       },
//       {
//         test: /\.(ts|tsx)$/,
//         loader: 'ts-loader',
//         exclude: [/node_modules/],
//       },
//       /*      {
//         test: /\.(ts|tsx)$/,
//         loader: require.resolve('babel-loader'),
//         options: {
//           presets: [
//             '@babel/preset-env',
//             '@babel/preset-react',
//             ['react-app', { flow: false, typescript: true }]],
//         },
//       },*/
//     ],
//   },
// };

// const options = {
//   // send in the options from your webpack.config.js, so it works the same
//   // as your app's code
//   webpackOptions,
//   watchOptions: {},
// };

module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config);
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require('../../webpack.dev.js'),
    watchOptions: {},
  };

  on('file:preprocessor', webpackPreprocessor(options));
  return config;
};
