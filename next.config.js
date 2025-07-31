const path = require("path");

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    config.resolve.symlinks = false;
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: "babel-loader",
      exclude: /node_modules/,
    });

    // This helps error on mismatched casing locally
    config.resolve.plugins = config.resolve.plugins || [];
    const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
    config.resolve.plugins.push(new CaseSensitivePathsPlugin());

    return config;
  },
};

module.exports = nextConfig;
