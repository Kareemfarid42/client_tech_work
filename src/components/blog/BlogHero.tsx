import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BlogPost } from "@/components/blog/BlogModal";

interface BlogHeroProps {
    onReadClick: (article: BlogPost) => void;
}

const featuredPost: BlogPost = {
    id: "featured-1",
    title: "Architecting the Future: How Modern Enterprise Stacks Drive 25% Efficiency Gains",
    excerpt: "In an era where digital agility defines market leaders, relying on legacy architecture is a massive liability. We explore the structural methodologies behind the most successful modern tech migrations and how consolidating your cloud infrastructure can yield immediate financial dividends.",
    category: "Digital Strategy",
    date: "Oct 24, 2024",
    readTime: "8 Min Read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    author: {
        name: "Marcus Wayne",
        avatar: "https://ui-avatars.com/api/?name=Marcus+W&background=0D8ABC&color=fff"
    }
};

const BlogHero = ({ onReadClick }: BlogHeroProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 group cursor-pointer"
            onClick={() => onReadClick(featuredPost)}
        >
            <div className="relative overflow-hidden rounded-3xl border border-[#333333] bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-[1.01] hover:border-[#0ea5e9]/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] flex flex-col md:flex-row min-h-[400px]">

                {/* Image Section */}
                <div className="md:w-1/2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 md:from-transparent to-transparent z-10" />
                    {/* Category Tag overlaid on Image */}
                    <div className="absolute top-6 left-6 z-20">
                        <span className="bg-[#0ea5e9] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                            Digital Strategy
                        </span>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                        alt="Enterprise Technology Architecture"
                        className="w-full h-[300px] md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-xs text-[#888888] font-medium mb-4 uppercase tracking-widest">
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Oct 24, 2024</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            <span>8 Min Read</span>
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4 leading-tight group-hover:text-[#0ea5e9] transition-colors">
                        Architecting the Future: How Modern Enterprise Stacks Drive 25% Efficiency Gains
                    </h2>

                    <p className="text-[#888888] text-base md:text-lg mb-8 line-clamp-3 leading-relaxed">
                        In an era where digital agility defines market leaders, relying on legacy architecture is a massive liability. We explore the structural methodologies behind the most successful modern tech migrations and how consolidating your cloud infrastructure can yield immediate financial dividends.
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img
                                src="https://ui-avatars.com/api/?name=Marcus+W&background=0D8ABC&color=fff"
                                alt="Author Avatar"
                                className="w-10 h-10 rounded-full border border-[#333333]"
                            />
                            <span className="text-sm font-medium text-white">Marcus Wayne</span>
                        </div>

                        <div className="flex items-center text-[#0ea5e9] font-semibold text-sm gap-1 transition-transform group-hover:translate-x-1">
                            Read Article <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default BlogHero;
