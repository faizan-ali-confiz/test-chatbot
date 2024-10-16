// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // Entry point of your widget
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "chatWidget.js",
    library: "ChatWidget", // Name of the global variable exposed
    libraryTarget: "umd", // Makes it work in any environment (AMD, CommonJS, or global variable)
    umdNamedDefine: true, // Named UMD global variable
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // File extensions for import
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // Transpile JS/TS files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/, // Load CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Template for development
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve static files from the 'dist' directory
    },
    port: 3000, // Development server port
    hot: true,
    host: "localhost", // Ensure the host is set to 'localhost'
    allowedHosts: "all", // Allow all hosts
  },
};
