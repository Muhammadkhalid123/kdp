import Image from 'next/image';
import Link from 'next/link';
import Logo from './Kandle Direct Publishing-Logo-03.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-20 lg:py-24 px-4 sm:px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-16">
          {/* Left Column: Logo + Heading + CTA */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="flex items-center">
              <div className="relative w-64 sm:w-72 md:w-80 h-24 sm:h-28 md:h-32">
                <Image
                  src={Logo}
                  alt="Kindle"
                  priority
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-noto-bold leading-tight text-white">
              From Writing To <br /> Publishing.
            </h3>

            <div className="flex items-center gap-4 text-gray-400">
              <span className="text-sm sm:text-base">Contact Us</span>
              <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-medium transition inline-block">
                →
              </Link>
            </div>

            <div className="w-full max-w-xl h-px bg-orange-500"></div>
          </div>

          {/* Middle Column: Navigation Links */}
          <div className="space-y-4">
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition text-sm sm:text-base">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition text-sm sm:text-base">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition text-sm sm:text-base">Why</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition text-sm sm:text-base">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition text-sm sm:text-base">Call To Action</a></li>
            </ul>
          </div>

          {/* Right Column: Social + Contact */}
          <div className="space-y-6 sm:space-y-8">
            {/* Social Icons */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Follow Us
              </h4>
              <div className="flex gap-3 flex-wrap">
                {[
                  { icon: 'instagram', label: 'Instagram' },
                  { icon: 'whatsapp', label: 'WhatsApp' },
                  { icon: 'telegram', label: 'Telegram' },
                  { icon: 'telegram', label: 'Telegram 2' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition"
                  >
                    <span className="text-lg">
                      {social.icon === 'instagram' && '📷'}
                      {social.icon === 'whatsapp' && '💬'}
                      {social.icon === 'telegram' && '✈️'}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Contact
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <span>+44 7918 934410</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️</span>
                  <span>kandledirectpublishing@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center">
              Book Your Demo
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
