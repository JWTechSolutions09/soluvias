import { useState } from "react";
import { ArrowRight, CheckCircle, Truck, ShieldCheck, Zap, Battery, Key, Fuel, Wrench, Phone, AlertCircle, MapPin, Clock, Star, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Link, useSearchParams } from "react-router-dom";
import { brand } from "@/config/brand";

const Services = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const iconFor = (title: string) => {
    const iconClass = "h-8 w-8";
    const map: Record<string, JSX.Element> = {
      "Emergency Towing": <Truck className={iconClass} />,
      "Roadside Assistance": <Wrench className={iconClass} />,
      "Flatbed Towing": <Truck className={iconClass} />,
      "Heavy Duty Towing": <Truck className={iconClass} />,
      "Motorcycle Towing": <Truck className={iconClass} />,
      "Accident Recovery": <AlertCircle className={iconClass} />,
      "Jump Start Service": <Battery className={iconClass} />,
      "Tire Change Service": <Wrench className={iconClass} />,
      "Lockout Service": <Key className={iconClass} />,
      "Fuel Delivery": <Fuel className={iconClass} />,
      "Winch Out Service": <Truck className={iconClass} />,
      "Long Distance Towing": <MapPin className={iconClass} />,
      "Interstate Transport": <MapPin className={iconClass} />,
      "Vehicle Storage": <ShieldCheck className={iconClass} />,
      "Insurance Towing": <ShieldCheck className={iconClass} />,
    };
    return map[title] || <Truck className={iconClass} />;
  };

  const allServices = (brand.serviceCards && brand.serviceCards.length > 0)
    ? brand.serviceCards
    : (brand.services || []).map((s) => ({
        title: s,
        description: "Professional service with quality workmanship and clear communication.",
        features: ["Quality work", "Clear updates", "Professional finish", "Customer-first"],
        availability: "Available",
      }));

  const filteredServices = category === "all" 
    ? allServices 
    : category === "emergency"
    ? allServices.filter((service) => brand.serviceCategories?.emergency?.includes(service.title))
    : category === "specialized"
    ? allServices.filter((service) => brand.serviceCategories?.specialized?.includes(service.title))
    : allServices;

  const categoryTitle = category === "emergency" 
    ? "Emergency Towing Services" 
    : category === "specialized" 
    ? "Specialized Towing Services" 
    : "All Towing Services";

  const process = brand.processSteps || [];

  const quickCategories = [
    { name: "All", category: "all", icon: <Sparkles className="h-5 w-5" />, color: "from-red-500 to-red-600" },
    { name: "Emergency", category: "emergency", icon: <AlertCircle className="h-5 w-5" />, color: "from-red-500 to-red-600" },
    { name: "Specialized", category: "specialized", icon: <Truck className="h-5 w-5" />, color: "from-yellow-400 to-yellow-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section with Image */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/Camion lluvia.jpg"
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
                <Truck className="h-5 w-5 text-red-600" />
                <span className="text-sm font-semibold text-red-600">OUR SERVICES</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                {categoryTitle}
              </h1>
              <p className="text-xl text-gray-600">
                {category === "emergency" 
                  ? "24/7 emergency towing and roadside assistance throughout Boston. Fast response times when you need help most."
                  : category === "specialized"
                  ? "Specialized towing services for all vehicle types. Professional equipment and experienced operators."
                  : "Professional towing and roadside assistance services. Fast, reliable, and safe vehicle transport."}
              </p>
            </div>
            
            {/* Hero Image */}
            <div className="relative hidden md:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <div className="aspect-[4/3]">
                  <img
                    src="/images/Camion choquesedan.jpg"
                    alt="Towing service"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Logo */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-white rounded-full p-3 shadow-2xl border-4 border-red-600 animate-float overflow-hidden">
                <img
                  src="/images/Logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Category Selector */}
      <section className="py-8 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {quickCategories.map((cat, index) => (
              <Link
                key={cat.category}
                to={`/servicios?category=${cat.category}`}
                className={`group relative overflow-hidden bg-gradient-to-br ${cat.color} rounded-2xl px-6 py-4 text-white font-semibold transform transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-fade-in-up ${
                  category === cat.category ? "ring-4 ring-white/50 scale-110" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex items-center gap-2">
                  {cat.icon}
                  {cat.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="py-12 bg-gradient-to-r from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/images/Camiion carretera.jpg",
              "/images/Camion choquecrv.jpg",
              "/images/Camion choquesedan.jpg",
              "/images/Camion lluvia.jpg",
            ].map((src, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={src}
                    alt={`Towing service ${index + 1}`}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-125"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-semibold">Professional Service</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <Card
                key={index}
                className={`border-2 transition-all duration-500 cursor-pointer overflow-hidden ${
                  hoveredService === index
                    ? "border-red-500 shadow-2xl scale-105 bg-red-50"
                    : "border-gray-200 hover:border-red-300 hover:shadow-xl bg-white"
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.05}s` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`h-1 bg-gradient-to-r from-red-600 to-red-700 transition-all duration-500 ${
                  hoveredService === index ? "h-2" : ""
                }`}></div>
                <CardHeader className="pb-4">
                  <div className={`flex justify-center mb-4 transform transition-all duration-500 ${
                    hoveredService === index ? "scale-125 rotate-6" : ""
                  }`}>
                    <div className={`p-4 rounded-2xl transition-all duration-500 ${
                      hoveredService === index
                        ? "bg-gradient-to-br from-red-600 to-red-700 text-white shadow-xl"
                        : "bg-red-50 text-red-600"
                    }`}>
                      {iconFor(service.title)}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 text-center mb-2 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 text-center text-sm">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {(service.features || []).slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className={`h-4 w-4 mr-2 flex-shrink-0 transition-colors ${
                          hoveredService === index ? "text-red-600" : "text-gray-400"
                        }`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-100 pt-4">
                    <p className={`text-sm font-semibold mb-3 text-center transition-colors ${
                      hoveredService === index ? "text-red-600" : "text-gray-600"
                    }`}>
                      {service.availability || "Available"}
                    </p>
                    <Link to="/contacto" className="block">
                      <Button
                        className={`w-full transition-all transform ${
                          hoveredService === index
                            ? "bg-gradient-to-r from-red-600 to-red-700 text-white scale-105"
                            : "bg-red-600 hover:bg-red-700 text-white"
                        }`}
                      >
                        Request Service
                        <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${
                          hoveredService === index ? "translate-x-2" : ""
                        }`} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Interactive */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-50 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold text-red-600">HOW IT WORKS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to get help fast when you need it most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className={`text-center bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 cursor-pointer border-2 ${
                  hoveredStep === index
                    ? "border-red-500 shadow-2xl scale-110 bg-red-50"
                    : "border-gray-200 hover:border-red-300 hover:shadow-xl"
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto text-2xl font-bold transition-all duration-500 ${
                    hoveredStep === index
                      ? "bg-gradient-to-br from-red-600 to-red-700 text-white shadow-xl scale-110"
                      : "bg-red-600 text-white"
                  }`}>
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-1 bg-gray-200 -translate-x-8">
                      <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-500 ${
                        hoveredStep === index ? "bg-red-600 scale-150" : "bg-gray-300"
                      }`} />
                    </div>
                  )}
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${
                  hoveredStep === index ? "text-red-600" : "text-gray-900"
                }`}>
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
                {hoveredStep === index && (
                  <div className="mt-4 flex justify-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Star className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white">READY TO HELP</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Emergency Towing?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Don't wait! Call us now for immediate 24/7 assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 text-red-600 hover:bg-yellow-300 text-lg px-10 py-6 font-semibold shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
            >
              <a href={`tel:${brand.phoneE164}`} className="flex items-center justify-center">
                <Phone className="mr-2 h-6 w-6" />
                CALL NOW
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-red-600 hover:bg-red-50 border-2 border-white text-lg px-10 py-6 font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              <Link to="/contacto" className="flex items-center justify-center">
                Request Service Online
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
