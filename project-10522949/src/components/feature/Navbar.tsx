import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = isHome && !scrolled ? "bg-transparent" : "bg-background-50";

  const textColor =
    isHome && !scrolled ? "text-background-50" : "text-foreground-900";

  const linkClass = `text-sm font-medium ${textColor} hover:opacity-70 transition-opacity whitespace-nowrap cursor-pointer`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="w-full px-6 md:px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <img
            src="/Logo.jpg"
            alt="Khu Vuon 2Hand"
            className="w-12 h-12 rounded-full object-cover"
          />

          <span
            className={`font-heading text-xl font-bold ${textColor} whitespace-nowrap`}
          >
            Khu Vuon 2Hand
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={linkClass}>
            Home
          </Link>
          <Link to="/products" className={linkClass}>
            Products
          </Link>
          <Link to="/about" className={linkClass}>
            About Us
          </Link>
          <Link to="/contact" className={linkClass}>
            Contact
          </Link>
          <Link
            to="/products"
            className="bg-accent-500 text-background-50 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-accent-600 transition-colors whitespace-nowrap cursor-pointer"
          >
            Shop Now
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden w-10 h-10 flex items-center justify-center ${textColor} cursor-pointer`}
        >
          <i
            className={`text-xl ${mobileOpen ? "ri-close-line" : "ri-menu-line"}`}
          ></i>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background-50 py-4 px-6 flex flex-col gap-4">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="text-foreground-900 text-sm font-medium py-2"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setMobileOpen(false)}
            className="text-foreground-900 text-sm font-medium py-2"
          >
            Products
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileOpen(false)}
            className="text-foreground-900 text-sm font-medium py-2"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="text-foreground-900 text-sm font-medium py-2"
          >
            Contact
          </Link>
          <Link
            to="/products"
            onClick={() => setMobileOpen(false)}
            className="bg-accent-500 text-background-50 px-6 py-2.5 rounded-full text-sm font-semibold text-center hover:bg-accent-600 transition-colors cursor-pointer"
          >
            Shop Now
          </Link>
        </div>
      )}
    </nav>
  );
}
