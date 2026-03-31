import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '../components/providers/SmoothScrollProvider';
import { CartDrawer } from '../components/cart/CartDrawer';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-ogg' });

export const metadata: Metadata = {
  title: 'Vigneshwara Marbles | Ultra-Luxury Stone',
  description: 'Forged by time. Curated for you.',
  icons: {
    icon: '/images/vm/vm-logo.jpg',
    apple: '/images/vm/vm-logo.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased selection:bg-champagne selection:text-obsidian bg-background text-foreground">
        <SmoothScrollProvider>
          <div className="noise-overlay" />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
