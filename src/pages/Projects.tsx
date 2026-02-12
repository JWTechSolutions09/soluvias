import React, { useMemo, useState, useEffect } from "react";
import { ExternalLink, Calendar, Users, Filter, Image as ImageIcon, Video, ArrowRight, CheckCircle, X, Play, Hammer, Wrench, Settings, Building, HardHat, Award, Star, Sparkles } from "lucide-react";
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
  type?: "image" | "video";
};

const Projects = () => {
  const categories = brand.galleryCategories || ["All"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  // Bathroom Work items
  const bathroomItems: GalleryItem[] = [
    { id: "bathroom-work", title: "Bathroom Work", category: "Bathroom Remodeling", status: "Completed", year: "2024", image: "/images/Bathroom Work.jpeg", type: "image" },
    { id: "bathroom-work2", title: "Bathroom Work2", category: "Bathroom Remodeling", status: "Completed", year: "2024", image: "/images/Bathroom Work2.jpeg", type: "image" },
    { id: "bathroom-work3", title: "Bathroom Work3", category: "Bathroom Remodeling", status: "Completed", year: "2024", image: "/images/Bathroom Work3.jpeg", type: "image" },
    { id: "bathroom-work4", title: "Bathroom Work4", category: "Bathroom Remodeling", status: "Completed", year: "2024", image: "/images/Bathroom Work4.jpeg", type: "image" },
    { id: "bathroom-work5", title: "Bathroom Work5", category: "Bathroom Remodeling", status: "Completed", year: "2024", image: "/images/Bathroom Work5.jpeg", type: "image" },
    { id: "bathroom-work6", title: "Bathroom Work6", category: "Bathroom Remodeling", status: "Completed", year: "2024", image: "/images/Bathroom Work6.jpeg", type: "image" },
  ];

  // House Work items
  const houseItems: GalleryItem[] = [
    { id: "house-work", title: "House Work", category: "Home Improvement", status: "Completed", year: "2024", image: "/images/House Work.jpeg", type: "image" },
    { id: "house-work2", title: "House Work2", category: "Home Improvement", status: "Completed", year: "2024", image: "/images/House Work2.jpeg", type: "image" },
    { id: "house-work3", title: "House Work3", category: "Home Improvement", status: "Completed", year: "2024", image: "/images/House Work3.jpeg", type: "image" },
    { id: "house-work4", title: "House Work4", category: "Home Improvement", status: "Completed", year: "2024", image: "/images/House Work4.jpeg", type: "image" },
    { id: "house-work5", title: "House Work5", category: "Home Improvement", status: "Completed", year: "2024", image: "/images/House Work5.jpeg", type: "image" },
    { id: "house-work6", title: "House Work6", category: "Home Improvement", status: "Completed", year: "2024", image: "/images/House Work6.jpeg", type: "image" },
    { id: "house-work7", title: "House Work7", category: "Home Improvement", status: "Completed", year: "2024", image: "/images/House Work7.jpeg", type: "image" },
    { id: "house-work8", title: "House Work8", category: "Home Improvement", status: "Completed", year: "2024", image: "/images/House Work8.jpeg", type: "image" },
    { id: "house-work9", title: "House Work9", category: "Home Improvement", status: "Completed", year: "2024", image: "/images/House Work9.jpeg", type: "image" },
    { id: "imagen-25", title: "imagen 25", category: "Home Improvement", status: "Completed", year: "2024", image: "/images/imagen 25.jpeg", type: "image" },
  ];

  // Junk Removal items
  const junkRemovalItems: GalleryItem[] = [
    { id: "junk-removal", title: "Junk Removal", category: "Junk Removal", status: "Completed", year: "2024", image: "/images/Junk Removal.jpeg", type: "image" },
    { id: "junk-removal2", title: "Junk Removal2", category: "Junk Removal", status: "Completed", year: "2024", image: "/images/Junk Removal2.jpeg", type: "image" },
  ];

  // Kitchen Work items
  const kitchenItems: GalleryItem[] = [
    { id: "kitchen-work", title: "Kitchen Work", category: "Kitchen Remodeling", status: "Completed", year: "2024", image: "/images/Kitchen Work.jpeg", type: "image" },
    { id: "kitchen-work-2", title: "Kitchen Work 2", category: "Kitchen Remodeling", status: "Completed", year: "2024", image: "/images/Kitchen Work 2.jpeg", type: "image" },
    { id: "kitchen-work2", title: "Kitchen Work2", category: "Kitchen Remodeling", status: "Completed", year: "2024", image: "/images/Kitchen Work2.jpeg", type: "image" },
    { id: "kitchen-work3", title: "Kitchen Work3", category: "Kitchen Remodeling", status: "Completed", year: "2024", image: "/images/Kitchen Work3.jpeg", type: "image" },
    { id: "kitchen-work4", title: "Kitchen Work4", category: "Kitchen Remodeling", status: "Completed", year: "2024", image: "/images/Kitchen Work4.jpeg", type: "image" },
    { id: "kitchen-work6", title: "Kitchen Work 6", category: "Kitchen Remodeling", status: "Completed", year: "2024", image: "/images/Kitchen Work 6.jpeg", type: "image" },
  ];

  // Living Room items
  const livingRoomItems: GalleryItem[] = [
    { id: "living-room", title: "Living Room", category: "Home Improvement", status: "Completed", year: "2024", image: "/images/Living Room.jpeg", type: "image" },
    { id: "living-room2", title: "Living Room2", category: "Home Improvement", status: "Completed", year: "2024", image: "/images/Living Room2.jpeg", type: "image" },
  ];

  // Video items - Temporarily disabled due to file size limits (Cloudflare Pages max 25MB per file)
  const videoItems: GalleryItem[] = [
    // { id: "video-1", title: "video 1", category: "All", status: "Completed", year: "2024", image: "/images/video 1.mp4", type: "video" },
    // { id: "video-2", title: "video 2", category: "All", status: "Completed", year: "2024", image: "/images/video 2.mp4", type: "video" },
    // { id: "video-3", title: "video 3", category: "All", status: "Completed", year: "2024", image: "/images/video 3.mp4", type: "video" },
    // { id: "video-4", title: "video 4", category: "All", status: "Completed", year: "2024", image: "/images/video 4.mp4", type: "video" },
    // { id: "video-5", title: "video 5", category: "All", status: "Completed", year: "2024", image: "/images/video 5.mp4", type: "video" },
    // { id: "video-6", title: "video 6", category: "All", status: "Completed", year: "2024", image: "/images/video 6.mp4", type: "video" },
    // { id: "video-7", title: "video 7", category: "All", status: "Completed", year: "2024", image: "/images/video 7.mp4", type: "video" },
  ];

  // Combine all items in the order shown in the image (logo removed)
  const allItems = [
    ...bathroomItems,
    ...houseItems,
    ...junkRemovalItems,
    ...kitchenItems,
    ...livingRoomItems,
    ...videoItems,
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return allItems;
    return allItems.filter(item => item.category === selectedCategory);
  }, [allItems, selectedCategory]);

  const openVideoModal = (videoPath: string) => {
    setCurrentVideo(videoPath);
    setIsVideoModalOpen(true);
  };

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
              alt={`Project ${index + 1}`}
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

        {/* Floating Gallery Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[ImageIcon, Video, Filter, CheckCircle].map((Icon, index) => {
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-block mb-6 animate-fade-in-up">
            <span className="bg-[#fbbf24] text-[#1e3a8a] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide animate-pulse-glow-yellow shadow-lg">
              Our Portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Our Projects
            <br />
            <span className="text-[#fbbf24] relative inline-block">
              Gallery
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#fbbf24]/30 -z-10 transform rotate-[-2deg]"></div>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Explore our portfolio of completed home improvement projects
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

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 shadow-sm relative overflow-hidden">
        {/* Floating Filter Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-particle-float"
              style={{
                left: `${(i * 16.66) % 100}%`,
                top: `${(i * 20) % 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${8 + (i % 3) * 1.5}s`
              }}
            >
              <Filter className="h-4 w-4 text-[#1e3a8a]/10 animate-sparkle" style={{ animationDelay: `${i * 0.2}s` }} />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <Filter className="h-5 w-5 text-[#1e3a8a] animate-tool-rotate" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${selectedCategory === category
                  ? "bg-[#1e3a8a] text-white hover:bg-[#1e40af] animate-glow-pulse"
                  : "bg-white text-[#1e3a8a] border-[#1e3a8a] hover:bg-[#fbbf24] hover:text-[#1e3a8a]"
                  } font-semibold transition-all hover:scale-110 hover:rotate-1 relative overflow-hidden group/btn`}
              >
                <span className="relative z-10">{category}</span>
                {selectedCategory === category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#fbbf24]/0 via-[#fbbf24]/20 to-[#fbbf24]/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                )}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white relative overflow-hidden">
        {/* Floating Gallery Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-particle-float"
              style={{
                left: `${(i * 5) % 100}%`,
                top: `${(i * 6) % 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${7 + (i % 5) * 1.2}s`
              }}
            >
              <div className="text-[#1e3a8a]/8">
                {(() => {
                  const IconComponent = [ImageIcon, Video, Filter, CheckCircle, Hammer, Wrench, Settings, Building, HardHat, Award, Star, Sparkles, Play, X, Calendar, Users, ExternalLink, ArrowRight, CheckCircle, ImageIcon][i % 20];
                  return IconComponent ? <IconComponent className={`h-4 w-4 ${i % 4 === 0 ? 'animate-tool-rotate' : i % 4 === 1 ? 'animate-hammer-hit' : i % 4 === 2 ? 'animate-sparkle' : 'animate-particle-float'}`} /> : null;
                })()}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="group relative overflow-hidden border-2 border-gray-200 hover:border-[#1e3a8a] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-white cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => {
                  if (item.type === "video") {
                    openVideoModal(item.image || "");
                  } else {
                    setSelectedItem(item);
                  }
                }}
              >
                {/* Pulse Ring on Hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-[#fbbf24]/30 animate-pulse-ring"></div>
                  </div>
                </div>

                <div className="aspect-square relative overflow-hidden z-10">
                  {item.type === "video" ? (
                    <div className="relative w-full h-full bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-[#fbbf24] rounded-full p-6 group-hover:scale-110 transition-transform">
                          <Play className="h-12 w-12 text-[#1e3a8a]" fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-[#1e3a8a] text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                        <Video className="h-3 w-3" />
                        Video
                      </div>
                    </div>
                  ) : (
                    <>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 animate-shimmer"></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          {item.category && (
                            <Badge className="bg-[#fbbf24] text-[#1e3a8a] group-hover:scale-110 transition-transform duration-300 relative">
                              {item.category}
                              {/* Sparkle */}
                              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-sparkle opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </Badge>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No projects found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#1e3a8a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(brand.galleryStats || []).map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl font-bold text-[#fbbf24] mb-2">{stat.number}</div>
                <div className="text-white text-lg font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedItem && selectedItem.type === "image" && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-[#fbbf24] transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              {selectedItem.category && (
                <Badge className="bg-[#fbbf24] text-[#1e3a8a]">{selectedItem.category}</Badge>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-[#fbbf24] transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <video
              src={currentVideo}
              controls
              autoPlay
              className="w-full rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
