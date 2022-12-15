const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {});

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: ["api.jeremy-yoon.com"],
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
};
