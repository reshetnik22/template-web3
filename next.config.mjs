import './env.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'images.unsplash.com'],
  },
  swcMinify: true,
  env: {
    mode: process.env.NODE_ENV,
  },
  experimental: {
    appDir: true,
    fontLoaders: [
