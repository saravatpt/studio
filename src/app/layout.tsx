import type {Metadata} from 'next';
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

// const geistSans = GeistSans;
// const geistMono = GeistMono;

export const metadata: Metadata = {
  title: 'Profile Canvas | Saravanan',
  description: 'Personal portfolio of Saravanan, a Full Stack Developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}> {/* Removed geistSans.variable and geistMono.variable */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
