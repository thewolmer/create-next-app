export const googleAnalyticsUtil = `
"use client";
import Script from "next/script";

/**
 * A custom Google Analytics integration component for Next.js.
 *
 * @param {Object} props - The component props.
 * @param {string} props.GA_TRACKING_ID - The Google Analytics tracking ID.
 *
 * @returns {JSX.Element} The Google Analytics setup scripts.
 */

// Use the GA_TRACKING_ID from your .env.local file
export const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID: string }) => (
  <>
    <Script
      src={\`https://www.googletagmanager.com/gtag/js?id=$\{GA_TRACKING_ID}\`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {\`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '\${GA_TRACKING_ID}\', {
          page_path: window.location.pathname,
        });
      \`}
    </Script>
  </>
);
`;
