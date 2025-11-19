import Image from 'next/image';
import Logo from './Kandle Direct Publishing-Logo-03.png';

export default function Footer() {
  return (
  <footer className="bg-gray-900 text-white py-15 md:py-24 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className='p-0 m-0'>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-[200px] h-[80px] bottom-10 right-7 pb-25">
                  <Image 
                    src={Logo} 
                    alt="Kindle" 
                    priority
                    className="object-contain "
                  />
                </div>
              </div>
                <h3 className="text-5xl md:text-7xl font-noto-bold whitespace-nowrap leading-none text-white">
                From Writing To <br/> Publishing.
                </h3>
                <div className="flex items-center gap-110 text-gray-400 mt-20">
                    <span>Contact Us</span>
                    <button className="bg-orange-500 hover:bg-white-600 text-white px-4 py-1.5 rounded-full text-sm font-medium transition">
                        →
                    </button>
            </div>
            <div className="w-[540px] relative h-px bg-orange-500">
                <div className="absolute right-0 top-0 w-50 h-px bg-orange-500 "></div>
            </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4 mt-12 ml-90">
              <ul className="space-y-10"> 
                <li> <a href="#" className="text-gray-400 hover:text-gray-300 transition whitespace-nowrap"> About </a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-300 transition whitespace-nowrap">  Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-300 transition whitespace-nowrap">  Why</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-300 transition whitespace-nowrap"> Portfolio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-300 transition whitespace-nowrap"> Call To Action</a></li>

              </ul>
            </div>
          </div>

          {/* Right Column: Social + Contact + CTA */}
          <div className="col-span-2 space-y-8 mt-12 ml-80">
            {/* Social Icons */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
                Follow Us
              </h4>
              <div className="flex gap-3">
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
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider p-6 pl-0">
                Contact
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <span>999-999-9999</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️</span>
                  <span>Kandle@.com</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition flex items-center gap-2">
              Book Your Demo
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
