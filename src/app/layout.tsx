import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const sourGummy = localFont({
  src: "./fonts/SourGummy-VariableFont_wdth,wght.ttf",
  variable: "--font-sour-gummy",
  weight: "100 900",
});



export const metadata: Metadata = {
  title: "Fortune Finances",
  description: "Ai Fortune Cookie for Financial Advice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${sourGummy.variable} antialiased`}
          style={{fontFamily: sourGummy.style.fontFamily}}
        >
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
