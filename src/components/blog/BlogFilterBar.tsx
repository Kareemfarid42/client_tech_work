import { motion } from "framer-motion";

const categories = [
    "All Insights",
    "Digital Strategy",
    "Engineering",
    "Artificial Intelligence",
    "Data Analytics",
    "Cloud Infrastructure",
    "Industry Trends"
];

interface BlogFilterBarProps {
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

const BlogFilterBar = ({ activeCategory, onSelectCategory }: BlogFilterBarProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 flex items-center justify-start gap-3 overflow-x-auto pb-4 scrollbar-hide w-full"
        >
            {categories.map((category, index) => {
                const isActive = category === activeCategory;
                return (
                    <button
                        key={category}
                        onClick={() => onSelectCategory(category)}
                        className={`
              whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
              ${isActive
                                ? 'bg-[#17aa8c] text-white border-[#17aa8c] shadow-[0_0_15px_rgba(23, 170, 140,0.3)]'
                                : 'bg-white/5 text-[#888888] border-[#333333] hover:bg-white/10 hover:text-white hover:border-gray-500'
                            }
            `}
                    >
                        {category}
                    </button>
                );
            })}
        </motion.div>
    );
};

export default BlogFilterBar;
