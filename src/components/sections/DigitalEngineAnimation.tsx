import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useAnimationFrame, useTransform } from "framer-motion";
import {
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
        icons: [
            { id: 'figma-1', Icon: Figma },
            { id: 'pen-1', Icon: PenTool }
        ],
        radius: 140,
        mobileRadius: 90,
        speed: 1.2,
        initialAngle: 0
    },
    {
        id: 2,
        title: "Development",
        color: "#2DD4BF", // Teal
        shortDesc: "Scalable Engineering",
        fullDesc: "Building robust, custom software solutions tailored to high-growth infrastructure and enterprise demands.",
        icons: [
            { id: 'react-2', Icon: Atom },
            { id: 'code-2', Icon: Code2 }
        ],
        radius: 200,
        mobileRadius: 130,
        speed: -0.9,
        initialAngle: 120
    },
    {
        id: 3,
        title: "Artificial Intelligence",
        color: "#4ADE80", // Green
        shortDesc: "AI Integration",
        fullDesc: "Implementing machine learning models to automate workflows and predict market shifts before they happen.",
        icons: [
            { id: 'brain-3', Icon: BrainCircuit },
            { id: 'bot-3', Icon: Bot }
        ],
        radius: 260,
        mobileRadius: 170,
        speed: 1.05,
        initialAngle: 210
    },
    {
        id: 4,
        title: "Data Analytics",
        color: "#A855F7", // Purple
        shortDesc: "Insightful Growth",
        fullDesc: "Turning raw data into actionable intelligence for better executive decision-making and competitive advantage.",
        icons: [
            { id: 'db-4', Icon: Database },
            { id: 'chart-4', Icon: BarChart3 }
        ],
        radius: 320,
        mobileRadius: 210,
        speed: -0.8,
        initialAngle: 300
    },
];

export const DigitalEngineAnimation = () => {
    const [activeNode, setActiveNode] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Responsive Detection
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile(); // Check on mount
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Global time tracker for seamless orbital pausing
    const globalTime = useMotionValue(0);

    useAnimationFrame((time, delta) => {
        if (activeNode === null) {
            // Adjust base orbital velocity
            globalTime.set(globalTime.get() + delta * 0.015);
        }
    });

    return (
        <div 
            className={`relative flex justify-center items-center w-full font-sans bg-transparent py-10 ${isMobile ? 'min-h-[500px]' : 'min-h-[800px]'}`}
            onClick={() => setActiveNode(null)} // Background tap to reset
        >
            <div className={`relative flex-shrink-0 flex items-center justify-center ${isMobile ? 'w-[450px] h-[450px]' : 'w-[800px] h-[800px]'}`}>
                
                {/* 1. Background Orbital Tracks */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox={isMobile ? "0 0 450 450" : "0 0 800 800"}>
                    {DONUT_SEGMENTS.map(seg => (
                        <circle
                            key={`track-${seg.id}`}
                            cx={isMobile ? "225" : "400"} cy={isMobile ? "225" : "400"} r={isMobile ? seg.mobileRadius : seg.radius}
                            fill="none"
                            stroke="rgba(255,255,255,0.06)"
                            strokeWidth="1.5"
                            strokeDasharray="6 10"
                        />
                    ))}
                </svg>

                {/* 2. Core Hub (Center) */}
                <motion.div 
                    className={`absolute z-40 rounded-full flex flex-col items-center justify-center border border-white/5 bg-[#1b273d] ${isMobile ? 'w-32 h-32' : 'w-[192px] h-[192px]'}`}
                    animate={{
                        boxShadow: [
                            "inset 0 0 40px rgba(0,0,0,0.8), 0 0 20px rgba(27,39,61,0.5), 0 0 0px rgba(59,130,246,0)",
                            "inset 0 0 40px rgba(0,0,0,0.8), 0 0 40px rgba(27,39,61,0.8), 0 0 20px rgba(59,130,246,0.15)",
                            "inset 0 0 40px rgba(0,0,0,0.8), 0 0 20px rgba(27,39,61,0.5), 0 0 0px rgba(59,130,246,0)"
                        ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className={`${isMobile ? 'text-4xl' : 'text-5xl'} font-black text-white tracking-tighter mb-0 line-clamp-1 select-none drop-shadow-md`}>CS</div>
                    <div className={`${isMobile ? 'text-sm' : 'text-lg'} font-bold text-white leading-none select-none drop-shadow-sm`}>ClienTech</div>
                    {!isMobile && <div className="text-[9px] font-bold text-slate-400 mt-2 uppercase tracking-widest select-none">25% Efficiency Gain</div>}
                </motion.div>

                {/* 3. The Orbital Nodes */}
                {DONUT_SEGMENTS.map(seg => (
                    <OrbitalNode 
                        key={seg.id}
                        segment={seg}
                        globalTime={globalTime}
                        isActive={activeNode === seg.id}
                        isDimmed={activeNode !== null && activeNode !== seg.id}
                        setActiveNode={setActiveNode}
                        isMobile={isMobile}
                    />
                ))}

            </div>

            {/* 4. Mobile Tooltip (Bottom Fixed) */}
            <AnimatePresence>
                {isMobile && activeNode !== null && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="absolute bottom-4 left-4 right-4 z-50 p-5 rounded-2xl backdrop-blur-xl bg-[#0f172a]/95 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
                        onClick={(e) => e.stopPropagation()} // Prevent background tap reset
                    >
                        {(() => {
                            const activeSeg = DONUT_SEGMENTS.find(s => s.id === activeNode);
                            if (!activeSeg) return null;
                            return (
                                <>
                                    <h4 className="text-[16px] font-bold mb-2 leading-tight drop-shadow-md" style={{ color: activeSeg.color }}>
                                        {activeSeg.shortDesc}
                                    </h4>
                                    <p className="text-[13px] text-slate-300 leading-relaxed font-medium m-0">
                                        {activeSeg.fullDesc}
                                    </p>
                                </>
                            );
                        })()}
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

// --- Extracted Node Component ---
const OrbitalNode = ({ segment, globalTime, isActive, isDimmed, setActiveNode, isMobile }: any) => {
    // 1. Orbital Wrapper Rotation
    const orbitRotate = useTransform(globalTime, (v: number) => segment.initialAngle + (v * segment.speed));
    
    // 2. Inverse Rotation to keep content upright
    const contentRotate = useTransform(orbitRotate, (v: number) => -v);
    
    // 3. Independent Time Tracker for Satellite Moons
    const moonTime = useMotionValue(0);
    useAnimationFrame((t, d) => {
        // Moons keep spinning rapidly even when orbit is paused
        moonTime.set(moonTime.get() + d * 0.08);
    });

    // Determine Tooltip popout direction based on paused orbital position (Desktop Only)
    const [popSide, setPopSide] = useState<'left' | 'right'>('right');
    useEffect(() => {
        if (isActive && !isMobile) {
            const angle = (segment.initialAngle + (globalTime.get() * segment.speed)) % 360;
            const norm = (angle + 360) % 360;
            // Left hemisphere is between 90 and 270 degrees
            setPopSide(norm > 90 && norm < 270 ? 'left' : 'right');
        }
    }, [isActive, segment, globalTime, isMobile]);

    const activeRadius = isMobile ? segment.mobileRadius : segment.radius;
    const PrimaryIcon = segment.icons[0].Icon;

    return (
        <motion.div
            className="absolute top-1/2 left-1/2 w-0 h-0 flex items-center justify-center"
            style={{ rotate: orbitRotate, zIndex: isActive ? 100 : 30 }}
        >
            {/* Translate out to the track radius */}
            <div className="absolute" style={{ transform: `translateX(${activeRadius}px)` }}>
                
                {/* Counter-Rotate to keep upright */}
                <motion.div 
                    className="relative flex items-center justify-center"
                    style={{ rotate: contentRotate }}
                    animate={{
                        scale: isActive ? 1.2 : 1,
                        opacity: isDimmed ? 0.3 : 1,
                        zIndex: isActive ? 60 : 30
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {/* The Node Button (Tap Target) */}
                    <div 
                        className={`relative rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${isMobile ? 'w-12 h-12' : 'w-[76px] h-[76px]'}`}
                        style={{ 
                            backgroundColor: "#0f172a", // Deep slate
                            borderColor: isActive ? segment.color : `rgba(255,255,255,0.1)`,
                            borderWidth: '2px',
                            boxShadow: isActive 
                                ? `0 0 35px ${segment.color}90, inset 0 0 20px ${segment.color}40` 
                                : `0 0 15px rgba(0,0,0,0.4)`
                        }}
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent background click from resetting
                            setActiveNode(isActive ? null : segment.id);
                        }}
                    >
                        {isMobile ? (
                            <PrimaryIcon size={20} color={isActive ? segment.color : 'white'} />
                        ) : (
                            <span className="text-[9px] font-bold text-white text-center leading-tight uppercase tracking-widest px-2 pointer-events-none drop-shadow-md">
                                {segment.title.split(" ").map((word: string, i: number) => <div key={i}>{word}</div>)}
                            </span>
                        )}
                    </div>

                    {/* The Satellite Tech Moons */}
                    <AnimatePresence>
                        {isActive && segment.icons.map((iconData: any, i: number) => {
                            const moonRadius = isMobile ? 45 : 65; // Tighter moons on mobile
                            const moonAngleOffset = (360 / segment.icons.length) * i;
                            return (
                                <SatelliteMoon 
                                    key={iconData.id}
                                    iconData={iconData}
                                    color={segment.color}
                                    moonTime={moonTime}
                                    moonRadius={moonRadius}
                                    moonAngleOffset={moonAngleOffset}
                                    isMobile={isMobile}
                                />
                            );
                        })}
                    </AnimatePresence>

                    {/* Desktop Premium Glassmorphic Tooltip */}
                    <AnimatePresence>
                        {isActive && !isMobile && (
                            <motion.div
                                initial={{ opacity: 0, x: popSide === 'left' ? 20 : -20, scale: 0.95 }}
                                animate={{ opacity: 1, x: popSide === 'left' ? -20 : 20, scale: 1 }}
                                exit={{ opacity: 0, x: popSide === 'left' ? 10 : -10, scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className={`absolute top-1/2 -translate-y-1/2 w-64 p-5 rounded-2xl backdrop-blur-xl bg-[#0f172a]/85 shadow-[0_30px_60px_rgba(0,0,0,0.6)] pointer-events-none border border-white/10`}
                                style={{
                                    [popSide === 'left' ? 'right' : 'left']: '100%',
                                    borderTopColor: segment.color,
                                    borderTopWidth: '3px'
                                }}
                            >
                                {/* HUD Connector Line & Dot */}
                                <div 
                                    className="absolute top-1/2 -translate-y-1/2 flex items-center"
                                    style={{
                                        [popSide === 'left' ? 'left' : 'right']: '100%',
                                        flexDirection: popSide === 'left' ? 'row' : 'row-reverse'
                                    }}
                                >
                                    <div className="w-5 h-[2px]" style={{ backgroundColor: segment.color, opacity: 0.6 }} />
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: segment.color, boxShadow: `0 0 10px ${segment.color}` }} />
                                </div>

                                <h4 className="text-[16px] font-bold mb-2 leading-tight drop-shadow-md" style={{ color: segment.color }}>{segment.shortDesc}</h4>
                                <p className="text-[13px] text-slate-300 leading-relaxed font-medium m-0">{segment.fullDesc}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </motion.div>
            </div>
        </motion.div>
    );
};

// --- Extracted Satellite Component ---
const SatelliteMoon = ({ iconData, color, moonTime, moonRadius, moonAngleOffset, isMobile }: any) => {
    const { Icon } = iconData;
    
    // Moon's orbital rotation
    const rotate = useTransform(moonTime, (v: number) => v + moonAngleOffset);
    // Inverse rotation to keep icon upright
    const counterRotate = useTransform(rotate, (v: number) => -v);

    return (
        <motion.div
            className="absolute top-1/2 left-1/2 w-0 h-0 flex items-center justify-center pointer-events-none z-40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={{ rotate }}
        >
            <div className="absolute" style={{ transform: `translateX(${moonRadius}px)` }}>
                <motion.div 
                    className={`${isMobile ? 'w-6 h-6' : 'w-9 h-9'} rounded-full bg-[#1b273d] border border-white/20 flex items-center justify-center backdrop-blur-sm`}
                    style={{ 
                        rotate: counterRotate,
                        boxShadow: `0 0 15px ${color}60`
                    }}
                >
                    <Icon size={isMobile ? 12 : 16} strokeWidth={2.5} style={{ color: color }} />
                </motion.div>
            </div>
        </motion.div>
    );
};
