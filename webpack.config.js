const path = require("path");
const HtmlWebpackPlugin =  require("html-webpack-plugin");
const HtmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  mode: "development",
  devtool: "source-map",
  target: "web",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "src"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ["node_modules", "src", "Components"],
    extensions: [".js", ".jsx", ".json"],
    alias: {
      react: path.resolve(__dirname, "node_modules", "react")
    },
  },
  plugins: [HtmlPlugin],
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
  }
};
