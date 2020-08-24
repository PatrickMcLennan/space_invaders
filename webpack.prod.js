const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ScriptExtWebpackPlugin = require("script-ext-html-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
  mode: `production`,
  optimization: {
    namedChunks: true,
    moduleIds: `hashed`,
    runtimeChunk: `single`,
    splitChunks: {
      chunks: `all`,
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        styledComponents: {
          test: /node_modules\/framer-motion\//,
          name: `framerMotion`,
          chunks: `all`,
        },
        styledComponents: {
          test: /node_modules\/styled-components\//,
          name: `styledComponents`,
          chunks: `all`,
        },
        react: {
          test: /node_modules\/react-((\-dom))\//,
          name: `react`,
          chunks: `all`,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      template: `./src/template.html`,
      inject: `head`,
    }),
    new ScriptExtWebpackPlugin({
      defaultAttribute: `defer`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, `src/manifest.json`) },
        { from: path.resolve(__dirname, `src/assets/favicon.ico`) },
      ],
    }),
  ],
});
