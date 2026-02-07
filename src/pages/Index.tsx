import {
  ArrowRight,
  Wrench,
  Car,
  ShieldCheck,
  Paintbrush,
  Truck,
  Clock,
  Phone,
  Cog,
  Star,
  Settings,
  CheckCircle,
  Cog as CogIcon,
  Paintbrush as BodyShopIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";

const Index = () => {
  // ✅ Categorías principales de servicios
  const serviceCategories = [
    {
      title: "Mechanical Repair Services",
      description: "Complete mechanical repair services including engine, transmission, brakes, suspension, and more to keep your vehicle running smoothly.",
      icon: <CogIcon className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      category: "mechanical",
      link: "/servicios?category=mechanical",
    },
    {
      title: "Body Shop Services",
      description: "Professional body shop services including collision repair, paint, dent removal, frame work, and insurance assistance.",
      icon: <BodyShopIcon className="h-12 w-12" style={{ color: brand.theme.accent }} />,
      category: "bodyShop",
      link: "/servicios?category=bodyShop",
    },
  ];

  // ✅ Testimonios (más acordes a taller)
  const testimonials = [
    {
      name: "Michael R.",
      company: "Customer",
      text: "They handled my insurance claim and the repair came out perfect. The car looks brand new.",
      rating: 5,
    },
    {
      name: "Sarah L.",
      company: "Customer",
      text: "Great communication and fast turnaround. Highly recommend for collision repairs.",
      rating: 5,
    },
    {
      name: "Anthony C.",
      company: "Customer",
      text: "Excellent paint work and detailing. Very professional team.",
      rating: 5,
    },
  ];

  // ✅ Stats (antes era snacks)
  const stats = [
    { number: brand.est, label: "Trusted Experience" },
    { number: "✅", label: "Schedule Your Appointment for Free" },
    { number: "24/7", label: "Towing Available" },
    { number: "⭐ 4.9", label: "Customer Rating" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 text-white overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Glow Accent */}
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: brand.theme.accent }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center gap-2 flex-wrap text-sm mb-6 opacity-90">
              <span className="px-3 py-1 rounded-full border border-white/15">
                {brand.instagram}
              </span>
              <span className="px-3 py-1 rounded-full border border-white/15">
                {brand.est}
              </span>
            </div>

           <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-center">
  <span className="inline-flex items-center gap-3">
    <span style={{ color: brand.theme.accent }}>
      INTERNATIONAL
    </span>

    <Settings
      className="h-8 w-8 md:h-10 md:w-10"
      style={{ color: brand.theme.accent }}
    />
  </span>

  <br />

  <span className="text-white">
    Auto Service &amp; Collision Center
  </span>
</h1>


            <p className="text-xl md:text-2xl text-white/85 mb-10 max-w-3xl mx-auto">
              {brand.name}. Collision repair, dent removal, custom paint, frame repair and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="text-black transition-colors text-sm sm:text-lg px-4 sm:px-8 py-3 w-full sm:w-auto whitespace-normal sm:whitespace-nowrap"
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

            <div className="mt-8 text-sm text-white/70 space-y-1">
              <div>{brand.website}</div>
              <div>{brand.email}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Services Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Services We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quality repairs, professional support, and clear guidance through the process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
            {serviceCategories.map((category, index) => (
              <Link key={index} to={category.link} className="w-full max-w-md">
                <Card className="w-full bg-card-gradient border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 group cursor-pointer h-full">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {category.description}
                    </p>
                    <div className="mt-6">
                      <Button
                        className="text-black hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: brand.theme.accent }}
                      >
                        View Services
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div
                  className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: brand.theme.accent }}
                >
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              What Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your satisfaction is our priority.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card-gradient border-0 shadow-medium hover:shadow-strong transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-current"
                        style={{ color: brand.theme.accent }}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card-gradient p-12 rounded-2xl shadow-strong">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Need a Repair or Estimate?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today for Schedule Your Appointment. We also offer{" "}
              <strong>{brand.ctas.secondary}</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto" className="w-full sm:w-auto">
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
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Schedule Your Free Appointment with clear guidance",
              "Support with insurance claims",
              "Quality repairs and professional finish",
              "Reliable communication and updates",
              "Pick-up & drop-off service available",
              "Experienced team you can trust",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-card-gradient rounded-lg shadow-soft"
              >
                <CheckCircle
                  className="h-6 w-6 mr-4 flex-shrink-0"
                  style={{ color: brand.theme.accent }}
                />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Hours quick block */}
          <div className="mt-12 max-w-3xl mx-auto bg-muted/30 rounded-2xl p-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-5 w-5" style={{ color: brand.theme.accent }} />
              <h3 className="text-lg font-bold text-foreground">Business Hours</h3>
            </div>
            <ul className="text-center text-muted-foreground space-y-1">
              {brand.hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
