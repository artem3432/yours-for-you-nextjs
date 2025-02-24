import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";


export const metadata: Metadata = {
  title: "YFY",
  description: "Yours_For_You",
  keywords: ["Yours_For_You, YFY, Fashion, Shop, Trending, T-Shirts"],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased min-h-screen"
      >
        <div className="flex flex-col min-h-screen justify-between">
          <div>
            <Navbar />
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
