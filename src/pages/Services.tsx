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
    { name: "All", category: "all", icon: <Sparkles className="h-5 w-5" />, color: "from-blue-500 to-blue-600" },
    { name: "Emergency", category: "emergency", icon: <AlertCircle className="h-5 w-5" />, color: "from-red-500 to-red-600" },
    { name: "Specialized", category: "specialized", icon: <Truck className="h-5 w-5" />, color: "from-purple-500 to-purple-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: "1s" }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
              <Truck className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">OUR SERVICES</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {categoryTitle}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {category === "emergency" 
                ? "24/7 emergency towing and roadside assistance throughout Boston. Fast response times when you need help most."
                : category === "specialized"
                ? "Specialized towing services for all vehicle types. Professional equipment and experienced operators."
                : "Professional towing and roadside assistance services. Fast, reliable, and safe vehicle transport."}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Category Selector */}
      <section className="py-8 bg-gradient-to-r from-blue-600 to-blue-700">
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

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <Card
                key={index}
                className={`border-2 transition-all duration-500 cursor-pointer overflow-hidden ${
                  hoveredService === index
                    ? "border-blue-500 shadow-2xl scale-105 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300 hover:shadow-xl bg-white"
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.05}s` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`h-1 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-500 ${
                  hoveredService === index ? "h-2" : ""
                }`}></div>
                <CardHeader className="pb-4">
                  <div className={`flex justify-center mb-4 transform transition-all duration-500 ${
                    hoveredService === index ? "scale-125 rotate-6" : ""
                  }`}>
                    <div className={`p-4 rounded-2xl transition-all duration-500 ${
                      hoveredService === index
                        ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl"
                        : "bg-blue-50 text-blue-600"
                    }`}>
                      {iconFor(service.title)}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 text-center mb-2 group-hover:text-blue-600 transition-colors">
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
                          hoveredService === index ? "text-blue-600" : "text-gray-400"
                        }`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-100 pt-4">
                    <p className={`text-sm font-semibold mb-3 text-center transition-colors ${
                      hoveredService === index ? "text-blue-600" : "text-gray-600"
                    }`}>
                      {service.availability || "Available"}
                    </p>
                    <Link to="/contacto" className="block">
                      <Button
                        className={`w-full transition-all transform ${
                          hoveredService === index
                            ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white scale-105"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
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
            <div className="inline-block bg-blue-50 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold text-blue-600">HOW IT WORKS</span>
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
                    ? "border-blue-500 shadow-2xl scale-110 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300 hover:shadow-xl"
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto text-2xl font-bold transition-all duration-500 ${
                    hoveredStep === index
                      ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl scale-110"
                      : "bg-blue-600 text-white"
                  }`}>
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-1 bg-gray-200 -translate-x-8">
                      <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-500 ${
                        hoveredStep === index ? "bg-blue-600 scale-150" : "bg-gray-300"
                      }`} />
                    </div>
                  )}
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${
                  hoveredStep === index ? "text-blue-600" : "text-gray-900"
                }`}>
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
                {hoveredStep === index && (
                  <div className="mt-4 flex justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
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
          <p className="text-xl text-blue-100 mb-8">
            Don't wait! Call us now for immediate 24/7 assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-10 py-6 font-semibold shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
            >
              <a href={`tel:${brand.phoneE164}`} className="flex items-center justify-center">
                <Phone className="mr-2 h-6 w-6" />
                CALL NOW
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-6 font-semibold"
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
