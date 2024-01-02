import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import "./style/main.scss";

export const metadata = {
  title: "Sara's Pomodoro",
  description: "Academic Weapon Szn!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
