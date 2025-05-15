import type { Metadata } from "next";
import { BIZ_UDMincho } from "next/font/google";
import "./globals.css";

const bizmincho = BIZ_UDMincho({weight: "400", subsets: ["latin"]});

export const metadata: Metadata = {
  title: {
    default: "Sasuke no site",
    template: "%s | Sasuke no site",
  },
  description: "A website to exhibit my photos.",
  keywords: ["Sasuke"],
  authors: [
    {
      name: "genchan_omega",
      url: "https://sasukenosite.vercel.app"
    }
  ],
  openGraph: {
    title: {
      default: "Sasuke no site",
      template: "%s | Sasuke no site",
    },
    description: "Let me introduce myself.",
    siteName: "Sasuke no site",
    type: "website",
    locale: "ja_JP",
    url: "https://sasukenosite.vercel.app",
    images: [
      {
        url: "https://genchan-omega.dev/profile/profile.jpg",
        width: 600,
        height: 600,
        alt: "Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@genchan_omega",
  },
  metadataBase: new URL("https://genchan-omega.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`${bizmincho.className}`}
      >
        {children}
      </body>
    </html>
  );
}
