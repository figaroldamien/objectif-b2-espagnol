

📄 PRD — Objectif B2 Espagnol



1. Overview



Product Name: Objectif B2 Espagnol

Type: Marketing website + SEO blog

Primary Goal: Generate qualified leads and sell a premium Spanish certification program (B2/C1)



This product is a content-driven website, not a complex web application.

2. Goals



🎯 Primary Goal

Convert visitors into paying clients for a B2/C1 Spanish certification program



🎯 Secondary Goals

Build SEO traffic around Spanish certification topics

Capture emails via a lead magnet

Establish authority and trust

Create a scalable base for future offers

3. Non-Goals



The following are explicitly out of scope (for MVP):

User authentication

Student dashboard

Full LMS (learning platform)

Custom payment system

Complex backend logic

Heavy CMS setup

4. Target Users



🧠 Primary Persona — “Goal-Oriented Student”

Needs B2/C1 certification

Has a deadline

Feels lost or inefficient

Wants a clear method

Willing to pay for results



👥 Secondary Users

Adults learning Spanish for travel

Secondary school students

(Future) Spanish speakers learning French in France

5. Value Proposition



Get your B2/C1 Spanish certification with a clear, structured, and effective method.


Key Differentiators

✅ 90% success rate

🧠 Structured, logical teaching (math-based mindset)

🎯 Result-oriented approach

❌ No useless grammar overload

📈 Focus on what actually makes you pass

6. Core Features



Must Have (MVP)

Homepage (conversion-focused)

Offer page (certification program)

Blog (SEO acquisition)

Article pages

Lead magnet landing page

About page

Contact / booking page

Testimonials section

FAQ section

Email capture form

CTA system (global)

7. User Flows



Flow 1 — SEO → Lead

User lands on blog article

Reads useful content

Sees CTA (guide B2)

Submits email

Redirect to next step (email / booking)

Flow 2 — High Intent → Booking

User lands on homepage or offer page

Understands value quickly

Sees proof (90% success)

Clicks “Book a diagnostic”

Converts

Flow 3 — Trust Building

User visits About / Method pages

Understands teaching style

Gains confidence

Returns to offer or CTA

8. Information Architecture



Main Navigation

Home

Program (B2/C1)

Blog

Method

About

Contact

Key Pages

/

/cours/espagnol-certification

/blog

/blog/[slug]

/ressources/guide-b2

/a-propos

/contact

/temoignages

/methode

9. Content Strategy



Content Pillars

Certification (core business)

Method & progression

Oral practice

Useful grammar

SEO traffic (travel, basics)

Example Topics

réussir le DELE B2

oral espagnol B2

combien de temps pour atteindre B2

erreurs fréquentes

ser vs estar

subjonctif espagnol

Article Structure

Title (clear + SEO)

Intro (promise)

Structured content

FAQ

Mid-CTA

Final CTA

Related posts

10. Lead Magnet



Primary Asset



“Checklist ultime pour réussir le B2 espagnol”



Purpose

Capture emails

Deliver immediate value

Transition to offer

11. Offer



Product



Programme Objectif B2 (8–12 semaines)



Includes

Initial assessment

Personalized plan

Lessons (1:1 or group)

Exam simulations

Targeted exercises

Feedback & tracking

Main CTA



👉 Book a diagnostic

12. UX Requirements



Principles

Clear messaging within 5 seconds

Strong visual hierarchy

Visible CTAs

Mobile-first design

Fast loading

Trust elements early

Homepage Must Show

Brand name

Core promise

90% success rate

Who it’s for

CTA (booking + guide)

13. UI Guidelines

Clean and minimal

Professional tone

No visual clutter

Readable typography

Strong spacing

Conversion-first layout

14. SEO Requirements



Must Have

Clean URLs

Meta titles & descriptions

H1/H2 structure

Sitemap

Internal linking

Fast pages

Structured Data

Article

FAQPage

Breadcrumb

Organization

Person

Priority Pages

/cours/espagnol-certification

/certification/dele-b2

/blog/reussir-dele-b2

/blog/oral-espagnol-b2

15. Tech Stack



Stack

Astro

Tailwind CSS

Content Collections

Markdown / MDX

Vercel / Netlify

Principles

Static-first

Minimal JS

Component-based

Maintainable content system

Interactive Components Only

Newsletter form

FAQ accordion

Calendly embed

(Optional) quiz later

16. Data Model



Blog Collection

title
description
excerpt
publishDate
updatedDate
category
tags
draft
featured
seoTitle
seoDescription
faq
ctaVariant
heroImage
Testimonials

name
goal
result
quote
featured
order
FAQs



JSON or Markdown format.

17. MVP Scope



Pages

Homepage

Offer page

Blog index

3 articles

Lead magnet page

About page

Contact page

Success Criteria

Site is live

First leads captured

First SEO pages indexed

Booking possible

18. Metrics



Business

Number of bookings

Emails collected

Conversion rate



Product

Organic traffic

Time on page

CTA clicks

Offer page views

19. Roadmap



Phase 1 — Launch

Core pages

Lead capture

Blog setup



Phase 2 — Growth

More articles

Testimonials

Method page

SEO expansion



Phase 3 — Expansion

New niches

New offers

Content scaling

20. Risks



Risks

Too generic positioning

Weak CTA strategy

Overengineering

No email capture

Low conversion pages

Mitigations

Focus on certification niche

Highlight results everywhere

Keep tech simple

Prioritize conversion over design

21. Definition of Done



The MVP is complete when:

Users understand the offer in <5 seconds

A visitor can:

read content

leave email

book a call

The site is SEO-ready

The site is fast and mobile-friendly

Content can be easily added

22. Codex Prompt (Short Version)

Build an Astro website called "Objectif B2 Espagnol".

Goal:
Marketing + SEO blog to sell a premium Spanish B2/C1 certification program.

Constraints:
- Astro
- Tailwind
- Content Collections
- Markdown/MDX
- Minimal JavaScript
- Static-first
- SEO optimized
- Mobile-first

Pages:
- homepage
- offer page
- blog index
- blog post
- lead magnet page
- about
- contact

Features:
- strong CTA system
- testimonials
- FAQ
- email capture
- booking integration

Content:
- certification-focused
- structured method positioning
- highlight 90% success rate

Design:
- clean
- clear
- conversion-focused
