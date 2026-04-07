# Objectif B2 Espagnol

Starter MVP Astro pour un site marketing + blog SEO centre sur la preparation a la certification d espagnol B2/C1.

## Stack

- Astro
- Tailwind CSS
- Content Collections
- Markdown
- Rendu statique par defaut

## Routes MVP

- `/`
- `/cours/espagnol-certification`
- `/blog`
- `/blog/[slug]`
- `/ressources/guide-b2`
- `/a-propos`
- `/contact`
- `/temoignages`
- `/methode`
- `/legal/mentions-legales`
- `/legal/confidentialite`
- `/legal/cgv`

## Collections

- `src/content/blog`
- `src/content/testimonials`
- `src/content/faqs`

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:4321`.

## Points a brancher ensuite

- Le vrai fournisseur email sur `NewsletterForm`
- Le vrai lien Calendly dans `src/lib/site.ts`
- Les informations legales definitives
- Le PDF final du lead magnet dans `public/pdf/`
