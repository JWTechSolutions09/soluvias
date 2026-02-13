import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Image as ImageIcon, Video, ArrowRight, X, Play, Shield, Phone, FileCheck, Award, Clock, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";

type GalleryItem = {
  id: string;
  title: string;
  description?: string;
  category: string;
  status?: "Completed" | "In Progress" | string;
  client?: string;
  year?: string;
  link?: string;
  highlights?: string[];
  image?: string;
  type?: "image" | "video";
};

const Projects = () => {
  const categories = brand.galleryCategories || ["Todos"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string>("");

  // Proyectos con imágenes reales de la galería
  const allItems: GalleryItem[] = [
    {
      id: "postes-delimitadores",
      title: "Postes Delimitadores",
      category: "Señalización Vertical",
      status: "Completado",
      year: "2024",
      image: "/gallery/Postes Delimitadores.jpeg",
      type: "image",
    },
    {
      id: "traffic-signal",
      title: "Señal de Tráfico",
      category: "Señalización Vertical",
      status: "Completado",
      year: "2024",
      image: "/gallery/Traffic Signal.jpeg",
      type: "image",
    },
    {
      id: "pintura-termoplastica",
      title: "Pintura Termoplástica",
      category: "Pintura Termoplástica",
      status: "Completado",
      year: "2024",
      image: "/gallery/Pintura Termoplastica.jpeg",
      type: "image",
    },
    {
      id: "barril-delimitador",
      title: "Barril Delimitador",
      category: "Dispositivos de Seguridad",
      status: "Completado",
      year: "2024",
      image: "/gallery/Barril Delimitador.jpeg",
      type: "image",
    },
    {
      id: "conos",
      title: "Conos de Seguridad",
      category: "Dispositivos de Seguridad",
      status: "Completado",
      year: "2024",
      image: "/gallery/Conos.jpeg",
      type: "image",
    },
    {
      id: "esquineros",
      title: "Esquineros",
      category: "Dispositivos de Seguridad",
      status: "Completado",
      year: "2024",
      image: "/gallery/Esquineros.jpeg",
      type: "image",
    },
    {
      id: "muro-reductor",
      title: "Muro Reductor",
      category: "Dispositivos de Seguridad",
      status: "Completado",
      year: "2024",
      image: "/gallery/Muro Reductor.jpeg",
      type: "image",
    },
    {
      id: "paragomas",
      title: "Paragomas",
      category: "Dispositivos de Seguridad",
      status: "Completado",
      year: "2024",
      image: "/gallery/Paragomas.jpeg",
      type: "image",
    },
    {
      id: "vialetas-reflectivas",
      title: "Vialetas Reflectivas",
      category: "Dispositivos de Seguridad",
      status: "Completado",
      year: "2024",
      image: "/gallery/Vialetas Reflectivas.jpeg",
      type: "image",
    },
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === "Todos") return allItems;
    return allItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const openVideoModal = (videoPath: string) => {
    setCurrentVideo(videoPath);
    setIsVideoModalOpen(true);
  };

  const stats = [
    { number: "+100", label: "Proyectos", icon: <FileCheck className="h-6 w-6" /> },
    { number: "10+", label: "Años", icon: <Award className="h-6 w-6" /> },
    { number: "98%", label: "Satisfacción", icon: <Star className="h-6 w-6" /> },
    { number: "24/7", label: "Disponible", icon: <Clock className="h-6 w-6" /> },
  ];

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
                left: i % 2 === 0 ? '4%' : '91%',
                top: `${22 + i * 24}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${5 + i * 0.4}s`,
              }}
            >
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                <ImageIcon className="h-6 w-6 text-black" />
              </div>
            </div>
          ))}
        </div>

        {/* Contenido */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/30 px-6 py-3 rounded-full">
              <ImageIcon className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                Nuestros Proyectos
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
              <span className="block text-white mb-2">PROYECTOS</span>
              <span className="block text-yellow-400 relative">
                SOLUVIAS
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-yellow-400/20 blur-xl"></div>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Galería de nuestros proyectos de seguridad vial e infraestructura
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

      {/* Filtros */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <Filter className="h-5 w-5 text-black" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-black text-yellow-400 hover:bg-gray-900"
                    : "bg-white text-black border-black hover:bg-yellow-400 hover:text-black"
                } font-bold transition-all hover:scale-110`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group relative overflow-hidden border-2 border-gray-200 hover:border-yellow-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-white cursor-pointer"
                onClick={() => {
                  if (item.type === "video") {
                    openVideoModal(item.image || "");
                  } else {
                    setSelectedItem(item);
                  }
                }}
              >
                <div className="h-2 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <div className="aspect-square relative overflow-hidden">
                  {item.type === "video" ? (
                    <div className="relative w-full h-full bg-gradient-to-br from-black to-gray-800 flex items-center justify-center">
                      <div className="bg-yellow-400 rounded-full p-6 group-hover:scale-110 transition-transform">
                        <Play className="h-12 w-12 text-black" fill="currentColor" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                        <Video className="h-3 w-3" />
                        Video
                      </div>
                    </div>
                  ) : (
                    <>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 left-4 right-4">
                          <Badge className="bg-yellow-400 text-black">{item.category}</Badge>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-black text-sm">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No se encontraron proyectos en esta categoría</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal de Imagen */}
      {selectedItem && selectedItem.type === "image" && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-yellow-400 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent p-6 rounded-b-lg">
              <div className="flex flex-col gap-3">
                <Badge className="bg-yellow-400 text-black w-fit">{selectedItem.category}</Badge>
                <h3 className="text-2xl font-black text-white">{selectedItem.title}</h3>
                {selectedItem.status && (
                  <p className="text-gray-300 text-sm">Estado: {selectedItem.status}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Video */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-yellow-400 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="w-full h-96 bg-gradient-to-br from-black to-gray-800 flex items-center justify-center rounded-lg">
              <p className="text-white">Video no disponible</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-yellow-400 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
            ¿QUIERES VER MÁS?
          </h2>
          <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto">
            Contáctenos para conocer más sobre nuestros proyectos
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

export default Projects;
