import type { Metadata } from "next";

import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "./_components/Header";

const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "Info about Rick and Morty",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />

        <div className="flex-1 py-12">
          <main className="max-w-screen-desktop mx-auto ">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
