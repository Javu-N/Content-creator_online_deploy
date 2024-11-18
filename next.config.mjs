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
};

export default nextConfig;
