// next.config.ts
import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    // Exclude `.svg` from the default file loader
    const fileLoaderRule = config.module?.rules?.find(
      (rule) => typeof rule === 'object' && rule?.test instanceof RegExp && rule.test.test('.svg')
    ) as any;

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    // Add custom rule for handling SVGs with @svgr/webpack
    config.module?.rules?.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
