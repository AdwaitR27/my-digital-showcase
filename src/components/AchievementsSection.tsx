import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "DFES Hackathon — 5th Place",
    description: "Secured 5th place out of 50 teams in the Department of Fire and Emergency Services Hackathon, Perth WA.",
    type: "Award",
  },
  {
    title: "Norwood Systems — AI/ML Recognition",
    description: "Recognised as part of the AI team contributing to award-winning innovations including the INCITE Research & Innovation Industry Award.",
    type: "Award",
  },
  {
    title: "DataCamp Associate Data Engineer",
    description: "Certified Data Engineer Associate.",
    type: "Certification",
  },
  {
    title: "Python Programming for Data Analysis",
    description: "Completed via Coursera.",
    type: "Certification",
  },
  {
    title: "Microsoft Essential Excel",
    description: "Completed via LinkedIn Learning.",
    type: "Certification",
  },
  {
    title: "DP-600T00 — Microsoft Fabric Analytics Engineer",
    description: "Currently in progress.",
    type: "In Progress",
  },
];

const AchievementsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">Recent Highlights</p>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider text-foreground mb-12">
            Achievements & Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-xl p-6 hover:glow-border transition-all duration-500"
            >
              <div className="flex items-center gap-2 mb-3">
                <Award size={16} className="text-primary" />
                <span className="text-xs text-primary tracking-wider uppercase">{item.type}</span>
              </div>
              <h3 className="font-display text-lg tracking-wider text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
