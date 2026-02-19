import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Our Customers", href: "#customers" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ When route changes, if URL has hash, scroll to it
  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    // small delay so Home sections mount first
    const t = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);

    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const onHome = location.pathname === "/";

    if (onHome) {
      // ✅ same-page scroll (homepage)
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // ✅ other pages → go to home with hash
      navigate("/" + href);
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-[rgba(11,11,13,0.9)] backdrop-blur-md border-b border-[rgba(244,244,245,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-[4vw] py-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/duke.png"
              alt="Duke Sewing Logo"
              className="
                h-7
                md:h-8
                lg:h-9
                w-auto
                transition
                duration-300
                hover:opacity-80
                hover:scale-105
              "
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#A1A1AA] text-sm hover:text-[#F4F4F5] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#F4F4F5] p-2"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[99] bg-[#0B0B0D] transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#F4F4F5] text-2xl font-display font-bold uppercase tracking-tight"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
