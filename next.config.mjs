/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: "custom",
        loaderFile: "./src/utils/Loader.js",
    }
};

export default nextConfig;
