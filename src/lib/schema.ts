import { siteConfig } from "@/lib/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    description: siteConfig.defaultDescription
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fondatrice Objectif B2 Espagnol",
    jobTitle: "Professeure d'espagnol en ligne",
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name
    },
    description:
      "Ancienne professeure de mathématiques au Chili, spécialisée dans la préparation structurée aux certifications d'espagnol B2/C1."
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function articleSchema({
  title,
  description,
  publishedTime,
  updatedTime,
  image,
  pathname
}: {
  title: string;
  description: string;
  publishedTime: string;
  updatedTime?: string;
  image?: string;
  pathname: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedTime,
    dateModified: updatedTime ?? publishedTime,
    image: image ? [image] : undefined,
    mainEntityOfPage: `${siteConfig.siteUrl}${pathname}`,
    author: {
      "@type": "Organization",
      name: siteConfig.name
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name
    }
  };
}
