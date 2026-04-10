import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

import aiEngineerCert from "@/assets/AI_Engineer.png";
import dataAnalystCert from "@/assets/Data_Analyst.png";
import dataEngineerCert from "@/assets/Data_Engineer.png";
import norwoodCert from "@/assets/Norwood_systems.png";
import pythonCert from "@/assets/python.png";
import excelCert from "@/assets/Excel.jpeg";
import afac from "@/assets/afac.jpeg";
import afac1 from "@/assets/afac1.jpeg";
import afac2 from "@/assets/afac2.jpeg";
import afac3 from "@/assets/afac3.jpeg";

const achievements = [
  {
    title: "DFES Hackathon — 5th Place",
    description:
      "Secured 5th place out of 50 teams in the Department of Fire and Emergency Services Hackathon, Perth WA.",
    type: "Award",
    images: [afac, afac1, afac2, afac3],
  },
  {
    title: "Norwood Systems — AI/ML Recognition",
    description:
      "Recognised as part of the AI team contributing to award-winning innovations including the INCITE Research & Innovation Industry Award.",
    type: "Award",
    images: [norwoodCert],
  },
  {
    title: "DataCamp Associate Data Engineer",
    description: "Certified Data Engineer Associate.",
    type: "Certification",
    images: [dataEngineerCert],
  },
  {
    title: "DataCamp Associate Data Analyst",
    description: "Certified Data Analyst Associate.",
    type: "Certification",
    images: [dataAnalystCert],
  },
  {
    title: "DataCamp Associate AI Engineer",
    description: "Certified AI Engineer Associate.",
    type: "Certification",
    images: [aiEngineerCert],
  },
  {
    title: "Python for Everybody",
    description:
      "Completed via Coursera — University of Michigan. 5-course specialization.",
    type: "Certification",
    images: [pythonCert],
  },
  {
    title: "Excel Essential Training (Microsoft 365)",
    description: "Completed via LinkedIn Learning.",
    type: "Certification",
    images: [excelCert],
  },
  {
    title: "DP-600T00 — Microsoft Fabric Analytics Engineer",
    description: "Currently in progress.",
    type: "In Progress",
    images: [],
  },
];

const AchievementsSection = () => {
  const [selectedCert, setSelectedCert] = useState<{
    title: string;
    images: string[];
  } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = useCallback(() => {
    if (selectedCert) {
      setCurrentIndex((prev) =>
        prev < selectedCert.images.length - 1 ? prev + 1 : 0
      );
    }
  }, [selectedCert]);

  const goPrev = useCallback(() => {
    if (selectedCert) {
      setCurrentIndex((prev) =>
        prev > 0 ? prev - 1 : selectedCert.images.length - 1
      );
    }
  }, [selectedCert]);

  // Keyboard navigation
  useEffect(() => {
    if (!selectedCert) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedCert, goNext, goPrev]);

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">
            Recent Highlights
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider text-foreground mb-12">
            Achievements & Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            const hasImages = item.images.length > 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`glass-card rounded-xl p-6 hover:glow-border transition-all duration-500 ${
                  hasImages ? "cursor-pointer group" : ""
                }`}
                onClick={() => {
                  if (hasImages) {
                    setSelectedCert({
                      title: item.title,
                      images: item.images,
                    });
                    setCurrentIndex(0);
                  }
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-primary" />
                    <span className="text-xs text-primary tracking-wider uppercase">
                      {item.type}
                    </span>
                  </div>
                  {hasImages && (
                    <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.images.length > 1 && (
                        <span className="text-[10px] text-muted-foreground">
                          {item.images.length} photos
                        </span>
                      )}
                      <ZoomIn size={14} className="text-muted-foreground" />
                    </div>
                  )}
                </div>
                <h3 className="font-display text-lg tracking-wider text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
                {hasImages && (
                  <p className="text-xs text-primary/60 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.images.length > 1
                      ? "Click to view gallery"
                      : "Click to view certificate"}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal with Gallery Navigation */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedCert(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-display text-xl md:text-2xl tracking-wider text-foreground">
                    {selectedCert.title}
                  </h3>
                  {selectedCert.images.length > 1 && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {currentIndex + 1} of {selectedCert.images.length}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Image area with navigation */}
              <div className="relative flex-1 overflow-hidden rounded-xl border border-border bg-white">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={selectedCert.images[currentIndex]}
                    alt={`${selectedCert.title} — ${currentIndex + 1}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </AnimatePresence>

                {/* Navigation arrows — only if multiple images */}
                {selectedCert.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        goPrev();
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors backdrop-blur-sm"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        goNext();
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors backdrop-blur-sm"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {/* Dot indicators — only if multiple images */}
              {selectedCert.images.length > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                  {selectedCert.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? "bg-primary w-6"
                          : "bg-border hover:bg-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AchievementsSection;