const path = require("path");

module.exports = {
  entry: {
    background: "./background.ts",
    index: "./index.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          //   options: {
          //     presets: ["@babel/preset-env"],
          //   },
        },
      },
    ],
  },
};
