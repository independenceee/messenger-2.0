/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["avatars.github.com"],
    },
    experimental: {
        appDir: true,
    },
};
