import PortfolioClient from '../components/PortfolioClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portfolio - Our Best Selling Book Designs',
    description: 'Explore our portfolio of professionally published book covers and formatted ebooks. See the quality of Kandle Direct Publishing\'s design and production across various genres.',
    openGraph: {
        title: 'Kandle Direct Publishing Portfolio',
        description: 'A showcase of our premium book cover designs and published works. Professional results for authors worldwide.',
    },
};

export default function PortfolioPage() {
    return <PortfolioClient />;
}
