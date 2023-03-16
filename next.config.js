/** @type {import('next').NextConfig} */

const nextConfig = {
 reactStrictMode: true,
 images: {
  domains: ["lh3.googleusercontent.com"],
  formats: ["image/avif", "image/webp"],
 },
 async headers() {
  return [
   {
    source: "/(.*)",
    headers: [
     {
      key: "Referrer-Policy",
      value: "no-referrer-when-downgrade",
     },
     {
      key: "Cross-Origin-Opener-Policy",
      value: "same-origin-allow-popups",
     },
    ],
   },
  ];
 },
 experimental: {
  appDir: true,
},
};

module.exports = nextConfig;

