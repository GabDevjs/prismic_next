export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
export const generateRobotsTxt = true;
export async function transform(config, path) {
  return {
    loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
    changefreq: config.changefreq,
    priority: config.priority,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    alternateRefs: config.alternateRefs ?? [],
  };
}
export const robotsTxtOptions = {
  policies: [
    {
      userAgent: "*",
      allow: "/",
    },
  ],
};