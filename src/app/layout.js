import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


//local font is here
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
  title: "Switzer IT",
  description: "Solutions informatiques professionnelles pour entreprises et particuliers.",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Comic.variable} ${Aptos.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
