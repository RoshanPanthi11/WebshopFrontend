import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./context/AppContext.tsx";
import Navbar from "../components/Navbar";      
import Footer from "../components/Footer";      

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KSI",
  description: "Medical Equipment E-commerce Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppProvider>
          <Navbar />         
          <main className="min-h-screen">{children}</main>
          <Footer />         
        </AppProvider>
      </body>
    </html>
  );
}
