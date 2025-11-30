import Services from '../components/Services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Professional Ebook Publishing Solutions',
  description: 'Explore our comprehensive ebook publishing services: book formatting, cover design, ghostwriting, audiobooks, printing, and marketing. Professional solutions for authors at every stage.',
  openGraph: {
    title: 'Kandle Direct Publishing Services',
    description: 'Professional ebook publishing services including formatting, design, marketing, and more. Everything you need to publish your bestselling ebook.',
  },
};

export default function ServicesPage() {
  return <Services />;
}
