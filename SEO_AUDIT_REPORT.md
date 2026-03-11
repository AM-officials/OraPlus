# OraPlus Dental Clinic — SEO Audit Report

**Date:** March 11, 2026  
**Site:** https://oraplus.in  
**Framework:** Next.js 15 (App Router) + TypeScript + Tailwind CSS

---

## Executive Summary

The OraPlus website had a **strong SEO foundation** already in place. This audit identified 15 gaps and implemented fixes across all 5 routes to maximize search engine visibility, structured data coverage, and semantic correctness.

---

## Audit Findings & Changes Made

### ✅ Already In Place (No Changes Needed)
- Unique `<title>` and `<meta description>` on every route
- Open Graph tags (title, description, url, locale, siteName)
- Twitter Card tags
- Canonical URLs on all pages
- `robots: index, follow` with `googleBot` directives
- Dentist JSON-LD schema with address, geo, ratings, opening hours
- FAQPage JSON-LD schema (3 questions)
- Dynamic `sitemap.ts` covering all routes
- `robots.txt` with Sitemap directive
- Viewport meta tag
- Geo meta tags (region, placename, position, ICBM)
- Google Fonts with `display: "swap"`
- Favicons (SVG, PNG, apple-touch-icon) + web manifest
- `next/image` usage throughout with `sizes` and `priority`
- Google Maps embed + 360° virtual tour on contact page
- NAP (Name, Address, Phone) on contact page and footer
- Image optimization config (AVIF, WebP) in `next.config.mjs`

### 🔧 Changes Implemented

#### Tier 1 — Critical

| Change | File(s) | Details |
|--------|---------|---------|
| Homepage H1 optimization | `components/hero-section.tsx` | Changed from "Crafting Smiles, Changing Lives" → **"Best Dentist in Bhubaneswar"** |
| Services page H1 optimization | `app/services/page.tsx` | Changed from "World-Class Dental Care" → **"Dental Services in Bhubaneswar"** |
| Contact page H1 optimization | `app/contact/page.tsx` | Changed from "Visit OraPlus" → **"Contact OraPlus Dental Clinic, Bhubaneswar"** |
| Patient-portal `noindex` | `app/patient-portal/layout.tsx` | Added `robots: { index: false, follow: false }` |
| Remove unused import | `app/services/page.tsx` | Removed unused `import Head from 'next/head'` |
| Custom 404 page | `app/not-found.tsx` | **[NEW]** SEO-friendly 404 page with navigation links |

#### Tier 2 — High Impact

| Change | File(s) | Details |
|--------|---------|---------|
| OG image absolute URL | `app/layout.tsx` | Changed `/images/doctor1.png` → `https://oraplus.in/images/doctor1.png` |
| Twitter image absolute URL | `app/layout.tsx` | Same fix for Twitter card image |
| Enhanced Dentist JSON-LD | `app/layout.tsx` | Added `logo`, `email`, `hasMap` fields |
| WebSite JSON-LD schema | `app/layout.tsx` | **[NEW]** Added `@type: WebSite` with `SearchAction` for sitelinks |
| BreadcrumbList — Services | `app/services/page.tsx` | **[NEW]** Home → Services breadcrumb schema |
| BreadcrumbList — Contact | `app/contact/page.tsx` | **[NEW]** Home → Contact breadcrumb schema |
| BreadcrumbList — Doctors | `app/doctors/page.tsx` | **[NEW]** Home → Doctors breadcrumb schema |
| MedicalProcedure schema | `app/services/page.tsx` | **[NEW]** 12 dental services with provider info |
| Physician + Review schema | `app/doctors/page.tsx` | **[NEW]** Doctor profile + 3 testimonial reviews |
| Instagram alt text | `app/contact/page.tsx` | Replaced `"Instagram Post"` with descriptive alt text per image |
| Hero image alt text | `components/hero-section.tsx` | Enhanced with keywords and location |
| robots.txt update | `public/robots.txt` | Added `Disallow: /patient-portal/` |

---

## Structured Data Summary

| Schema Type | Location | Status |
|-------------|----------|--------|
| `Dentist` (LocalBusiness) | Root layout | ✅ Enhanced |
| `FAQPage` | Root layout | ✅ Existing |
| `WebSite` | Root layout | ✅ **New** |
| `BreadcrumbList` | Services, Contact, Doctors | ✅ **New** |
| `MedicalProcedure` (×12) | Services page | ✅ **New** |
| `Physician` + `Review` (×3) | Doctors page | ✅ **New** |

---

## Pages Updated

| Page | Route | Changes |
|------|-------|---------|
| Homepage | `/` | H1 optimization, hero image alt text |
| Services | `/services` | H1 optimization, removed unused import, BreadcrumbList + MedicalProcedure schemas |
| Contact | `/contact` | H1 optimization, Instagram alt text, BreadcrumbList schema, added `rel="noopener noreferrer"` |
| Doctors | `/doctors` | BreadcrumbList + Physician/Review schemas |
| Patient Portal | `/patient-portal` | Added `noindex, nofollow` robots directive |
| 404 Page | `/not-found` | **[NEW]** Custom error page |
| Root Layout | `/` (all pages) | OG image fix, enhanced JSON-LD, WebSite schema |
| robots.txt | `/robots.txt` | Added patient-portal disallow |

---

## Remaining Recommendations

These items require **content decisions** and are outside the scope of code-only changes:

1. **Individual service pages** — Create dedicated `/services/root-canal`, `/services/dental-implants`, etc. for better keyword targeting
2. **Blog section** — Add a `/blog` route with dental health articles for organic traffic
3. **FAQ page** — Create a dedicated `/faq` page with comprehensive Q&A content
4. **Google Business Profile** — Ensure the GBP URL is added to `sameAs` in JSON-LD (currently has Instagram + Maps)
5. **Google Search Console verification** — Replace `"your-google-verification-code"` in `app/layout.tsx` with the actual verification code
6. **Clinic email** — Replace `[CLINIC_EMAIL]` placeholder in Dentist JSON-LD with actual email address
7. **Image compression** — Clinic images in `/public/clinic/` are 1.7MB and 4.8MB; consider compressing to under 500KB
8. **Testimonials expansion** — Add more patient reviews to increase Review schema richness
9. **hreflang tags** — Add if the site plans to serve content in Hindi or Odia languages
10. **Social profiles** — Add Facebook, YouTube, or other social URLs to `sameAs` in JSON-LD

---

## Validation Checklist

After deployment, run these checks:

- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results) — validate all JSON-LD schemas
- [ ] [Schema.org Validator](https://validator.schema.org/) — validate structured data
- [ ] Chrome DevTools → Lighthouse → SEO audit (target 100 score)
- [ ] Submit updated sitemap in Google Search Console
- [ ] Replace Google verification placeholder with actual code
- [ ] Replace `[CLINIC_EMAIL]` placeholder with actual email
