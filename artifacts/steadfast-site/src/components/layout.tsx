import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SteadfastLogo } from "@/components/steadfast-logo";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-primary-foreground top-0 left-0"
      >
        Skip to main content
      </a>
      
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 leading-none" aria-label="Let Everyone In – home">
            <SteadfastLogo style={{ fontSize: "1.35rem" }} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={`hover:text-primary transition-colors ${location === link.href ? "text-primary" : ""}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2">
              Get Help
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-30 bg-background md:hidden p-4 border-t">
          <nav aria-label="Mobile Navigation" className="flex flex-col h-full">
            <ul className="flex flex-col gap-6 text-lg font-medium text-foreground p-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block w-full py-2 border-b border-border/50">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 px-4">
              <Link href="/contact" className="flex w-full items-center justify-center rounded-md text-base font-medium bg-primary text-primary-foreground h-12 px-6 py-2">
                Get Help Now
              </Link>
            </div>
          </nav>
        </div>
      )}

      <main id="main-content" className="flex-1 flex flex-col">
        {children}
      </main>

      <footer className="bg-primary text-primary-foreground py-16 mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-4 inline-block leading-none">
              <SteadfastLogo invertText style={{ fontSize: "1.35rem" }} />
            </Link>
            <p className="text-primary-foreground/80 max-w-sm mb-6">
              Expert-led accessibility remediation for small businesses facing legal threats.
            </p>
            <p className="text-primary-foreground/80 font-medium">
              <a href="mailto:dan@leteveryonein.com" className="hover:underline">
                dan@leteveryonein.com
              </a>
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><Link href="/accessibility" className="hover:text-white transition-colors">Accessibility Statement</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 Let Everyone In. A service of Steadfast Accessibility LLC.
          </p>
          <p className="text-primary-foreground/60 text-sm text-center md:text-right">
            This website is built to WCAG 2.1 AA standards — because we practice what we preach.
          </p>
        </div>
      </footer>
    </div>
  );
}
