import { VercelToolbar } from '@vercel/toolbar/next';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';

import './globals.css';
import { FreeDelivery } from '@/app/free-delivery';
import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';

export const metadata: Metadata = {
  title: 'Shirt Shop Example',
  description: 'A shirt shop example for Ecommerce',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showFreeDeliveryBanner = true;

  return (
    <html lang="en">
      <body className="antialiased">
        <div className="bg-white">
          <FreeDelivery show={showFreeDeliveryBanner} />
          <Navigation />
          {children}
          <Footer />
        </div>
        <Toaster />
        <Analytics />
        <VercelToolbar />
      </body>
    </html>
  );
}
