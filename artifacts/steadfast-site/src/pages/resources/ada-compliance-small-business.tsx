import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import danPhoto from "@assets/300x300_1775608612304.png";

export default function AdaComplianceSmallBusiness() {
  return (
    <>
      <Helmet>
        <title>ADA Website Compliance for Small Business: What You Need to Know | Steadfast Accessibility</title>
        <meta name="description" content="What ADA Title III requires for websites, what WCAG 2.1 AA means in plain English, who's most at risk, and how to get started." />
        <meta property="og:title" content="ADA Website Compliance for Small Business: What You Actually Need to Know" />
        <meta property="og:description" content="What ADA Title III requires, what WCAG 2.1 AA means in plain English, who's most at risk, and how to protect your business." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://steadfast-accessibility.com/resources/ada-compliance-small-business" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ADA Website Compliance for Small Business: What You Actually Need to Know" />
        <meta name="twitter:description" content="What ADA Title III requires, what WCAG 2.1 AA means in plain English, who's most at risk, and how to protect your business." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "ADA Website Compliance for Small Business: What You Actually Need to Know",
            "author": {
              "@type": "Person",
              "name": "Dan Harrison"
            }
          })}
        </script>
      </Helmet>

      <article className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto max-w-[720px]">
          <Link href="/resources" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resources
          </Link>
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6 leading-tight">
              ADA Website Compliance for Small Business: What You Actually Need to Know
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground border-b border-border pb-8">
              <img src={danPhoto} alt="Dan Harrison" className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
              <div>
                <div className="font-medium text-foreground">Dan Harrison</div>
                <div className="text-sm">IAAP CPACC, DHS Trusted Tester</div>
              </div>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8">
              For years, ADA compliance was thought of as ramps, elevators, and braille signage. Today, the front door to your business is digital, and the law applies there too. Here is the plain-English guide to what you need to know.
            </p>

            <h2>Title III and the Courts</h2>
            <p>
              Title III of the Americans with Disabilities Act (ADA) prohibits discrimination on the basis of disability in "places of public accommodation." While the ADA was written before the internet existed, courts across the country have ruled that websites are places of public accommodation. 
            </p>
            <p>
              If your website sells products, allows reservations, or provides information necessary to access your physical business, it must be accessible to people with disabilities (such as those who are blind, deaf, or unable to use a mouse).
            </p>

            <h2>What is WCAG 2.1 AA?</h2>
            <p>
              The ADA does not provide specific technical rules for websites. However, the courts and the Department of Justice universally look to the <strong>Web Content Accessibility Guidelines (WCAG)</strong>.
            </p>
            <p>
              Specifically, <strong>WCAG 2.1 Level AA</strong> is the accepted legal standard. It is a set of technical requirements covering things like:
            </p>
            <ul>
              <li><strong>Keyboard navigation:</strong> Can a user operate the entire site using only a keyboard?</li>
              <li><strong>Screen reader compatibility:</strong> Does the code correctly announce headings, buttons, and image alt-text to a blind user?</li>
              <li><strong>Color contrast:</strong> Is text readable for people with low vision?</li>
              <li><strong>Error identification:</strong> When a user fills out a form incorrectly, is the error clearly explained?</li>
            </ul>

            <h2>Who is at Risk?</h2>
            <p>
              Small businesses are the primary targets of litigation. E-commerce stores (especially Shopify and WooCommerce) face immense risk because a user's inability to complete a checkout process represents a clear denial of service. In recent years, lawsuits against Shopify stores have spiked by over 2,000%. Restaurants, local services, and boutique retailers are equally targeted.
            </p>

            <h2>The Deadline Approaching</h2>
            <p>
              While the private sector is governed by Title III, the DOJ recently published explicit technical rules for Title II (state and local governments), requiring strict WCAG 2.1 AA compliance by April 24, 2026. This codification of WCAG into federal regulations is widely expected to trigger a massive new wave of private-sector Title III lawsuits as plaintiff attorneys use the new federal standard as a bludgeon.
            </p>

            <h2>Demonstrating "Good Faith"</h2>
            <p>
              Perfection is incredibly difficult on a dynamic website. What courts look for is a "good faith effort." This means:
            </p>
            <ol>
              <li>You have an Accessibility Statement on your site providing contact info for users who need help.</li>
              <li>You have conducted a legitimate, manual audit by qualified professionals (not just an automated scanner).</li>
              <li>You have a documented roadmap for fixing the issues and are actively working on it.</li>
            </ol>
            <p>
              Installing an automated overlay widget does <em>not</em> constitute a good faith effort, as it does not fix the underlying code.
            </p>
          </div>

          <div className="mt-16 p-8 bg-muted/50 rounded-2xl border border-border">
            <h3 className="text-2xl font-serif font-bold mb-4">Start your good faith effort today.</h3>
            <p className="text-muted-foreground mb-6">A proper audit is the first step to protecting your business. Let's find out where you stand.</p>
            <Button asChild>
              <Link href="/contact">Request an Audit</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}
