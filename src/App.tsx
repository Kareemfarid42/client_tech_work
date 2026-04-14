import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import SkipToContent from "@/components/SkipToContent";
import { StructuredData, organizationData, websiteData } from "@/components/StructuredData";
import { HeroSkeleton, SectionSkeleton } from "@/components/ui/skeleton";

// Eager load the main Index page for better initial experience
import Index from "./pages/Index";

// Lazy load other pages for code splitting
const About = lazy(() => import("./pages/About"));
const Industry = lazy(() => import("./pages/Industry"));
const FranchiseLandingPage = lazy(() => import("./pages/FranchiseLandingPage"));
const DLP_1 = lazy(() => import("./pages/DLP_1"));
const DLP_2 = lazy(() => import("./pages/DLP_2"));
const MloLandingPage = lazy(() => import("./pages/MloLandingPage"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const PerformanceAudits = lazy(() => import("./pages/PerformanceAudits"));
const SampleReport = lazy(() => import("./pages/SampleReport"));
const ColorPreview = lazy(() => import("./pages/ColorPreview"));
const ColorPreview2 = lazy(() => import("./pages/ColorPreview2"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServerError = lazy(() => import("./pages/ServerError"));

const queryClient = new QueryClient();

// Enhanced loading fallback with skeleton
const PageLoader = () => (
  <div className="min-h-screen bg-background">
    <HeroSkeleton />
    <SectionSkeleton />
  </div>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Structured Data for SEO */}
        <StructuredData type="Organization" data={organizationData} />
        <StructuredData type="WebSite" data={websiteData} />

        {/* Accessibility: Skip to content link */}
        <SkipToContent />

        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/industry" element={<Industry />} />
              <Route path="/industry/franchises" element={<FranchiseLandingPage />} />
              <Route path="/industry/DLP_1" element={<DLP_1 />} />
              <Route path="/industry/DLP_2" element={<DLP_2 />} />
              <Route path="/industry/mlo" element={<MloLandingPage />} />
              <Route path="/audits" element={<PerformanceAudits />} />
              <Route path="/sample-report" element={<SampleReport />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/color-preview" element={<ColorPreview />} />
              <Route path="/color-preview-2" element={<ColorPreview2 />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsConditions />} />
              <Route path="/500" element={<ServerError />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
