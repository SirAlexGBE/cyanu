const path = require("path");
// const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

const nextConfig = {
  webpack: (config, {dev}) => {
    // Alias @ to src
    config.resolve.alias["@"] = path.resolve(__dirname, "src");

    // Disable symlinks resolving for some reason (keep if you need it)
    config.resolve.symlinks = false;

    // Add babel-loader rule for js/tsx/jsx/ts files (usually Next.js already has this, but keep if needed)
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: "babel-loader",
      exclude: /node_modules/,
    });

    // // Add CaseSensitivePathsPlugin only in development to avoid build errors on Vercel
    // if (dev) {
    //   config.resolve.plugins = config.resolve.plugins || [];
    //   config.resolve.plugins.push(new CaseSensitivePathsPlugin());
    // }

    return config;
  },
};

module.exports = nextConfig;
