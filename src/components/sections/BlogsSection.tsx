import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "Where and Why Google's AI Overviews Appear",
    excerpt: "Our study of 2.3m keywords reveals the query types and industries most impacted by Google's AI-generated answers.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "How Gen AI is Changing Search",
    excerpt: "Understand how generative AI is transforming search engines and what it means for your marketing strategy.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "How Different Generations Use AI to Search",
    excerpt: "Our original research reveals insights into how Gen Z, Millennials, Gen X, and Boomers are using AI.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Want to join our award-winning team?",
    excerpt: "We're always looking for top talent to help our clients achieve their goals.",
    gradient: "from-rose-500 to-pink-600",
    cta: "View Opportunity",
  },
];

export const BlogsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="blogs" className="py-20 md:py-24 bg-muted/50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Link to="/blog" className="inline-block group">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-center gap-3">
              Latest Insights
              <ArrowRight className="w-8 h-8 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </h2>
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm card-hover cursor-pointer"
            >
              <div className={`h-32 bg-gradient-to-br ${blog.gradient} flex items-center justify-center p-4`}>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-card/20" />
                  <div className="w-8 h-8 rounded-full bg-card/20" />
                  <div className="w-8 h-8 rounded-full bg-card/20" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                  {blog.cta || "Read more"}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
