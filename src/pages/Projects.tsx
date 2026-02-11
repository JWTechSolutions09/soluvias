import { useMemo, useState } from "react";
import { ExternalLink, Calendar, Users, Filter, Image as ImageIcon, Truck, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  beforeImage?: string;
  afterImage?: string;
};

const Projects = () => {
  const categories = brand.galleryCategories || ["All"];
  const projects = (brand.galleryProjects || []) as GalleryItem[];
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || "All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500 text-white";
      case "In Progress":
        return "bg-yellow-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const renderImageBlock = (item: GalleryItem) => {
    const isBeforeAfter = Boolean(item.beforeImage || item.afterImage);
    const isSingle = Boolean(item.image);

    if (isSingle && !isBeforeAfter) {
      return (
        <div className="relative h-64 bg-gray-200 overflow-hidden group">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-red-100 to-yellow-100">
              <Truck className="h-16 w-16 text-red-600/30" />
              <span className="text-xs text-gray-500 mt-2">IMAGE</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          {item.status && (
            <Badge className={`absolute top-4 right-4 ${getStatusColor(item.status)} shadow-lg`}>
              {item.status}
            </Badge>
          )}
          <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900 shadow-lg">
            {item.category}
          </Badge>
        </div>
      );
    }

    return (
      <div className="relative h-64 bg-gray-200 overflow-hidden group">
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="relative border-r-2 border-white overflow-hidden">
            {item.beforeImage ? (
              <img
                src={item.beforeImage}
                alt={`${item.title} - Before`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <span className="text-xs text-gray-500">BEFORE</span>
              </div>
            )}
            <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
              BEFORE
            </div>
          </div>
          <div className="relative overflow-hidden">
            {item.afterImage ? (
              <img
                src={item.afterImage}
                alt={`${item.title} - After`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <span className="text-xs text-gray-500">AFTER</span>
              </div>
            )}
            <div className="absolute bottom-3 left-3 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
              AFTER
            </div>
          </div>
        </div>
        {item.status && (
          <Badge className={`absolute top-4 right-4 ${getStatusColor(item.status)} shadow-lg`}>
            {item.status}
          </Badge>
        )}
        <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900 shadow-lg">
          {item.category}
        </Badge>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section with Images */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <img
            src="/images/Camion Luces.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-50 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: "1s" }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-5 w-5 text-red-600" />
                <span className="text-sm font-semibold text-red-600">OUR WORK</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Service Gallery
              </h1>
              <p className="text-xl text-gray-600">
                Professional towing and roadside assistance. See our fleet and service capabilities.
              </p>
            </div>
            
            {/* Hero Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-xl group animate-fade-in-up">
                <div className="aspect-square">
                  <img
                    src="/images/Camion choquecrv.jpg"
                    alt="Towing service"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-xl group animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="aspect-square">
                  <img
                    src="/images/Camion choquesedan.jpg"
                    alt="Towing service"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-xl group animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="aspect-square">
                  <img
                    src="/images/Camion lluvia.jpg"
                    alt="Towing service"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-xl group animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="aspect-square">
                  <img
                    src="/images/Camiion carretera.jpg"
                    alt="Towing service"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Filter Section */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-red-700 sticky top-20 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Filter className="h-5 w-5 text-white" />
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform ${
                  selectedCategory === category
                    ? "bg-white text-red-600 shadow-xl scale-110"
                    : "bg-white/20 text-white hover:bg-white/30 hover:scale-105"
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="py-12 bg-gradient-to-r from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Our Fleet Showcase</h3>
            <p className="text-gray-600">Professional vehicles ready to serve you</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/Camiion carretera.jpg", title: "Highway Service" },
              { src: "/images/Camion parqueado.jpg", title: "Day Service" },
              { src: "/images/Camion lluvia.jpg", title: "24/7 Available" },
              { src: "/images/Camion Luces.jpg", title: "Night Service" },
            ].map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-125"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-semibold">{img.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((item, index) => (
              <Card
                key={item.id}
                className={`border-2 transition-all duration-500 cursor-pointer overflow-hidden group ${
                  hoveredProject === item.id
                    ? "border-red-500 shadow-2xl scale-105"
                    : "border-gray-200 hover:border-red-300 hover:shadow-xl bg-white"
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(item.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {renderImageBlock(item)}

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </CardTitle>
                    {hoveredProject === item.id && (
                      <div className="bg-red-600 text-white p-2 rounded-full animate-pulse">
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                  )}
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        {item.client || "Customer Vehicle"}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.year || "—"}
                      </div>
                    </div>

                    {item.highlights?.length ? (
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-2">Highlights:</p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {item.highlights.slice(0, 3).map((h, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="h-3 w-3 mr-2 text-red-600 flex-shrink-0" />
                              {h}
                            </li>
                          ))}
                          {item.highlights.length > 3 && (
                            <li className="text-red-600 font-semibold">+{item.highlights.length - 3} more...</li>
                          )}
                        </ul>
                      </div>
                    ) : null}

                    <Button
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white transition-all transform hover:scale-105 group mt-4"
                      onClick={() => (window.location.href = "/contacto")}
                    >
                      Request Service
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Truck className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <p className="text-xl text-gray-600 font-semibold">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section - Interactive */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {(brand.galleryStats || [
              { number: "15-30", label: "Min Response Time" },
              { number: "24/7", label: "Emergency Service" },
              { number: "+100", label: "Happy Customers" },
              { number: "⭐ 4.9", label: "Customer Rating" },
            ]).map((s, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-110 hover:bg-white/20 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{s.number}</div>
                <div className="text-red-100 font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
