import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Home, ArrowRight, Sparkles, Star, Award } from "lucide-react";

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "@/config/emailjs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

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

  useEffect(() => {
    try {
      if (emailjsConfig.publicKey && emailjsConfig.publicKey !== "YOUR_PUBLIC_KEY") {
        emailjs.init(emailjsConfig.publicKey);
      }
    } catch (error) {
      console.error("Failed to initialize EmailJS:", error);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey) {
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
            to_name: brand.name,
          },
          emailjsConfig.publicKey
        );

        toast({
          title: "Message Sent!",
          description: "We'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error("EmailJS not configured");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: brand.phoneDisplay,
      link: `tel:${brand.phoneE164}`,
      color: "from-[#1e3a8a] to-[#1e40af]",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: brand.email,
      link: `mailto:${brand.email}`,
      color: "from-[#fbbf24] to-[#f59e0b]",
    },
    {
      icon: <WhatsAppIcon className="h-6 w-6" />,
      title: "WhatsApp",
      content: brand.phoneDisplay,
      link: `https://wa.me/${brand.phoneE164.replace(/\+/g, '')}`,
      color: "from-[#25D366] to-[#128C7E]",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: brand.address,
      link: `https://maps.google.com/?q=${encodeURIComponent(brand.mapsQuery)}`,
      color: "from-[#1e3a8a] to-[#1e40af]",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      content: brand.hours?.[0] || "Mon-Fri: 8AM-6PM",
      link: "#",
      color: "from-[#fbbf24] to-[#f59e0b]",
    },
  ];

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
              alt={`Contact ${index + 1}`}
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

        {/* Floating Contact Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { Icon: Mail, name: "Mail" },
            { Icon: Phone, name: "Phone" },
            { Icon: () => <WhatsAppIcon className="h-8 w-8" />, name: "WhatsApp" },
            { Icon: MessageSquare, name: "Message" }
          ].map((item, index) => {
            const animations = [
              "animate-float-swap",
              "animate-float-swap-2",
              "animate-float-swap-3",
              "animate-float-swap-4"
            ];
            const Icon = item.Icon;
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-block mb-6 animate-fade-in-up">
            <span className="bg-[#fbbf24] text-[#1e3a8a] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide animate-pulse-glow-yellow shadow-lg">
              Contact Us
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Get In Touch
            <br />
            <span className="text-[#fbbf24] relative inline-block">
              With Us
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#fbbf24]/30 -z-10 transform rotate-[-2deg]"></div>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {brand.contactSubtitle}
          </p>
          <div className="w-24 h-1 bg-[#fbbf24] mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}></div>

          {/* Image Indicators */}
          <div className="flex justify-center gap-2 mt-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
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

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50 -mt-10 relative z-10 overflow-hidden">
        {/* Floating Contact Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-particle-float"
              style={{
                left: `${(i * 12.5) % 100}%`,
                top: `${(i * 15) % 100}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${9 + (i % 3) * 1.5}s`
              }}
            >
              <div className="text-[#1e3a8a]/10">
                {(() => {
                  const IconComponent = [Mail, Phone, MapPin, Clock, MessageSquare, Sparkles, Star, Award][i % 8];
                  return IconComponent ? <IconComponent className={`h-5 w-5 ${i % 3 === 0 ? 'animate-sparkle' : i % 3 === 1 ? 'animate-particle-float' : 'animate-tool-rotate'}`} /> : null;
                })()}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200 hover:border-[#1e3a8a] transition-all hover:-translate-y-2 hover:shadow-xl bg-white group relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 animate-shimmer"></div>
                </div>

                <CardContent className="p-4 text-center relative z-10">
                  <div className={`bg-gradient-to-br ${info.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative`}>
                    {info.icon}
                    {/* Pulse Ring */}
                    <div className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-50 animate-pulse-ring"></div>
                    {/* Sparkle */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-sparkle opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-2 group-hover:text-[#fbbf24] transition-colors">{info.title}</h3>
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-[#1e3a8a] transition-colors block group-hover:font-semibold text-xs leading-tight px-1"
                    style={{ wordBreak: 'break-all' }}
                  >
                    {info.content}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-[#1e3a8a] font-semibold">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 border-2 border-gray-200 focus:border-[#1e3a8a]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#1e3a8a] font-semibold">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 border-2 border-gray-200 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#fbbf24]/50 transition-all hover:border-[#1e3a8a]/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-[#1e3a8a] font-semibold">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 border-2 border-gray-200 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#fbbf24]/50 transition-all hover:border-[#1e3a8a]/50"
                    placeholder="(407) 555-0123"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-[#1e3a8a] font-semibold">
                    Service Interested In
                  </Label>
                  <Input
                    id="service"
                    type="text"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="mt-2 border-2 border-gray-200 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#fbbf24]/50 transition-all hover:border-[#1e3a8a]/50"
                    placeholder="Kitchen Remodeling, Bathroom, etc."
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-[#1e3a8a] font-semibold">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 border-2 border-gray-200 focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#fbbf24]/50 transition-all hover:border-[#1e3a8a]/50 min-h-[150px]"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 relative overflow-hidden group/btn"
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 animate-shimmer"></div>
                  </div>
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </span>
                </Button>
              </form>
            </div>

            {/* Right Side - Info */}
            <div className="space-y-8">
              <Card className="border-2 border-[#fbbf24] bg-gradient-to-br from-[#fbbf24]/10 to-white group relative overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#fbbf24]/0 via-[#fbbf24]/5 to-[#fbbf24]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#1e3a8a] p-3 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative">
                      <MessageSquare className="h-6 w-6 text-[#fbbf24]" />
                      <div className="absolute inset-0 rounded-lg bg-[#fbbf24] opacity-0 group-hover:opacity-30 animate-pulse-ring"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1e3a8a] group-hover:text-[#fbbf24] transition-colors">
                      Why Contact Us?
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 group/item">
                      <CheckCircle className="h-5 w-5 text-[#fbbf24] flex-shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300" />
                      <span className="text-gray-700 group-hover/item:text-[#1e3a8a] group-hover/item:font-semibold transition-all">Schedule ur visit for consultations and estimates</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <CheckCircle className="h-5 w-5 text-[#fbbf24] flex-shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300" />
                      <span className="text-gray-700 group-hover/item:text-[#1e3a8a] group-hover/item:font-semibold transition-all">Licensed and insured professionals</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <CheckCircle className="h-5 w-5 text-[#fbbf24] flex-shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300" />
                      <span className="text-gray-700 group-hover/item:text-[#1e3a8a] group-hover/item:font-semibold transition-all">Quality workmanship guaranteed</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <CheckCircle className="h-5 w-5 text-[#fbbf24] flex-shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300" />
                      <span className="text-gray-700 group-hover/item:text-[#1e3a8a] group-hover/item:font-semibold transition-all">Serving Boston, MA</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#1e3a8a] bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2">
                    {brand.hours?.map((hour, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <Clock className="h-4 w-4 text-[#fbbf24]" />
                        <span>{hour}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-blue-100 mb-6">
                  Call us now or message us on WhatsApp for urgent home improvement needs
                </p>
                <div className="space-y-3">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-[#fbbf24] text-[#1e3a8a] hover:bg-[#f59e0b] font-bold"
                  >
                    <a href={`tel:${brand.phoneE164}`} className="flex items-center justify-center">
                      <Phone className="mr-2 h-5 w-5" />
                      CALL {brand.phoneDisplay}
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold"
                  >
                    <a
                      href={`https://wa.me/${brand.phoneE164.replace(/\+/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <WhatsAppIcon className="mr-2 h-5 w-5" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
