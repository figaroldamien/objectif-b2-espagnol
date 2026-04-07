export const siteConfig = {
  name: "Objectif B2 Espagnol",
  siteUrl: "https://www.objectifb2espagnol.fr",
  defaultTitle: "Objectif B2 Espagnol | Methode structuree pour reussir votre certification",
  defaultDescription:
    "La methode structuree pour atteindre le niveau B2/C1 en espagnol, reussir votre certification et reserver un diagnostic personnalise.",
  author: "Objectif B2 Espagnol",
  email: "bonjour@objectifb2espagnol.fr",
  calendlyUrl: "https://calendly.com/objectifb2espagnol/diagnostic",
  leadMagnetLandingPath: "/ressources/guide-b2",
  leadMagnetPdfPath: "/pdf/guide%20B2%20espagnol.pdf",
  newsletterFormAction: "https://formsubmit.co/bonjour@objectifb2espagnol.fr",
  leadMagnetThankYouPath: "/merci/guide-b2",
  social: {
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com"
  },
  navigation: [
    { label: "Offre", href: "/cours/espagnol-certification" },
    { label: "Methode", href: "/methode" },
    { label: "Blog", href: "/blog" },
    { label: "Temoignages", href: "/temoignages" },
    { label: "A propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" }
  ]
} as const;

export const primaryCtas = {
  diagnostic: {
    label: "Reserver un diagnostic",
    href: "/contact"
  },
  guide: {
    label: "Telecharger le guide gratuit",
    href: siteConfig.leadMagnetLandingPath
  }
} as const;
