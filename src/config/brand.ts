// src/config/brand.ts
export const brand = {
  name: "Int Town Services",
  tagline: "Boston's Trusted Towing Service",
  instagram: "@INTTOWNSERVICES",
  phoneDisplay: "(617) 777-6118",
  phoneE164: "+16177776118",
  website: "www.inttownservices.com",
  email: "info@inttownservices.com",
  address: "251 Norwell st Boston Ma 02124",
  mapsQuery: "251 Norwell st Boston Ma 02124",
  contactSubtitle: "24/7 Emergency Towing Service in Boston. Fast, Reliable, Professional.",
  hours: [
    "Emergency Towing: 24/7",
    "Office Hours: Mon-Fri, 8:00 AM to 6:00 PM",
    "Saturday: 9:00 AM to 4:00 PM",
    "Sunday: Emergency Service Only",
  ],

  ctas: {
    primary: "Emergency Towing",
    secondary: "Roadside Assistance",
  },

  services: [
    "24 Hour Towing Service",
    "Towing All Over Massachusetts",
    "Towing All Over New England",
    "We Buy Junk Cars",
    "We Pay Cash for Cars",
  ],

  theme: {
    bg: "#ffffff",
    accent: "#dc2626", // Red
    secondary: "#fbbf24", // Yellow
    text: "#1a1a1a",
    muted: "rgba(0,0,0,.6)",
    border: "rgba(220,38,38,.2)",
  },
  // ✅ Agrega en src/config/brand.js
about: {
  heroTitle: "About Int Town Services",
  heroSubtitle:
    "Boston's premier 24/7 towing service — fast response times, professional service, and reliable assistance when you need it most.",
  storyTitle: "Our Story",
  storyP1:
    "Int Town Services provides reliable 24-hour towing service throughout Boston and surrounding areas. We understand that breakdowns and accidents happen at the worst times, which is why we're available 24/7.",
  storyP2:
    "Our fleet of modern tow trucks and experienced operators ensure your vehicle is handled with care and professionalism. From emergency towing to roadside assistance, we're here to get you back on the road safely and quickly.",
  mission:
    "Provide fast, reliable, and professional towing services with 24/7 availability, ensuring our customers receive prompt assistance when they need it most.",
  vision:
    "Be Boston's most trusted towing service, known for rapid response times, professional service, and commitment to customer safety and satisfaction.",
  values:
    "Fast response, reliability, professionalism, safety, and treating every customer with respect and care during stressful situations.",
},
team: [
  {
    name: "Towing Operators",
    role: "Professional Tow Truck Drivers",
    description:
      "Licensed and experienced operators trained in safe vehicle recovery, handling all types of vehicles with care and precision.",
  },
  {
    name: "Dispatch Team",
    role: "24/7 Emergency Response",
    description:
      "Our dispatch team coordinates rapid response times, ensuring help arrives quickly when you need it most.",
  },
  {
    name: "Roadside Assistance Specialists",
    role: "On-Site Service Experts",
    description:
      "Trained professionals ready to handle jump starts, tire changes, lockouts, and other roadside emergencies.",
  },
],
serviceCards: [
  {
    title: "24 Hour Towing Service",
    description: "We have towing service 24 hours. Professional and reliable towing service available around the clock.",
    features: ["24/7 availability", "Very affordable prices", "Professional service", "All vehicle types"],
    availability: "24/7 Available",
  },
  {
    title: "Towing All Over Massachusetts",
    description: "We tow all over Massachusetts. Fast, reliable, and affordable towing service throughout the state.",
    features: ["Statewide coverage", "Affordable prices", "Professional operators", "Quick response"],
    availability: "Available",
  },
  {
    title: "Towing All Over New England",
    description: "We tow all over New England. Professional long-distance towing service at very affordable prices.",
    features: ["New England coverage", "Long distance towing", "Affordable rates", "Professional service"],
    availability: "Available",
  },
  {
    title: "We Buy Junk Cars",
    description: "We buy junk cars and we pay cash. Get cash for your old, damaged, or unwanted vehicle today.",
    features: ["Cash payment", "Any condition", "Quick process", "Free evaluation"],
    availability: "Available",
  },
],
serviceCategories: {
  towing: [
    "24 Hour Towing Service",
    "Towing All Over Massachusetts",
    "Towing All Over New England",
  ],
  junkCars: [
    "We Buy Junk Cars",
  ],
},
processSteps: [
  { step: "01", title: "Call for help", description: "Call our 24/7 hotline or use our online form. We'll get your location and dispatch help immediately." },
  { step: "02", title: "Fast dispatch", description: "Our dispatch team sends the nearest available truck to your location within minutes." },
  { step: "03", title: "Professional service", description: "Our trained operator arrives and handles your vehicle with care and professionalism." },
  { step: "04", title: "Safe delivery", description: "Your vehicle is safely transported to your destination or repair shop." },
],
// ✅ Agrega en src/config/brand.js
galleryCategories: [
  "All",
  "Towing Service",
  "Junk Car Buying",
],
galleryProjects: [
  {
    id: "towing-1",
    title: "Emergency Towing Service",
    description: "24 hour towing service. Professional and reliable.",
    category: "Towing Service",
    client: "Customer Vehicle",
    status: "Completed",
    year: "2024",
    highlights: ["24/7 service", "Fast response", "Professional operators"],
    image: "/images/Camion choquecrv.jpg",
    link: "",
  },
  {
    id: "towing-2",
    title: "Vehicle Towing",
    description: "Towing all over Massachusetts and New England.",
    category: "Towing Service",
    client: "Customer Vehicle",
    status: "Completed",
    year: "2024",
    highlights: ["Affordable prices", "All vehicle types", "Professional service"],
    image: "/images/Camion choquesedan.jpg",
    link: "",
  },
  {
    id: "towing-3",
    title: "24/7 Towing Available",
    description: "We have towing service 24 hours. Very affordable prices.",
    category: "Towing Service",
    client: "Customer Vehicle",
    status: "Completed",
    year: "2024",
    highlights: ["24/7 availability", "Affordable rates", "Quick response"],
    image: "/images/Camion lluvia.jpg",
    link: "",
  },
  {
    id: "towing-4",
    title: "Professional Towing Fleet",
    description: "Our professional towing vehicles ready to serve you.",
    category: "Towing Service",
    client: "Customer Vehicle",
    status: "Completed",
    year: "2024",
    highlights: ["Professional fleet", "Experienced operators", "Safe transport"],
    image: "/images/Camion parqueado.jpg",
    link: "",
  },
  {
    id: "towing-5",
    title: "Highway Towing Service",
    description: "Towing service on highways and roads throughout the area.",
    category: "Towing Service",
    client: "Customer Vehicle",
    status: "Completed",
    year: "2024",
    highlights: ["Highway service", "Fast response", "Professional"],
    image: "/images/Camiion carretera.jpg",
    link: "",
  },
  {
    id: "towing-6",
    title: "Night Towing Service",
    description: "24/7 towing service available day and night.",
    category: "Towing Service",
    client: "Customer Vehicle",
    status: "Completed",
    year: "2024",
    highlights: ["Night service", "24/7 available", "Professional"],
    image: "/images/Camion Luces.jpg",
    link: "",
  },
],


galleryStats: [
  { number: "15-30", label: "Min Response Time" },
  { number: "24/7", label: "Emergency Service" },
  { number: "+100", label: "Happy Customers" },
  { number: "⭐ 4.9", label: "Customer Rating" },
],

};
