import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NavBar from '../components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Inovar - Post List',
  description: 'Inovar - Post List Tech Assessment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
