import "@/assets/global/layout.css";
import "@/assets/global/custom-library.css";
import "antd/dist/reset.css";
import type { Metadata } from "next";
import { Noto_Color_Emoji, Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-sans",
  display: "swap",
});

const noto_emoji = Noto_Color_Emoji({
  subsets: ["emoji"],
  variable: "--font-noto-emoji",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Testing style with Antd",
  authors: [{ name: "Raihan Yusuf" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body
        className={`${jakarta_sans.variable} ${noto_emoji.variable} antialiased`}
      >
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
