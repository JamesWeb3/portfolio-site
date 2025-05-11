import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "James Oldham Portfolio Site",
  description: "James Oldham Portfolio Site",
  icons: {
    icon: "/favicon.ico",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
