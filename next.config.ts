import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbo: {
    rules: {
      // Add any special file handling rules here
      // Example for SVG files:
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js'
      }
    },
    resolveAlias: {
      // Add any path aliases here
    }
  }
};

export default nextConfig;
