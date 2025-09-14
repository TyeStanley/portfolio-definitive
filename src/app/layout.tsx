import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import PageTransition from '@/components/PageTransition';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Tye Stanley - Software Engineer',
  description: 'Software Engineer specializing in modern web development and full-stack solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {/* Beach background with overlay */}
        <div className="fixed inset-0 bg-[url('/beach-bg.jpg')] bg-cover bg-center bg-no-repeat" />

        {/* White overlay to reduce background distraction */}
        <div className="fixed inset-0 bg-white/30" />

        {/* Content with page transitions */}
        <div className="relative z-10">
          <PageTransition>{children}</PageTransition>
        </div>
      </body>
    </html>
  );
}
