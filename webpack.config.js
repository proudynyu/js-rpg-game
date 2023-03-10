const path = require("node:path");
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')

const env = process.env.NODE_ENV;

module.exports = {
  mode: `${env === "production" ? "production" : "development"}`,
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  devServer: {
    static: "./build",
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [
      new TsconfigPathsPlugin()
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};
