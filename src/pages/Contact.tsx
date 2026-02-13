import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, ArrowRight, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { brand } from "@/config/brand";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "@/config/emailjs";

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    try {
      if (emailjsConfig.publicKey && emailjsConfig.publicKey !== "YOUR_PUBLIC_KEY") {
        emailjs.init(emailjsConfig.publicKey);
      }
    } catch (error) {
      console.error("Failed to initialize EmailJS:", error);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey) {
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
            to_name: brand.name,
          },
          emailjsConfig.publicKey
        );

        toast({
          title: "¡Mensaje Enviado!",
          description: "Nos pondremos en contacto contigo pronto.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error("EmailJS not configured");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Por favor, intente de nuevo o llámenos directamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Teléfono",
      content: brand.phoneDisplay,
      link: `tel:${brand.phoneE164}`,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: brand.email,
      link: `mailto:${brand.email}`,
      color: "from-black to-gray-800",
    },
    {
      icon: <WhatsAppIcon className="h-6 w-6" />,
      title: "WhatsApp",
      content: brand.phoneDisplay,
      link: `https://wa.me/${brand.phoneE164.replace(/\+/g, '')}`,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Ubicación",
      content: brand.address,
      link: `https://maps.google.com/?q=${encodeURIComponent(brand.mapsQuery)}`,
      color: "from-black to-gray-800",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Líneas de Carretera Animadas - Igual que Home */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-yellow-400 transform -translate-y-1/2">
            <div className="absolute left-0 top-0 w-32 h-full bg-yellow-400 animate-road-line"></div>
          </div>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-yellow-400/50 transform -translate-y-1/2 translate-y-8">
            <div className="absolute left-0 top-0 w-24 h-full bg-yellow-400/50 animate-road-line-slow"></div>
          </div>
        </div>

        {/* Iconos Flotantes - Opacidad baja, en bordes */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-sign-float opacity-20"
              style={{
                left: i % 2 === 0 ? '3%' : '92%',
                top: `${23 + i * 23}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${5 + i * 0.3}s`,
              }}
            >
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-black" />
              </div>
            </div>
          ))}
        </div>

        {/* Contenido */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/30 px-6 py-3 rounded-full">
              <MessageSquare className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                Contáctenos
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
              <span className="block text-white mb-2">CONTACTO</span>
              <span className="block text-yellow-400 relative">
                SOLUVIAS
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-yellow-400/20 blur-xl"></div>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {brand.contactSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200 hover:border-yellow-400 transition-all hover:-translate-y-3 hover:shadow-xl bg-white group"
              >
                <div className={`h-2 bg-gradient-to-r ${info.color}`}></div>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform`}>
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-black text-black mb-2 group-hover:text-yellow-400 transition-colors">
                    {info.title}
                  </h3>
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-black transition-colors block group-hover:font-semibold"
                  >
                    {info.content}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-yellow-400 transform -translate-y-1/2"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Envíanos un Mensaje
              </h2>
              <p className="text-gray-400 mb-8">
                Complete el formulario y nos pondremos en contacto con usted lo antes posible.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white font-bold">
                    Nombre *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 bg-white/10 border-2 border-yellow-400/30 focus:border-yellow-400 text-white"
                    placeholder="Su nombre"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white font-bold">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 bg-white/10 border-2 border-yellow-400/30 focus:border-yellow-400 text-white"
                    placeholder="su@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white font-bold">
                    Teléfono
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 bg-white/10 border-2 border-yellow-400/30 focus:border-yellow-400 text-white"
                    placeholder="(809) 000-0000"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-white font-bold">
                    Servicio de Interés
                  </Label>
                  <Input
                    id="service"
                    type="text"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="mt-2 bg-white/10 border-2 border-yellow-400/30 focus:border-yellow-400 text-white"
                    placeholder="Señalización, Barandas, etc."
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white font-bold">
                    Mensaje *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 bg-white/10 border-2 border-yellow-400/30 focus:border-yellow-400 text-white min-h-[150px]"
                    placeholder="Cuéntenos sobre su proyecto..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  {isSubmitting ? "Enviando..." : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Información Adicional */}
            <div className="space-y-8">
              <Card className="bg-white/5 backdrop-blur-sm border-2 border-yellow-400/20">
                <div className="h-2 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-yellow-400 p-3 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-black text-white">
                      ¿Por Qué Contactarnos?
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Cotizaciones gratuitas y consultas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Profesionales certificados y asegurados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Calidad garantizada en todos nuestros trabajos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Servicio en toda República Dominicana</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-2 border-yellow-400/20">
                <div className="h-2 bg-gradient-to-r from-black to-gray-800"></div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-black text-white mb-4">
                    Horarios de Atención
                  </h3>
                  <div className="space-y-2">
                    {brand.hours?.map((hour, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300">
                        <Clock className="h-4 w-4 text-yellow-400" />
                        <span>{hour}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 rounded-xl">
                <h3 className="text-2xl font-black text-black mb-4">¿Necesita Ayuda Inmediata?</h3>
                <p className="text-black/80 mb-6">
                  Llámenos ahora o envíenos un mensaje por WhatsApp para necesidades urgentes
                </p>
                <div className="space-y-3">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-black text-yellow-400 hover:bg-gray-900 font-black"
                  >
                    <a href={`tel:${brand.phoneE164}`} className="flex items-center justify-center">
                      <Phone className="mr-2 h-5 w-5" />
                      LLAMAR {brand.phoneDisplay}
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full bg-transparent border-2 border-black text-black hover:bg-black hover:text-yellow-400 font-bold"
                  >
                    <a
                      href={`https://wa.me/${brand.phoneE164.replace(/\+/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <WhatsAppIcon className="mr-2 h-5 w-5" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
