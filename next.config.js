const svgRegex = /\.svg$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
require("dotenv").config();

module.exports = {
  exportTrailingSlash: false,

  // eslint-disable-next-line
  exportPathMap: function() {
    return {
      "/": { page: "/" },
    };
  },

  cssModules: true,

  env: {
    API_URL: process.env.API_URL,
    LANGUAGES: process.env.LANGUAGES,
    UPLOADS: process.env.UPLOADS,
    FLAGS: process.env.FLAGS,
    FALLBACK_ICONS: process.env.FALLBACK_ICONS,
    ONE_SIGNAL_ID: process.env.ONE_SIGNAL_ID,
    ANALYTICS_GOOGLE_KEY: process.env.ANALYTICS_GOOGLE_KEY,
    ANALYTICS_YANDEX_KEY: process.env.ANALYTICS_YANDEX_KEY,
    ANALYTICS_AMPLITUDE_KEY: process.env.ANALYTICS_AMPLITUDE_KEY,
  },

  webpack: (config, { webpack }) => {
    config.module.rules.push({
      test: svgRegex,
      use: ["@svgr/webpack"],
    });

    // eslint-disable-next-line no-param-reassign
    config.devtool = "eval-source-map";

    config.module.rules.push({
      loader: require.resolve("file-loader"),
      exclude: [
        /\.(js|mjs|jsx|ts|tsx)$/,
        /\.html$/,
        /\.json$/,
        sassRegex,
        sassModuleRegex,
      ],
      options: {
        name: "static/media/[name].[hash:8].[ext]",
      },
    });

    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    return config;
  },
};
