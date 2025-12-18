import Image from 'next/image';
import Link from 'next/link';
import Logo from './Kandle Direct Publishing-Logo-03.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20 md:py-28 px-4 sm:px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 underline-offset-8">
          {/* Left Column: Logo + Heading + CTA */}
          <div className="lg:col-span-2 space-y-10">
            <div className="flex items-center">
              <div className="relative w-80 sm:w-96 h-32 sm:h-40">
                <Image
                  src={Logo}
                  alt="Kandle Direct Publishing"
                  priority
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-noto-bold leading-[1.1] text-white tracking-tight">
                From Writing To <br className="hidden sm:block" /> Publishing.
              </h3>

              <div className="flex items-center gap-5">
                <span className="text-gray-400 font-medium">Contact Us</span>
                <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition shadow-lg shadow-orange-500/20">
                  <span className="text-xl">→</span>
                </Link>
              </div>
            </div>

            <div className="w-full max-w-lg h-px bg-gradient-to-r from-orange-500 to-transparent opacity-50"></div>
          </div>

          {/* Middle Column: Navigation Links */}
          <div className="lg:pt-2">
            <h4 className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-[0.2em] mb-8">
              Pages
            </h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-300 hover:text-orange-500 transition text-lg md:text-xl font-medium">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-orange-500 transition text-lg md:text-xl font-medium">Services</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-orange-500 transition text-lg md:text-xl font-medium">Why Kandle</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-orange-500 transition text-lg md:text-xl font-medium">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-orange-500 transition text-lg md:text-xl font-medium">Get Started</Link></li>
            </ul>
          </div>

          {/* Right Column: Social + Contact */}
          <div className="space-y-12 lg:pt-2">
            {/* Social Icons */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">
                Follow Us
              </h4>
              <div className="flex gap-4 flex-wrap">
                {[
                  { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/kandledirectpublishing/' },
                  { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/kandledirectpublishing/' },
                  { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/kandle-direct-publishing/' }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 text-gray-400 hover:text-white transition group"
                  >
                    {social.icon === 'facebook' && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    )}
                    {social.icon === 'instagram' && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    )}
                    {social.icon === 'linkedin' && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">
                Contact
              </h4>
              <ul className="space-y-4 text-gray-300 text-base md:text-lg">
                <li className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl font-bold">📞</span>
                  <a href="tel:+447918934410" className="hover:text-white transition">+44 7918 934410</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl font-bold">✉️</span>
                  <a href="mailto:info@kandledirectpublishing.com" className="hover:text-white transition">info@kandledirectpublishing.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl font-bold">📍</span>
                  <span className="leading-tight">173 Dallow Rd, Luton, <br /> LU1 1NX, UK</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition flex items-center gap-2 text-lg lg:text-xl w-full sm:w-auto justify-center shadow-lg shadow-orange-500/20">
              Book Your Demo
              <span className="text-2xl">→</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
