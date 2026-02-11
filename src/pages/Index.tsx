import {
  ArrowRight,
  Truck,
  Clock,
  Phone,
  Star,
  CheckCircle,
  Zap,
  Shield,
  MapPin,
  Wrench,
  Battery,
  Key,
  Fuel,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";

const Index = () => {
  const services = [
    {
      title: "24 Hour Towing Service",
      description: "We have towing service 24 hours. Very affordable prices, professional service.",
      icon: <Truck className="h-8 w-8" />,
    },
    {
      title: "Towing All Over MA & New England",
      description: "We tow all over Massachusetts and New England. Professional and affordable.",
      icon: <MapPin className="h-8 w-8" />,
    },
    {
      title: "We Buy Junk Cars",
      description: "We buy junk cars and we pay cash. Get cash for your old or damaged vehicle.",
      icon: <Truck className="h-8 w-8" />,
    },
    {
      title: "We Pay Cash for Cars",
      description: "We pay cash for cars. Any condition, any vehicle type. Very affordable prices.",
      icon: <Truck className="h-8 w-8" />,
    },
  ];

  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Availability",
      description: "Round-the-clock service whenever you need us",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Response",
      description: "15-30 minute average response time",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Licensed & Insured",
      description: "Professional operators you can trust",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "All Vehicle Types",
      description: "Cars, trucks, motorcycles, and more",
    },
  ];

  const testimonials = [
    {
      name: "James P.",
      location: "Dorchester, MA",
      text: "My car broke down on the highway at midnight. They came super fast and were very professional. Great service!",
      rating: 5,
    },
    {
      name: "Maria G.",
      location: "Roxbury, MA",
      text: "I needed to sell my old car and they gave me a fair price. Quick and easy process, highly recommended!",
      rating: 5,
    },
    {
      name: "David K.",
      location: "Jamaica Plain, MA",
      text: "Excellent towing service! They towed my truck from Boston to New Hampshire. Very affordable and reliable.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - New Design */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  CAR TOWING SERVICES
                  <br />
                  <span className="text-yellow-300">IN BOSTON</span>
                </h1>
                <p className="text-xl md:text-2xl text-red-100 font-light">
                  24 Hour Roadside Assistance and Vehicle Recovery
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-yellow-400 text-red-600 hover:bg-yellow-300 text-lg px-8 py-6 font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  <a href={`tel:${brand.phoneE164}`} className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    CALL NOW
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-red-600 hover:bg-red-50 border-2 border-white text-lg px-8 py-6 font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  <Link to="/contacto" className="flex items-center">
                    Request Service
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-yellow-300" />
                  <span className="text-red-100">24/7 Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-yellow-300" />
                  <span className="text-red-100">{brand.address}</span>
                </div>
              </div>
            </div>

            {/* Right Content - Animated Images */}
            <div className="hidden lg:block relative">
              <div className="relative h-[500px]">
                {/* Main Image - Carousel Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/Camion choquecrv.jpg"
                    alt="Professional towing service"
                    className="w-full h-full object-cover animate-fade-in-up"
                    style={{ animationDelay: "0.3s" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent"></div>
                </div>
                
                {/* Floating Secondary Images */}
                <div className="absolute -bottom-8 -left-8 w-48 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white/50 animate-slide-in-right transform rotate-[-8deg] hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/images/Camion parqueado.jpg"
                    alt="Towing truck"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -top-8 -right-8 w-48 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white/50 animate-slide-in-right transform rotate-[8deg] hover:rotate-0 transition-transform duration-500"
                  style={{ animationDelay: "0.5s" }}>
                  <img
                    src="/images/Camiion carretera.jpg"
                    alt="Towing service"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section - New Animated */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Fleet in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our professional towing vehicles ready to serve you 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { src: "/images/Camion choquecrv.jpg", title: "Accident Recovery", delay: "0s" },
              { src: "/images/Camion choquesedan.jpg", title: "Vehicle Towing", delay: "0.1s" },
              { src: "/images/Camion lluvia.jpg", title: "24/7 Service", delay: "0.2s" },
            ].map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: img.delay }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{img.title}</h3>
                    <p className="text-sm text-yellow-200">Professional Service</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Reliable 24-hour Car Towing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the best car towing service from our team. We provide 24/7 roadside assistance for towing and breakdown recovery services with a fleet of recovery vehicles islandwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-red-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-red-50 p-4 rounded-full text-red-600">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-6 text-lg font-semibold"
            >
              <Link to="/servicios">
                ABOUT US
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section with Image */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <img
            src="/images/Camion Luces.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-red-600 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center text-red-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by thousands of Boston residents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all bg-white"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Emergency Towing?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Don't wait! Call us now for immediate 24/7 assistance.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-yellow-400 text-red-600 hover:bg-yellow-300 text-lg px-10 py-6 font-semibold shadow-xl hover:shadow-2xl transition-all"
          >
            <a href={`tel:${brand.phoneE164}`} className="flex items-center justify-center">
              <Phone className="mr-2 h-6 w-6" />
              CALL {brand.phoneDisplay}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
