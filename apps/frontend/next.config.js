/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// handled by turbo
	eslint: {
		ignoreDuringBuilds: true,
	},
}

module.exports = nextConfig
