import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Calendar, ArrowLeft } from "lucide-react";

export interface BlogPost {
    id: number | string;
    title: string;
    excerpt: string;
    content?: string; // Optional full content
    category: string;
    date: string;
    readTime: string;
    image: string;
    author: {
        name: string;
        avatar: string;
    };
}

interface BlogModalProps {
    article: BlogPost | null;
    onClose: () => void;
}

const BlogModal = ({ article, onClose }: BlogModalProps) => {
    if (!article) return null;

    // Use mock full content since we might only have an excerpt
    const fullContent = article.content || `
        <p>This is a simulated full article view for <strong>${article.title}</strong>. In a production environment, this would render HTML, Markdown, or Portable Text fetched from a CMS like Sanity, Contentful, or Strapi.</p>
        <br/>
        <h3>Introduction</h3>
        <p>${article.excerpt}</p>
        <br/>
        <p>The tech landscape is evolving rapidly. To maintain a competitive edge, organizations must adopt modern architectural patterns. This involves rethinking data pipelines, embracing cloud-native solutions, and ensuring robust security postures across all enterprise applications.</p>
        <br/>
        <h3>The Core Architecture</h3>
        <p>Implementing Microservices, Serverless functions, and Edge computing significantly reduces latency while providing scalable infrastructure that can react to demand in real-time. But this isn't just about moving to the cloud; it's about restructuring how engineering teams deploy and maintain complex business logic.</p>
        <br/>
        <blockquote>
            "The future of enterprise software is not a monolith, but a orchestrated symphony of highly specialized, distributed services."
        </blockquote>
        <br/>
        <p>As we continue to explore these paradigms, the distinction between infrastructure and code will blur, enabling rapid iteration and unparalleled system resilience.</p>
    `;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 md:p-12 overflow-y-auto overflow-x-hidden"
                onClick={onClose}
            >
                <div className="min-h-full py-10 flex items-center justify-center w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-4xl bg-[#0a0a0a] border border-[#333333] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close & Return Header */}
                        <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#333333]">
                            <button
                                onClick={onClose}
                                className="flex items-center gap-2 text-sm font-semibold text-[#888888] hover:text-white transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Return to Insights
                            </button>
                            <button
                                onClick={onClose}
                                className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-[#888888] hover:text-white transition-colors border border-[#333333]"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Article Header Image */}
                        <div className="relative h-64 md:h-96 w-full">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
                            <div className="absolute top-6 left-6 z-20">
                                <span className="bg-[#0ea5e9] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                                    {article.category}
                                </span>
                            </div>
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Article Content Layout */}
                        <div className="px-6 md:px-12 lg:px-20 py-10 -mt-20 relative z-20">
                            {/* Meta */}
                            <div className="flex items-center gap-4 text-xs text-[#888888] font-medium mb-6 uppercase tracking-widest bg-[#111] inline-flex py-2 px-4 rounded-full border border-[#333]">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5 text-[#0ea5e9]" />
                                    <span>{article.date}</span>
                                </div>
                                <div className="w-1 h-1 rounded-full bg-[#555]" />
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5 text-[#0ea5e9]" />
                                    <span>{article.readTime}</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-8 leading-tight tracking-tight">
                                {article.title}
                            </h1>

                            {/* Author */}
                            <div className="flex items-center gap-4 mb-12 pb-8 border-b border-[#333333]">
                                <img
                                    src={article.author.avatar}
                                    alt={article.author.name}
                                    className="w-12 h-12 rounded-full border-2 border-[#333333]"
                                />
                                <div>
                                    <div className="text-white font-semibold">{article.author.name}</div>
                                    <div className="text-xs text-[#888888]">Senior Contributor</div>
                                </div>
                            </div>

                            {/* Post Body */}
                            <div
                                className="prose prose-invert prose-lg max-w-none text-[#cccccc] prose-headings:text-white prose-headings:font-heading prose-a:text-[#0ea5e9] prose-blockquote:border-[#0ea5e9] prose-blockquote:bg-white/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:text-white prose-blockquote:font-medium"
                                dangerouslySetInnerHTML={{ __html: fullContent }}
                            />

                            {/* Footer inside modal */}
                            <div className="mt-16 pt-8 border-t border-[#333333] flex justify-between items-center">
                                <div className="text-sm text-[#888888]">Share this article</div>
                                <div className="flex gap-3">
                                    <button className="w-10 h-10 rounded-full bg-[#111] border border-[#333] flex items-center justify-center hover:bg-[#0ea5e9] hover:border-[#0ea5e9] hover:text-white transition-colors text-[#888888]">
                                        X
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-[#111] border border-[#333] flex items-center justify-center hover:bg-[#0ea5e9] hover:border-[#0ea5e9] hover:text-white transition-colors text-[#888888]">
                                        in
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default BlogModal;
