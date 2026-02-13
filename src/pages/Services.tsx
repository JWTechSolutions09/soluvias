import React from "react";
import { ArrowRight, Phone, Navigation, Shield, Paintbrush, AlertTriangle, Gauge, Route, CheckCircle, FileCheck, Award, Clock, Star } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { brand } from "@/config/brand";

const Services = () => {
  const services = brand.serviceCards || [];

  const serviceIcons: Record<string, JSX.Element> = {
    "Señalización Vertical": <Navigation className="h-10 w-10" />,
    "Barandas Metálicas": <Shield className="h-10 w-10" />,
    "Pintura Termoplástica": <Paintbrush className="h-10 w-10" />,
    "Vialetas Reflectivas": <AlertTriangle className="h-10 w-10" />,
    "Conos de Seguridad": <Gauge className="h-10 w-10" />,
    "Dispositivos de Seguridad": <Route className="h-10 w-10" />,
  };

  // Mapeo de servicios a imágenes de la galería
  const serviceImages: Record<string, string> = {
    "Señalización Vertical": "/gallery/Postes Delimitadores.jpeg",
    "Barandas Metálicas": "/gallery/Muro Reductor.jpeg",
    "Pintura Termoplástica": "/gallery/Pintura Termoplastica.jpeg",
    "Vialetas Reflectivas": "/gallery/Vialetas Reflectivas.jpeg",
    "Conos de Seguridad": "/gallery/Conos.jpeg",
    "Dispositivos de Seguridad": "/gallery/Barril Delimitador.jpeg",
  };

  const processSteps = brand.processSteps || [];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Líneas de Carretera Animadas - Igual que Home */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-yellow-400 transform -translate-y-1/2">
            <div className="absolute left-0 top-0 w-32 h-full bg-yellow-400 animate-road-line"></div>
          </div>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-yellow-400/50 transform -translate-y-1/2 translate-y-8">
            <div className="absolute left-0 top-0 w-24 h-full bg-yellow-400/50 animate-road-line-slow"></div>
          </div>
        </div>

        {/* Iconos Flotantes - Opacidad baja, en bordes */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-sign-float opacity-20"
              style={{
                left: i % 2 === 0 ? '3%' : '92%',
                top: `${20 + i * 25}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${5 + i * 0.5}s`,
              }}
            >
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-black" />
              </div>
            </div>
          ))}
        </div>

        {/* Contenido */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/30 px-6 py-3 rounded-full">
              <Shield className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                Nuestros Servicios
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
              <span className="block text-white mb-2">SERVICIOS</span>
              <span className="block text-yellow-400 relative">
                SOLUVIAS
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-yellow-400/20 blur-xl"></div>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Soluciones integrales de seguridad vial e infraestructura
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-black transform rotate-12"></div>
          <div className="absolute top-2/4 left-0 w-full h-0.5 bg-black transform -rotate-12"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-1 w-16 bg-yellow-400"></div>
              <h2 className="text-5xl md:text-6xl font-black text-black">
                SERVICIOS DISPONIBLES
              </h2>
              <div className="h-1 w-16 bg-yellow-400"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 border-gray-200 hover:border-yellow-400 bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className={`h-2 bg-gradient-to-r ${index % 2 === 0 ? 'from-yellow-400 to-yellow-600' : 'from-black to-gray-800'}`}></div>
                
                {/* Imagen del servicio */}
                {serviceImages[service.title] && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={serviceImages[service.title]}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${index % 2 === 0 ? 'from-yellow-400 to-yellow-600' : 'from-black to-gray-800'} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 text-white shadow-lg backdrop-blur-sm bg-white/20`}>
                        {serviceIcons[service.title] || <Shield className="h-8 w-8" />}
                      </div>
                    </div>
                  </div>
                )}
                
                <CardContent className="p-8">
                  {!serviceImages[service.title] && (
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${index % 2 === 0 ? 'from-yellow-400 to-yellow-600' : 'from-black to-gray-800'} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 text-white shadow-lg`}>
                      {serviceIcons[service.title] || <Shield className="h-10 w-10" />}
                    </div>
                  )}
                  
                  <CardTitle className="text-2xl font-black text-black mb-3 group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {service.features && (
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <Link
                    to="/contacto"
                    className="inline-flex items-center gap-2 text-black font-bold hover:text-yellow-400 transition-colors group/link"
                  >
                    <span>Solicitar Cotización</span>
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-yellow-400 transform -translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              NUESTRO <span className="text-yellow-400">PROCESO</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border-2 border-yellow-400/20 hover:border-yellow-400 p-8 rounded-xl transition-all duration-500 hover:-translate-y-3 group"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 text-black font-black text-2xl group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-yellow-400 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
            ¿LISTO PARA COMENZAR?
          </h2>
          <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto">
            Contáctenos hoy y obtenga una cotización gratuita
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

export default Services;
