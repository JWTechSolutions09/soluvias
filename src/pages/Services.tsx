import { ArrowRight, CheckCircle, Wrench, Car, Paintbrush, ShieldCheck, Truck, Settings, Zap, Cog, CircleDot, Battery, Thermometer, Cloud, Users, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Link, useSearchParams } from "react-router-dom";
import { brand } from "@/config/brand";

const Services = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";
  // Iconos por servicio (match por title)
  const iconFor = (title) => {
    const map = {
      "COLLISION REPAIR SERVICES": <Car className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "Collision Repair Services": <Car className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "Dent Removal Services": <Wrench className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "Dent Removals": <Wrench className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "Custom Paint Services": <Paintbrush className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "Custom Paint": <Paintbrush className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "Frame Repair": <Wrench className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "Frame Repair Services": <Wrench className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "Insurance Claims Assistance": <ShieldCheck className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "Insurance Claims Experts": <ShieldCheck className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "24-Hour Towing Service": <Truck className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "Auto Repair Service": <Settings className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "Engine & Performance": <Zap className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "Transmission & Drivetrain": <Cog className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "Braking Systems": <CircleDot className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "Suspension & Steering": <Car className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "Electrical & Electronics": <Battery className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "Heating, Cooling & Climate Control": <Thermometer className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "Exhaust & Emissions": <Cloud className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "Maintenance Services": <Wrench className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      "Customer & Safety Support": <Users className="h-12 w-12" style={{ color: brand.theme.accent }} />,
    };
    return map[title] || <Wrench className="h-12 w-12" style={{ color: brand.theme.accent }} />;
  };

  const allServices = (brand.serviceCards && brand.serviceCards.length > 0)
    ? brand.serviceCards
    : (brand.services || []).map((s) => ({
        title: s,
        description: "Professional service with quality workmanship and clear communication.",
        features: ["Quality work", "Clear updates", "Professional finish", "Customer-first"],
        availability: "Available",
      }));

  // Filtrar servicios por categoría
  const filteredServices = category === "all" 
    ? allServices 
    : category === "mechanical"
    ? allServices.filter((service) => brand.serviceCategories?.mechanical?.includes(service.title))
    : category === "bodyShop"
    ? allServices.filter((service) => brand.serviceCategories?.bodyShop?.includes(service.title))
    : allServices;

  const categoryTitle = category === "mechanical" 
    ? "Mechanical Repair Services" 
    : category === "bodyShop" 
    ? "Body Shop Services" 
    : "All Services";

  const process = brand.processSteps || [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: brand.theme.accent }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {categoryTitle}
          </h1>
          <p className="text-xl md:text-2xl text-white/85 max-w-3xl mx-auto">
            {category === "mechanical" 
              ? "Complete mechanical repair services to keep your vehicle running smoothly and safely."
              : category === "bodyShop"
              ? "Professional body shop services including collision repair, paint, and more."
              : "Collision repair, paint, frame work, towing and insurance support — all in one place."}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {category !== "all" && (
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {categoryTitle}:
              </h2>
            </div>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <Card
                key={index}
                className="bg-card-gradient border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {iconFor(service.title)}
                  </div>

                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </CardTitle>

                  <p className={`text-muted-foreground ${service.title === "COLLISION REPAIR SERVICES" ? "text-left" : "text-justify"}`}>
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {(service.features || []).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" style={{ color: brand.theme.accent }} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-4">
                    <p className="text-lg font-bold mb-3" style={{ color: brand.theme.accent }}>
                      {service.availability || "Available"}
                    </p>

                    <Link to="/contacto" className="block">
                      <Button
                        className="w-full text-black hover:opacity-90 transition-opacity group"
                        style={{ backgroundColor: brand.theme.accent }}
                      >
                        Schedule Your Appointment Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple steps to get your vehicle repaired quickly and professionally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: brand.theme.accent }}
                  >
                    <span className="text-2xl font-bold text-black">{item.step}</span>
                  </div>

                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8">
                      <div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                        style={{ backgroundColor: brand.theme.accent }}
                      />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card-gradient p-12 rounded-2xl shadow-strong">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to get started?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today for Schedule Your Appointment for Free — we can also help with insurance claims and towing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto" className="w-full sm:w-auto inline-block">
                <Button
                  size="lg"
                  className="text-black hover:opacity-90 transition-opacity text-sm sm:text-lg px-4 sm:px-8 py-3 w-full sm:w-auto whitespace-normal sm:whitespace-nowrap"
                  style={{ backgroundColor: brand.theme.accent }}
                >
                  <span className="hidden sm:inline">Schedule Your Appointment Now</span>
                  <span className="sm:hidden">Schedule Appointment</span>
                  <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                </Button>
              </Link>

              <Button asChild size="lg" variant="outline" className="text-sm sm:text-lg px-4 sm:px-8 py-3 w-full sm:w-auto">
                <a href={`tel:${brand.phoneE164}`} className="flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call {brand.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
