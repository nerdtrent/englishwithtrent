/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const nextConfig = {
  // Creates a static export in the `out` folder when you run `npm run build`.
  // For a dedicated/custom domain on GitHub Pages, keep basePath empty.
  output: "export",
  trailingSlash: true,

  // Only set NEXT_PUBLIC_BASE_PATH if you intentionally deploy under a subfolder.
  // For a custom domain like https://yourdomain.com, do not set it.
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
