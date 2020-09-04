const svgRegex = /\.svg$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
require("dotenv").config();

module.exports = {
  trailingSlash: false,

  // eslint-disable-next-line
  exportPathMap: function() {
    return {
      "/": { page: "/" },
    };
  },

  cssModules: true,

  env: {
    IS_DEBUG: process.env.NODE_ENV !== "production",
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
