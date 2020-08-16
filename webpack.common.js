const path = require("path");

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
        exclude: /(node_modules)/,
        use: `file-loader`,
      },
    ],
  },
  resolve: {
    extensions: [`.js`, `.ts`, `.tsx`],
  },
};
