/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const nextConfig = {
  // Creates a static export in the `out` folder when you run `npm run build`.
  // This is suitable for GitHub Pages and other static hosts.
  output: "export",
  trailingSlash: true,

  // For GitHub project pages, build with:
  // NEXT_PUBLIC_BASE_PATH=/your-repo-name npm run build
  // For a custom domain or local static build, just run:
  // npm run build
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
