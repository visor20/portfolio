import localFont from "next/font/local";
import "./globals.css";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// content of layout is applied to all children (navbar / footer)

export const metadata = {
  title: "Richard Viso",
  description: "Next Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
