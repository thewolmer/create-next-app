export const siteConfig = `
import type { SiteConfig } from "@/types";
/**
 * Site configuration for SEO, Make sure to setup current values before deploying the site.
 * @type {SiteConfig}
 * @returns {SiteConfig} - Site configuration object.
 */
export const siteConfig: SiteConfig = {
  name: "Create Next App", // Used in title tag for SEO
  description: "This app was created using @wolmer/create-next-app.", // Used in meta tags for SEO
  url: "https://example.com", // Used in og:url for SEO
  domain: "example.com", // Used in utm_source for external links
  ogImage: {
    // Used in og:image for SEO
    url: "https://example.com/images/banner.png",
    width: 641,
    height: 321,
  },
  twitterHandle: "@you", // Used in twitter:site for SEO
  links: {
    twitter: "https://twitter.com/you", // Used in footer for social links
  },
};
`;
