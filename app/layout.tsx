import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins(
    { subsets: ["latin"],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins'
});

export const metadata: Metadata = {
    title: "Event Vive",
    description: "Share your events with the world",
    icons: {
        icon: ''
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.variable}>{children}</body>
    </html>
  );
}
