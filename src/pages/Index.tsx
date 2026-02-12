import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Star,
  CheckCircle,
  Hammer,
  Home,
  Paintbrush,
  Trash2,
  Wrench,
  Sparkles,
  Award,
  Users,
  Clock,
  MapPin,
  Play,
  Settings,
  Building,
  HardHat,
  Sparkles as SparklesIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const heroImages = [
    "/images/Kitchen Work 2.jpeg",
    "/images/Bathroom Work.jpeg",
    "/images/Living Room.jpeg",
    "/images/House Work2.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Home Improvement",
      description: "Complete home renovation and improvement services to transform your living space.",
      icon: <Home className="h-8 w-8" />,
      image: "/images/House Work7.jpeg",
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Kitchen Remodeling",
      description: "Transform your kitchen with custom designs, modern appliances, and quality craftsmanship.",
      icon: <Wrench className="h-8 w-8" />,
      image: "/images/Kitchen Work 2.jpeg",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Bathroom Remodeling",
      description: "Create a luxurious bathroom retreat with premium fixtures and elegant finishes.",
      icon: <Sparkles className="h-8 w-8" />,
      image: "/images/Bathroom Work2.jpeg",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Window Replacement",
      description: "Energy-efficient windows that enhance comfort and reduce utility costs.",
      icon: <Home className="h-8 w-8" />,
      image: "/images/House Work2.jpeg",
      color: "from-yellow-500 to-yellow-700",
    },
    {
      title: "Painting Services",
      description: "Professional interior and exterior painting to refresh and protect your home.",
      icon: <Paintbrush className="h-8 w-8" />,
      image: "/images/Living Room.jpeg",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Junk Removal",
      description: "Fast and efficient junk removal services to clear your space quickly.",
      icon: <Trash2 className="h-8 w-8" />,
      image: "/images/Junk Removal.jpeg",
      color: "from-yellow-500 to-yellow-700",
    },
  ];

  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Licensed & Insured",
      description: "Fully licensed and insured professionals you can trust",
      number: "15+",
      label: "Years Experience",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Skilled craftsmen with years of experience",
      number: "+50",
      label: "Projects Completed",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Timely Completion",
      description: "We respect your time and deliver on schedule",
      number: "98%",
      label: "On Time",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Quality Guaranteed",
      description: "Satisfaction guaranteed on all our work",
      number: "4.9",
      label: "Rating",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Boston, MA",
      text: "A&K Development transformed our kitchen completely. The attention to detail and quality of work was outstanding. Highly recommend!",
      rating: 5,
      image: "/images/Kitchen Work 2.jpeg",
    },
    {
      name: "Michael R.",
      location: "Boston, MA",
      text: "Professional bathroom remodel from start to finish. The team was clean, efficient, and the results exceeded our expectations.",
      rating: 5,
      image: "/images/Bathroom Work.jpeg",
    },
    {
      name: "Jennifer L.",
      location: "Boston, MA",
      text: "We used A&K for window replacement and painting. Great service, fair pricing, and beautiful results. Will definitely use them again!",
      rating: 5,
      image: "/images/Living Room.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Unique Design */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-gradient-shift"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#fbbf24]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fbbf24]/5 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="bg-[#fbbf24] text-[#1e3a8a] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide animate-pulse-glow-yellow">
                    Your Home Solution
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Transform Your
                  <br />
                  <span className="text-[#fbbf24] relative inline-block">
                    Home Today
                    <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#fbbf24]/30 -z-10 transform rotate-[-2deg]"></div>
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 font-light max-w-lg">
                  Professional home improvement services in Boston, MA
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
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

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-[#fbbf24]" />
                  <span className="text-white">Boston, MA</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Clock className="h-5 w-5 text-[#fbbf24]" />
                  <span className="text-white">Available 24/7</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image Carousel */}
            <div className="hidden lg:block relative">
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#fbbf24]/30">
                <div className="absolute inset-0">
                  {heroImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Home improvement ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/80 via-[#1e3a8a]/20 to-transparent"></div>
                </div>

                {/* Video Thumbnail Overlay - Temporarily disabled due to file size limits */}
                {/* <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:bg-white transition-all group"
                    onClick={() => setIsVideoPlaying(true)}>
                    <div className="bg-[#1e3a8a] rounded-full p-3 group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-[#fbbf24]" fill="currentColor" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1e3a8a]">Watch Our Work</p>
                      <p className="text-sm text-gray-600">See our projects in action</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal - Temporarily disabled due to file size limits */}
      {/* {isVideoPlaying && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setIsVideoPlaying(false)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-[#fbbf24] transition-colors"
            >
              ✕
            </button>
            <video
              src="/images/video 1.mp4"
              controls
              autoPlay
              className="w-full rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )} */}

      {/* Services Grid Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Floating Construction Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-particle-float"
              style={{
                left: `${(i * 8.33) % 100}%`,
                top: `${(i * 7) % 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${8 + (i % 3) * 2}s`
              }}
            >
              {(() => {
                const IconComponent = [Hammer, Wrench, Settings, Building, HardHat][i % 5];
                return IconComponent ? (
                  <div className="text-[#fbbf24]/20">
                    <IconComponent className="h-6 w-6 animate-tool-rotate" />
                  </div>
                ) : null;
              })()}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <SparklesIcon className="h-8 w-8 text-[#fbbf24] animate-sparkle inline-block mr-2" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] inline-block">
                Our Services
              </h2>
              <SparklesIcon className="h-8 w-8 text-[#fbbf24] animate-sparkle inline-block ml-2" style={{ animationDelay: "0.5s" }} />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive home improvement solutions tailored to your needs
            </p>
            <div className="w-24 h-1 bg-[#fbbf24] mx-auto mt-4 relative">
              <div className="absolute inset-0 bg-[#fbbf24] animate-pulse-glow-yellow"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 border-gray-200 hover:border-[#1e3a8a] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-white animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Pulse Ring Effect on Hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-[#fbbf24]/30 animate-pulse-ring"></div>
                  </div>
                </div>

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 animate-shimmer"></div>
                  </div>

                  <div className="absolute top-4 right-4 bg-[#fbbf24] text-[#1e3a8a] p-3 rounded-full shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative">
                    {service.icon}
                    {/* Sparkle Effect */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-sparkle"></div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to="/servicios"
                    className="text-[#1e3a8a] font-semibold hover:text-[#fbbf24] transition-colors flex items-center gap-2 group/link"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#1e3a8a] relative overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-gradient-shift"></div>
        </div>

        {/* Floating Construction Tools */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-particle-float"
              style={{
                left: `${(i * 12.5) % 100}%`,
                top: `${(i * 15) % 100}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${10 + (i % 4) * 2}s`
              }}
            >
              <div className="text-[#fbbf24]/15">
                {(() => {
                  const IconComponent = [Hammer, Wrench, Settings, Building, HardHat, Award, Star, CheckCircle][i % 8];
                  return IconComponent ? <IconComponent className={`h-8 w-8 ${i % 2 === 0 ? 'animate-tool-rotate' : 'animate-hammer-hit'}`} /> : null;
                })()}
              </div>
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose A&K Development
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Excellence in every project, satisfaction in every home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all border-l-4 border-[#fbbf24] animate-fade-in-up group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#fbbf24]/0 via-[#fbbf24]/10 to-[#fbbf24]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  <div className="bg-[#fbbf24] w-14 h-14 rounded-xl flex items-center justify-center text-[#1e3a8a] mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative">
                    {feature.icon}
                    {/* Pulse Ring */}
                    <div className="absolute inset-0 rounded-xl bg-[#fbbf24] opacity-0 group-hover:opacity-50 animate-pulse-ring"></div>
                  </div>
                  <div className="text-4xl font-bold text-[#fbbf24] mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {feature.number}
                  </div>
                  <div className="text-white/80 text-sm mb-3">{feature.label}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#fbbf24] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100 text-sm group-hover:text-white transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-particle-float"
              style={{
                left: `${(i * 16.66) % 100}%`,
                top: `${(i * 20) % 100}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${9 + (i % 3) * 1.5}s`
              }}
            >
              <Star className="h-5 w-5 text-[#fbbf24]/20 animate-sparkle" style={{ animationDelay: `${i * 0.3}s` }} />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Star className="h-8 w-8 text-[#fbbf24] animate-sparkle" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a]">
                What Our Customers Say
              </h2>
              <Star className="h-8 w-8 text-[#fbbf24] animate-sparkle" style={{ animationDelay: "0.5s" }} />
            </div>
            <p className="text-xl text-gray-600">
              Trusted by homeowners across Florida and Massachusetts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200 hover:border-[#1e3a8a] hover:shadow-xl transition-all bg-white group relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 animate-shimmer"></div>
                </div>

                <CardContent className="p-8 relative z-10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#fbbf24] text-[#fbbf24] group-hover:scale-110 transition-transform"
                        style={{
                          transitionDelay: `${i * 0.05}s`,
                          animation: i === 0 ? 'sparkle 2s ease-in-out infinite' : 'none'
                        }}
                      />
                    ))}
                  </div>
                  <div className="h-32 w-full mb-4 rounded-lg overflow-hidden relative group/image">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <p className="text-gray-700 mb-6 italic group-hover:text-[#1e3a8a] transition-colors">
                    "{testimonial.text}"
                  </p>
                  <div className="group-hover:translate-x-2 transition-transform duration-300">
                    <p className="font-bold text-[#1e3a8a]">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-gradient-shift"></div>
        </div>

        {/* Floating Construction Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-particle-float"
              style={{
                left: `${(i * 10) % 100}%`,
                top: `${(i * 12) % 100}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${10 + (i % 4) * 2}s`
              }}
            >
              <div className="text-[#fbbf24]/20">
                {(() => {
                  const IconComponent = [Hammer, Wrench, Settings, Building, HardHat, Award, Star, CheckCircle, Home, Sparkles][i % 10];
                  return IconComponent ? <IconComponent className={`h-6 w-6 ${i % 3 === 0 ? 'animate-tool-rotate' : i % 3 === 1 ? 'animate-hammer-hit' : 'animate-sparkle'}`} /> : null;
                })()}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-20 right-20 w-64 h-64 bg-[#fbbf24]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#fbbf24]/20 rounded-full blur-3xl animate-bounce-slow"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule ur visit today. Let's bring your vision to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#fbbf24] text-[#1e3a8a] hover:bg-[#f59e0b] text-lg px-10 py-6 font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-pulse-glow-yellow"
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

export default Index;
