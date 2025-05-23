import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { VisitorProvider } from "@/context/useTrackVisitor";

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
      <body className="antialiased">
        <VisitorProvider>
          {children}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-FB8XDTZV17"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FB8XDTZV17');
          `}
          </Script>
        </VisitorProvider>
      </body>
    </html>
  );
}
