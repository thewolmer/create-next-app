export const providersComponent = `
"use client";
import { ThemeProvider } from "next-themes";
import type React from "react";
interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
};
`;
