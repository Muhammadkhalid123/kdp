import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kandledirectpublishing.com'),
  title: {
    default: 'Kandle Direct Publishing - Professional Ebook Publishing Services',
    template: '%s | Kandle Direct Publishing'
  },
  description: 'Transform your manuscript into a bestselling ebook with Kandle Direct Publishing. Professional formatting, cover design, marketing, and distribution services for authors worldwide.',
  keywords: [
    'ebook publishing',
    'kindle publishing',
    'self publishing',
    'book formatting',
    'book cover design',
    'author services',
    'amazon kdp',
    'digital publishing',
    'manuscript editing',
    'book marketing',
    'professional ebook services',
    'publish ebook kindle',
    'ghostwriting services',
    'audiobook creation'
  ],
  authors: [{ name: 'Kandle Direct Publishing' }],
  creator: 'Kandle Direct Publishing',
  publisher: 'Kandle Direct Publishing',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.kandledirectpublishing.com',
    siteName: 'Kandle Direct Publishing',
    title: 'Kandle Direct Publishing - Professional Ebook Publishing Services',
    description: 'Transform your manuscript into a bestselling ebook with professional formatting, cover design, and marketing services. Your story deserves to be published.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kandle Direct Publishing - From Writing to Publishing',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kandle Direct Publishing - Professional Ebook Publishing',
    description: 'Professional ebook publishing services for authors. Formatting, design, marketing & distribution.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '4yrj_u-zJEKGy3e_DXO10SQ_hvAOfdc36htSzdS2KjY',
  },
  alternates: {
    canonical: '/',
  },
  other: {
    "geo.region": "GB",
    "geo.placename": "Luton",
    "geo.position": "51.88;-0.44",
    "ICBM": "51.88, -0.44"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Kandle Direct Publishing",
              "url": "https://www.kandledirectpublishing.com/",
              "logo": "https://www.kandledirectpublishing.com/wp-content/uploads/logo.png",
              "description": "Kandle Direct Publishing is a UK-based professional book publishing company offering editing, formatting, Amazon KDP optimization, and author marketing services worldwide.",
              "telephone": "+44 7922 656521",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "173 Dallow Rd",
                "addressLocality": "Luton",
                "postalCode": "LU1 1NX",
                "addressCountry": "GB"
              },
              "areaServed": {
                "@type": "Place",
                "name": "United Kingdom"
              },
              "sameAs": [
                "https://www.facebook.com/kandledirectpublishing/",
                "https://www.linkedin.com/company/kandle-direct-publishing/",
                "https://www.instagram.com/kandledirectpublishing/"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
