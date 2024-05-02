import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import {ClerkProvider} from "@clerk/nextjs";

const font = Poppins(
    { subsets: ["latin"],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins'
});

export const metadata: Metadata = {
    title: "Event Vibe",
    description: "Share your events with the world",
    icons: {
        icon: '/assets/images/favicon.svg',
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
            <html lang="en">
              <body className={font.variable}>{children}</body>
            </html>
      </ClerkProvider>
  );
}
