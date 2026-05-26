import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import CookieBanner from "@/component/CookieBanner";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const Aptos = localFont({
  src: [
    {
      path: "../../public/font/Aptos/Aptos-Light.ttf",
      weight: "400",
      style: "thin",
    },
    {
      path: "../../public/font/Aptos/Aptos.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/Aptos/Aptos-Display.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/Aptos/Aptos-Bold.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-Aptos",
});
const Comic = localFont({
  src: [
    {
      path: "../../public/font/Comic/comici.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-Comic",
});
export const metadata = {
  title: "SwitzerIT - Software & IT Solutions",
  description:
    "SwitzerIT supports your IT projects with a professional, secure, and tailored approach. From technical support to fully managed IT services, we put our expertise at the service of your success.",
  openGraph: {
    title: "SwitzerIT - Software & IT Solutions",
    description:
      "SwitzerIT supports your IT projects with a professional, secure, and tailored approach. From technical support to fully managed IT services, we put our expertise at the service of your success.",
    url: "https://www.switzerit.com",
    siteName: "SwitzerIT",
    images: [
      {
        url: "https://res.cloudinary.com/dg83pvgls/image/upload/v1771474781/vithu_og_xneiln.png",
        width: 1200,
        height: 630,
        alt: "SwitzerIT Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwitzerIT - Software & IT Solutions",
    description:
      "SwitzerIT supports your IT projects with a professional, secure, and tailored approach. From technical support to fully managed IT services, we put our expertise at the service of your success.",
    images: [
      "https://res.cloudinary.com/dg83pvgls/image/upload/v1771474781/vithu_og_xneiln.png"
    ],
  },
  metadataBase: new URL("https://www.switzerit.com"),
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18190023032"
          strategy="beforeInteractive"
        />
        <Script id="google-ads-base" strategy="beforeInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-18190023032');
      `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Comic.variable} ${Aptos.variable} antialiased`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
