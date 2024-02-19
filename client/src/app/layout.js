import "./globals.css";
import { Lato, Bigelow_Rules } from "next/font/google";
import Navbar from "./components/navBar/Navbar";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const bigelowRules = Bigelow_Rules({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bigelow",
});

export const metadata = {
  title: "CS340 - Group 78",
  description: "OSU CS 340 Database by Group 78",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${bigelowRules.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
