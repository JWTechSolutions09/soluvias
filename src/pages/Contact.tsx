import { useMemo, useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ExternalLink } from "lucide-react";
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
  const { toast } = useToast();

  const services = useMemo(() => {
    // Usamos los servicios del brand, + “Other”
    return [...(brand.services || []), "Other"];
  }, []);

  const mapsUrl = useMemo(() => {
    const q = encodeURIComponent(brand.mapsQuery || brand.address || brand.name);
    return `https://www.google.com/maps/search/?api=1&query=${q}`;
  }, []);

  const websiteUrl = useMemo(() => {
    if (!brand.website) return "";
    return brand.website.startsWith("http") ? brand.website : `https://${brand.website}`;
  }, []);

  const contactInfo = useMemo(() => {
    return [
      {
        icon: <Mail className="h-6 w-6" style={{ color: brand.theme.accent }} />,
        title: "Email",
        value: brand.email,
        subtitle: "We reply as soon as possible",
        href: `mailto:${brand.email}`,
        cta: "Send Email",
      },
      {
        icon: <Phone className="h-6 w-6" style={{ color: brand.theme.accent }} />,
        title: "Phone",
        value: brand.phoneDisplay,
        subtitle: "Call us for a Schedule Your Appointment, It's Free",
        href: `tel:${brand.phoneE164}`,
        cta: "Call Now",
      },
      {
        icon: <MapPin className="h-6 w-6" style={{ color: brand.theme.accent }} />,
        title: "Location",
        value: brand.address || "Open in Maps",
        subtitle: "Tap to open directions",
        href: mapsUrl,
        cta: "Open Maps",
      },
      {
        icon: <Clock className="h-6 w-6" style={{ color: brand.theme.accent }} />,
        title: "Hours",
        value: (brand.hours && brand.hours[0]) ? brand.hours[0] : "See schedule",
        subtitle: (brand.hours && brand.hours[1]) ? brand.hours[1] : "Mon–Fri",
        href: "", // no link
        cta: "",
      },
    ];
  }, [mapsUrl]);

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
      // Initialize EmailJS with public key
      emailjs.init(emailjsConfig.publicKey);

      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Not provided",
        company: formData.company || "Not provided",
        service: formData.service || "Not specified",
        message: formData.message,
        to_email: emailjsConfig.toEmail,
      };

      // Send email via EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams
      );

      // Optionally send auto-reply to customer
      if (emailjsConfig.autoReplyTemplateId && formData.email) {
        try {
          await emailjs.send(
            emailjsConfig.serviceId,
            emailjsConfig.autoReplyTemplateId,
            {
              to_name: formData.name,
              to_email: formData.email,
              service: formData.service || "your inquiry",
            }
          );
        } catch (autoReplyError) {
          // Auto-reply is optional, don't fail the main submission
          console.warn("Auto-reply failed:", autoReplyError);
        }
      }

      toast({
        title: "Message sent!",
        description: "We'll contact you soon at " + formData.email,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error sending message",
        description: "Please try again or call us directly at " + brand.phoneDisplay,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 text-white overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black/50"></div>

        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: brand.theme.accent }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span style={{ color: brand.theme.accent }}>{brand.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/85 max-w-3xl mx-auto">
            {brand.contactSubtitle || "Schedule your appointment now or ask about insurance claims, towing, and repairs."}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-black w-full sm:w-auto text-sm sm:text-lg px-4 sm:px-8 py-3" style={{ backgroundColor: brand.theme.accent }}>
              <a href={`tel:${brand.phoneE164}`} className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call {brand.phoneDisplay}
              </a>
            </Button>

            {websiteUrl ? (
              <Button asChild size="lg" variant="outline" className="text-sm sm:text-lg px-4 sm:px-8 py-3 w-full sm:w-auto">
                <a href={websiteUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center">
                  Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </section>

      {/* Info + Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-card-gradient border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{info.icon}</div>
                  <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="text-foreground font-medium mb-1">{info.value}</p>
                  <p className="text-sm text-muted-foreground mb-4">{info.subtitle}</p>

                  {info.href && info.cta ? (
                    <Button asChild variant="outline" className="w-full">
                      <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                        {info.cta}
                      </a>
                    </Button>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="bg-card-gradient border-0 shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Schedule Your Appointment Now
                </CardTitle>
                <p className="text-muted-foreground">
                  Tell us what you need and we’ll respond as soon as possible.
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={brand.phoneDisplay}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Insurance / Company (optional)</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Insurance provider (optional)"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Describe the issue, vehicle details, and anything we should know..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full text-black"
                    style={{ backgroundColor: brand.theme.accent }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Request
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map + Why choose us */}
            <div className="space-y-8">
              {/* Map */}
              <Card className="bg-card-gradient border-0 shadow-medium">
                <CardContent className="p-0">
                  <a href={mapsUrl} target="_blank" rel="noreferrer" className="block">
                    <div className="h-64 bg-muted rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
                      <div className="text-center p-6">
                        <MapPin className="h-12 w-12 mx-auto mb-4" style={{ color: brand.theme.accent }} />
                        <p className="text-muted-foreground font-medium">Open location in Google Maps</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {brand.address || "Tap to view directions"}
                        </p>
                        <p className="text-xs text-muted-foreground mt-3 underline">
                          Click to open maps
                        </p>
                      </div>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="bg-card-gradient border-0 shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Why choose us?
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Schedule Your Appointment for Free and clear guidance",
                      "Help with insurance claims",
                      "Quality repairs and professional finish",
                      "Towing service available",
                      "Experienced team since 1994",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" style={{ color: brand.theme.accent }} />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 text-sm text-muted-foreground">
                    <div className="font-semibold text-foreground mb-2">Business hours</div>
                    <ul className="space-y-1">
                      {(brand.hours || []).map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Prefer a direct call?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Call us now and we’ll guide you through the next steps.
          </p>

          <Button asChild size="lg" className="text-black w-full sm:w-auto text-sm sm:text-lg px-4 sm:px-8 py-3" style={{ backgroundColor: brand.theme.accent }}>
            <a href={`tel:${brand.phoneE164}`} className="flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call {brand.phoneDisplay}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
