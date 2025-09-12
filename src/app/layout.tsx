import type { Metadata } from "next";
import "./globals.css";
import Header from "./(home)/components/Header";
import CartProvider from "./context/CartContext";
import Footer from "./(home)/components/Footer";

export const metadata: Metadata = {
  title: "ES Store",
  description: "Loja de produtos incriveis e ofertas imperdíveis online - ES Store",
  icons: {
    icon: "../../public/es-store.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div className="min-h-screen flex flex-col">
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </div>
      </body>
    </html>
  );
}
