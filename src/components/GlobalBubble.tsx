import { useMotionValue, useSpring, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const GlobalBubble = () => {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springConfig = { damping: 22, stiffness: 150, mass: 0.6 };
  const bubbleX = useSpring(mouseX, springConfig);
  const bubbleY = useSpring(mouseY, springConfig);
  const bubbleScale = useSpring(1, { damping: 20, stiffness: 150 });

  const [visible, setVisible] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentTarget = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Selectors for cards/containers that should enlarge as a whole
    // glass-card covers experience cards, achievement cards, project cards, etc.
    const cardSelectors = ".glass-card, .glass-card *";

    // Find the nearest card ancestor from any element inside it
    const findCard = (el: HTMLElement): HTMLElement | null => {
      return el.closest(".glass-card") as HTMLElement | null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement;
      const card = findCard(target);

      if (card && card !== currentTarget.current) {
        // Moved to a new card — reset previous and start timer
        resetTarget();
        currentTarget.current = card;
        hoverTimer.current = setTimeout(() => {
          if (currentTarget.current === card) {
            card.style.transition =
              "transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.4s ease";
            card.style.transform = "scale(1.15)";
            card.style.transformOrigin = "center center";
            card.style.position = "relative";
            card.style.zIndex = "20";
            card.style.boxShadow = "0 0 60px hsl(180 60% 50% / 0.15)";
            bubbleScale.set(1.15);
          }
        }, 1500);
      } else if (!card) {
        resetTarget();
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
      resetTarget();
      bubbleScale.set(1);
    };

    const clearTimer = () => {
      if (hoverTimer.current) {
        clearTimeout(hoverTimer.current);
        hoverTimer.current = null;
      }
    };

    const resetTarget = () => {
      clearTimer();
      if (currentTarget.current) {
        currentTarget.current.style.transition =
          "transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.4s ease";
        currentTarget.current.style.transform = "scale(1)";
        currentTarget.current.style.zIndex = "";
        currentTarget.current.style.boxShadow = "";
        currentTarget.current = null;
      }
      bubbleScale.set(1);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimer();
    };
  }, [mouseX, mouseY, bubbleScale]);

  return (
    <motion.div
      className="pointer-events-none fixed z-50"
      style={{
        left: bubbleX,
        top: bubbleY,
        x: "-50%",
        y: "-50%",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    >
      <motion.div style={{ scale: bubbleScale }} className="relative">
        {/* Outer glow */}
        <div
          className="absolute -inset-4 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(180 60% 50% / 0.08) 0%, transparent 70%)",
          }}
        />

        {/* Main bubble — smaller for global use */}
        <div
          className="w-24 h-24 md:w-28 md:h-28 rounded-full relative"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, hsl(180 60% 80% / 0.08), hsl(220 60% 50% / 0.04) 50%, transparent 100%)",
            border: "1px solid hsl(180 60% 70% / 0.15)",
            boxShadow: `
              inset 0 0 25px hsl(180 60% 80% / 0.05),
              inset -5px -5px 12px hsl(220 60% 50% / 0.03),
              0 0 40px hsl(180 60% 50% / 0.05)
            `,
          }}
        >
          {/* Specular highlight */}
          <div
            className="absolute w-10 h-6 md:w-12 md:h-8 top-2.5 left-3 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, hsl(180 60% 95% / 0.18) 0%, transparent 80%)",
              filter: "blur(3px)",
            }}
          />

          {/* Bottom refraction */}
          <div
            className="absolute w-4 h-4 md:w-5 md:h-5 bottom-5 right-4 rounded-full"
            style={{
              background:
                "radial-gradient(circle, hsl(180 80% 80% / 0.1) 0%, transparent 70%)",
              filter: "blur(2px)",
            }}
          />

          {/* Rim light */}
          <div
            className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1/2 h-1.5 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(180 60% 70% / 0.08), transparent)",
              filter: "blur(2px)",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GlobalBubble;
