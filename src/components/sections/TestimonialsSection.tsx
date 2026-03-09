import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const testimonials = [
  {
    name: "Thomas P.",
    role: "Tech Startup Founder",
    description: "A winds all roe apet ional business ceriege : the sipesanes as colutiable entrananes experiences.",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  },
  {
    name: "Jason M.",
    role: "Sulopreneur",
    description: "The mass your exethadler huseses flay on spotupe tean narmosing to manage al imporbent teriion.",
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  },
  {
    name: "Sarah L.",
    role: "Enrepreneur, Marketing Agency",
    description: "Fesit cone cenperiencies but n on help yes. Proudte able from the atotertutadetive dier busekt systanes.",
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-10 md:py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4"
          >
            What People Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-secondary/70"
          >
            Real experiences: <span className="font-bold text-secondary">Real results.</span>
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer mb-6 shadow-lg">
                    <img
                      src={testimonial.thumbnail}
                      alt={testimonial.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors group-hover:bg-black/30">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                        <Play className="w-8 h-8 fill-white" />
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={testimonial.videoUrl}
                    title={`${testimonial.name}'s testimonial`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </DialogContent>
              </Dialog>

              <div className="px-2">
                <h3 className="text-xl font-bold text-secondary mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-sm font-medium text-secondary/60 mb-4">
                  {testimonial.role}
                </p>
                <p className="text-base text-secondary/80 leading-relaxed">
                  {testimonial.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

