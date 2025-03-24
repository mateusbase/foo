/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader: "imgix",
    // path: "https://grupooncoclinicas.com/",
    domains: ["i.postimg.cc", "merriam-webster.com"],
  },
};

export default nextConfig;
