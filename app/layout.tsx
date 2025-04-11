import "./globals.css";

import { Montserrat } from "next/font/google";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";
import { ThemeScript } from "./theme-script";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: "Tushaar Mehta's Blog",
  description:
    "Tushaar Mehta is a 23-year-old entrepreneur, founder of Intuition Labs, AI enthusiast, and community builder.",
  openGraph: {
    title: "Tushaar Mehta's Blog",
    description:
      "Tushaar Mehta is a 23-year-old entrepreneur, founder of Intuition Labs, AI enthusiast, and community builder.",
    url: "https://tushaarmehta.com",
    siteName: "Tushaar Mehta's Blog",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tushaarmehta_",
    creator: "@tushaarmehta_",
  },
  metadataBase: new URL("https://tushaarmehta.com"),
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.className} antialiased`}
      suppressHydrationWarning={true}
      style={{fontFamily: montserrat.style.fontFamily}}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
