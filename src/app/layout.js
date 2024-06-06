import {
  Open_Sans,
  Pacifico,
  Cormorant_Garamond,
  Modak,
} from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Modal from '@/components/ui/Modal';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const pacifico = Pacifico({
  subsets: ['latin'],
  variable: '--font-pacifico',
  weight: ['400'],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'The Visual Paradise',
  description:
    "Welcome to The Visual Paradise, where breathtaking moments are captured through the lens of creativity. Explore our portfolio of stunning photography, ranging from captivating landscapes to timeless wedding memories. Our skilled photographers blend artistry with technical expertise to deliver images that evoke emotion and tell stories. Whether you're seeking professional event coverage, exquisite portraits, or inspiring travel photography, we're dedicated to exceeding your expectations. Contact us today to transform your vision into unforgettable visual masterpieces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body
        className={`${openSans.variable} ${pacifico.variable} ${cormorantGaramond.variable} bg-neutral-900`}
      >
        <Header />
        {children}
        <Modal />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
