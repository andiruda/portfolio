import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone", // Required for optimized Docker/ECS deployment
  // Prevent nested standalone output when parent lockfile exists
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
