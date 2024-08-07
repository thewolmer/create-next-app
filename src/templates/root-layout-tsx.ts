export const rootLayout = `
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

import { inter } from "@/components/fonts";
import { generateSeo } from "@/utils/generateSeo";
import { Providers } from "./providers";

export const generateMetadata = () =>
  generateSeo({
    title: "Create Next App",
    description: "This app was created using @wolmer/create-next-app.",
    url: "/",
  });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
`;
