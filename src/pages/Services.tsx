import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Home, Wrench, Paintbrush, Trash2, Sparkles, Phone, Award, Clock, Users, Star, Settings, Building, HardHat, Hammer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { brand } from "@/config/brand";

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const services = brand.serviceCards || [];

  const heroImages = [
    "/images/Kitchen Work 2.jpeg",
    "/images/Bathroom Work2.jpeg",
    "/images/House Work7.jpeg",
    "/images/Living Room.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const serviceIcons: Record<string, JSX.Element> = {
    "Kitchen Remodeling": <Wrench className="h-8 w-8" />,
    "Bathroom Remodeling": <Sparkles className="h-8 w-8" />,
    "Window Replacement": <Home className="h-8 w-8" />,
    "Painting Services": <Paintbrush className="h-8 w-8" />,
    "Home Improvement": <Home className="h-8 w-8" />,
    "Junk Removal": <Trash2 className="h-8 w-8" />,
  };

  const serviceImages: Record<string, string> = {
    "Kitchen Remodeling": "/images/Kitchen Work 2.jpeg",
    "Bathroom Remodeling": "/images/Bathroom Work2.jpeg",
    "Window Replacement": "/images/House Work2.jpeg",
    "Painting Services": "/images/Living Room.jpeg",
    "Home Improvement": "/images/House Work7.jpeg",
    "Junk Removal": "/images/Junk Removal.jpeg",
  };

  const processSteps = brand.processSteps || [];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] overflow-hidden"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
      >
        {/* Animated Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Service ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-30" : "opacity-0"
                }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/90 via-[#1e3a8a]/80 to-[#1e40af]/90"></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-gradient-shift"></div>
        </div>

        {/* Floating Orbs */}
        <div
          className="absolute top-20 right-20 w-96 h-96 bg-[#fbbf24]/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${(mousePosition.x - 500) * 0.05}px, ${(mousePosition.y - 300) * 0.05}px)`,
            transition: "transform 0.3s ease-out"
          }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-bounce-slow"
          style={{
            transform: `translate(${(mousePosition.x - 500) * -0.03}px, ${(mousePosition.y - 300) * -0.03}px)`,
            transition: "transform 0.3s ease-out"
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#fbbf24]/5 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(calc(-50% + ${(mousePosition.x - 500) * 0.02}px), calc(-50% + ${(mousePosition.y - 300) * 0.02}px))`,
            transition: "transform 0.3s ease-out"
          }}
        ></div>

        {/* Floating Service Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {services.slice(0, 6).map((service, index) => {
            const animations = [
              "animate-float-swap",
              "animate-float-swap-2",
              "animate-float-swap-3",
              "animate-float-swap-4",
              "animate-float-orbit",
              "animate-float-orbit-reverse"
            ];
            return (
              <div
                key={index}
                className={`absolute top-1/2 left-1/2 ${animations[index % animations.length]}`}
                style={{
                  animationDelay: `${index * 2.5}s`,
                  animationDuration: `${15 + index * 2}s`
                }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border-2 border-[#fbbf24]/30 hover:border-[#fbbf24] transition-all group cursor-pointer">
                  {serviceIcons[service.title] || <Home className="h-8 w-8 text-white group-hover:text-[#fbbf24] transition-colors" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-block mb-6 animate-fade-in-up">
            <span className="bg-[#fbbf24] text-[#1e3a8a] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide animate-pulse-glow-yellow shadow-lg">
              Our Services
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Transform Your
            <br />
            <span className="text-[#fbbf24] relative inline-block">
              Home Today
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#fbbf24]/30 -z-10 transform rotate-[-2deg]"></div>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Comprehensive home improvement solutions for every need
          </p>
          <div className="w-24 h-1 bg-[#fbbf24] mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}></div>

          {/* Interactive CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              asChild
              size="lg"
              className="bg-[#fbbf24] text-[#1e3a8a] hover:bg-[#f59e0b] text-lg px-8 py-6 font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-pulse-glow-yellow"
            >
              <a href={`tel:${brand.phoneE164}`} className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                CALL {brand.phoneDisplay}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-2 border-white text-lg px-8 py-6 font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <Link to="/contacto" className="flex items-center">
                Schedule ur visit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Image Indicators */}
          <div className="flex justify-center gap-2 mt-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? "w-8 bg-[#fbbf24]" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Floating Construction Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-particle-float"
              style={{
                left: `${(i * 6.66) % 100}%`,
                top: `${(i * 8) % 100}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${8 + (i % 4) * 1.5}s`
              }}
            >
              <div className="text-[#1e3a8a]/10">
                {(() => {
                  const IconComponent = [Hammer, Wrench, Settings, Building, HardHat, Award, Star, CheckCircle, Home, Paintbrush, Sparkles, Phone, Clock, Users, Trash2][i % 15];
                  return IconComponent ? <IconComponent className={`h-5 w-5 ${i % 3 === 0 ? 'animate-tool-rotate' : i % 3 === 1 ? 'animate-hammer-hit' : 'animate-sparkle'}`} /> : null;
                })()}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 border-gray-200 hover:border-[#1e3a8a] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-white animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Pulse Ring Effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-[#fbbf24]/30 animate-pulse-ring"></div>
                  </div>
                </div>

                <CardHeader className="relative h-48 p-0 overflow-hidden z-10">
                  <img
                    src={serviceImages[service.title] || "/images/House Work7.jpeg"}
                    alt={service.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[#1e3a8a]/70 via-[#1e3a8a]/65 to-[#1e40af]/60"></div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 animate-shimmer"></div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`transform transition-all duration-500 relative ${hoveredService === index ? 'scale-125 rotate-12' : 'scale-100'
                      }`}>
                      {serviceIcons[service.title] || <Home className="h-16 w-16 text-white" />}
                      {/* Sparkle around icon */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#fbbf24] rounded-full animate-sparkle opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#fbbf24] rounded-full animate-sparkle opacity-0 group-hover:opacity-100 transition-opacity" style={{ animationDelay: "0.3s" }}></div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#fbbf24] text-[#1e3a8a] px-3 py-1 rounded-full text-xs font-bold group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-20">
                    {service.availability}
                    <div className="absolute inset-0 rounded-full bg-[#fbbf24] opacity-0 group-hover:opacity-50 animate-pulse-ring"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#1e3a8a] via-[#1e3a8a]/80 to-transparent"></div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl font-bold text-[#1e3a8a] mb-3">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features?.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm group/feature"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <CheckCircle className="h-4 w-4 text-[#fbbf24] flex-shrink-0 group-hover/feature:scale-110 group-hover/feature:rotate-12 transition-all duration-300" />
                        <span className="text-gray-700 group-hover/feature:text-[#1e3a8a] group-hover/feature:font-semibold transition-all">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-semibold group/btn relative overflow-hidden"
                  >
                    <Link to="/contacto" className="flex items-center justify-center relative z-10">
                      <span className="absolute inset-0 bg-gradient-to-r from-[#fbbf24]/0 via-[#fbbf24]/20 to-[#fbbf24]/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></span>
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#1e3a8a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-gradient-shift"></div>
        </div>

        {/* Floating Process Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-particle-float"
              style={{
                left: `${(i * 8.33) % 100}%`,
                top: `${(i * 10) % 100}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${9 + (i % 4) * 1.5}s`
              }}
            >
              <div className="text-[#fbbf24]/15">
                {(() => {
                  const IconComponent = [CheckCircle, Award, Star, Clock, Users, Home, Wrench, Settings, Building, HardHat, Hammer, Sparkles][i % 12];
                  return IconComponent ? <IconComponent className={`h-6 w-6 ${i % 3 === 0 ? 'animate-tool-rotate' : i % 3 === 1 ? 'animate-sparkle' : 'animate-hammer-hit'}`} /> : null;
                })()}
              </div>
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From consultation to completion, we make it simple
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all border-l-4 border-[#fbbf24] animate-fade-in-up group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#fbbf24]/0 via-[#fbbf24]/10 to-[#fbbf24]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                <div className="absolute -top-4 -left-4 bg-[#fbbf24] text-[#1e3a8a] w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10">
                  {step.step}
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 rounded-full bg-[#fbbf24] opacity-0 group-hover:opacity-50 animate-pulse-ring"></div>
                  {/* Sparkle */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-sparkle opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="mt-4 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#fbbf24] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-blue-100 text-sm group-hover:text-white transition-colors">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#fbbf24] group-hover:w-12 transition-all duration-300 relative z-10">
                    <ArrowRight className="absolute -right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#fbbf24] opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
              Why Choose A&K Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Excellence in every project, satisfaction in every home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Licensed & Insured", desc: "Fully licensed and insured professionals" },
              { icon: Users, title: "Expert Team", desc: "Skilled craftsmen with years of experience" },
              { icon: Clock, title: "On Time", desc: "We respect your time and deliver on schedule" },
              { icon: Star, title: "Quality Guaranteed", desc: "Satisfaction guaranteed on all our work" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-xl transition-all group relative overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 animate-shimmer"></div>
                </div>

                <div className="bg-[#1e3a8a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative">
                  <item.icon className="h-8 w-8 text-[#fbbf24]" />
                  <div className="absolute inset-0 rounded-full bg-[#fbbf24] opacity-0 group-hover:opacity-30 animate-pulse-ring"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#fbbf24] rounded-full animate-sparkle opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2 group-hover:text-[#fbbf24] transition-colors relative z-10">{item.title}</h3>
                <p className="text-gray-600 group-hover:text-[#1e3a8a] group-hover:font-semibold transition-all relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#fbbf24]/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to schedule ur visit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#fbbf24] text-[#1e3a8a] hover:bg-[#f59e0b] text-lg px-10 py-6 font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <a href={`tel:${brand.phoneE164}`} className="flex items-center justify-center">
                <Phone className="mr-2 h-6 w-6" />
                CALL {brand.phoneDisplay}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-2 border-white text-lg px-10 py-6 font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <Link to="/contacto" className="flex items-center justify-center">
                Schedule ur visit
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
