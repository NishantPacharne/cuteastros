/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CONTRACT_ADDRESS: "0xb8343968A448709D976e5B57c98237e91a0e636b"
  }
}

module.exports = nextConfig
