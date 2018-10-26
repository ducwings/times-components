const path = require("path");
const webpack = require("webpack");

module.exports = ({ platform }, { module, resolve, plugins }) => ({
  entry: path.resolve(__dirname, "./index.js"),
  plugins,
  module: {
    ...module,
    rules: [
      ...module.rules,
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: ["module:metro-react-native-babel-preset"],
        },
        exclude: /node_modules\/(?!react|@expo|svgs|pretty-format|haul|metro)/,
      },
      {
        include: /node_modules/,
        test: /\.mjs$/,
        type: "javascript/auto",
      },
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^react-hot-loader$/),
    ...plugins
  ],
  resolve: {
    ...resolve,
    extensions: [`.${platform}.js`, ".native.js", ".js", ".webpack.js", ".mjs", ".js"],
    mainFields: ["devModule", "dev", "react-native", "browser", "module", "main"],
  },
});
