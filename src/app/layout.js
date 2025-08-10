import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Zen_Antique } from "next/font/google";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-manrope'
});

const zen_antique = Zen_Antique({
  weight : ['400'],
  subsets : ['latin'],
  variable : '--font-antique'
})

export const metadata = {
  title: "Paris Bozzuti",
  description: "Portfolio website for data scientist Paris Bozutti.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${zen_antique.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
