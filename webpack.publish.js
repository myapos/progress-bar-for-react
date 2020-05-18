const webpack = require("webpack");
const TerserJSPlugin = require("terser-webpack-plugin");

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

const conf = merge(common, {
  mode: "production",
  devtool: "source-map",
  entry: {
    app: "./src/components/ProgressBar",
    // app: "./src/components/DummyComponent",
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "node_modules", "react"),
      "react-dom": path.resolve(__dirname, "node_modules", "react-dom"),
      "@material-ui/core": path.resolve(
        __dirname,
        "node_modules",
        "@material-ui/core"
      ),
    },
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  output: {
    // path: path.resolve(__dirname, 'public'),
    publicPath: "/",
    filename: "index.js",
    chunkFilename: "index.js",
    path: path.resolve(__dirname, "public"),
    libraryTarget: "commonjs2",
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

module.exports = conf;
