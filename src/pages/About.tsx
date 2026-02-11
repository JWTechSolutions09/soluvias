import { useState } from "react";
import { Users, Target, Lightbulb, Award, Truck, Clock, Shield, Zap, Star, CheckCircle, ArrowRight, TrendingUp, Heart, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";

const About = () => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [hoveredTeam, setHoveredTeam] = useState<number | null>(null);

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mission",
      description: brand.about.mission,
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Vision",
      description: brand.about.vision,
      color: "from-yellow-400 to-yellow-500",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Values",
      description: brand.about.values,
      color: "from-red-600 to-red-700",
    },
  ];

  const stats = [
    { number: "15-30", label: "Min Response", icon: <Zap className="h-6 w-6" />, color: "text-yellow-500" },
    { number: "24/7", label: "Available", icon: <Clock className="h-6 w-6" />, color: "text-red-500" },
    { number: "500+", label: "Customers", icon: <Users className="h-6 w-6" />, color: "text-green-500" },
    { number: "4.9", label: "Rating", icon: <Star className="h-6 w-6" />, color: "text-yellow-500" },
  ];

  const team = brand.team;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section - Interactive */}
      <section className="relative py-16 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-50 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: "1s" }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full mb-6">
              <Heart className="h-5 w-5 text-red-600" />
              <span className="text-sm font-semibold text-red-600">OUR STORY</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {brand.about.heroTitle}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {brand.about.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - New Interactive */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-110 hover:bg-white/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-3 rounded-full bg-white/20 mb-4 ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-red-100 text-sm font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - Reordered */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-yellow-100 rounded-3xl transform rotate-6 opacity-50"></div>
              <div className="relative rounded-3xl border-2 border-red-200 shadow-xl overflow-hidden group">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/images/Camion parqueado.jpg"
                    alt="Our towing fleet"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent"></div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-fade-in-up">
              <div className="inline-block bg-red-50 px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-semibold text-red-600">OUR JOURNEY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {brand.about.storyTitle}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {brand.about.storyP1}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {brand.about.storyP2}
              </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-red-600">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-semibold">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-600">
                      <Shield className="h-5 w-5" />
                      <span className="font-semibold">24/7 Service</span>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Interactive Cards */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-50 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold text-red-600">OUR CORE VALUES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mission, Vision & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and customer experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                    className={`border-2 transition-all duration-500 cursor-pointer overflow-hidden ${
                      hoveredValue === index
                        ? "border-red-500 shadow-2xl scale-105"
                        : "border-gray-200 hover:border-red-300 hover:shadow-xl"
                    } bg-white animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div className={`h-2 bg-gradient-to-r ${value.color} transition-all duration-500 ${
                  hoveredValue === index ? "h-3" : ""
                }`}></div>
                <CardContent className="p-8 text-center relative">
                  <div className={`mb-6 transform transition-all duration-500 ${
                    hoveredValue === index ? "scale-125 rotate-6" : ""
                  }`}>
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} text-white shadow-lg`}>
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                      {hoveredValue === index && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                          <ArrowRight className="h-5 w-5 text-red-600 animate-pulse" />
                        </div>
                      )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Interactive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-50 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold text-red-600">MEET THE TEAM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals committed to fast response times and safe vehicle handling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                    className={`border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
                      hoveredTeam === index
                        ? "border-red-500 shadow-2xl scale-105 bg-red-50"
                        : "border-gray-200 hover:border-red-300 hover:shadow-xl bg-white"
                    } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredTeam(index)}
                onMouseLeave={() => setHoveredTeam(null)}
              >
                <CardContent className="p-8 text-center relative">
                  <div className={`mb-6 transform transition-all duration-300 ${
                    hoveredTeam === index ? "scale-110" : ""
                  }`}>
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto transition-all duration-300 ${
                          hoveredTeam === index
                            ? "bg-gradient-to-br from-red-600 to-red-700 text-white shadow-xl"
                            : "bg-red-50 text-red-600"
                        }`}>
                      <Truck className="h-12 w-12" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                      <div className={`inline-block px-4 py-1 rounded-full mb-3 transition-all duration-300 ${
                        hoveredTeam === index
                          ? "bg-red-600 text-white"
                          : "bg-red-50 text-red-600"
                      }`}>
                    <p className="font-semibold text-sm">{member.role}</p>
                  </div>
                  <p className="text-gray-600">{member.description}</p>
                      {hoveredTeam === index && (
                        <div className="mt-4 flex justify-center gap-2">
                          <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
                          <div className="w-2 h-2 bg-red-600 rounded-full animate-ping" style={{ animationDelay: "0.2s" }}></div>
                          <div className="w-2 h-2 bg-red-600 rounded-full animate-ping" style={{ animationDelay: "0.4s" }}></div>
                        </div>
                      )}
                </CardContent>
              </Card>
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
            <TrendingUp className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white">GROWING WITH YOU</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Our Service?
          </h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their towing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${brand.phoneE164}`}
                  className="inline-flex items-center justify-center bg-yellow-400 text-red-600 hover:bg-yellow-300 text-lg px-10 py-6 font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
            >
              <Phone className="mr-2 h-6 w-6" />
              CALL NOW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
