// an object literal, which will be merged with the original config
var CracoLessPlugin = require("craco-less");
module.exports = {
  // webpack: {
  //   configure: {
  //     rules: {
  //       test: /\.css$/,
  //       exclude: /node_modules/,
  //       use: ["style-loader", "css-loader", "postcss-loader"],
  //     },
  //   },
  // },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
