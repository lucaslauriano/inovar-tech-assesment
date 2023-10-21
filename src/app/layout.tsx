import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { classNames } from '@/app/utils/classNames';
import NavBar from '@/components/NavBar';

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
      <body
        className={classNames('bg-white ', inter.className)}
        data-testid={inter.className}
        suppressHydrationWarning={true}
      >
        <NavBar />
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-3xl '>{children}</div>
        </div>
      </body>
    </html>
  );
}
