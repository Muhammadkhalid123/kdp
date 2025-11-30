import About from '../components/about';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Why Choose Kandle Direct Publishing',
  description: 'Learn about Kandle Direct Publishing and why thousands of authors trust us for professional ebook publishing services. Expert formatting, design, and marketing support for authors worldwide.',
  openGraph: {
    title: 'About Kandle Direct Publishing',
    description: 'Empowering authors with professional ebook publishing services. From manuscript to publication, we make your publishing journey simple and successful.',
  },
};

export default function AboutPage() {
  return <About />;
}
