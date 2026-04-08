import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ShieldAlert, Zap, AlertTriangle, FileText, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import danPhoto from "@assets/300x300_1775608612304.png";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ADA Website Accessibility Help for Small Business | Steadfast Accessibility</title>
        <meta name="description" content="Steadfast Accessibility helps small businesses respond to ADA website lawsuits. Get a plain-English remediation plan from an expert with 13 years at JPMorgan Chase." />
        <meta property="og:title" content="ADA Website Accessibility Help for Small Business | Steadfast Accessibility" />
        <meta property="og:description" content="Got an ADA demand letter? Steadfast Accessibility finds what's broken, tells you exactly how to fix it in plain English, and gives your attorney the documentation they need." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://steadfast-accessibility.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ADA Website Accessibility Help for Small Business | Steadfast Accessibility" />
        <meta name="twitter:description" content="Got an ADA demand letter? We find what's broken, tell you how to fix it in plain English, and give your attorney the documentation they need." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Steadfast Accessibility LLC",
            "url": "https://steadfast-accessibility.com",
            "founder": {
              "@type": "Person",
              "name": "Dan Harrison"
            },
            "description": "Accessibility consulting firm helping small businesses respond to ADA website lawsuits."
          })}
        </script>
      </Helmet>

      {/* Full-width Alert Banner */}
      <div role="note" className="w-full bg-destructive/10 border-b border-destructive/20 py-2.5 px-4">
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-red-800">
          <AlertTriangle className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>5,100+ ADA website lawsuits filed in 2025. Is your business next?</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-16 md:pt-24 md:pb-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-foreground mb-8 text-balance">
            Your Website Got You Sued.<br className="hidden md:block" /> We'll Help You Fix It.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Steadfast Accessibility finds what's broken, tells you exactly how to fix it in plain English, and gives you the documentation your attorney needs — at a price built for small business, not Fortune 500.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="h-14 px-8 text-lg w-full sm:w-auto">
              <Link href="/contact">Get Help Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 text-lg w-full sm:w-auto bg-background">
              <a href="#how-were-different">See How We're Different</a>
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">The Accessibility Crisis Hitting Small Business</h2>
            <p className="text-xl text-muted-foreground">The legal landscape has shifted. Small businesses are now the primary targets.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-muted/50 rounded-2xl p-8 border border-border">
              <div className="text-4xl font-bold text-primary mb-4">10<span className="text-xl text-muted-foreground font-normal"> min</span></div>
              <p className="text-foreground font-medium">Every 10 minutes, a small business receives an ADA demand letter — that's 50,000+ per year.</p>
            </div>
            <div className="bg-muted/50 rounded-2xl p-8 border border-border">
              <div className="text-4xl font-bold text-primary mb-4">70<span className="text-xl text-muted-foreground font-normal">%</span></div>
              <p className="text-foreground font-medium">64–70% of ADA website lawsuits target companies under $25M in revenue.</p>
            </div>
            <div className="bg-muted/50 rounded-2xl p-8 border border-border">
              <div className="text-4xl font-bold text-primary mb-4">#1</div>
              <p className="text-foreground font-medium">Restaurants are the #1 most-sued category, accounting for 35% of all filings.</p>
            </div>
            <div className="bg-muted/50 rounded-2xl p-8 border border-border">
              <div className="text-4xl font-bold text-primary mb-4">40<span className="text-xl text-muted-foreground font-normal">%</span></div>
              <p className="text-foreground font-medium">40% of businesses that get sued get sued again.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overlays Don't Work */}
      <section className="py-20 md:py-32 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ShieldAlert className="w-16 h-16 text-primary-foreground/80 mb-8" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6 text-balance">If Someone Told You to Install a Widget, Read This</h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                Overlays are a band-aid on a broken bone. They modify how your site looks to assistive technology without fixing the underlying problems. That's why courts and regulators aren't buying it — and neither should you.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/resources/overlays-dont-work">Read the Full Report</Link>
              </Button>
            </div>
            <div className="bg-primary-foreground/10 rounded-2xl p-8 backdrop-blur-sm border border-primary-foreground/20">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground mt-2.5 flex-shrink-0" />
                  <p className="text-lg">The FTC fined accessiBe $1M in January 2025 for misleading accessibility claims.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground mt-2.5 flex-shrink-0" />
                  <p className="text-lg">Overlays are cited as barriers in 25% of ADA lawsuits.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground mt-2.5 flex-shrink-0" />
                  <p className="text-lg">UserWay is facing a class-action lawsuit for failing to provide actual accessibility.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground mt-2.5 flex-shrink-0" />
                  <p className="text-lg">Over 600 accessibility professionals have signed a public statement against overlays.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="how-were-different" className="py-20 md:py-32 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">How We're Different</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The accessibility industry wasn't built for small businesses. We changed that.
            </p>
          </div>

          <div className="bg-background rounded-2xl border border-border overflow-hidden mb-12 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-6 font-semibold text-foreground text-lg w-1/3">What's Out There</th>
                    <th className="p-6 font-semibold text-foreground text-lg w-2/3 border-l border-border">The Problem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-6 font-medium">Overlay widgets<br/><span className="text-muted-foreground text-sm font-normal">$49–$350/mo</span></td>
                    <td className="p-6 text-muted-foreground border-l border-border">FTC-fined. Cited as barriers in lawsuits.</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Free scanners<br/><span className="text-muted-foreground text-sm font-normal">WAVE, Lighthouse</span></td>
                    <td className="p-6 text-muted-foreground border-l border-border">Only catch 30–40% of issues. Can't interpret the results.</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Freelance auditors<br/><span className="text-muted-foreground text-sm font-normal">$1,200–$2,700</span></td>
                    <td className="p-6 text-muted-foreground border-l border-border">Deliver a spreadsheet and disappear. No guidance.</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Enterprise firms<br/><span className="text-muted-foreground text-sm font-normal">$15K–$50K+</span></td>
                    <td className="p-6 text-muted-foreground border-l border-border">Built for Fortune 500. Won't take your call.</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Law firms<br/><span className="text-muted-foreground text-sm font-normal">$2K+/hour</span></td>
                    <td className="p-6 text-muted-foreground border-l border-border">Handle the legal threat. Don't fix the website.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center max-w-3xl mx-auto">
            <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Steadfast Accessibility fills the gap.</h3>
            <p className="text-lg text-muted-foreground">
              Comprehensive audit + plain-English remediation playbook + implementation support.<br/>
              <strong className="text-foreground mt-2 inline-block">$2,500–$8,000.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">Three Ways We Can Help</h2>
            <p className="text-xl text-muted-foreground">Tailored solutions based on your urgency and needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="rounded-2xl border border-border p-8 bg-background flex flex-col hover:border-primary/50 transition-colors">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Panic Button</h3>
                <div className="text-3xl font-serif mb-4">$2,500</div>
                <p className="text-muted-foreground">You got a demand letter this week. We'll find the top issues and give you a plan in 7 days.</p>
              </div>
              <div className="mt-auto pt-6 border-t border-border">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/services">View Details</Link>
                </Button>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="rounded-2xl border-2 border-primary p-8 bg-background flex flex-col relative shadow-md">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Fix It Right</h3>
                <div className="text-3xl font-serif mb-4">$5,000</div>
                <p className="text-muted-foreground">Comprehensive audit with a step-by-step remediation playbook and 8 weeks of support.</p>
              </div>
              <div className="mt-auto pt-6 border-t border-border">
                <Button className="w-full" asChild>
                  <Link href="/services">View Details</Link>
                </Button>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="rounded-2xl border border-border p-8 bg-background flex flex-col hover:border-primary/50 transition-colors">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Stay Protected</h3>
                <div className="text-3xl font-serif mb-4">$8,000</div>
                <p className="text-muted-foreground">Full audit, design recommendations, post-launch QA, and a 1-year health check.</p>
              </div>
              <div className="mt-auto pt-6 border-t border-border">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/services">View Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-20 md:py-32 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-primary/10 border-4 border-background shadow-lg">
                <img src={danPhoto} alt="Dan Harrison, founder of Steadfast Accessibility" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-6">Expert-Led Audits, Not Robot Reports</h2>
              <div className="space-y-6 text-lg text-foreground">
                <p>
                  Led by <strong>Dan Harrison</strong> — 13 years as Executive Director of UX Design at JPMorgan Chase, where he led accessibility strategy across enterprise digital products.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">DHS Trusted Tester v5 Certified</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">IAAP CPACC</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">IAAP WAS</span>
                </div>
                <p className="text-muted-foreground">
                  Trained by Deque University, WebAIM, and Knowbility AccessU.
                </p>
                <blockquote className="pl-6 border-l-4 border-primary text-xl italic font-serif text-foreground/90 mt-8">
                  "We use real assistive technology — screen readers, keyboard testing, manual evaluation — not just automated scanners. Because that's what holds up in court."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 px-4 bg-background border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">Every Day You Wait Is Another Day You're Exposed</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            A 15-minute call costs you nothing. A lawsuit costs you $60,000–$200,000+.
          </p>
          <Button size="lg" asChild className="h-16 px-10 text-xl w-full sm:w-auto shadow-lg">
            <Link href="/contact">Get Help Now <ArrowRight className="ml-2 w-6 h-6" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
