export const linkComponent = `
import NextLink from "next/link";
import type React from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
  href: string;
  children: React.ReactNode;
  target?: "_blank" | "_self";
}

// UPDATE THE DOMAIN VARIABLE WITH YOUR SITE'S CONFIGURATION FILE in @config/index.ts
/**
 * A versatile link component that extends Next.js's Link component to add additional functionality:
 * - Adds target="_blank" and rel="noopener" for external links to open in a new tab.
 * - Appends utm_source query parameter for external links to track source.
 * - Uses Next.js's Link component for internal links.
 *
 * @param href - The URL to which the link points.
 * @param children - The content to be displayed inside the link.
 * @param target - Optional. Specifies where to open the link. _blank opens in a new tab, _self opens in the same tab.
 * @param className - Optional. CSS class to apply to the link.
 * @param props - Any additional HTML attributes to apply to the link.
 * @returns A React component rendering an a or NextLink element based on the href and target properties.
 */
export const Link: React.FC<Props> = ({
  href,
  children,
  className,
  target = "_self",
  ...props
}: Props) => {
  const isInternalLink = href.startsWith("/") || href.startsWith("#");

  if (!isInternalLink) {
    const url = new URL(href);
    url.searchParams.append("utm_source", "wolmer.me");

    return (
      <a
        href={url.toString()}
        target={target === "_blank" ? "_blank" : undefined}
        rel={target === "_blank" ? "noopener" : undefined}
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Handle internal links
  return (
    <NextLink href={href} passHref>
      <a className={className} {...props}>
        {children}
      </a>
    </NextLink>
  );
};
`;
