const merge = require("webpack-merge");

const path = require("path");
const webpack = require("webpack");
const common = require("./webpack.common.js");

const PORT = 2222;
// console.log(process.env.PRODUCTION);
// https://github.com/cvut/fittable/issues/171
const webpackOptions = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    overlay: true,
    noInfo: false,
    compress: true,
    port: PORT,
    publicPath: `http://localhost:${PORT}/`,
    historyApiFallback: {
      disableDotRule: true,
    },
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath: `http://localhost:${PORT}/`,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        PRODUCTION: process.env.PRODUCTION,
        VERSION: JSON.stringify(require("./package.json").version),
      },
    }),
  ],
});

console.log("webpackOptions", webpackOptions.plugins);

module.exports = webpackOptions;
