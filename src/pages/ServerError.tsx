import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ServerError = () => {
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex items-center justify-center bg-background p-4">
                <div className="max-w-2xl w-full text-center">
                    {/* 500 Illustration */}
                    <div className="mb-8">
                        <div className="relative inline-block">
                            <h1 className="text-[150px] sm:text-[200px] font-display font-bold text-destructive/10 leading-none">
                                500
                            </h1>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 rounded-full bg-destructive/10 flex items-center justify-center">
                                    <svg
                                        className="w-16 h-16 text-destructive"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 mb-8">
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                            Internal Server Error
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-md mx-auto">
                            Oops! Something went wrong on our end. Our team has been notified and we're working to fix the issue.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            variant="hero"
                            size="lg"
                            onClick={handleRefresh}
                            className="gap-2"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Try Again
                        </Button>
                        <Link to="/">
                            <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                                <Home className="w-4 h-4" />
                                Back to Homepage
                            </Button>
                        </Link>
                    </div>

                    {/* Support Info */}
                    <div className="mt-12 pt-8 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-4">
                            If the problem persists, please contact our support team:
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="mailto:support@clientech.solutions"
                                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                            >
                                <Mail className="w-4 h-4" />
                                support@clientech.solutions
                            </a>
                            <a
                                href="tel:+1234567890"
                                className="text-sm text-primary hover:underline"
                            >
                                Call: +1 (234) 567-890
                            </a>
                        </div>
                    </div>

                    {/* Error ID (for debugging) */}
                    <div className="mt-6">
                        <p className="text-xs text-muted-foreground">
                            Error ID: {Date.now().toString(36).toUpperCase()}
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ServerError;
