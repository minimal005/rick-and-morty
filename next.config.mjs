/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com", // перша частина вставити ім'я хоста
        port: "",
        pathname: "/api/character/avatar/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
