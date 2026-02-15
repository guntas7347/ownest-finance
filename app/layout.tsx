import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export const metadata: Metadata = {
  title: "Ownest Finance | Asset Loans, Home Loans & Refinancing",
  description:
    "Ownest Finance provides asset loans, home loans, refinancing, and tailored finance solutions designed for clarity, speed, and long-term value.",
  icons: {
    icon: "/ownest-c.png",
  },
  openGraph: {
    title: "Ownest Finance",
    description:
      "Asset loans, house loans, refinancing, and flexible finance solutions with Ownest Finance.",
    images: [
      {
        url: "/ownest-c.png",
        width: 512,
        height: 512,
        alt: "Ownest Finance logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="bg-background-light dark:bg-background-dark font-display text-primary-dark antialiased">
        <div className=" bg-red-600 text-white text-center text-sm font-extrabold py-3 px-4 uppercase tracking-wide">
          ⚠ this website is under development. <br />
          OWNEST FINANCE PTY LTD
          <br />
          Email: ownestfinance@gmail.com <br />
          Phone: +61 0414060000
        </div>
        <Header /> {children}
        <Footer />
      </body>
    </html>
  );
}
