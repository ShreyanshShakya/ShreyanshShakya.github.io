# Phase 5 SEO Audit

**Date:** 2026-08-09  
**Portfolio:** D:\Portfolio  
**Last Updated:** 2026-08-09 (after P5.1–P5.9 implementation)

---

## Current SEO Status

### Global Metadata (layout.tsx)
| Item | Status | Current Value | Action |
|------|--------|---------------|--------|
| Title | �� | "Shreyansh Shakya — AI Engineer & ML Systems Builder" | Done |
| Description | �� | Comprehensive with keywords | Done |
| Open Graph | �� | Full OG with image | Done |
| Twitter Card | �� | summary_large_image | Done |
| Canonical | �� | Via metadataBase | Done |
| Robots | �� | robots.ts created | Done |
| Sitemap | �� | sitemap.ts created | Done |
| JSON-LD | �� | StructuredData component | Done |
| Favicon | ������ | Placeholder from file.svg | Replace with proper icons |

### Page-Level Metadata

| Route | Title | Description | OG | Twitter | Canonical | Status |
|-------|-------|-------------|----|---------|-----------|--------|
| `/` | �� | �� | �� | �� | �� | **Done** |
| `/projects` | �� | �� | �� | �� | �� | **Done** |
| `/projects/[id]` | �� | �� | �� | �� | �� | **Done** |
| `/research` | �� | �� | �� | �� | �� | **Done** |
| `/research/[slug]` | �� | �� | �� | �� | �� | **Done** |
| `/blog` | �� | �� | �� | �� | �� | **Done** |
| `/blog/[slug]` | �� | �� | �� | �� | �� | **Done** |
| `/resume` | �� | �� | �� | �� | �� | **Done** |

### Technical Files

| File | Status | Action |
|------|--------|--------|
| `sitemap.xml` | �� Generated via sitemap.ts | Done |
| `robots.txt` | �� Generated via robots.ts | Done |
| `manifest.json` | �� site.webmanifest created | Done |
| OG Image | ������ SVG placeholder | Convert to PNG |
| Structured Data | �� StructuredData component | Done |

### Content Quality

| Area | Status | Issues |
|------|--------|--------|
| Heading hierarchy | �� | Single H1 per page |
| Image alt text | ������ | Architecture diagrams need alt |
| Internal linking | ������ | Limited cross-linking |
| Schema.org | �� | JSON-LD implemented |

### Social Profiles Consistency

| Platform | Name/Title | URL | Consistent? |
|----------|------------|-----|-------------|
| GitHub | Shreyansh Shakya | github.com/ShreyanshShakya | �� |
| LinkedIn | Shreyansh Shakya | linkedin.com/in/shreyansh-shakya-3b019022a | �� |
| Portfolio | "AI Engineer & ML Systems Builder" | — | �� |
| Resume | — | — | ������ Need to verify |

---

## Priority Actions (P5.1–P5.15)

### P5.1 SEO Baseline Audit �� COMPLETE

### P5.2 Page Titles & Descriptions �� COMPLETE
- [x] Homepage: "Shreyansh Shakya — AI Engineer & ML Systems Builder"
- [x] Projects: "Projects — Shreyansh Shakya | AI Engineer"
- [x] Project Detail: "{Project Title} | Shreyansh Shakya"
- [x] Research: "Research — Shreyansh Shakya | AI & ML Research"
- [x] Blog Index: "Blog — Shreyansh Shakya | Technical Writing"
- [x] Blog Post: "{Post Title} | Shreyansh Shakya"
- [x] Research: "Research — Shreyansh Shakya | AI & ML Research"
- [x] Resume: "Resume — Shreyansh Shakya | AI Engineer"

### P5.3 Open Graph / Social Previews ��� PARTIAL
- [x] Create OG image (SVG placeholder created)
- [x] Add OG meta to all pages
- [x] Add Twitter Card meta
- [ ] Convert SVG to PNG (1200x630)
- [ ] Test previews on LinkedIn, X, WhatsApp

### P5.4 Canonical URLs �� COMPLETE
- [x] Canonical URLs via metadataBase
- [x] No duplicate content

### P5.5 Sitemap �� COMPLETE
- [x] sitemap.ts generates all routes
- [x] Includes project, blog, research routes

### P5.6 Robots.txt �� COMPLETE
- [x] robots.ts created
- [x] Allows all public routes
- [x] Disallows private/internal

### P5.7 Structured Data �� COMPLETE
- [x] Person schema (name, url, sameAs)
- [x] WebSite schema
- [x] Article schema for blog posts (via metadata)
- [x] SoftwareApplication for flagship projects

### P5.8 Stable Project URLs �� COMPLETE
- [x] All project slugs stable
- [x] No redirects needed

### P5.9 Recruiter Conversion Paths ��� PARTIAL
- [x] Homepage → Projects CTA
- [x] Project → GitHub links
- [x] Project → Resume (via navbar/footer)
- [x] Research → Publication (IEEE DOI)
- [x] Resume → GitHub/LinkedIn/Contact
- [ ] Project → Related projects cross-linking

### P5.10 Analytics ��� PLANNED
- [ ] Add lightweight analytics (Plausible/Umami)
- [ ] Track: project_view, github_click, resume_click, contact_click

### P5.11 Search Console ��� PLANNED
- [ ] Submit sitemap
- [ ] Verify ownership
- [ ] Monitor indexing

### P5.12 Social/Profile Consistency ��� PARTIAL
- [ ] GitHub: "AI Engineer & ML Systems Builder"
- [ ] LinkedIn: Same positioning
- [ ] Portfolio: Same facts
- [ ] Resume: Same flagship projects

### P5.13 Internal Linking ��� PARTIAL
- [ ] DMLF → Aster (infrastructure)
- [ ] Speech → IEEE publication
- [ ] Brain MRI → Research methodology
- [ ] Blog → Project case studies
- [ ] Project → Related projects

### P5.14 Content SEO ��� PARTIAL
- [ ] Technical headings (not generic)
- [ ] Image alt text for diagrams
- [ ] Descriptive link text

### P5.15 Favicon/Branding ��� PARTIAL
- [ ] Replace placeholder favicons with proper icons
- [ ] Add Apple touch icon (proper)
- [x] Add manifest.json
- [x] Theme color

---

## Completed Implementation Summary

### Files Created/Modified:
- `app/layout.tsx` - Global metadata, OG, Twitter, JSON-LD, StructuredData
- `app/page.tsx` - Homepage metadata
- `app/projects/page.tsx` + `ProjectsClient.tsx` - Projects listing
- `app/projects/[id]/page.tsx` + `ProjectCaseStudyClient.tsx` - Project detail with generateMetadata
- `app/research/page.tsx` + `ResearchClient.tsx` - Research page
- `app/research/[slug]/page.tsx` - Research notes with metadata
- `app/blog/page.tsx` - Blog index metadata
- `app/blog/[slug]/page.tsx` - Blog post metadata with generateMetadata
- `app/resume/page.tsx` + `ResumeClient.tsx` - Resume page
- `app/sitemap.ts` - Auto-generated sitemap
- `app/robots.ts` - Robots.txt generation
- `components/seo/StructuredData.tsx` - JSON-LD schemas
- `public/site.webmanifest` - PWA manifest
- `public/og-image.svg` - OG image placeholder
- `public/og-image.png` - Placeholder (needs proper PNG)
- `public/favicon.ico` + variants - Placeholder icons

### Build Status: �� PASSING
### Lint Status: �� CLEAN (1 minor warning)

---

## Next Steps (Remaining for Phase 5 Completion)

1. **Convert OG SVG to PNG** (1200x630)
2. **Create proper favicon.ico, apple-touch-icon.png, favicon-192x192.png, favicon-512x512.png**
3. **Add alt text to ArchitectureDiagram components** �� DONE
4. **Add project → related projects cross-linking**
5. **Configure analytics (Plausible/Umami)**
6. **Submit to Google Search Console**
7. **Update GitHub/LinkedIn profiles to match positioning**