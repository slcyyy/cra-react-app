// an object literal, which will be merged with the original config
const { whenProd, getPlugin, pluginByName } = require("@craco/craco");
var CracoLessPlugin = require("craco-less");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const path = require("path");

module.exports = {
  webpack: smp.wrap({
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      "@": path.resolve(__dirname, "src"),
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "static", // 不启动展示打包报告的http服务器
        generateStatsFile: false, // 是否生成stats.json文件
        reportFilename: path.resolve(__dirname, `bundle-analyzer.html`),
        openAnalyzer: false,
      }),
      new SimpleProgressWebpackPlugin(),
    ],
    configure: (config, { env, paths }) => {
      // let cdn = {
      //   js: [],
      //   css: [],
      // };
      // // 只有生产环境才配置
      // whenProd(() => {
      //   // key:需要不参与打包的具体的包
      //   // value: cdn文件中 挂载于全局的变量名称 为了替换之前在开发环境下
      //   // 通过import 导入的 react / react-dom
      //   config.externals = {
      //     react: "React",
      //     "react-dom": "ReactDOM",
      //   };
      //   // 配置现成的cdn 资源数组 现在是公共为了测试
      //   // 实际开发的时候 用公司自己花钱买的cdn服务器
      //   cdn = {
      //     js: [
      //       "https://cdnjs.cloudflare.com/ajax/libs/react/18.1.0/umd/react.production.min.js",
      //       "https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.1.0/umd/react-dom.production.min.js",
      //     ],
      //     css: [],
      //   };
      // });
      // // 都是为了将来配置 htmlWebpackPlugin插件 将来在public/index.html注入
      // // cdn资源数组时 准备好的一些现成的资源
      // const { isFound, match } = getPlugin(
      //   config,
      //   pluginByName("HtmlWebpackPlugin")
      // );

      // if (isFound) {
      //   // 找到了HtmlWebpackPlugin的插件
      //   match.userOptions.cdn = cdn;
      // }

      return config;
    },
  }),
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
