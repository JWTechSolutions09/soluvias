import { useMemo, useState } from "react";
import { ExternalLink, Calendar, Users, Filter, Image as ImageIcon } from "lucide-react";
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

  // images
  image?: string;          // ✅ single
  beforeImage?: string;    // ✅ before/after
  afterImage?: string;     // ✅ before/after
};

const Projects = () => {
  const categories = brand.galleryCategories || ["All"];
  const projects = (brand.galleryProjects || []) as GalleryItem[];

  const [selectedCategory, setSelectedCategory] = useState(categories[0] || "All");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "Completed":
        return "bg-accent text-accent-foreground";
      case "In Progress":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-foreground";
    }
  };

  const renderImageBlock = (item: GalleryItem) => {
    const isBeforeAfter = Boolean(item.beforeImage || item.afterImage);
    const isSingle = Boolean(item.image);

    // ✅ SINGLE IMAGE
    if (isSingle && !isBeforeAfter) {
      return (
        <div className="relative h-52 bg-muted overflow-hidden">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <ImageIcon className="h-10 w-10 text-muted-foreground" />
              <span className="text-xs text-muted-foreground mt-2">IMAGE</span>
            </div>
          )}

          {/* overlays */}
          {item.status ? (
            <Badge className={`absolute top-4 right-4 ${getStatusColor(item.status)}`}>
              {item.status}
            </Badge>
          ) : null}

          <Badge className="absolute top-4 left-4" variant="secondary">
            {item.category}
          </Badge>

          <span className="absolute bottom-3 left-3 text-[11px] px-2 py-1 rounded bg-black/70 text-white">
            WORK
          </span>
        </div>
      );
    }

    // ✅ BEFORE / AFTER
    return (
      <div className="relative h-52 bg-muted overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2">
          {/* BEFORE */}
          <div className="relative border-r border-border/40">
            {item.beforeImage ? (
              <img
                src={item.beforeImage}
                alt={`${item.title} - Before`}
                className="h-full w-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <ImageIcon className="h-10 w-10 text-muted-foreground" />
                <span className="text-xs text-muted-foreground mt-2">BEFORE</span>
              </div>
            )}

            <span className="absolute bottom-3 left-3 text-[11px] px-2 py-1 rounded bg-black/70 text-white">
              BEFORE
            </span>
          </div>

          {/* AFTER */}
          <div className="relative">
            {item.afterImage ? (
              <img
                src={item.afterImage}
                alt={`${item.title} - After`}
                className="h-full w-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <ImageIcon className="h-10 w-10 text-muted-foreground" />
                <span className="text-xs text-muted-foreground mt-2">AFTER</span>
              </div>
            )}

            <span className="absolute bottom-3 left-3 text-[11px] px-2 py-1 rounded bg-black/70 text-white">
              AFTER
            </span>
          </div>
        </div>

        {/* overlays */}
        {item.status ? (
          <Badge className={`absolute top-4 right-4 ${getStatusColor(item.status)}`}>
            {item.status}
          </Badge>
        ) : null}

        <Badge className="absolute top-4 left-4" variant="secondary">
          {item.category}
        </Badge>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 bg-hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work Gallery</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Real repairs. Real results. Browse recent collision, paint & service work.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Filter className="h-5 w-5 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((item) => (
              <Card
                key={item.id}
                className="bg-card-gradient border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
              >
                {renderImageBlock(item)}

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>

                    {item.link ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => window.open(item.link, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    ) : null}
                  </div>

                  {item.description ? (
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  ) : null}
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {item.client || "Customer Vehicle"}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.year || "—"}
                      </div>
                    </div>

                    {item.highlights?.length ? (
                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">Highlights:</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {item.highlights.slice(0, 3).map((h, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                              {h}
                            </li>
                          ))}
                          {item.highlights.length > 3 && (
                            <li className="text-primary">+{item.highlights.length - 3} more...</li>
                          )}
                        </ul>
                      </div>
                    ) : null}

                    <Button
                      className="w-full bg-tech-gradient hover:opacity-90 transition-opacity group mt-4 text-sm sm:text-base whitespace-normal"
                      onClick={() => (window.location.href = "/contacto")}
                    >
                      <span className="hidden sm:inline">Schedule Your Appointment Now</span>
                      <span className="sm:hidden">Schedule Appointment</span>
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center text-muted-foreground mt-10">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {(brand.galleryStats || [
              { number: "EST. 1994", label: "Trusted Experience" },
              { number: "✅", label: "Free Estimates" },
              { number: "24/7", label: "Towing Available" },
              { number: "⭐ 4.9", label: "Customer Rating" },
            ]).map((s, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-primary mb-2">{s.number}</div>
                <div className="text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
