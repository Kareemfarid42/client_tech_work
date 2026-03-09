import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import BlogHero from "@/components/blog/BlogHero";
import BlogFilterBar from "@/components/blog/BlogFilterBar";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogCTA from "@/components/blog/BlogCTA";
import BlogModal, { BlogPost } from "@/components/blog/BlogModal";

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState("All Insights");
    const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

    // Ensure the page starts at the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#0ea5e9] selection:text-white flex flex-col font-sans">
            <Header />

            <main className="flex-grow pt-24 pb-16">
                <div className="container-max section-padding">

                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 md:mb-16 text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
                            Insights & <span className="text-[#0ea5e9]">Innovation</span>
                        </h1>
                        <p className="text-lg text-[#888888] font-subheading">
                            Expert perspectives on digital transformation, enterprise architecture, and the future of technology.
                        </p>
                    </motion.div>

                    {/* Featured Post (Silicon Reference: Top Large Card) */}
                    <BlogHero onReadClick={setSelectedArticle} />

                    {/* Category Filter */}
                    <BlogFilterBar activeCategory={activeCategory} onSelectCategory={setActiveCategory} />

                    {/* Main Grid Layout (3 Column Glassmorphism) */}
                    <BlogGrid activeCategory={activeCategory} onReadClick={setSelectedArticle} />

                </div>

                {/* Newsletter / CTA Section */}
                <BlogCTA />
            </main>

            {/* Full Screen Reading Modal */}
            <BlogModal
                article={selectedArticle}
                onClose={() => setSelectedArticle(null)}
            />

            <Footer />
        </div>
    );
};

export default Blog;
