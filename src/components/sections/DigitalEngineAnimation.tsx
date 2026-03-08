import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Play,
    Figma,
    PenTool,
    Atom,
    Code2,
    BrainCircuit,
    Bot,
    Database,
    BarChart3
} from "lucide-react";

// --- Data ---
const DONUT_SEGMENTS = [
    {
        id: 1,
        title: "Strategy & Design",
        color: "#3B82F6", // Blue
        shortDesc: "Architecting Success",
        fullDesc: "We bridge the gap between complex challenges and intuitive digital roadmaps that accelerate your growth.",
        angleStart: 182,
        angleEnd: 268,
        labelAngle: 225,
        align: "left",
        icons: [
            { id: 'figma-1', Icon: Figma, x: -15, y: -20, delay: 0 },
            { id: 'pen-1', Icon: PenTool, x: 10, y: 15, delay: 0.1 }
        ]
    },
    {
        id: 2,
        title: "Development",
        color: "#2DD4BF", // Teal
        shortDesc: "Scalable Engineering",
        fullDesc: "Building robust, custom software solutions tailored to high-growth infrastructure and enterprise demands.",
        angleStart: 272,
        angleEnd: 358,
        labelAngle: 315,
        align: "right",
        icons: [
            { id: 'react-2', Icon: Atom, x: -20, y: 10, delay: 0 },
            { id: 'code-2', Icon: Code2, x: 15, y: -15, delay: 0.1 }
        ]
    },
    {
        id: 3,
        title: "Artificial Intelligence",
        color: "#4ADE80", // Green
        shortDesc: "AI Integration",
        fullDesc: "Implementing machine learning models to automate workflows and predict market shifts before they happen.",
        // Left to right for bottom curve, wait actually the geometry maps visually counter-clockwise for text when processed, so defining angles left-to-right numerically
        angleStart: 2,
        angleEnd: 88,
        labelAngle: 45,
        align: "right",
        icons: [
            { id: 'brain-3', Icon: BrainCircuit, x: 20, y: -10, delay: 0 },
            { id: 'bot-3', Icon: Bot, x: -10, y: 20, delay: 0.1 }
        ]
    },
    {
        id: 4,
        title: "Data Analytics",
        color: "#A855F7", // Purple
        shortDesc: "Insightful Growth",
        fullDesc: "Turning raw data into actionable intelligence for better executive decision-making and competitive advantage.",
        angleStart: 92,
        angleEnd: 178,
        labelAngle: 135,
        align: "left",
        icons: [
            { id: 'db-4', Icon: Database, x: -20, y: -10, delay: 0 },
            { id: 'chart-4', Icon: BarChart3, x: 15, y: 15, delay: 0.1 }
        ]
    },
];

// --- Math Helpers ---
function polarToCartesian(cx: number, cy: number, angleDeg: number, radius: number) {
    const rad = (angleDeg * Math.PI) / 180;
    return {
        x: cx + radius * Math.cos(rad),
        y: cy + radius * Math.sin(rad),
    };
}

// Function to draw the visible colored ring
function describeArc(cx: number, cy: number, startAngle: number, endAngle: number, radius: number) {
    const start = polarToCartesian(cx, cy, startAngle, radius);
    const end = polarToCartesian(cx, cy, endAngle, radius);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
}

// Function to draw the invisible textPath curve
// Required for reversing text direction on the bottom half so it remains upright
function describeTextArc(cx: number, cy: number, startAngle: number, endAngle: number, radius: number) {
    const midAngle = (startAngle + endAngle) / 2;
    // Angles between 0 and 180 map to the bottom of the circle
    if (midAngle > 0 && midAngle < 180) {
        const start = polarToCartesian(cx, cy, endAngle, radius);
        const end = polarToCartesian(cx, cy, startAngle, radius);
        // sweep-flag=0 forces it to bow inward to perfectly match the ring's curvature
        return `M ${start.x} ${start.y} A ${radius} ${radius} 0 0 0 ${end.x} ${end.y}`;
    } else {
        const start = polarToCartesian(cx, cy, startAngle, radius);
        const end = polarToCartesian(cx, cy, endAngle, radius);
        return `M ${start.x} ${start.y} A ${radius} ${radius} 0 0 1 ${end.x} ${end.y}`;
    }
}

export const DigitalEngineAnimation = () => {
    const [activeSegment, setActiveSegment] = useState<number>(1);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-Play Logic
    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setActiveSegment((prev) => (prev % 4) + 1);
        }, 3500);

        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <div
            className="relative w-full max-w-7xl mx-auto px-4 sm:px-12 md:px-32 lg:px-48 overflow-visible flex justify-center items-center py-16 min-h-[600px] font-sans bg-transparent"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Main Interactive Wheel Container (Fixed at 400x400px, responsive scaling via Flex) */}
            <div className="relative flex-shrink-0" style={{ width: 400, height: 400 }}>

                {/* 1. Underlying SVG Ring Geometry */}
                <svg width="100%" height="100%" viewBox="0 0 100 100" className="overflow-visible absolute inset-0 z-10">
                    <defs>
                        {/* Glow Filter for Active Segment */}
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="1.5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>

                        {/* Text Paths for curving labels */}
                        {DONUT_SEGMENTS.map(seg => (
                            <path
                                key={`textpath-${seg.id}`}
                                id={`curve-${seg.id}`}
                                d={describeTextArc(50, 50, seg.angleStart, seg.angleEnd, 40)}
                                fill="none"
                            />
                        ))}
                    </defs>

                    {/* Donut Segments with Curved Text & Flow Arrows */}
                    {DONUT_SEGMENTS.map(seg => {
                        const isActive = activeSegment === seg.id;

                        // Calculate position for flow arrow at end of arc
                        const arrowPos = polarToCartesian(50, 50, seg.angleEnd, 40);
                        // Rotate arrow to point tangentially clockwise
                        const arrowRotation = seg.angleEnd + 90;

                        return (
                            <g
                                key={`segment-group-${seg.id}`}
                                className="cursor-pointer transition-opacity duration-500"
                                onMouseEnter={() => setActiveSegment(seg.id)}
                            >
                                {/* The Thick Arc Segment */}
                                <motion.path
                                    d={describeArc(50, 50, seg.angleStart, seg.angleEnd, 40)}
                                    fill="none"
                                    stroke={seg.color}
                                    strokeLinecap="round" // Rounded ends for a softer, premium look like gaps
                                    initial={{ strokeWidth: 16, opacity: 0.3 }}
                                    animate={{
                                        strokeWidth: isActive ? 16 : 14,
                                        opacity: isActive ? 1 : 0.3
                                    }}
                                    transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                                    filter={isActive ? "url(#glow)" : undefined}
                                />

                                {/* Curved Text Label resting perfectly centered on the path */}
                                <text
                                    fill="#ffffff"
                                    fontSize="4.5"
                                    fontWeight="700"
                                    letterSpacing="0.1em"
                                    className="uppercase pointer-events-none transition-opacity duration-500"
                                    style={{ opacity: isActive ? 1 : 0.4 }}
                                >
                                    <textPath
                                        href={`#curve-${seg.id}`}
                                        startOffset="50%"
                                        textAnchor="middle"
                                        dominantBaseline="central"
                                    >
                                        {seg.title}
                                    </textPath>
                                </text>

                                {/* Flow Arrow indicating circular direction */}
                                <polygon
                                    points="-2,-1.5 1.5,0 -2,1.5"
                                    fill="#ffffff"
                                    transform={`translate(${arrowPos.x}, ${arrowPos.y}) rotate(${arrowRotation})`}
                                    className="transition-opacity duration-500"
                                    style={{ opacity: isActive ? 0.9 : 0.2 }}
                                />
                            </g>
                        );
                    })}
                </svg>

                {/* 2. Floating Connector Lines and Detail Cards (HTML absolute overlay) */}
                <div className="absolute inset-0 pointer-events-none">
                    {DONUT_SEGMENTS.map(seg => {
                        const isActive = activeSegment === seg.id;

                        // Calculate perfect attachment point at outer edge of SVG
                        // In viewBox 0 0 100 100: Radius is 40, Stroke is 16. Outer edge is 40 + 8 = 48 SVG units.
                        // In 400x400 pixels space, 1 SVG unit = 4px. So outer edge is 48 * 4 = 192px from center.
                        const startR = 192;
                        const lineAnchor = polarToCartesian(200, 200, seg.labelAngle, startR);

                        return (
                            <AnimatePresence key={`card-${seg.id}`}>
                                {isActive && (
                                    <div
                                        className={`absolute flex items-center ${seg.align === 'left' ? 'flex-row-reverse' : 'flex-row'}`}
                                        style={{
                                            [seg.align === 'left' ? 'right' : 'left']: seg.align === 'left' ? (400 - lineAnchor.x) : lineAnchor.x,
                                            top: lineAnchor.y,
                                            transform: 'translateY(-50%)' // Vertically center relative to the connector line
                                        }}
                                    >
                                        {/* Pure Horizontal Connector Line */}
                                        <div className="flex items-center" style={{ flexDirection: seg.align === 'left' ? 'row-reverse' : 'row' }}>
                                            <motion.div
                                                className="h-[2px] relative shrink-0"
                                                style={{ backgroundColor: seg.color }}
                                                initial={{ width: 0 }}
                                                animate={{ width: 48 }} // 48px length for balanced layout
                                                exit={{ width: 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            {/* Terminating Solid Dot directly touching the card */}
                                            <motion.div
                                                className={`w-2.5 h-2.5 rounded-full z-10 ${seg.align === 'left' ? 'ml-[-4px]' : 'mr-[-4px]'}`}
                                                style={{ backgroundColor: seg.color }}
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                                transition={{ delay: 0.2 }}
                                            />
                                        </div>

                                        {/* Detail Information Card (Clean, Dark, Airy) */}
                                        <motion.div
                                            initial={{ opacity: 0, x: seg.align === 'left' ? 20 : -20 }}
                                            animate={{ opacity: 1, x: 0 }} // 0 offset since flex handles the spacing natively
                                            exit={{ opacity: 0, x: seg.align === 'left' ? 10 : -10 }}
                                            className="bg-[#1b273d] p-5 rounded-xl w-56 border-t-2 shadow-[0_15px_30px_rgba(0,0,0,0.4)] whitespace-normal ml-2 mr-2"
                                            style={{ borderColor: seg.color }}
                                        >
                                            <h4 className="text-[15px] font-bold mb-1.5 leading-tight" style={{ color: seg.color }}>{seg.shortDesc}</h4>
                                            <p className="text-xs text-slate-300 leading-relaxed font-medium">{seg.fullDesc}</p>
                                        </motion.div>
                                    </div>
                                )}
                            </AnimatePresence>
                        );
                    })}
                </div>

                {/* 3. Overlapping Tech Stack Badges (3D Layout) */}
                <div className="absolute inset-0 pointer-events-none">
                    {DONUT_SEGMENTS.map(seg => {
                        const isActive = activeSegment === seg.id;
                        // Determine the hub position for the icons, slightly outside the rim (r=208px)
                        const hubPos = polarToCartesian(200, 200, seg.labelAngle, 208);

                        return (
                            <AnimatePresence key={`icons-${seg.id}`}>
                                {isActive && seg.icons.map((iconData) => {
                                    const { Icon, x, y, delay } = iconData;
                                    return (
                                        <motion.div
                                            key={iconData.id}
                                            initial={{ scale: 0, opacity: 0, y: 10 }}
                                            animate={{ scale: 1, opacity: 1, y: 0 }}
                                            exit={{ scale: 0, opacity: 0, y: -10 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 20,
                                                delay: delay
                                            }}
                                            className="absolute w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.3)] text-slate-800"
                                            style={{
                                                left: hubPos.x + x,
                                                top: hubPos.y + y,
                                                transform: "translate(-50%, -50%)",
                                                // Ensure the delayed icon sits higher in the z-stack for a physical overlap effect
                                                zIndex: delay > 0 ? 30 : 25
                                            }}
                                        >
                                            <Icon size={18} strokeWidth={2.5} />
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        );
                    })}
                </div>

                {/* 4. Center Identity Hole ("Hollow Donut" Aesthetic) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[224px] h-[224px] bg-[#1b273d] rounded-full border-4 border-[#1b273d] shadow-[inset_0_0_20px_rgba(0,0,0,0.5),0_0_15px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center z-20 pointer-events-none">
                    <div className="text-6xl font-black text-white tracking-tighter mb-0 line-clamp-1 select-none drop-shadow-md">CT</div>
                    <div className="text-xl font-bold text-white leading-none select-none drop-shadow-sm">Client Tech</div>
                    <div className="text-[9px] font-bold text-slate-300 mt-2 uppercase tracking-widest select-none">25% Efficiency Gain</div>

                    {/* Floating Blue Play Button resting exactly at bottom edge */}
                    <div className="absolute -bottom-6 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(37,99,235,0.4)] cursor-pointer pointer-events-auto hover:bg-blue-700 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                        <Play fill="currentColor" size={24} className="ml-1" />
                    </div>
                </div>

            </div>
        </div>
    );
};
