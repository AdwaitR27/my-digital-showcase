import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Risk Analytics & Planning Platform",
    category: "Hackathon",
    org: "Dept. of Fire & Emergency Services (WA)",
    description:
      "Developed a real-time analytics platform for emergency preparedness and risk-informed planning for flash floods and bushfires. Integrated AI assistant for real-time alerts and route safety recommendations. Secured 5th place out of 50 teams.",
    tags: ["Python", "Power BI", "AI/ML", "Real-time Data"],
  },
  {
    title: "WA Housing Market Insights Dashboard",
    category: "Personal Project",
    org: "Portfolio Case Study",
    description:
      "Built an interview-style advisory dashboard translating Perth housing market signals into site strategy, suburb selection, and affordability insights. Engineered custom scoring indices across five client lenses.",
    tags: ["Power BI", "DAX", "Data Modeling", "REIWA Data"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">Data Analysis & Visualization</p>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider text-foreground mb-4">
            Portfolio
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl text-sm">
            Check out some of the projects and case studies I've worked on as a Data Analyst.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 hover:glow-border transition-all duration-500 group"
            >
              <span className="text-xs text-primary tracking-wider uppercase">{project.category}</span>
              <h3 className="font-display text-2xl tracking-wider text-foreground mt-2 mb-1">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-4">{project.org}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs border border-border text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
