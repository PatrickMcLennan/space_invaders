const path = require("path");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const DotEnv = require("dotenv-webpack");
const webpack = require("webpack");

module.exports = {
  entry: [`./src/index.ts`],
  output: {
    path: path.resolve(`dist`),
    filename: `app.[hash].js`,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: `swc-loader`,
        },
      },
      {
        test: /\.(png|ttf)$/,
        exclude: [/(node_modules)/, /\wasm$/],
        use: `file-loader`,
      },
    ],
  },
  plugins: [
    new DotEnv(),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, `src/wasm`),
    }),
    new webpack.ProvidePlugin({
      TextDecoder: ["text-encoding", "TextDecoder"],
      TextEncoder: ["text-encoding", "TextEncoder"],
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  resolve: {
    extensions: [`.js`, `.ts`, `.tsx`, `.wasm`],
  },
};
