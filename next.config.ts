import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";
// Vercel sets VERCEL_ENV at build time; preview deployments get the Vercel toolbar.
const isPreview = process.env.VERCEL_ENV === "preview";

// Notes on what this policy has to allow:
// - The contact form posts with fetch() to /api/contact on this origin,
//   so connect-src 'self' covers it. form-action 'self' covers the form.
// - Vercel Analytics and Speed Insights load from and report to this
//   origin (/_vercel/insights, /_vercel/speed-insights).
// - Fonts are self-hosted with next/font, so no third-party font hosts.
// - 'unsafe-inline' scripts: Next.js emits inline bootstrap scripts, and
//   nonces would force every page to render dynamically.
function contentSecurityPolicy(): string {
  const vercelLive = isPreview ? " https://vercel.live" : "";
  const directives = [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline'${vercelLive}`,
    `style-src 'self' 'unsafe-inline'${vercelLive}`,
    `img-src 'self' data: blob:${isPreview ? " https://vercel.live https://vercel.com" : ""}`,
    `font-src 'self'${isPreview ? " https://vercel.live https://assets.vercel.com" : ""}`,
    `connect-src 'self'${isPreview ? " https://vercel.live wss://ws-us3.pusher.com" : ""}`,
    isPreview ? "frame-src https://vercel.live" : "frame-src 'none'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ];
  return directives.join("; ");
}

const securityHeaders = [
  ...(isDev ? [] : [{ key: "Content-Security-Policy", value: contentSecurityPolicy() }]),
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
