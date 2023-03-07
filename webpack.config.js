const path = require("node:path");

const env = process.env.NODE_ENV;

module.exports = {
  mode: `${env === "production" ? "production" : "development"}`,
  entry: "./src/index.ts",
  target: "electron-main",
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
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};
