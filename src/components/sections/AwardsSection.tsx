import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Star } from "lucide-react";

const awards = [
  { title: "Top Developers", subtitle: "Clutch", year: "2025" },
  { title: "Web Developers", subtitle: "Clutch", year: "2025" },
  { title: "App Development", subtitle: "Clutch", year: "2025" },
  { title: "Real Estate", subtitle: "Clutch", year: "2025" },
  { title: "ISO 9001:2015", subtitle: "Certified", year: "" },
  { title: "Gaming", subtitle: "Clutch", year: "2025" },
];

const partners = [
  { name: "Microsoft", logo: "Microsoft" },
  { name: "Salesforce", logo: "Salesforce" },
  { name: "Shopify Plus", logo: "Shopify+" },
];

export const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-secondary">
      <div className="container-max section-padding">
        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-secondary-foreground">
            Awards and Certifications
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-20"
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="bg-card rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">{award.year}</p>
              <p className="font-semibold text-card-foreground text-sm mt-1">{award.title}</p>
              <p className="text-xs text-muted-foreground">{award.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-display font-bold text-secondary-foreground mb-8">
            Our Partnerships
          </h3>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="px-8 py-4 bg-card rounded-xl flex items-center justify-center min-w-[160px]"
              >
                <span className="text-lg font-bold text-card-foreground">{partner.logo}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
