export const siteConfig = {
  name: "Objectif B2 Espagnol",
  siteUrl: "https://www.objectif-b2-espagnol.fr",
  defaultTitle: "Objectif B2 Espagnol | Méthode structurée pour réussir votre certification",
  defaultDescription:
    "La méthode structurée pour atteindre le niveau B2/C1 en espagnol, réussir votre certification et réserver un diagnostic personnalisé.",
  author: "Objectif B2 Espagnol",
  email: "contact@objectif-b2-espagnol.fr",
  leadMagnetLandingPath: "/ressources/guide-b2",
  leadMagnetPdfPath: "/pdf/guide%20B2%20espagnol.pdf",
  newsletterFormAction: "/api/lead",
  contactFormAction: "/api/contact",
  leadMagnetThankYouPath: "/merci/guide-b2",
  contactThankYouPath: "/merci/contact",
  social: {
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com"
  },
  navigation: [
    { label: "Préparation B2/C1", href: "/cours/espagnol-certification" },
    { label: "Méthode", href: "/methode" },
    { label: "Blog", href: "/blog" },
    { label: "Témoignages", href: "/temoignages" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" }
  ]
} as const;

export const primaryCtas = {
  diagnostic: {
    label: "Réserver un diagnostic",
    href: "/contact"
  },
  guide: {
    label: "Télécharger le guide gratuit",
    href: siteConfig.leadMagnetLandingPath
  }
} as const;
