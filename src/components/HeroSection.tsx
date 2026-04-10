import { motion, useMotionValue, useSpring } from "framer-motion";
import { Download } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [isOverName, setIsOverName] = useState(false);
  const [isInSection, setIsInSection] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 22, stiffness: 150, mass: 0.6 };
  const bubbleX = useSpring(mouseX, springConfig);
  const bubbleY = useSpring(mouseY, springConfig);
  const bubbleScale = useSpring(1, { damping: 20, stiffness: 150 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    const handleEnter = () => setIsInSection(true);
    const handleLeave = () => {
      setIsInSection(false);
      setIsOverName(false);
      bubbleScale.set(1);
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleEnter);
    section.addEventListener("mouseleave", handleLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleEnter);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, [mouseX, mouseY, bubbleScale]);

  const handleNameEnter = () => {
    setIsOverName(true);
    bubbleScale.set(2);
  };
  const handleNameLeave = () => {
    setIsOverName(false);
    bubbleScale.set(1);
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center section-padding pt-28 md:pt-20 relative overflow-hidden"
    >
      {/* Glassmorphic Bubble — magnifier effect */}
      <motion.div
        className="pointer-events-none fixed z-30"
        style={{
          left: bubbleX,
          top: bubbleY,
          x: "-50%",
          y: "-50%",
          opacity: isInSection ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      >
        <motion.div style={{ scale: bubbleScale }} className="relative">
          {/* Outer glow */}
          <div
            className="absolute -inset-6 rounded-full"
            style={{
              background:
                "radial-gradient(circle, hsl(180 60% 50% / 0.1) 0%, transparent 70%)",
            }}
          />

          {/* Main bubble shell */}
          <div
            className="w-36 h-36 md:w-44 md:h-44 rounded-full relative overflow-hidden"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, hsl(180 60% 80% / 0.08), hsl(220 60% 50% / 0.04) 50%, transparent 100%)",
              border: "1px solid hsl(180 60% 70% / 0.18)",
              boxShadow: `
                inset 0 0 30px hsl(180 60% 80% / 0.06),
                inset -6px -6px 15px hsl(220 60% 50% / 0.04),
                0 0 50px hsl(180 60% 50% / 0.06)
              `,
            }}
          >
            {/* Specular highlight */}
            <div
              className="absolute w-16 h-10 md:w-20 md:h-12 top-3 left-4 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, hsl(180 60% 95% / 0.2) 0%, transparent 80%)",
                filter: "blur(4px)",
              }}
            />

            {/* Bottom refraction */}
            <div
              className="absolute w-5 h-5 md:w-7 md:h-7 bottom-7 right-5 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, hsl(180 80% 80% / 0.12) 0%, transparent 70%)",
                filter: "blur(2px)",
              }}
            />

            {/* Rim light */}
            <div
              className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-2 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(180 60% 70% / 0.1), transparent)",
                filter: "blur(2px)",
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-start order-1 lg:order-1"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
            <img
              src={profileImg}
              alt="Adwait Reddy"
              className="relative w-full h-full object-cover rounded-full border-2 border-primary/30 glow-border"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 lg:order-2"
        >
          <div
            onMouseEnter={handleNameEnter}
            onMouseLeave={handleNameLeave}
            style={{
              transition: "transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
              transform: isOverName ? "scale(1.25)" : "scale(1)",
              transformOrigin: "left top",
            }}
          >
          <h1
            ref={nameRef}
            className="font-display leading-none tracking-wider text-foreground relative inline-block"
            style={{
              fontSize: "clamp(3.75rem, 8vw, 8rem)",
            }}
          >
            ADWAIT
            <br />
            REDDY
          </h1>
          <p className="font-display text-lg md:text-xl tracking-[0.3em] text-primary mt-2 mb-6">
            DATA ANALYST
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-lg mb-8 text-sm md:text-base">
            Data professional with experience across consulting, research, analytics, and operations.
            Skilled in SQL, Power BI, Excel, and Python. Combines technical reporting experience from
            Accenture and UWA with strong communication and stakeholder-facing expertise.
          </p>
          <a
            href="/Adwait_Reddy_Resume.pdf"
            download
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium text-sm"
          >
            Download CV <Download size={16} />
          </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;