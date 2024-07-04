/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'ao22wpjeojwamoqf.public.blob.vercel-storage.com',
            }
        ]
    }
};

export default nextConfig;
