import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useCurrency } from "@/context/CurrencyContext";
import { scrollToSection, sectionIds } from "@/utils/scrollTo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { currency, setCurrency } = useCurrency();
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Find active section
      const sections = sectionIds.map((id) => ({
        id,
        element: document.getElementById(id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section.id);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (index: number) => {
    const sectionId = sectionIds[index];
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl md:text-2xl font-semibold text-gray-900 tracking-tight"
          >
            {t.header.brand}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {t.header.nav.map((item, index) => (
              <button
                key={item}
                onClick={() => handleNavClick(index)}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  activeSection === sectionIds[index]
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Toggle */}
            <div className="flex items-center gap-0.5 bg-gray-100 rounded-full p-0.5">
              <button
                onClick={() => setLanguage("ru", setCurrency)}
                className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all ${
                  language === "ru"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLanguage("en", setCurrency)}
                className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all ${
                  language === "en"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                EN
              </button>
            </div>

            {/* Currency Toggle */}
            <div className="flex items-center gap-0.5 bg-gray-100 rounded-full p-0.5">
              <button
                onClick={() => setCurrency("rub")}
                className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all ${
                  currency === "rub"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                ₽
              </button>
              <button
                onClick={() => setCurrency("usd")}
                className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all ${
                  currency === "usd"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                $
              </button>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="hidden md:inline-flex bg-gray-900 hover:bg-gray-800 text-white rounded-full px-5 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-all"
            >
              <a
                href="https://t.me/ansuz43"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.header.cta}
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-1">
              {t.header.nav.map((item, index) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(index)}
                  className={`px-4 py-3 text-left text-sm font-medium transition-colors rounded-lg ${
                    activeSection === sectionIds[index]
                      ? "text-gray-900 bg-gray-100"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item}
                </button>
              ))}
              <a
                href="https://t.me/ansuz43"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-3 bg-gray-900 text-white text-center text-sm font-medium rounded-full"
              >
                {t.header.cta}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
