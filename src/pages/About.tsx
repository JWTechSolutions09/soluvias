import React from "react";
import { ArrowRight, Phone, Shield, Target, Lightbulb, Award, Users, Clock, Star, CheckCircle, FileCheck, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { brand } from "@/config/brand";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Misión",
      description: brand.about?.mission || "",
      color: "from-black to-gray-800",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Visión",
      description: brand.about?.vision || "",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Valores",
      description: brand.about?.values || "",
      color: "from-black to-gray-800",
    },
  ];

  const stats = [
    { number: "+100", label: "Proyectos", icon: <FileCheck className="h-6 w-6" /> },
    { number: "10+", label: "Años", icon: <Award className="h-6 w-6" /> },
    { number: "98%", label: "Satisfacción", icon: <Star className="h-6 w-6" /> },
    { number: "24/7", label: "Disponible", icon: <Clock className="h-6 w-6" /> },
  ];

  const team = brand.team || [];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Mismo Estilo */}
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

        {/* Señales Flotantes - Opacidad baja y en bordes */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-sign-float opacity-20"
              style={{
                left: i % 2 === 0 ? '5%' : '90%',
                top: `${25 + i * 20}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${5 + i}s`,
              }}
            >
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-black" />
              </div>
            </div>
          ))}
        </div>

        {/* Contenido Principal */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/30 px-6 py-3 rounded-full">
              <Shield className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                Acerca de Nosotros
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
              <span className="block text-white mb-2">NOSOTROS</span>
              <span className="block text-yellow-400 relative">
                SOLUVIAS
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-yellow-400/20 blur-xl"></div>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {brand.about?.heroSubtitle || "Empresa dominicana especializada en seguridad vial e infraestructura."}
            </p>

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
      </section>

      {/* Historia */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-black transform rotate-12"></div>
          <div className="absolute top-2/4 left-0 w-full h-0.5 bg-black transform -rotate-12"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-1 w-16 bg-yellow-400"></div>
              <h2 className="text-5xl md:text-6xl font-black text-black">
                NUESTRA HISTORIA
              </h2>
              <div className="h-1 w-16 bg-yellow-400"></div>
            </div>
          </div>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>{brand.about?.storyP1}</p>
            <p>{brand.about?.storyP2}</p>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-yellow-400 transform -translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              MISIÓN, <span className="text-yellow-400">VISIÓN</span> Y VALORES
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-2 border-yellow-400/20 hover:border-yellow-400 transition-all duration-500 hover:-translate-y-3"
              >
                <div className={`h-2 bg-gradient-to-r ${value.color}`}></div>
                <CardContent className="p-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 text-white shadow-lg`}>
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      {team.length > 0 && (
        <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-1 w-16 bg-yellow-400"></div>
                <h2 className="text-5xl md:text-6xl font-black text-black">
                  NUESTRO EQUIPO
                </h2>
                <div className="h-1 w-16 bg-yellow-400"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-200 hover:border-yellow-400 transition-all duration-500 hover:-translate-y-3 bg-white"
                >
                  <div className="h-2 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center text-white shadow-lg">
                      <Users className="h-12 w-12" />
                    </div>
                    <h3 className="text-2xl font-black text-black mb-2">{member.name}</h3>
                    <p className="text-yellow-400 font-bold mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-yellow-400 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
            ¿QUIERES TRABAJAR CON NOSOTROS?
          </h2>
          <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto">
            Contáctenos hoy y conozca más sobre nuestros servicios
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

export default About;
