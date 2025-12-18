import HomeClient from './components/HomeClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kandle Direct Publishing - Professional Ebook Publishing Services',
  description: 'Transform your manuscript into a bestselling ebook with professional formatting, cover design, and global distribution. Your story deserves to be published with Kandle.',
  openGraph: {
    title: 'Kandle Direct Publishing - From Manuscript to Marketplace',
    description: 'Expert formatting, stunning cover design, and global distribution while keeping all your rights. Your publishing partner.',
    images: ['/og-image.png'],
  },
};

export default function Page() {
  return <HomeClient />;
}