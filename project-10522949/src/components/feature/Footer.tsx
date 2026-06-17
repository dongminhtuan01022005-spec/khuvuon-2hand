import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-background-100">
      <div className="w-full px-6 md:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link
              to="/"
              className="flex items-center gap-3 mb-4 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center">
                <i className="ri-leaf-line text-lg text-background-50"></i>
              </div>
              <span className="font-heading text-xl font-bold text-background-50">
                Khu Vuon 2Hand
              </span>
            </Link>
            <p className="text-background-300 text-sm leading-relaxed">
              Curated second-hand treasures with garden-inspired charm. Every
              item has a story waiting to continue with you.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-background-400 mb-5 font-label font-semibold">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-background-200 text-sm hover:text-background-50 transition-colors cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-background-200 text-sm hover:text-background-50 transition-colors cursor-pointer"
              >
                Products
              </Link>
              <Link
                to="/about"
                className="text-background-200 text-sm hover:text-background-50 transition-colors cursor-pointer"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-background-200 text-sm hover:text-background-50 transition-colors cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-background-400 mb-5 font-label font-semibold">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:dongminhtuan01022005@gmail.com"
                className="text-background-200 text-sm hover:text-background-50 transition-colors cursor-pointer"
              >
                <i className="ri-mail-line mr-2"></i>
                dongminhtuan01022005@gmail.com
              </a>
              <a
                href="tel:+84901234567"
                className="text-background-200 text-sm hover:text-background-50 transition-colors cursor-pointer"
              >
                <i className="ri-phone-line mr-2"></i>0867167261
              </a>
              <a
                href="https://zalo.me/0867167261"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background-200 text-sm hover:text-background-50 transition-colors cursor-pointer"
              >
                <i className="ri-chat-3-line mr-2"></i>Zalo
              </a>
              <a
                href="https://m.me/dongminhtuan01022005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background-200 text-sm hover:text-background-50 transition-colors cursor-pointer"
              >
                <i className="ri-messenger-line mr-2"></i>Messenger
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-background-400 mb-5 font-label font-semibold">
              Newsletter
            </h4>
            <p className="text-background-300 text-sm mb-4">
              Get notified about new arrivals and special finds.
            </p>
            <form
              id="newsletter-form"
              data-readdy-form="true"
              action="https://readdy.ai/api/form/d8ft50ernpmjsc93fdpg"
              method="POST"
              encType="application/x-www-form-urlencoded"
              className="flex"
            >
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="bg-primary-800 text-background-100 text-sm px-4 py-2.5 rounded-l-full outline-none w-full border border-primary-700 placeholder:text-background-500"
              />
              <button
                type="submit"
                className="bg-accent-500 hover:bg-accent-600 text-background-50 px-4 py-2.5 rounded-r-full transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-arrow-right-line"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background-400 text-xs">
            &copy; 2026 Khu Vuon 2Hand Nha MC. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://facebook.com/khuvuon2hand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background-400 hover:text-background-50 transition-colors cursor-pointer"
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href="https://instagram.com/khuvuon2hand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background-400 hover:text-background-50 transition-colors cursor-pointer"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="https://tiktok.com/@khuvuon2hand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background-400 hover:text-background-50 transition-colors cursor-pointer"
            >
              <i className="ri-tiktok-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
