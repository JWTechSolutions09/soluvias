import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight, Wrench, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/config/brand";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/nosotros" },
    { name: "Services", path: "/servicios" },
    { name: "Gallery", path: "/proyectos" }, // ✅ NUEVO
    { name: "Contact", path: "/contacto" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar-metal sticky top-0 z-50">
      <div className="max-w-7xl mx-auto pl-2 sm:pl-4 lg:pl-6 pr-4 sm:pr-6 lg:pr-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="relative">
              <Wrench className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: brand.theme.accent }} />
            </div>

            <span className="text-sm sm:text-xl font-bold text-foreground whitespace-nowrap hidden sm:inline">
              {brand.name}
            </span>
            <span className="text-sm font-bold text-foreground whitespace-nowrap sm:hidden">
              International ASCC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 ml-8">
            <div className="flex items-center space-x-2 mr-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-muted"
                      : "text-foreground hover:bg-muted/60"
                  }`}
                  style={
                    isActive(item.path)
                      ? { color: brand.theme.accent }
                      : undefined
                  }
                >
                  {/* ✅ Icono solo para Gallery (opcional) */}
                  {item.name === "Gallery" ? (
                    <span className="inline-flex items-center gap-2">
                      <ImageIcon className="h-4 w-4" />
                      {item.name}
                    </span>
                  ) : (
                    item.name
                  )}

                  {isActive(item.path) && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: brand.theme.accent }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTAs */}
            <Button asChild variant="outline" className="mr-2">
              <a href={`tel:${brand.phoneE164}`} className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                Call
              </a>
            </Button>

            <Button
              asChild
              className="text-black hover:opacity-90 transition-opacity"
              style={{ backgroundColor: brand.theme.accent }}
            >
              <Link to="/contacto" className="flex items-center">
                Schedule Your Appointment Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t bg-card">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-muted"
                      : "text-foreground hover:bg-muted/60"
                  }`}
                  style={
                    isActive(item.path)
                      ? { color: brand.theme.accent }
                      : undefined
                  }
                >
                  {item.name === "Gallery" ? (
                    <span className="inline-flex items-center gap-2">
                      <ImageIcon className="h-4 w-4" />
                      {item.name}
                    </span>
                  ) : (
                    item.name
                  )}
                </Link>
              ))}

              <Button
                asChild
                variant="outline"
                className="mt-4"
                onClick={() => setIsOpen(false)}
              >
                <a
                  href={`tel:${brand.phoneE164}`}
                  className="flex items-center justify-center"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call {brand.phoneDisplay}
                </a>
              </Button>

              <Button
                asChild
                className="text-black hover:opacity-90 transition-opacity"
                style={{ backgroundColor: brand.theme.accent }}
                onClick={() => setIsOpen(false)}
              >
                <Link to="/contacto" className="flex items-center justify-center">
                  Schedule Your Appointment Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
