export const generateSeoUtil = `
import type { Metadata } from "next";

import { siteConfig } from "@/config";

interface Props {
  title: string;
  description: string;
  url: string;
  image?: string;
  width?: number;
  height?: number;
}

/**
 * Generates SEO metadata for a page, including Open Graph and Twitter card information.
 *
 * @param title - The title of the page.
 * @param description - A brief description of the page content.
 * @param url - The URL of the page.
 * @param image - Optional. The URL of the image to be used in the metadata.
 * @param width - Optional. The width of the image in pixels.
 * @param height - Optional. The height of the image in pixels.
 * @returns The metadata object formatted for use with Next.js.
 */
export const generateSeo = ({
  title,
  description,
  url,
  image,
  width,
  height,
}: Props): Metadata => ({
  title,
  description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title,
    description,
    siteName: siteConfig.name,
    url,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: image ? image : siteConfig.ogImage.url,
        width: width ? width : siteConfig.ogImage.width,
        height: height ? height : siteConfig.ogImage.height,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    title,
    description,
    images: [
      {
        url: image ? image : siteConfig.ogImage.url,
        width: width ? width : siteConfig.ogImage.width,
        height: height ? height : siteConfig.ogImage.height,
      },
    ],
  },
  alternates: {
    canonical: url,
  },
});
`;
