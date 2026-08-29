/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // La page Tarifs devient la page produit "Plateforme"
      { source: "/tarifs", destination: "/plateforme", permanent: true },
    ];
  },
};

export default nextConfig;
