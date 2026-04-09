import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Resources() {
  const articles = [
    {
      title: "I Got an ADA Demand Letter About My Website — Now What?",
      description: "Don't panic. A practical guide on what an ADA demand letter means, immediate steps to take, and how to protect your business legally and technically.",
      slug: "ada-demand-letter",
      date: "Jan 15, 2026",
    },
    {
      title: "Why Accessibility Overlays Don't Protect You (And Can Make Things Worse)",
      description: "The truth about accessiBe, UserWay, and other widgets. Why the FTC is fining them, and why courts consider them a barrier to access.",
      slug: "overlays-dont-work",
      date: "Feb 2, 2026",
    },
    {
      title: "ADA Website Compliance for Small Business: What You Actually Need to Know",
      description: "An evergreen explainer of ADA Title III, WCAG 2.1 AA, and what a 'good faith effort' really looks like to a judge.",
      slug: "ada-compliance-small-business",
      date: "Feb 28, 2026",
    }
  ];

  return (
    <>
      <Helmet>
        <title>ADA Accessibility Resources for Small Business | Let Everyone In</title>
        <meta name="description" content="Expert guides on ADA demand letters, why accessibility overlays fail, and what WCAG 2.1 AA compliance means for your business." />
        <meta property="og:title" content="ADA Accessibility Resources for Small Business | Let Everyone In" />
        <meta property="og:description" content="Guides on ADA demand letters, why accessibility overlays fail, and what WCAG 2.1 AA compliance means for your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://leteveryonein.com/resources" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ADA Accessibility Resources for Small Business | Let Everyone In" />
        <meta name="twitter:description" content="Guides on ADA demand letters, why accessibility overlays fail, and what WCAG 2.1 AA compliance means for your business." />
      </Helmet>

      <section className="pt-20 pb-16 px-4 bg-muted/30 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">Resources & Guides</h1>
          <p className="text-xl text-muted-foreground">
            Clear, actionable advice for small business owners navigating the complex world of web accessibility law.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {articles.map((article) => (
              <article key={article.slug} className="group flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl border border-border bg-card hover:shadow-md transition-all hover:border-primary/30">
                <div className="hidden md:flex shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <FileText className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-muted-foreground mb-2">{article.date}</div>
                  <h2 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                    <Link href={`/resources/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {article.description}
                  </p>
                  <Button variant="link" asChild className="p-0 h-auto font-medium">
                    <Link href={`/resources/${article.slug}`}>
                      Read Article <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30 border-t border-border text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl font-serif font-bold mb-4">Have a specific question?</h2>
          <p className="text-muted-foreground mb-8">We're here to help you understand your legal exposure and technical options.</p>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
