import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { BlogPost } from "@/components/blog/BlogModal";

// Mock Data for the 3-column grid
const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Why Multi-Tenant SaaS Requires Edge Computing",
        excerpt: "Break down the latency barriers by pushing compute closer to the user. A technical deep-dive into Edge networks.",
        category: "Engineering",
        date: "Oct 18, 2024",
        readTime: "5 Min Read",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        author: { name: "Sarah J.", avatar: "https://ui-avatars.com/api/?name=Sarah+J&background=10B981&color=fff" }
    },
    {
        id: 2,
        title: "Navigating AI Compliance in Healthcare Platforms",
        excerpt: "Building HIPAA-compliant AI models isn't just about data security; it requires a fundamental shift in architecture.",
        category: "Artificial Intelligence",
        date: "Oct 12, 2024",
        readTime: "12 Min Read",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        author: { name: "Dr. Chen", avatar: "https://ui-avatars.com/api/?name=Dr+C&background=8B5CF6&color=fff" }
    },
    {
        id: 3,
        title: "The Death of Third-Party Cookies: What's Next?",
        excerpt: "How data lakes and zero-party data strategies are saving enterprise marketing teams from the impending cookie apocalypse.",
        category: "Data Analytics",
        date: "Oct 05, 2024",
        readTime: "7 Min Read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        author: { name: "Marcus Wayne", avatar: "https://ui-avatars.com/api/?name=Marcus+W&background=0D8ABC&color=fff" }
    },
    {
        id: 4,
        title: "Migrating from Monolith to Microservices Without Downtime",
        excerpt: "The strangler fig pattern in action. Real-world case studies of massive refactors executing seamlessly.",
        category: "Cloud Infrastructure",
        date: "Sep 28, 2024",
        readTime: "15 Min Read",
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1974&auto=format&fit=crop",
        author: { name: "Alex T.", avatar: "https://ui-avatars.com/api/?name=Alex+T&background=F59E0B&color=fff" }
    },
    {
        id: 5,
        title: "Designing for Conversion in Complex B2B Portals",
        excerpt: "UX principles that drive adoption in highly technical, dense data environments.",
        category: "Digital Strategy",
        date: "Sep 20, 2024",
        readTime: "6 Min Read",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        author: { name: "Elena R.", avatar: "https://ui-avatars.com/api/?name=Elena+R&background=EC4899&color=fff" }
    },
    {
        id: 6,
        title: "Securing the CI/CD Pipeline: A 2024 Pragmatic Manifesto",
        excerpt: "Stop treating security as a final step. How DevSecOps is embedding protection directly into the commit cycle.",
        category: "Engineering",
        date: "Sep 15, 2024",
        readTime: "9 Min Read",
        image: "https://images.unsplash.com/photo-1614064641913-6b7140414c71?q=80&w=2070&auto=format&fit=crop",
        author: { name: "Sarah J.", avatar: "https://ui-avatars.com/api/?name=Sarah+J&background=10B981&color=fff" }
    },
    {
        id: 7,
        title: "The Rise of Autonomous Agents in Enterprise Software",
        excerpt: "Exploring how LLM-backed agents are transforming complex workflows.",
        category: "Artificial Intelligence",
        date: "Sep 10, 2024",
        readTime: "8 Min Read",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
        author: { name: "Elena R.", avatar: "https://ui-avatars.com/api/?name=Elena+R&background=EC4899&color=fff" }
    },
    {
        id: 8,
        title: "Serverless at Scale: A Cost-Benefit Analysis",
        excerpt: "When does serverless become too expensive? A deep dive into cloud economics.",
        category: "Cloud Infrastructure",
        date: "Sep 02, 2024",
        readTime: "11 Min Read",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
        author: { name: "Marcus Wayne", avatar: "https://ui-avatars.com/api/?name=Marcus+W&background=0D8ABC&color=fff" }
    },
    {
        id: 9,
        title: "Building Real-Time Data Pipelines with Kafka",
        excerpt: "Streaming data architecture for the modern enterprise. Best practices and common pitfalls.",
        category: "Data Analytics",
        date: "Aug 28, 2024",
        readTime: "14 Min Read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
        author: { name: "Alex T.", avatar: "https://ui-avatars.com/api/?name=Alex+T&background=F59E0B&color=fff" }
    }
];

interface BlogGridProps {
    activeCategory: string;
    onReadClick: (article: BlogPost) => void;
}

const BlogGrid = ({ activeCategory, onReadClick }: BlogGridProps) => {
    const [visibleCount, setVisibleCount] = useState(6);

    // Reset visible count when category changes to show the first page again
    useEffect(() => {
        setVisibleCount(6);
    }, [activeCategory]);

    const filteredPosts = activeCategory === "All Insights"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    const displayedPosts = filteredPosts.slice(0, visibleCount);

    const hasMore = visibleCount < filteredPosts.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    return (
        <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedPosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        onClick={() => onReadClick(post)}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                        className="group flex flex-col bg-white/5 backdrop-blur-sm border border-[#333333] rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-[#0ea5e9]/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] cursor-pointer"
                    >
                        {/* Thumbnail */}
                        <div className="relative h-56 overflow-hidden">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                            <div className="absolute top-4 left-4 z-20">
                                <span className="bg-[#111111]/80 backdrop-blur-md border border-[#333333] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">
                                    {post.category}
                                </span>
                            </div>
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Content Context */}
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-3 text-[10px] text-[#888888] font-semibold mb-3 uppercase tracking-widest">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    <span>{post.date}</span>
                                </div>
                                <div className="w-1 h-1 rounded-full bg-[#333333]" />
                                <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>

                            <h3 className="text-xl font-heading font-bold text-white mb-3 leading-snug group-hover:text-[#0ea5e9] transition-colors line-clamp-2">
                                {post.title}
                            </h3>

                            <p className="text-[#888888] text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                {post.excerpt}
                            </p>

                            <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#333333]/50">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        className="w-7 h-7 rounded-full border border-[#333333]"
                                    />
                                    <span className="text-xs font-medium text-gray-300">{post.author.name}</span>
                                </div>

                                <ArrowRight className="w-4 h-4 text-[#888888] group-hover:text-[#0ea5e9] group-hover:translate-x-1 transition-all" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 flex justify-center"
                >
                    <button
                        onClick={handleLoadMore}
                        className="flex items-center gap-2 px-8 py-3 rounded-full border border-[#333333] bg-white/5 text-white font-medium transition-all hover:bg-[#0ea5e9] hover:border-[#0ea5e9] hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] group"
                    >
                        Load More Insights
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            )}

            {/* Empty State / No Results */}
            {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">No Insights Found</h3>
                    <p className="text-[#888888]">We haven't published anything in this category yet. Check back soon!</p>
                </div>
            )}
        </div>
    );
};

export default BlogGrid;
