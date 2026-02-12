import React, { useState, useEffect } from "react";
import { Users, Target, Lightbulb, Award, Clock, Shield, Star, CheckCircle, ArrowRight, TrendingUp, Heart, Phone, MapPin, Home, MessageSquare, Hammer, Wrench, Settings, Building, HardHat, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { brand } from "@/config/brand";

const About = () => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [hoveredTeam, setHoveredTeam] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const heroImages = [
    "/images/House Work7.jpeg",
    "/images/Kitchen Work 2.jpeg",
    "/images/Bathroom Work2.jpeg",
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

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mission",
      description: brand.about?.mission || "",
      color: "from-[#1e3a8a] to-[#1e40af]",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Vision",
      description: brand.about?.vision || "",
      color: "from-[#fbbf24] to-[#f59e0b]",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Values",
      description: brand.about?.values || "",
      color: "from-[#1e3a8a] to-[#1e40af]",
    },
  ];

  const stats = [
    { number: "+50", label: "Projects Completed", icon: <Home className="h-6 w-6" />, color: "text-[#fbbf24]" },
    { number: "15+", label: "Years Experience", icon: <Award className="h-6 w-6" />, color: "text-[#fbbf24]" },
    { number: "98%", label: "Satisfaction Rate", icon: <Star className="h-6 w-6" />, color: "text-[#fbbf24]" },
    { number: "4.9", label: "Customer Rating", icon: <Star className="h-6 w-6" />, color: "text-[#fbbf24]" },
  ];

  const team = brand.team || [];

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
              alt={`About ${index + 1}`}
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

        {/* Floating About Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[Users, Award, Star, Target].map((Icon, index) => {
            const animations = [
              "animate-float-swap",
              "animate-float-swap-2",
              "animate-float-swap-3",
              "animate-float-swap-4"
            ];
            return (
              <div
                key={index}
                className={`absolute top-1/2 left-1/2 ${animations[index]}`}
                style={{
                  animationDelay: `${index * 3.75}s`,
                  animationDuration: `${15 + index * 2}s`
                }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border-2 border-[#fbbf24]/30 hover:border-[#fbbf24] transition-all group cursor-pointer">
                  <Icon className="h-8 w-8 text-white group-hover:text-[#fbbf24] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fade-in-up">
              <div className="inline-block">
                <span className="bg-[#fbbf24] text-[#1e3a8a] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide animate-pulse-glow-yellow shadow-lg">
                  About Us
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {brand.about?.heroTitle || "About A&K Development"}
                <br />
                <span className="text-[#fbbf24] relative inline-block">
                  Excellence
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#fbbf24]/30 -z-10 transform rotate-[-2deg]"></div>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light">
                {brand.about?.heroSubtitle || "Transforming homes with excellence, integrity, and craftsmanship."}
              </p>
            </div>
            <div className="hidden lg:block relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#fbbf24]/30">
                {heroImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`About ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                      }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/80 via-[#1e3a8a]/20 to-transparent"></div>
              </div>
              {/* Image Indicators */}
              <div className="flex justify-center gap-2 mt-4">
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
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Floating Story Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-particle-float"
              style={{
                left: `${(i * 8.33) % 100}%`,
                top: `${(i * 10) % 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${9 + (i % 4) * 1.5}s`
              }}
            >
              <div className="text-[#1e3a8a]/10">
                {(() => {
                  const IconComponent = [Users, Award, Star, Target, Lightbulb, Heart, Building, HardHat, Hammer, Wrench, Settings, Sparkles][i % 12];
                  return IconComponent ? <IconComponent className={`h-6 w-6 ${i % 3 === 0 ? 'animate-tool-rotate' : i % 3 === 1 ? 'animate-sparkle' : 'animate-particle-float'}`} /> : null;
                })()}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-[#fbbf24] animate-sparkle" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a]">
                {brand.about?.storyTitle || "Our Story"}
              </h2>
              <Sparkles className="h-8 w-8 text-[#fbbf24] animate-sparkle" style={{ animationDelay: "0.5s" }} />
            </div>
            <div className="w-24 h-1 bg-[#fbbf24] mx-auto relative">
              <div className="absolute inset-0 bg-[#fbbf24] animate-pulse-glow-yellow"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-700">
              <p className="leading-relaxed">
                {brand.about?.storyP1 || ""}
              </p>
              <p className="leading-relaxed">
                {brand.about?.storyP2 || ""}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/images/Kitchen Work 2.jpeg", alt: "Our work" },
                { src: "/images/Bathroom Work2.jpeg", alt: "Our team" },
                { src: "/images/Logo.jpg", alt: "A&K Development Logo" },
                { src: "/images/Living Room.jpeg", alt: "Our projects" }
              ].map((img, idx) => (
                <div
                  key={idx}
                  className={`relative h-64 rounded-xl overflow-hidden shadow-lg group/image animate-fade-in-up ${idx === 1 || idx === 3 ? 'mt-8' : ''}`}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/60 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                  {/* Sparkle Effect */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-[#fbbf24] rounded-full animate-sparkle opacity-0 group-hover/image:opacity-100 transition-opacity"></div>
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover/image:opacity-100 transition-opacity">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-[#fbbf24]/30 animate-pulse-ring"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all animate-fade-in-up group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#fbbf24]/0 via-[#fbbf24]/10 to-[#fbbf24]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className={`${stat.color} bg-white/20 p-3 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative`}>
                      {stat.icon}
                      <div className="absolute inset-0 rounded-full bg-[#fbbf24] opacity-0 group-hover:opacity-50 animate-pulse-ring"></div>
                    </div>
                  </div>
                  <div className="text-5xl font-bold text-[#fbbf24] mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {stat.number}
                  </div>
                  <div className="text-white text-lg font-semibold group-hover:text-[#fbbf24] transition-colors">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Floating Values Particles */}
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
              <div className="text-[#1e3a8a]/10">
                {(() => {
                  const IconComponent = [Target, Lightbulb, Award, Heart, Star, CheckCircle, Users, Building, HardHat, Hammer, Wrench, Sparkles][i % 12];
                  return IconComponent ? <IconComponent className={`h-6 w-6 ${i % 3 === 0 ? 'animate-tool-rotate' : i % 3 === 1 ? 'animate-sparkle' : 'animate-hammer-hit'}`} /> : null;
                })()}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Award className="h-8 w-8 text-[#fbbf24] animate-sparkle" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a]">
                Our Foundation
              </h2>
              <Award className="h-8 w-8 text-[#fbbf24] animate-sparkle" style={{ animationDelay: "0.5s" }} />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What drives us to deliver excellence in every project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200 hover:border-[#1e3a8a] transition-all hover:-translate-y-2 hover:shadow-xl bg-white group relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 animate-shimmer"></div>
                </div>

                {/* Pulse Ring */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-[#fbbf24]/30 animate-pulse-ring"></div>
                  </div>
                </div>

                <CardContent className="p-8 text-center relative z-10">
                  <div className={`bg-gradient-to-br ${value.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative`}>
                    {value.icon}
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-30 animate-pulse-ring"></div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#fbbf24] rounded-full animate-sparkle opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 group-hover:text-[#fbbf24] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-[#1e3a8a] group-hover:font-medium transition-all">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {team.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
                Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the professionals behind A&K Development
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-200 hover:border-[#1e3a8a] transition-all hover:-translate-y-2 hover:shadow-xl bg-white group relative overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onMouseEnter={() => setHoveredTeam(index)}
                  onMouseLeave={() => setHoveredTeam(null)}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 animate-shimmer"></div>
                  </div>

                  {/* Pulse Ring */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-[#fbbf24]/30 animate-pulse-ring"></div>
                    </div>
                  </div>

                  <CardContent className="p-8 text-center relative z-10">
                    <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative">
                      <Users className="h-12 w-12" />
                      <div className="absolute inset-0 rounded-full bg-[#fbbf24] opacity-0 group-hover:opacity-30 animate-pulse-ring"></div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#fbbf24] rounded-full animate-sparkle opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2 group-hover:text-[#fbbf24] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[#fbbf24] font-semibold mb-4 group-hover:text-[#1e3a8a] transition-colors">
                      {member.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed group-hover:text-[#1e3a8a] group-hover:font-medium transition-all">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#fbbf24]/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your home improvement project today
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

export default About;
