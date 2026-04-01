import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-background p-4">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative inline-block">
              <h1 className="text-[150px] sm:text-[200px] font-display font-bold text-primary/10 leading-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                  <Search className="w-16 h-16 text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.history.back()}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
            <Link to="/">
              <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                <Home className="w-4 h-4" />
                Back to Homepage
              </Button>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              You might be interested in:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/about" className="text-sm text-primary hover:underline">
                About Us
              </Link>
              <Link to="/industry" className="text-sm text-primary hover:underline">
                Industries
              </Link>
              <a href="tel:+1234567890" className="text-sm text-primary hover:underline">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
