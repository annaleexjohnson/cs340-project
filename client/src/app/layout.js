import "./globals.css";
import { Lato, Bigelow_Rules, Exo_2 } from "next/font/google";
import { AppWrapper } from "./context/index.js";
import Navbar from "./components/navBar/Navbar";

const bigelowRules = Bigelow_Rules({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bigelow",
});

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-exo",
});

export const metadata = {
  title: "CS340 - Group 78",
  description: "OSU CS 340 Database by Group 78",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bigelowRules.variable} ${exo.variable}`}>
        <Navbar />
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
