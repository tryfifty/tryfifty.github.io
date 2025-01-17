/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  env: {
    NEXT_PUBLIC_BASE_PATH:
      process.env.NODE_ENV === "production" ? "https://tryfifty.github.io" : "",
  },
};

module.exports = nextConfig
