import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Layout from "@/components/layout";

import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Resources from "@/pages/resources";
import Accessibility from "@/pages/accessibility";
import NotFound from "@/pages/not-found";

// Resources
import AdaDemandLetter from "@/pages/resources/ada-demand-letter";
import OverlaysDontWork from "@/pages/resources/overlays-dont-work";
import AdaComplianceSmallBusiness from "@/pages/resources/ada-compliance-small-business";

const queryClient = new QueryClient();

// Component to scroll to top on navigation
function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/resources" component={Resources} />
        <Route path="/resources/ada-demand-letter" component={AdaDemandLetter} />
        <Route path="/resources/overlays-dont-work" component={OverlaysDontWork} />
        <Route path="/resources/ada-compliance-small-business" component={AdaComplianceSmallBusiness} />
        <Route path="/accessibility" component={Accessibility} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
