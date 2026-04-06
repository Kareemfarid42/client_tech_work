import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ContactModal } from "@/components/contact/ContactModal";
import { Loader2 } from "lucide-react";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [website, setWebsite] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleStartAnalysis = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!website) {
      setModalOpen(true); // Open anyway if empty
      return;
    }

    setIsAnalyzing(true);
    // Simulate a professional analysis sequence
    setTimeout(() => {
      setIsAnalyzing(false);
      setModalOpen(true);
    }, 1500);
  };

  return (
    <section ref={ref} className="py-20 md:py-24 bg-background">
      <div className="container-max section-padding">
        {/* First CTA removed (moved to Services section) */}

        {/* Second CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Your Revenue Growth Starts Here
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Tell us about your business, and we'll create a custom plan to grow your traffic, leads, and predictable revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Input
              type="url"
              placeholder="Enter your website"
              className="h-12 bg-white/50 border-gray-200"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <ContactModal
              open={modalOpen}
              onOpenChange={setModalOpen}
              website={website}
              defaultService="Performance Audit"
            >
              <Button
                variant="hero"
                size="xl"
                onClick={handleStartAnalysis}
                disabled={isAnalyzing}
                className="min-w-[200px]"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Kick off your project"
                )}
              </Button>
            </ContactModal>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
