/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/pages/main/home',
                permanent: true, // Set to true if this is a permanent redirect
            },
        ];
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images-na.ssl-images-amazon.com',
            },
            {
                protocol: 'https',
                hostname: 'covers.openlibrary.org',
            },
        ],
    },
};

export default nextConfig;
