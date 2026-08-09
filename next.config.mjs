/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: "custom",
        loaderFile: "./src/utils/Loader.ts",
    },
    cacheComponents: true,
};

export default nextConfig;
