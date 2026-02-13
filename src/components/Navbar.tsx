import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Home, Shield, Image as ImageIcon, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/config/brand";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", path: "/", icon: Home },
    { name: "Nosotros", path: "/nosotros", icon: Shield },
    { name: "Servicios", path: "/servicios", icon: Shield },
    { name: "Proyectos", path: "/proyectos", icon: ImageIcon },
    { name: "Contacto", path: "/contacto", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`navbar-ak sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-3 group hover:opacity-90 transition-opacity"
          >
            <div className="relative group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/gallery/Logo.jpeg" 
                alt="Soluvias Logo" 
                className="h-14 w-14 sm:h-16 sm:w-16 object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-black leading-tight group-hover:text-yellow-500 transition-colors">
                SOLUVIAS
              </span>
              <span className="text-xs text-yellow-500 font-semibold hidden sm:block">
                SEGURIDAD VIAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive(item.path)
                      ? "bg-black text-yellow-400 font-semibold shadow-md"
                      : "text-gray-700 hover:bg-yellow-400 hover:text-black"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-3 ml-6">
            <Button
              asChild
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2.5 font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <a href={`tel:${brand.phoneE164}`} className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                {brand.phoneDisplay}
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:bg-yellow-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t-2 border-yellow-400 animate-fade-in-up bg-white">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center gap-3 ${
                      isActive(item.path)
                        ? "bg-black text-yellow-400 font-semibold"
                        : "text-gray-700 hover:bg-yellow-400 hover:text-black"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
              <Button
                asChild
                className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black w-full py-3 font-bold shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                <a href={`tel:${brand.phoneE164}`} className="flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  {brand.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
