const path = require("path");

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    config.resolve.symlinks = false;
    return config;
  },
};

module.exports = nextConfig;
