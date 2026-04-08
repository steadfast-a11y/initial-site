import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import danPhoto from "@assets/300x300_1775608612304.png";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Dan Harrison | Steadfast Accessibility</title>
        <meta name="description" content="13 years as Executive Director of UX Design at JPMorgan Chase. DHS Trusted Tester v5 Certified. IAAP CPACC. Now bringing enterprise-quality accessibility auditing to small businesses." />
        <meta property="og:title" content="About Dan Harrison | Steadfast Accessibility" />
        <meta property="og:description" content="13 years leading accessibility strategy at JPMorgan Chase. Now bringing enterprise-quality auditing to small businesses at small business prices." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://steadfast-accessibility.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Dan Harrison | Steadfast Accessibility" />
        <meta name="twitter:description" content="13 years leading accessibility strategy at JPMorgan Chase. Now bringing enterprise-quality auditing to small businesses." />
      </Helmet>

      <section className="pt-20 pb-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">Expertise When You Need It Most</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bringing enterprise-quality accessibility auditing to the small businesses that need it most.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="aspect-square rounded-2xl mb-8 border-4 border-muted shadow-lg overflow-hidden">
                <img src={danPhoto} alt="Dan Harrison, founder of Steadfast Accessibility" className="w-full h-full object-cover object-top" />
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">DHS Trusted Tester v5</span>
                <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">IAAP CPACC</span>
                <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">IAAP WAS</span>
              </div>
            </div>
            
            <div className="prose prose-lg dark:prose-invert">
              <h2 className="text-3xl font-serif font-bold text-foreground mt-0 mb-6">Dan Harrison</h2>
              <p className="lead text-xl text-muted-foreground mb-6">
                13 years as Executive Director of UX Design at JPMorgan Chase — led multi-disciplinary design teams and pioneered accessibility strategy across enterprise digital products.
              </p>
              <p>
                As a founding employee at Razorfish San Francisco during the first dot-com era, Dan has been building for the web since its early days. He is deeply embedded in the San Francisco AI and design community.
              </p>
              <p>
                He founded Steadfast Accessibility with a singular mission: to bring enterprise-quality accessibility auditing to small businesses that are facing a crisis.
              </p>
              <p>
                <strong>Training & Credentials:</strong> Trained by Deque University, WebAIM, and Knowbility AccessU. DHS Trusted Tester v5 Certified, IAAP CPACC, IAAP WAS.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/5 border-y border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Approach: Expert-Led Audits, Not Robot Reports</h2>
            <p className="text-xl text-muted-foreground">
              We test your site the same way a person with a disability would use it. Because that's what the ADA requires, and that's what holds up in a legal response.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shrink-0 mt-1">1</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Automated scanning catches ~30% of issues</h3>
                <p className="text-lg text-muted-foreground">The obvious ones rule-based tools reliably detect. It's a starting point, not a complete audit.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shrink-0 mt-1">2</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Manual assistive technology testing catches 40–50% that scanners miss</h3>
                <p className="text-lg text-muted-foreground">Keyboard navigation, screen reader behavior, interactive components, mobile accessibility. This is where real risk lives.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shrink-0 mt-1">3</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Expert review and plain-English translation</h3>
                <p className="text-lg text-muted-foreground">Turns raw findings into a remediation playbook a non-technical owner can actually follow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to protect your business?</h2>
          <Button size="lg" asChild className="h-14 px-8 text-lg w-full sm:w-auto">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
