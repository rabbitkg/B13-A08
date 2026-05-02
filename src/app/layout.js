'use client";'
import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";





const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Qurbani Hat",
  description: "Best place to buy and sell qurbani animals online",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="retro"
      className={`h-full antialiased`}
    >
      <body className={`${poppins.variable} min-h-full flex flex-col`}>
       
        {children}
        <ToastContainer position="top-right" className="mt-27"/>
      </body>
    </html>
  );
}
