/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: process.env.NEXT_PUBLIC_API_URL + "/:path*",
    },
  ],
};

export default nextConfig;
