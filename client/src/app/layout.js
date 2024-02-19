import { Jolly_Lodger } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navBar/Navbar";

const jollyLodger = Jolly_Lodger({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "CS340 - Group 78",
  description: "OSU CS 340 Database by Group 78",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jollyLodger.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
