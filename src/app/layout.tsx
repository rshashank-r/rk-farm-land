import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'RK FARM LAND - Peace. Wealth. Health.',
  description: 'Invest in nature. Grow your future.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
