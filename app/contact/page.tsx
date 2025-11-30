import Contact from '../components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get Your Publishing Quote',
  description: 'Contact Kandle Direct Publishing for professional ebook publishing services. Get a free quote, discuss your manuscript, or book a demo. Phone: +44 7918 934410',
  openGraph: {
    title: 'Contact Kandle Direct Publishing',
    description: 'Get in touch with our expert team for professional ebook publishing services. Free quotes and consultations available.',
  },
};

export default function ContactPage() {
  return <Contact />;
}
