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
      title: "Emergency Towing",
      description: "24/7 emergency towing service throughout Boston",
      icon: <Truck className="h-8 w-8" />,
    },
    {
      title: "Roadside Assistance",
      description: "Jump starts, tire changes, lockouts, and more",
      icon: <Wrench className="h-8 w-8" />,
    },
    {
      title: "Heavy Duty Towing",
      description: "Trucks, RVs, and commercial vehicles",
      icon: <Truck className="h-8 w-8" />,
    },
    {
      title: "Accident Recovery",
      description: "Professional accident scene recovery",
      icon: <AlertCircle className="h-8 w-8" />,
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
      name: "Michael R.",
      location: "Boston, MA",
      text: "Got stuck in the snow last winter. They arrived in 20 minutes and got me out safely. Professional and fast!",
      rating: 5,
    },
    {
      name: "Sarah L.",
      location: "Cambridge, MA",
      text: "Our delivery truck broke down. Int Town Services came quickly and handled everything professionally. Highly recommend!",
      rating: 5,
    },
    {
      name: "Anthony C.",
      location: "Somerville, MA",
      text: "They towed my motorcycle with such care. Specialized equipment and experienced operators. Couldn't be happier!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - New Design */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  CAR TOWING SERVICES
                  <br />
                  <span className="text-blue-200">IN BOSTON</span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 font-light">
                  24 Hour Roadside Assistance and Vehicle Recovery
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  <a href={`tel:${brand.phoneE164}`} className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    CALL NOW
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 font-semibold"
                >
                  <Link to="/contacto" className="flex items-center">
                    Request Service
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-200" />
                  <span className="text-blue-100">24/7 Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-200" />
                  <span className="text-blue-100">{brand.address}</span>
                </div>
              </div>
            </div>

            {/* Right Content - Visual Element */}
            <div className="hidden lg:block relative">
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 rounded-2xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
                  <Truck className="h-64 w-64 mx-auto text-white/30 animate-float" />
                </div>
              </div>
            </div>
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
                className="border-2 border-gray-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-50 p-4 rounded-full text-blue-600">
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
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg font-semibold"
            >
              <Link to="/servicios">
                ABOUT US
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-600"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-4">
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
                className="border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all bg-white"
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Emergency Towing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't wait! Call us now for immediate 24/7 assistance.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-10 py-6 font-semibold shadow-xl hover:shadow-2xl transition-all"
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
