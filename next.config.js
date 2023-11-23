/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.pcworld.com",
      "www.digitaltrends.com",
      "encrypted-tbn0.gstatic.com",
      "rishit.com.bd",
      "encrypted-tbn0.gstatic.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
