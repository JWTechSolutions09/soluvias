import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Star,
  CheckCircle,
  Shield,
  Navigation,
  Paintbrush,
  AlertTriangle,
  Wrench,
  Award,
  Users,
  Clock,
  MapPin,
  Zap,
  TrendingUp,
  Gauge,
  Route,
  FileCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Señalización Vertical",
      description: "Instalación profesional de señalización vertical certificada para garantizar la seguridad en carreteras.",
      icon: <Navigation className="h-10 w-10" />,
      color: "from-yellow-400 to-yellow-600",
      delay: "0s",
      image: "/gallery/Postes Delimitadores.jpeg",
    },
    {
      title: "Barandas Metálicas",
      description: "Barandas metálicas certificadas para protección y seguridad en carreteras y puentes.",
      icon: <Shield className="h-10 w-10" />,
      color: "from-black to-gray-800",
      delay: "0.1s",
      image: "/gallery/Muro Reductor.jpeg",
    },
    {
      title: "Pintura Termoplástica",
      description: "Aplicación de pintura termoplástica de alta calidad para señalización horizontal.",
      icon: <Paintbrush className="h-10 w-10" />,
      color: "from-yellow-400 to-yellow-600",
      delay: "0.2s",
      image: "/gallery/Pintura Termoplastica.jpeg",
    },
    {
      title: "Vialetas Reflectivas",
      description: "Vialetas reflectivas de alta visibilidad para mejorar la seguridad en carreteras.",
      icon: <AlertTriangle className="h-10 w-10" />,
      color: "from-black to-gray-800",
      delay: "0.3s",
      image: "/gallery/Vialetas Reflectivas.jpeg",
    },
    {
      title: "Conos de Seguridad",
      description: "Dispositivos de seguridad vial para señalización temporal en obras.",
      icon: <Gauge className="h-10 w-10" />,
      color: "from-yellow-400 to-yellow-600",
      delay: "0.4s",
      image: "/gallery/Conos.jpeg",
    },
    {
      title: "Dispositivos de Seguridad",
      description: "Solución integral de dispositivos de seguridad vial para carreteras y obras.",
      icon: <Route className="h-10 w-10" />,
      color: "from-black to-gray-800",
      delay: "0.5s",
      image: "/gallery/Barril Delimitador.jpeg",
    },
  ];

  const stats = [
    { number: "+100", label: "Proyectos", icon: <FileCheck className="h-6 w-6" /> },
    { number: "10+", label: "Años", icon: <Award className="h-6 w-6" /> },
    { number: "98%", label: "Satisfacción", icon: <Star className="h-6 w-6" /> },
    { number: "24/7", label: "Disponible", icon: <Clock className="h-6 w-6" /> },
  ];

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Certificación Nacional",
      description: "Todos nuestros productos cumplen con las normativas de seguridad vial",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instalación Rápida",
      description: "Equipos especializados para proyectos eficientes y puntuales",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Calidad Garantizada",
      description: "Materiales de primera calidad con garantía extendida",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Equipo Experto",
      description: "Profesionales certificados con años de experiencia",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Diseño Único con Líneas de Carretera */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        {/* Señales de Tráfico Flotantes - Opacidad baja, en bordes, no interfieren con texto */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-sign-float opacity-15"
              style={{
                left: i % 2 === 0 ? `${5 + (i % 3) * 2}%` : `${88 - (i % 3) * 2}%`,
                top: `${15 + (i % 3) * 28}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${5 + (i % 2)}s`,
              }}
            >
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center transform rotate-12">
                <AlertTriangle className="h-6 w-6 text-black" />
              </div>
            </div>
          ))}
        </div>

        {/* Contenido Principal - Centrado y Vertical */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Badge Superior */}
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/30 px-6 py-3 rounded-full">
              <Shield className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                Seguridad Vial Certificada
              </span>
            </div>

            {/* Título Principal - Estilo Grande y Bold */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
              <span className="block text-white mb-2">SOLUVIAS</span>
              <span className="block text-yellow-400 relative">
                SEGURIDAD
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-yellow-400/20 blur-xl"></div>
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Especialistas en señalización vertical, barandas metálicas y pintura termoplástica.
              <br />
              <span className="text-yellow-400 font-semibold">República Dominicana</span>
            </p>

            {/* CTAs - Diseño Horizontal */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-10 py-7 font-black rounded-lg shadow-2xl hover:shadow-yellow-400/50 transition-all hover:scale-105 group"
              >
                <a href={`tel:${brand.phoneE164}`} className="flex items-center gap-3">
                  <Phone className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                  <span>LLAMAR {brand.phoneDisplay}</span>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-10 py-7 font-bold rounded-lg transition-all hover:scale-105"
              >
                <Link to="/contacto" className="flex items-center gap-3">
                  <span>Solicitar Cotización</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Stats en línea */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-6 hover:bg-white/10 transition-all hover:border-yellow-400/50 group"
                >
                  <div className="text-yellow-400 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Estilo Único */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-yellow-400 text-sm font-semibold">Explorar</span>
            <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-yellow-400 rounded-full mt-2 animate-scroll-dot"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios - Diseño en Grid Asimétrico */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Patrón de Fondo - Líneas de Carretera */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-black transform rotate-12"></div>
          <div className="absolute top-2/4 left-0 w-full h-0.5 bg-black transform -rotate-12"></div>
          <div className="absolute top-3/4 left-0 w-full h-0.5 bg-black transform rotate-12"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header de Sección */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-1 w-16 bg-yellow-400"></div>
              <h2 className="text-5xl md:text-6xl font-black text-black">
                NUESTROS SERVICIOS
              </h2>
              <div className="h-1 w-16 bg-yellow-400"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluciones integrales de seguridad vial e infraestructura
            </p>
          </div>

          {/* Grid de Servicios - 3 Columnas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 border-gray-200 hover:border-yellow-400 bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                style={{ animationDelay: service.delay }}
              >
                {/* Barra Superior de Color */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                
                {/* Imagen del servicio */}
                {service.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 text-white shadow-lg backdrop-blur-sm bg-white/20`}>
                        {service.icon}
                      </div>
                    </div>
                  </div>
                )}
                
                <CardContent className="p-8">
                  {!service.image && (
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 text-white shadow-lg`}>
                      {service.icon}
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-black text-black mb-3 group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <Link
                    to="/servicios"
                    className="inline-flex items-center gap-2 text-black font-bold hover:text-yellow-400 transition-colors group/link"
                  >
                    <span>Ver más</span>
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Diseño Horizontal con Iconos Grandes */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Efecto de Líneas de Carretera en Fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-yellow-400 transform -translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              ¿POR QUÉ <span className="text-yellow-400">SOLUVIAS</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-yellow-400 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                  <div className="text-black">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Diseño Minimalista */}
      <section className="py-24 bg-gradient-to-br from-yellow-400 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
            ¿LISTO PARA COMENZAR?
          </h2>
          <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto">
            Contáctenos hoy y obtenga una cotización gratuita para su proyecto de seguridad vial
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-black text-yellow-400 hover:bg-gray-900 text-lg px-10 py-7 font-black rounded-lg shadow-2xl hover:shadow-black/50 transition-all hover:scale-105"
            >
              <a href={`tel:${brand.phoneE164}`} className="flex items-center gap-3">
                <Phone className="h-6 w-6" />
                <span>LLAMAR {brand.phoneDisplay}</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-yellow-400 text-lg px-10 py-7 font-bold rounded-lg transition-all hover:scale-105"
            >
              <Link to="/contacto" className="flex items-center gap-3">
                <span>Contactar</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
