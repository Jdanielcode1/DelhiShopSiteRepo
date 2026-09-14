/** Canonical site URL for metadata, sitemap, and robots. Override via NEXT_PUBLIC_SITE_URL. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://delhifeedandsupply.com";

/** Opens a WhatsApp conversation with the store's US phone number. */
export const whatsappUrl = "https://wa.me/12094496585";

export const businessInfo = {
  name: "Delhi Feed and Supply",
  tagline: "Rooted in Quality, Growing Together",
  taglineEs: "Arraigados en Calidad, Creciendo Juntos",
  phone: "209-449-6585",
  email: "delhifeed@gmail.com",
  addresses: [
    {
      slug: "delhi",
      label: "Delhi",
      street: "9764 Stephens St",
      city: "Delhi",
      state: "CA",
      zip: "95315",
      country: "United States",
      phone: "209-449-6585",
      email: "delhifeed@gmail.com",
      hours: {
        fallWeekdays: "9:00 AM - 6:00 PM",
        springAugustWeekdays: "8:30 AM - 8:30 PM",
        afterAugustWeekdays: "8:30 AM - 7:30 PM",
        saturday: "9:00 AM - 5:30 PM",
        sunday: "Closed",
      },
      social: {
        facebook: "https://www.facebook.com/profile.php?id=100069493197003",
        instagram: "https://www.instagram.com/delhi_feedsupply/",
        tiktok: "https://www.tiktok.com/@delhi_feedsupply",
      },
    },
    {
      slug: "denair",
      label: "Denair",
      street: "4448 Main St",
      city: "Denair",
      state: "CA",
      zip: "95316",
      country: "United States",
      phone: "(209) 447-8447",
      hours: {
        fallWeekdays: "9:00 AM - 6:00 PM",
        springAugustWeekdays: "8:30 AM - 8:30 PM",
        afterAugustWeekdays: "8:30 AM - 7:30 PM",
        saturday: "9:00 AM - 5:30 PM",
        sunday: "Closed",
      },
      social: {
        facebook: "https://www.facebook.com/p/Denair-feedSupply-61581701369918/",
        instagram: "https://www.instagram.com/denair_feedsupply/",
        tiktok: "https://www.tiktok.com/@denairfeed?_r=1&_t=ZT-99ewkjfHM7S",
      },
    },
  ],
  hours: {
    fall: "Fall Hours (Mon-Fri): 9:00 AM - 6:00 PM",
    spring: "Spring Hours in August (Mon-Fri): 8:30 AM - 8:30 PM",
    afterAugust: "After August (Mon-Fri): 8:30 AM - 7:30 PM",
    saturday: "Saturday: 9:00 AM - 5:30 PM",
    sunday: "Sunday: Closed",
  },
  social: {
    facebook: "",
    instagram: "",
  },
};

export const navigation = [
  { name: "Home", nameEs: "Inicio", href: "/" },
  { name: "Locations", nameEs: "Ubicaciones", href: "/locations" },
  { name: "Products", nameEs: "Productos", href: "/products" },
  { name: "Contact", nameEs: "Contacto", href: "/contact" },
];
