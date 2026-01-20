import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star, Zap, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ColorPreview2 = () => {
  // New color scheme: #7D5DBA (royal purple), black, white
  const newPrimary = "#7D5DBA";
  const newSecondary = "#0a0a0a";
  const newAccent = "#9575cd";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fafafa" }}>
      {/* Color Swatches */}
      <div className="py-12 px-6" style={{ backgroundColor: newSecondary }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 mb-4">
            <Link to="/" className="text-white/60 hover:text-white text-sm">
              ← Back to current site
            </Link>
            <Link to="/color-preview" className="text-white/60 hover:text-white text-sm">
              | Preview 1 (Steel Blue)
            </Link>
          </div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">
            Color Scheme Preview 2
          </h1>
          <p className="text-white/70 mb-8">
            Comparing current teal (#19be9d) vs proposed royal purple (#7D5DBA)
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            {/* Current Colors */}
            <div>
              <h3 className="text-white font-semibold mb-4">Current Palette</h3>
              <div className="flex gap-3">
                <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: "#19be9d" }} />
                <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: "#1a1f36" }} />
                <div className="w-16 h-16 rounded-lg border border-white/20" style={{ backgroundColor: "#ffffff" }} />
              </div>
              <p className="text-white/50 text-sm mt-2">#19be9d • #1a1f36 • #ffffff</p>
            </div>
            
            {/* New Colors */}
            <div>
              <h3 className="text-white font-semibold mb-4">Proposed Palette</h3>
              <div className="flex gap-3">
                <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: newPrimary }} />
                <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: newSecondary }} />
                <div className="w-16 h-16 rounded-lg border border-white/20" style={{ backgroundColor: "#ffffff" }} />
              </div>
              <p className="text-white/50 text-sm mt-2">#7D5DBA • #0a0a0a • #ffffff</p>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Hero Section */}
      <div 
        className="py-24 px-6"
        style={{ 
          background: `linear-gradient(135deg, ${newSecondary} 0%, #1a1a2e 100%)` 
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <span 
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: `${newPrimary}20`, color: newPrimary }}
          >
            🚀 Award-Winning Digital Agency
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            We Build Digital
            <span style={{ color: newPrimary }}> Experiences</span>
            <br />That Drive Growth
          </h1>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Transform your business with data-driven marketing strategies
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-lg font-semibold text-white flex items-center gap-2 transition-all hover:scale-105"
              style={{ backgroundColor: newPrimary }}
            >
              Get Your Free Proposal <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              className="px-8 py-4 rounded-lg font-semibold text-white border-2 border-white/20 hover:border-white/40 transition-all"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Preview Stats */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "$2.4B", label: "Revenue Generated" },
            { value: "15+", label: "Years Experience" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-display font-bold" style={{ color: newPrimary }}>
                {stat.value}
              </div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Cards */}
      <div className="py-20 px-6" style={{ backgroundColor: "#f5f5f7" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-12" style={{ color: newSecondary }}>
            Our <span style={{ color: newPrimary }}>Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "SEO & Content", desc: "Dominate search rankings with data-driven strategies" },
              { icon: Target, title: "Paid Media", desc: "Maximize ROI with targeted advertising campaigns" },
              { icon: Users, title: "Social Media", desc: "Build engaged communities that convert" },
            ].map((service, i) => (
              <div 
                key={i} 
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors"
                  style={{ backgroundColor: `${newPrimary}15` }}
                >
                  <service.icon className="w-7 h-7" style={{ color: newPrimary }} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3" style={{ color: newSecondary }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <a 
                  href="#" 
                  className="font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                  style={{ color: newPrimary }}
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preview CTA */}
      <div 
        className="py-20 px-6"
        style={{ backgroundColor: newPrimary }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join 500+ businesses that have accelerated their growth with us
          </p>
          <button 
            className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: "white", color: newPrimary }}
          >
            Start Your Project Today
          </button>
        </div>
      </div>

      {/* Preview Testimonial */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-10 relative">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" style={{ color: newPrimary }} />
              ))}
            </div>
            <p className="text-xl text-gray-700 mb-6 italic">
              "The team delivered exceptional results. Our organic traffic increased by 340% 
              in just 6 months. Highly recommend their data-driven approach."
            </p>
            <div className="flex items-center gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: newPrimary }}
              >
                JD
              </div>
              <div>
                <div className="font-semibold" style={{ color: newSecondary }}>John Doe</div>
                <div className="text-gray-500 text-sm">CEO, TechCorp Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Footer */}
      <div className="py-12 px-6 text-center" style={{ backgroundColor: newSecondary }}>
        <p className="text-white/70 mb-4">Like this color scheme?</p>
        <p className="text-white text-sm">
          Let me know and I'll apply #7D5DBA across the entire site!
        </p>
      </div>
    </div>
  );
};

export default ColorPreview2;