import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'RK FARM LAND - Peace. Health. Wealth.',
  description: 'Invest in nature. Grow your future.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
          <Button asChild className="md:hidden fixed bottom-4 right-4 z-50 h-16 w-16 rounded-full shadow-lg" size="icon">
            <a href="tel:+919740006528">
              <Phone className="h-6 w-6" />
              <span className="sr-only">Call Now</span>
            </a>
          </Button>
        </ThemeProvider>
      </body>
    </html>
  );
}
