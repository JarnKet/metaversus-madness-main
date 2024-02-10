import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Meataversus Madness",
  description: "Next.js + Tailwind CSS + Framer Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </head>

      <body>
        <div className="overflow-hidden bg-primary-black">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
