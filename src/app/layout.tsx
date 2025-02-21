import type { Metadata } from "next";
import "./globals.css";


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
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
