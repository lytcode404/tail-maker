module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: [
      "images.pexels.com",
      "images.unsplash.com",
      "picsum.photos",
      "plus.unsplash.com",
      "cdn.rareblocks.xyz",
      "ik.imagekit.io",
      "shreethemes.in",
      "kitwind.io",
      "source.unsplash.com",
    ], // Add your image domain here
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    return config;
  },
};
