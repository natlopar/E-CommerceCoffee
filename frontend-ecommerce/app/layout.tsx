import type { Metadata } from 'next';
import {Urbanist} from 'next/font/google';
import './globals.css';
import React from 'react';


const urbanist = Urbanist({ subsets : ['latin']});

export const metadata: Metadata = {
  title: 'Next E-commerce',
  description: 'Welcome to my e-commerce from Natalia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
