import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Rick & Morty Explorer',
  description: 'Explorador de personajes del multiverso · Programación 3',
};

export default function RootLayout({ children }) {
  return (
    <html lang='es' className={inter.variable}>
      <body className='flex min-h-screen flex-col font-sans antialiased selection:bg-portal/30'>
        <Navbar />
        <div className='flex-1'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
