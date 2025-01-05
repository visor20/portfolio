'use client';

import { useRef } from 'react';
import "./globals.css";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Waves from './components/Waves';

const navItems = [
  {
    title: "Home",
    path: "/",
    blank: false,
  },
  {
    title: "Projects",
    path: "/projects",
    blank: false,
  },
  {
    title: "About",
    path: "/about",
    blank: false,
  },
  {
    title: "Resume",
    path: "/Richard Viso - Resume.pdf",
    blank: true,
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
      <head>
        <title>Richard Viso</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <NavBar 
          items={navItems}
          ref={footerRef}
          scrollFunction={scrollToFooter}
          fixed={true}
        />
        <div className="real-body">
          {children}
          <Waves />
        </div>
        <Footer ref={footerRef} scrollFunction={scrollToFooter} />
      </body>
    </html>
  );
}
