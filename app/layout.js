'use client';

import { useRef } from 'react';
import "./globals.css";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "About",
    path: "/about",
  },
]; 

// content of layout is applied to all children (navbar / footer)

export default function RootLayout({ children }) {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <html lang="en">
      <body>
        <NavBar items={navItems} ref={footerRef} scrollFunction={scrollToFooter} />
        <div className="real-body">
          {children}
        </div>
        <Footer ref={footerRef} scrollFunction={scrollToFooter} />
      </body>
    </html>
  );
}
