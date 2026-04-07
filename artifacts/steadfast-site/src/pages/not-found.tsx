import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-[60vh] flex items-center justify-center py-24 px-4 bg-background">
      <div className="text-center max-w-lg mx-auto">
        <p className="text-6xl font-serif font-bold text-primary mb-4">404</p>
        <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Page Not Found</h1>
        <p className="text-muted-foreground text-lg mb-8">
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">Return to Homepage</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Get Help Now</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
