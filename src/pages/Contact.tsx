import { useMemo, useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Truck, Zap, Shield, Star, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "@/config/emailjs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);
  const [formProgress, setFormProgress] = useState(0);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize EmailJS
  useEffect(() => {
    try {
      if (emailjsConfig.publicKey && emailjsConfig.publicKey !== "YOUR_PUBLIC_KEY") {
        emailjs.init(emailjsConfig.publicKey);
      }
    } catch (error) {
      console.error("Failed to initialize EmailJS:", error);
    }
  }, []);

  // Calculate form progress
  useEffect(() => {
    const fields = ['name', 'email', 'phone', 'service', 'message'];
    const filledFields = fields.filter(field => {
      const value = formData[field as keyof typeof formData];
      return value && value.trim() !== '';
    }).length;
    setFormProgress((filledFields / fields.length) * 100);
  }, [formData]);

  const services = useMemo(() => {
    return [...(brand.services || []), "Other"];
  }, []);

  const mapsUrl = useMemo(() => {
    const q = encodeURIComponent(brand.mapsQuery || brand.address || brand.name);
    return `https://www.google.com/maps/search/?api=1&query=${q}`;
  }, []);

  const quickActions = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Emergency Call",
      subtitle: "24/7 Available",
      action: `tel:${brand.phoneE164}`,
      color: "from-red-500 to-red-600",
      hoverColor: "hover:from-red-600 hover:to-red-700",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Quick Message",
      subtitle: "WhatsApp Available",
      action: "#form",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Send Email",
      subtitle: "We reply fast",
      action: `mailto:${brand.email}`,
      color: "from-red-500 to-red-600",
      hoverColor: "hover:from-red-600 hover:to-red-700",
    },
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: brand.phoneDisplay,
      subtitle: "24/7 Emergency Service",
      href: `tel:${brand.phoneE164}`,
      delay: 0,
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: brand.email,
      subtitle: "Quick Response",
      href: `mailto:${brand.email}`,
      delay: 0.1,
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: brand.address,
      subtitle: "Boston, MA",
      href: mapsUrl,
      delay: 0.2,
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      value: "24/7",
      subtitle: "Always Available",
      href: "",
      delay: 0.3,
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!emailjsConfig.publicKey || emailjsConfig.publicKey === "YOUR_PUBLIC_KEY") {
        throw new Error("EmailJS is not configured.");
      }
      
      if (!emailjsConfig.serviceId || emailjsConfig.serviceId === "YOUR_SERVICE_ID") {
        throw new Error("EmailJS Service ID is not configured.");
      }
      
      if (!emailjsConfig.templateId || emailjsConfig.templateId === "YOUR_TEMPLATE_ID") {
        throw new Error("EmailJS Template ID is not configured.");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        user_name: formData.name,
        user_email: formData.email,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Not provided",
        company: formData.company || "Not provided",
        service: formData.service || "Not specified",
        message: formData.message,
        to_email: emailjsConfig.toEmail,
        reply_to: formData.email,
      };

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams
      );

      if (emailjsConfig.autoReplyTemplateId && formData.email) {
        try {
          await emailjs.send(
            emailjsConfig.serviceId,
            emailjsConfig.autoReplyTemplateId,
            {
              to_name: formData.name,
              to_email: formData.email,
              user_name: formData.name,
              user_email: formData.email,
              service: formData.service || "your inquiry",
            }
          );
        } catch (autoReplyError) {
          console.warn("Auto-reply failed:", autoReplyError);
        }
      }

      toast({
        title: "Message sent!",
        description: "We'll contact you soon at " + formData.email,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
      setFormProgress(0);
    } catch (error: any) {
      const errorMessage = error?.text || error?.message || "Unknown error occurred";
      toast({
        title: "Error sending message",
        description: errorMessage + ". Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section - Minimalist with Images */}
      <section className="relative py-16 bg-white overflow-hidden">
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
                <Truck className="h-5 w-5 text-red-600" />
                <span className="text-sm font-semibold text-red-600">GET IN TOUCH</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                We're Here to Help
              </h1>
              <p className="text-xl text-gray-600">
                Choose your preferred way to contact us. We're available 24/7 for emergency towing services.
              </p>
            </div>
            
            {/* Hero Images */}
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
                    src="/images/Camiion carretera.jpg"
                    alt="Towing service"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-xl group animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="aspect-square">
                  <img
                    src="/images/Camion parqueado.jpg"
                    alt="Towing service"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-xl group animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="aspect-square">
                  <img
                    src="/images/Camion lluvia.jpg"
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

      {/* Quick Action Buttons - New Interactive Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.action}
                className={`group relative overflow-hidden bg-gradient-to-br ${action.color} ${action.hoverColor} rounded-2xl p-8 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {action.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{action.title}</h3>
                  <p className="text-red-100">{action.subtitle}</p>
                  <ArrowRight className="h-5 w-5 mt-4 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Reordered Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Contact Info Cards with Hover Effects */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className={`border-2 transition-all duration-300 cursor-pointer ${
                      hoveredContact === index
                        ? "border-red-500 shadow-xl scale-105 bg-red-50"
                        : "border-gray-200 hover:border-red-300 hover:shadow-lg"
                    } bg-white animate-fade-in-up`}
                    style={{ animationDelay: `${info.delay}s` }}
                    onMouseEnter={() => setHoveredContact(index)}
                    onMouseLeave={() => setHoveredContact(null)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl transition-all duration-300 ${
                          hoveredContact === index ? "bg-red-600 text-white scale-110" : "bg-red-50 text-red-600"
                        }`}>
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                          <p className="text-gray-600 text-sm mb-1">{info.subtitle}</p>
                          {info.href ? (
                            <a href={info.href} className="text-red-600 font-semibold hover:underline">
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-900 font-semibold">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Why Choose Us - Moved Here */}
                <Card className="mt-8 border-2 border-gray-200 bg-gradient-to-br from-red-50 to-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-500" />
                      Why Choose Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "24/7 emergency service",
                        "15-30 min response time",
                        "Licensed operators",
                        "All vehicle types",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 mr-2 text-red-600 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Form with Progress Indicator */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-gray-200 shadow-2xl bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl font-bold">Request Service</CardTitle>
                    <div className="text-sm font-semibold">{Math.round(formProgress)}% Complete</div>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full bg-white/20 rounded-full h-2 mt-4">
                    <div
                      className="bg-white h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${formProgress}%` }}
                    ></div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-semibold">
                          Full Name *
                        </Label>
                        <div className="relative">
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            required
                            placeholder="John Doe"
                            className={`transition-all duration-300 ${
                              focusedField === "name" ? "ring-2 ring-red-500 border-red-500 scale-[1.02]" : ""
                            }`}
                          />
                          {focusedField === "name" && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-semibold">
                          Email *
                        </Label>
                        <div className="relative">
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            required
                            placeholder="john@example.com"
                            className={`transition-all duration-300 ${
                              focusedField === "email" ? "ring-2 ring-red-500 border-red-500 scale-[1.02]" : ""
                            }`}
                          />
                          {focusedField === "email" && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 font-semibold">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          placeholder={brand.phoneDisplay}
                          className={`transition-all duration-300 ${
                            focusedField === "phone" ? "ring-2 ring-red-500 border-red-500 scale-[1.02]" : ""
                          }`}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-gray-700 font-semibold">
                          Insurance / Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("company")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Optional"
                          className={`transition-all duration-300 ${
                            focusedField === "company" ? "ring-2 ring-red-500 border-red-500 scale-[1.02]" : ""
                          }`}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-gray-700 font-semibold">
                        Service Needed
                      </Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("service")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 border-2 rounded-lg bg-white text-gray-900 focus:outline-none transition-all duration-300 ${
                          focusedField === "service" ? "ring-2 ring-red-500 border-red-500" : "border-gray-300"
                        }`}
                      >
                        <option value="">Select a service</option>
                        {services.map((s, idx) => (
                          <option key={idx} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="message" className="text-gray-700 font-semibold">
                          Message *
                        </Label>
                        <span className="text-sm text-gray-500">
                          {formData.message.length} / 500
                        </span>
                      </div>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={6}
                        maxLength={500}
                        placeholder="Describe your situation, vehicle details, and location..."
                        className={`transition-all duration-300 resize-none ${
                          focusedField === "message" ? "ring-2 ring-blue-500 border-blue-500 scale-[1.01]" : ""
                        }`}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <span className="animate-spin mr-2">⏳</span>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Send Request
                          <Send className="ml-2 h-5 w-5" />
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map Section - Moved Below Form */}
              <Card className="mt-8 border-2 border-gray-200 shadow-lg bg-white overflow-hidden">
                <CardContent className="p-0">
                  <a href={mapsUrl} target="_blank" rel="noreferrer" className="block group">
                    <div className="relative h-64 bg-gradient-to-br from-red-100 to-yellow-100 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwNjZjYyIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
                      <div className="relative z-10 text-center p-6 transform group-hover:scale-110 transition-transform duration-300">
                        <div className="bg-white p-4 rounded-full inline-block mb-4 shadow-lg group-hover:shadow-2xl transition-shadow">
                          <MapPin className="h-12 w-12 text-red-600" />
                        </div>
                        <p className="text-gray-900 font-bold text-lg mb-2">View Our Location</p>
                        <p className="text-gray-600 text-sm">{brand.address}</p>
                        <p className="text-red-600 text-xs mt-3 font-semibold">Click to open in Google Maps →</p>
                      </div>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Zap className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white">EMERGENCY SERVICE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don't wait! Our team is standing by 24/7 to help you get back on the road.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 text-red-600 hover:bg-yellow-300 text-lg px-10 py-6 font-semibold shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
            >
              <a href={`tel:${brand.phoneE164}`} className="flex items-center justify-center">
                <Phone className="mr-2 h-6 w-6" />
                CALL NOW: {brand.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
