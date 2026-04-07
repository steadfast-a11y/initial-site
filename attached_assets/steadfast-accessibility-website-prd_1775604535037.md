# Steadfast Accessibility — Website PRD
### For Development on Replit
**Version 1.0 — April 7, 2026**
**Prepared by Dan Harrison** | dan@steadfast-accessibility.com

---

## 1. Overview

Build a marketing website for **Steadfast Accessibility LLC** at **https://steadfast-accessibility.com/** — a productized accessibility consulting service that helps small businesses find what's broken on their website, tells them exactly how to fix it in plain English, and gives them documentation proving they're taking accessibility seriously.

This is a marketing and lead-generation site. It is NOT the internal audit tool or client portal (those are separate projects). The site's job is to convert panicked business owners who just received an ADA demand letter into qualified leads who fill out the inquiry form.

**Target launch:** As soon as possible. The site should be functional and professional on day one, with content that can be iterated over time.

---

## 2. Target Audience

### Primary: "The Panicked Owner"

- **Who:** E-commerce store or restaurant owner, $500K–$25M annual revenue, ages 30–55
- **Tech level:** Not deeply technical. Runs Shopify, WooCommerce, or Squarespace. Does not want to become an accessibility expert.
- **Location:** High-lawsuit states — New York, Florida, California, Illinois
- **Trigger event:** Received an ADA demand letter, customer complaint, or insurance flag about website accessibility
- **Emotional state when they arrive:** Scared, overwhelmed, time-pressured. Searching for someone trustworthy who can tell them exactly what to do. They do NOT want jargon, they want clarity and reassurance.
- **How they find the site:** Google searches like "ADA website lawsuit what do I do," "website accessibility demand letter," "ADA compliance for small business cost," "Shopify ADA compliant," "restaurant website ADA lawsuit," "accessiBe lawsuit"

### Secondary: "The Liable Agency"

- **Who:** Marketing agencies and web dev shops who built inaccessible sites for their clients
- **Trigger:** Client got sued or received a demand letter; agency realizes they may be liable too (Bashin v. Conduent established a $2M precedent for holding developers liable)
- **What they need:** An accessibility partner to protect client relationships and their own exposure

---

## 3. Tech Stack

- **Framework:** Next.js (App Router) with React
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (primary) or Cloudflare Pages
- **Form handling:** Server action or API route that sends form submissions via email (to dan@steadfast-accessibility.com) and optionally stores them in a lightweight database (Supabase or Cloudflare D1)
- **Analytics:** Plausible Analytics or Vercel Analytics (privacy-respecting, no cookie banners needed)
- **SEO:** Next.js metadata API, sitemap.xml, robots.txt, Open Graph tags
- **Fonts:** System font stack or a clean sans-serif (Inter, DM Sans, or similar)
- **Icons:** Lucide React or Heroicons

---

## 4. Design Direction

### Visual Identity

The site should feel **professional, trustworthy, and calm** — like walking into the office of someone who knows exactly how to help you. The audience is in crisis mode; the design should de-escalate, not add to the noise.

- **Primary palette:** Deep navy or slate blue (#1a2744 or similar) paired with white and a warm accent (amber/gold for CTAs, or a teal/green for "safety" signaling)
- **Typography:** Clean, highly readable sans-serif. Large body text (18px minimum) to signal accessibility-first thinking. The site itself must be a demonstration of excellent accessibility.
- **Layout:** Generous whitespace. No visual clutter. Clear visual hierarchy. Single-column content sections with maximum readability.
- **Imagery:** Minimal stock photography. Use simple geometric illustrations or icons to communicate concepts. If photos are used, they should show real small businesses (not generic corporate stock).
- **Tone:** Authoritative but not intimidating. Empathetic but not patronizing. Direct and plain-spoken. No jargon without explanation.

### Accessibility Requirements (Non-Negotiable)

The site itself MUST be a showcase of accessibility best practices. This is the product's calling card.

- WCAG 2.1 AA compliant across every page
- Proper semantic HTML throughout (headings, landmarks, lists, forms)
- Full keyboard navigability with visible focus indicators
- All images have meaningful alt text
- Color contrast ratios meet or exceed 4.5:1 for normal text, 3:1 for large text
- Form inputs have associated labels
- Skip navigation link
- Responsive and functional on mobile screen readers (VoiceOver, TalkBack)
- No auto-playing media, no content that flashes
- aria-live regions for any dynamic content updates

---

## 5. Site Map & Page Specifications

### 5.1 Homepage (/)

**Purpose:** Immediately communicate what Steadfast Accessibility does, who it's for, and why it's different — then drive visitors to the inquiry form.

**Sections (top to bottom):**

#### Hero Section
- **Headline:** "Your Website Got You Sued. We'll Help You Fix It."
- **Subheadline:** "Steadfast Accessibility finds what's broken, tells you exactly how to fix it in plain English, and gives you the documentation your attorney needs — at a price built for small business, not Fortune 500."
- **Primary CTA button:** "Get Help Now" → scrolls to or links to the inquiry form on the Contact page
- **Secondary CTA:** "See How We're Different" → scrolls to the differentiator section
- **Optional:** A single trust stat in the hero area, e.g., "5,100+ ADA website lawsuits filed in 2025. Is your business next?"

#### The Problem Section
- **Section headline:** "The Accessibility Crisis Hitting Small Business"
- **Content direction:** 3–4 short, punchy stats that make the problem visceral and urgent. Use the strongest data from the market research:
  - "Every 10 minutes, a small business receives an ADA demand letter over their website — that's 50,000+ per year."
  - "64–70% of ADA website lawsuits target companies under $25M in revenue."
  - "Restaurants are the #1 most-sued category, accounting for 35% of all filings."
  - "40% of businesses that get sued get sued again."
- **Tone:** Factual, not fear-mongering. Let the numbers speak.
- **CTA:** "You don't have to figure this out alone." → link to contact

#### Why Overlays Don't Work Section
- **Section headline:** "If Someone Told You to Install a Widget, Read This"
- **Content direction:** This is a key differentiator and SEO play. Address the overlay problem directly:
  - The FTC fined accessiBe $1M in January 2025 for misleading accessibility claims
  - Overlays are now cited as barriers in 25% of ADA lawsuits — installing one can make you a bigger target
  - UserWay is facing a class-action lawsuit
  - Over 600 accessibility professionals have signed a public statement against overlay widgets
- **Key message:** "Overlays are a band-aid on a broken bone. They modify how your site looks to assistive technology without fixing the underlying problems. That's why courts and regulators aren't buying it — and neither should you."
- **CTA:** "We do it the right way." → link to Services page

#### How We're Different Section
- **Section headline:** "Enterprise-Quality Audits at Small Business Prices"
- **Content direction:** A comparison showing the current market landscape and where Steadfast Accessibility fits. Present as a visual comparison (cards, table, or side-by-side):

  | What's Out There | The Problem |
  |---|---|
  | Overlay widgets ($49–$350/mo) | FTC-fined. Cited as barriers in lawsuits. |
  | Free scanners (WAVE, Lighthouse) | Only catch 30–40% of issues. Can't interpret the results. |
  | Freelance auditors ($1,200–$2,700) | Deliver a spreadsheet and disappear. No guidance. |
  | Enterprise firms ($15K–$50K+) | Built for Fortune 500. Won't take your call. |
  | Law firms ($2K+/hour) | Handle the legal threat. Don't fix the website. |

  Then: "**Steadfast Accessibility fills the gap.** Comprehensive audit + plain-English remediation playbook + implementation support. $2,500–$8,000."

- **Key differentiator callout:** "Our deliverable isn't a spreadsheet of violations. It's a step-by-step remediation playbook with annotated screenshots and instructions written for your platform — Shopify, WooCommerce, or Squarespace. You or your developer will know exactly what to fix, in what order, and why it matters."

#### Service Tiers Preview
- **Section headline:** "Three Ways We Can Help"
- **Content direction:** Brief cards for each tier linking to the full Services page. Keep it scannable:
  - **Panic Button** — $2,500 — "You got a demand letter this week. We'll find the top issues and give you a plan in 7 days."
  - **Fix It Right** — $5,000 — "Comprehensive audit with a step-by-step remediation playbook and 8 weeks of support."
  - **Stay Protected** — $8,000 — "Full audit, design recommendations, post-launch QA, and a 1-year health check."
- **CTA on each card:** "Learn More" → Services page

#### Credibility Section
- **Section headline:** "Who's Behind Steadfast Accessibility"
- **Content direction:** Brief founder credibility without a full bio page:
  - "Led by Dan Harrison — 13 years as Executive Director of UX Design at JPMorgan Chase, where he led accessibility strategy across enterprise digital products."
  - Credentials: DHS Trusted Tester v5 Certified, IAAP CPACC, IAAP WAS (list whichever are confirmed at launch)
  - Trained by Deque University, WebAIM, and Knowbility AccessU
  - "We use real assistive technology — screen readers, keyboard testing, manual evaluation — not just automated scanners. Because that's what holds up in court."
- **CTA:** "Ready to get started?" → contact form

#### Final CTA Section
- **Headline:** "Every Day You Wait Is Another Day You're Exposed"
- **Subheadline:** "A 15-minute call costs you nothing. A lawsuit costs you $60,000–$200,000+."
- **CTA button:** "Get Help Now" → Contact page

---

### 5.2 Services Page (/services)

**Purpose:** Detailed breakdown of each service tier so prospects can self-select the right engagement level.

**Sections:**

#### Page Header
- **Headline:** "What We Do"
- **Intro paragraph:** "We audit your website for ADA accessibility issues using real assistive technology — screen readers, keyboard testing, and expert manual evaluation — then deliver a plain-English remediation playbook your team can actually follow. No jargon. No spreadsheets of error codes. A step-by-step plan to fix what's broken and document your good-faith effort."

#### How Our Process Works
A brief 4-step visual (numbered steps, icons, or a simple diagram):
1. **You tell us what happened** — Demand letter? Customer complaint? Just want to get ahead of it? We'll understand your situation.
2. **We audit your site with real tools** — Automated scanning catches the obvious issues. Screen readers and keyboard testing catch what scanners miss. Our expert review ties it all together.
3. **You get a remediation playbook** — Not a list of WCAG codes. A prioritized, step-by-step guide with screenshots and platform-specific instructions your developer can follow.
4. **You fix it with our support** — Weekly check-ins, prioritization guidance, and documentation your attorney can use to demonstrate good faith.

#### Service Tier Details

For each tier, include:

**"Panic Button" — $2,500**
- **Best for:** You received a demand letter and need a plan fast
- **Timeline:** 7 business days
- **What's included:**
  - Audit of your 5–10 most critical pages (homepage, product pages, cart, checkout, contact)
  - Top 20 issues identified and prioritized by legal risk
  - Quick-fix instructions for each issue, written for your platform
  - Compliance posture statement your attorney can reference in the demand letter response
  - 1 check-in call to walk through findings

**"Fix It Right" — $5,000 (Most Popular)**
- **Best for:** You want to fix accessibility properly, not just patch the emergency
- **Timeline:** 8-week engagement
- **What's included:**
  - Comprehensive audit of up to 30 pages using automated scanning, screen reader testing (NVDA + JAWS), keyboard testing, and manual evaluation
  - Full remediation playbook with annotated screenshots and platform-specific instructions
  - Prioritized roadmap: what to fix first, what can wait, and why
  - Weekly check-in calls (8 total) for implementation support
  - Compliance documentation package for your attorney
  - If you have an overlay installed: assessment of what it's masking and plan for removal

**"Stay Protected" — $8,000**
- **Best for:** You've been sued before (40% of defendants get sued again) or you want to stay ahead of litigation
- **Timeline:** 12-week engagement + 1-year health check
- **What's included:**
  - Everything in "Fix It Right"
  - Audit of up to 50 pages
  - Mobile accessibility testing (iOS VoiceOver)
  - Design-level recommendations for long-term accessibility
  - Post-remediation QA audit to verify fixes
  - 1-year follow-up health check
  - Ongoing compliance documentation

**Add-On: Overlay Removal — $1,500**
- **Best for:** You installed accessiBe, UserWay, or another overlay widget and want it gone properly
- **What's included:**
  - Systematic removal of the overlay
  - Re-audit to reveal what the overlay was hiding
  - Before/after documentation showing the real state of your site
  - Remediation guidance for the issues the overlay was masking

#### What You Get (Deliverable Highlights)
A visual section showing what the actual deliverable looks like (describe it since we won't have real samples yet):
- **Executive Summary** — 60-second read: how many issues, how serious, what to fix first
- **Prioritized Issue List** — Every issue ranked by legal risk and severity, not just WCAG error codes
- **Remediation Playbook** — Step-by-step fix instructions with screenshots, written for Shopify / WooCommerce / Squarespace
- **Compliance Posture Statement** — Language your attorney can use to demonstrate good-faith remediation

#### CTA
- "Not sure which tier you need? Reach out and we'll help you figure it out."
- Button: "Get in Touch" → Contact page

---

### 5.3 About Page (/about)

**Purpose:** Build trust and credibility. Show that this is a real person with real expertise, not an anonymous service.

**Sections:**

#### Dan Harrison Bio
- **Headline:** "Meet Dan Harrison"
- **Content direction:**
  - 13 years as Executive Director of UX Design at JPMorgan Chase — led multi-disciplinary design teams and pioneered accessibility strategy across enterprise digital products
  - Founding employee at Razorfish San Francisco during the first dot-com era
  - Founded Steadfast Accessibility to bring enterprise-quality accessibility auditing to the small businesses that need it most — and can least afford the Fortune 500 price tag
  - Deeply embedded in the San Francisco AI and design community
- **Credentials list:**
  - DHS Trusted Tester v5 Certified
  - IAAP CPACC (Certified Professional in Accessibility Core Competencies)
  - IAAP WAS (Web Accessibility Specialist) — include whichever certifications are confirmed
  - Trained by Deque University, WebAIM, and Knowbility AccessU
- **Photo:** Professional headshot (Dan to provide)

#### Our Approach
- **Headline:** "Expert-Led Audits, Not Robot Reports"
- **Content direction:** Explain the three-layer methodology without revealing proprietary tooling:
  1. **Automated scanning** catches the obvious issues — the 30% that rule-based tools reliably detect
  2. **Manual assistive technology testing** catches the 40–50% that scanners miss — keyboard navigation, screen reader behavior, interactive components, mobile accessibility
  3. **Expert review and plain-English translation** turns raw findings into a remediation playbook a non-technical business owner can actually use
- **Key message:** "We test your site the same way a person with a disability would use it. Because that's what the ADA requires, and that's what holds up in a legal response."

#### Why This Matters to Dan (Personal Touch)
- A brief, human paragraph about why Dan started this business. Something like: the intersection of seeing how accessibility work protected JPMorgan from risk, and seeing small business owners describe receiving a lawsuit as "mentally taxing and scary" — knowing they have no affordable option that actually works.

---

### 5.4 Contact / Inquiry Page (/contact)

**Purpose:** This is the primary conversion page. Make it as frictionless as possible while collecting the information Dan needs to qualify leads and prepare for a conversation.

#### Page Header
- **Headline:** "Let's Talk About Your Site"
- **Subheadline:** "Tell us a bit about your situation. We'll get back to you within one business day."

#### Inquiry Form

**Fields:**

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Name | Text input | Yes | |
| Email | Email input | Yes | |
| Company | Text input | No | |
| Website URL | URL input | Yes | This is the most critical field — Dan needs to see the site |
| Budget Range | Select dropdown | No | Options: "Under $2,500" / "$2,500–$5,000" / "$5,000–$8,000" / "$8,000+" / "Not sure yet" |
| Timeline | Select dropdown | No | Options: "Urgent — I have a demand letter" / "Within 30 days" / "Within 90 days" / "Just exploring" |
| Tell us about your project | Textarea | Yes | Prompt text: "What's going on? Received a demand letter? Customer complaint? Just want to get ahead of it? The more context you share, the better we can help." |

**Form behavior:**
- On submission: show a confirmation message ("Thanks — we'll be in touch within one business day") and send the data to dan@steadfast-accessibility.com
- Store submissions in a database table for tracking
- No CAPTCHA unless spam becomes a problem (accessibility CAPTCHAs are ironic for this business)

#### Below the Form
- **Direct email:** dan@steadfast-accessibility.com
- **Response time:** "We respond within one business day."
- **Brief reassurance:** "Your information is confidential. We don't share your details with anyone."

---

### 5.5 Resources / Blog Section (/resources)

**Purpose:** SEO-driven content hub for the search terms target customers use. Also houses the anti-overlay thought leadership content.

**At launch, this can be a simple page with 2–3 initial articles.** The structure should support adding more over time.

**Initial content priorities (titles/topics):**

1. **"I Got an ADA Demand Letter About My Website — Now What?"**
   - The #1 SEO target. Step-by-step guide for a business owner who just received a demand letter. What it means, what to do first, what NOT to do (don't install an overlay), when to involve an attorney, what a real audit looks like.

2. **"Why Accessibility Overlays Don't Protect You (And Can Make Things Worse)"**
   - The anti-overlay cornerstone content. FTC fine against accessiBe, UserWay class action, 25% of lawsuits citing overlays as barriers, 600+ professionals against overlays. Position Steadfast Accessibility as the honest alternative.

3. **"ADA Website Compliance for Small Business: What You Actually Need to Know"**
   - Evergreen explainer. What the ADA requires for websites, what WCAG 2.1 AA means in plain English, who's at risk, what "good faith" looks like legally.

**Article page template:**
- Clean, readable layout (max-width ~720px for body text)
- Table of contents for longer articles
- Author byline with Dan's credentials
- Related articles at the bottom
- CTA at the end of every article: "Need help with your site? Get in touch." → Contact page

---

### 5.6 Global Elements

#### Navigation
- Logo (left): "Steadfast Accessibility" — text-based logo or simple wordmark
- Nav links: Home | Services | About | Resources | Contact
- CTA button (right, always visible): "Get Help" → Contact page
- Mobile: hamburger menu with full-screen overlay, keyboard-navigable

#### Footer
- Company name and tagline
- Navigation links (mirror main nav)
- Contact email: dan@steadfast-accessibility.com
- "© 2026 Steadfast Accessibility LLC. All rights reserved."
- Small note: "This website is built to WCAG 2.1 AA standards — because we practice what we preach."
- Optional: Link to accessibility statement page

#### Accessibility Statement Page (/accessibility)
- A brief, genuine accessibility statement:
  - What standards the site targets (WCAG 2.1 AA)
  - How to report an issue (email dan@steadfast-accessibility.com)
  - Commitment to ongoing improvement
- This is a trust signal and a demonstration of good practice

---

## 6. SEO Strategy

### Target Keywords (Priority Order)

| Keyword | Search Intent | Target Page |
|---------|---------------|-------------|
| ADA website lawsuit what do I do | Panic / informational | Resources article #1 |
| website accessibility demand letter | Panic / informational | Resources article #1 |
| ADA compliance for small business cost | Commercial investigation | Services page |
| Shopify ADA compliant | Commercial investigation | Resources article #3 |
| restaurant website ADA lawsuit | Panic / informational | Homepage + Resources |
| accessiBe lawsuit | Informational / commercial | Resources article #2 |
| website accessibility audit cost | Commercial investigation | Services page |
| ADA website compliance checklist | Informational | Resources article #3 |
| overlay widget accessibility | Informational | Resources article #2 |
| small business ADA website compliance | Commercial investigation | Homepage |

### Technical SEO Requirements

- Unique meta titles and descriptions for every page
- Proper heading hierarchy (one H1 per page, logical H2/H3 nesting)
- Sitemap.xml (auto-generated by Next.js)
- robots.txt allowing all crawlers
- Open Graph and Twitter Card meta tags for social sharing
- Structured data (JSON-LD): Organization schema on homepage, Article schema on blog posts, LocalBusiness schema with San Francisco location
- Fast page load times (target Lighthouse performance score 90+)
- All images optimized with next/image, meaningful alt text, and lazy loading

---

## 7. Content Tone & Voice Guide

### Voice Characteristics

- **Direct:** Say what you mean. No hedging, no corporate fluff. "Your site has problems. Here's how we fix them."
- **Empathetic:** Acknowledge the fear and confusion. "We know this is scary. That's exactly why we do this work."
- **Plain-spoken:** If a non-technical business owner wouldn't understand it, rewrite it. WCAG success criteria become "accessibility rules." Screen reader testing becomes "we test how blind and low-vision users actually experience your site."
- **Anti-jargon:** When technical terms are necessary, define them immediately. Never assume the reader knows what WCAG, ADA Title III, or ARIA means.
- **Confident, not arrogant:** "We've done this at JPMorgan Chase scale. Now we do it at your price point."

### Words and Phrases to USE

- "Plain English" / "step by step" / "exactly what to fix"
- "Real assistive technology" / "how people actually use your site"
- "Good-faith effort" / "documentation your attorney can use"
- "We find what's broken and tell you how to fix it"
- "Enterprise-quality at small business prices"

### Words and Phrases to AVOID

- "AI-powered" (never — see Risk Matrix note on AI positioning)
- "Compliance guaranteed" (legally dangerous — audits are point-in-time)
- "Automated" when describing the service (the value is human expertise)
- "Full compliance" / "100% accessible" (nothing is — this is a process, not a checkbox)
- Unexplained jargon: WCAG, SC, ARIA, DOM, a11y (without definitions)
- "Simple" or "easy" when describing accessibility work

---

## 8. Functional Requirements Summary

| Requirement | Details |
|---|---|
| **Responsive design** | Mobile-first. Must work beautifully on phone, tablet, and desktop. |
| **Page speed** | Lighthouse performance 90+. No heavy frameworks, no unnecessary JavaScript. |
| **Contact form** | Functional form that emails dan@steadfast-accessibility.com with all field data. Store submissions in DB. |
| **Blog/resources** | MDX or Markdown-based content pages. Easy to add new articles without redeploying. |
| **Analytics** | Privacy-respecting analytics (Plausible or Vercel Analytics). No cookie consent banner required. |
| **SSL** | HTTPS everywhere (handled by Vercel/Cloudflare). |
| **Accessibility** | WCAG 2.1 AA compliant. This is non-negotiable. Test with axe-core, keyboard, and a screen reader before launch. |
| **Performance** | Static generation or ISR for all marketing pages. No client-side rendering for content pages. |

---

## 9. Pages Not Needed at Launch

- Client portal / dashboard (separate project)
- Pricing calculator
- Live chat
- Blog comments
- Newsletter signup (can add later)
- Testimonials page (no testimonials yet — add client quotes as they come in)
- Case studies page (same — add after first engagements)

---

## 10. Launch Checklist

- [ ] All 6 pages live and functional (Home, Services, About, Contact, Resources, Accessibility Statement)
- [ ] Contact form tested and delivering emails to dan@steadfast-accessibility.com
- [ ] At least 1 resources article published (prioritize the demand letter response guide)
- [ ] WCAG 2.1 AA audit of the site itself (run axe-core, keyboard test, screen reader test)
- [ ] Meta titles, descriptions, and Open Graph tags on all pages
- [ ] Sitemap.xml and robots.txt in place
- [ ] Analytics installed
- [ ] Domain (steadfast-accessibility.com) connected and SSL active
- [ ] Favicon and social share image set
- [ ] Mobile responsive across iPhone, Android, tablet breakpoints
- [ ] 404 page with helpful navigation back to main pages

---

## 11. Success Metrics

| Metric | Target | Timeframe |
|---|---|---|
| Organic search impressions | 1,000+/month | Within 90 days |
| Contact form submissions | 10+/month | Within 90 days |
| Form-to-call conversion | 50%+ | Ongoing |
| Lighthouse accessibility score | 100 | At launch |
| Lighthouse performance score | 90+ | At launch |
| Time on Services page | 2+ minutes avg | Within 60 days |
| Resources article organic traffic | 100+ sessions/month per article | Within 120 days |

---

## 12. Reference Materials

All business context, market research, competitive analysis, pricing validation, and positioning decisions are documented in the following files (available in the project folder):

- `accessibility-business-ideation-context.md` — Master context: all market research, competitive landscape, risk matrix, pricing tiers, and verification data
- `accessibility-consulting-one-pager.md` — Business one-pager summary
- `accessibility-rescue-prd.md` — Full business/service PRD with target personas, go-to-market strategy, and success metrics
- `accessibility-business-execution-planning.md` — Execution plan with client acquisition channels, integrated timeline, and capacity model
- `accessibility-upskilling-and-certification-plan.md` — Dan's credentials timeline and what to display on the site
- `accessibility-audit-tool-build-prompt.md` — Technical details of the audit methodology (for the "How We're Different" / "Our Approach" sections)

### Key Data Points for Content (Quick Reference)

- 5,100+ ADA digital accessibility lawsuits filed in 2025, up 37% YoY
- 2026 projections: 7,000–8,500 federal cases
- Demand letters outnumber lawsuits 7–10x → 50,000–85,000 demand letters in 2026
- 64–70% of lawsuits target companies under $25M revenue
- Restaurants are #1 most-sued category (34.65% of all filings)
- 40% of defendants are repeat targets
- Average total cost (settlement + legal + remediation): $60,000–$200,000+
- FTC fined accessiBe $1M (January 2025)
- UserWay facing class-action lawsuit (Bloomsybox v. UserWay)
- 25% of lawsuits cite overlays as barriers
- 600+ accessibility professionals signed public statement against overlays
- Shopify stores face 2,314% more lawsuits; Shopify provides zero built-in compliance
- April 24, 2026 Title II deadline for public entities — major catalyst for new litigation wave

---

*End of PRD*
