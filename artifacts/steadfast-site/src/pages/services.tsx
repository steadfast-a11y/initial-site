import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowRight, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Steadfast Accessibility</title>
        <meta name="description" content="Steadfast Accessibility offers three tiers of accessibility auditing and remediation to help small businesses respond to ADA lawsuits." />
      </Helmet>

      <section className="pt-20 pb-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">Clear Pricing. Expert Guidance.</h1>
          <p className="text-xl text-muted-foreground">
            Enterprise-grade accessibility auditing sized and priced for small business realities.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground">How we move you from exposed to protected.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "1", title: "You tell us what happened", desc: "Demand letter, customer complaint, or proactive protection." },
              { num: "2", title: "We audit your site", desc: "Automated scanning + screen reader + keyboard testing + expert review." },
              { num: "3", title: "You get a playbook", desc: "Prioritized, step-by-step with screenshots and platform instructions." },
              { num: "4", title: "You fix it", desc: "With our support — weekly check-ins, prioritization, and legal documentation." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-serif font-bold text-primary/10 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30 border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Panic Button */}
            <div className="bg-background rounded-2xl border border-border p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Panic Button</h3>
                <div className="text-4xl font-serif mb-2">$2,500</div>
                <p className="text-sm font-medium text-destructive mb-4">Best for: demand letter received this week</p>
                <p className="text-muted-foreground text-sm">Timeline: 7 business days</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <span className="text-sm">Audit of 5–10 critical pages</span></li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <span className="text-sm">Top 20 issues prioritized by legal risk</span></li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <span className="text-sm">Quick-fix instructions</span></li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <span className="text-sm">Compliance posture statement</span></li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <span className="text-sm">1 check-in call</span></li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact">Select Plan</Link>
              </Button>
            </div>

            {/* Fix It Right */}
            <div className="bg-background rounded-2xl border-2 border-primary p-8 flex flex-col relative shadow-lg transform lg:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Fix It Right</h3>
                <div className="text-4xl font-serif mb-2">$5,000</div>
                <p className="text-sm font-medium text-primary mb-4">Best for: fix accessibility properly</p>
                <p className="text-muted-foreground text-sm">Timeline: 8-week engagement</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <span className="text-sm">Audit of up to 30 pages (automated + NVDA/JAWS + keyboard + manual)</span></li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <span className="text-sm">Full remediation playbook with annotated screenshots</span></li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <span className="text-sm">Prioritized roadmap</span></li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <span className="text-sm">Weekly check-in calls (8 total)</span></li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <span className="text-sm">Compliance documentation package</span></li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <span className="text-sm">Overlay assessment and removal plan</span></li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/contact">Select Plan</Link>
              </Button>
            </div>

            {/* Stay Protected */}
            <div className="bg-background rounded-2xl border border-border p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Stay Protected</h3>
                <div className="text-4xl font-serif mb-2">$8,000</div>
                <p className="text-sm font-medium text-muted-foreground mb-4">Best for: sued before or staying ahead</p>
                <p className="text-muted-foreground text-sm">Timeline: 12-week + 1-year health check</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <span className="text-sm">Everything in Fix It Right + 50 pages</span></li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <span className="text-sm">iOS VoiceOver mobile testing</span></li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <span className="text-sm">Design-level recommendations</span></li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <span className="text-sm">Post-remediation QA audit</span></li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <span className="text-sm">1-year follow-up health check</span></li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <span className="text-sm">Ongoing compliance documentation</span></li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact">Select Plan</Link>
              </Button>
            </div>

          </div>

          {/* Add-on */}
          <div className="mt-12 bg-muted rounded-xl p-6 border border-border flex flex-col md:flex-row justify-between items-center gap-6 max-w-4xl mx-auto">
            <div>
              <h4 className="text-lg font-bold flex items-center gap-2">Add-On: Overlay Removal <span className="text-muted-foreground font-normal ml-2">$1,500</span></h4>
              <p className="text-sm text-muted-foreground mt-2 max-w-xl">
                Systematic removal of accessiBe/UserWay/similar, re-audit revealing what overlay was hiding, before/after documentation, and remediation guidance for masked issues.
              </p>
            </div>
            <Button variant="secondary" asChild>
              <Link href="/contact">Add to Plan</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">What You Actually Get</h2>
            <p className="text-lg text-muted-foreground">Deliverables designed for action, not just a list of errors.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-muted/30 p-6 rounded-xl border border-border">
              <h4 className="font-bold text-lg mb-2">Executive Summary</h4>
              <p className="text-muted-foreground text-sm">60-second read: how many issues, how serious, what to fix first.</p>
            </div>
            <div className="bg-muted/30 p-6 rounded-xl border border-border">
              <h4 className="font-bold text-lg mb-2">Prioritized Issue List</h4>
              <p className="text-muted-foreground text-sm">Every issue ranked by legal risk and severity, not just WCAG codes.</p>
            </div>
            <div className="bg-muted/30 p-6 rounded-xl border border-border">
              <h4 className="font-bold text-lg mb-2">Remediation Playbook</h4>
              <p className="text-muted-foreground text-sm">Step-by-step fix instructions with screenshots for Shopify/WooCommerce/Squarespace.</p>
            </div>
            <div className="bg-muted/30 p-6 rounded-xl border border-border">
              <h4 className="font-bold text-lg mb-2">Compliance Posture Statement</h4>
              <p className="text-muted-foreground text-sm">Language your attorney can use to demonstrate good-faith remediation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Not sure which tier you need?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">Reach out and we'll help you figure it out.</p>
          <Button size="lg" variant="secondary" asChild className="h-14 px-8 text-lg">
            <Link href="/contact">Get in Touch <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
