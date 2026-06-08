import type { Metadata } from 'next';
import { ReactNode } from 'react';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Uychi AI & IT Hub',
  description: 'Building Central Asias emerging technology epicenter',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}
