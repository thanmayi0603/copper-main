import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Find the existing rule that handles image imports
    const assetRule = config.module?.rules?.find(
      (rule: any) =>
        typeof rule === "object" &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg")
    );

    if (assetRule) {
      assetRule.exclude = /\.svg$/i; // exclude svg from default loader
    }

    // Add SVGR loader for .svg
    config.module?.rules?.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
