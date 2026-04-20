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
    links: [
      {
        label: "Project Files",
        url: "https://drive.google.com/drive/folders/1Vm4zZX_CjhVrg3MaJBrbWFdXOUV3oVUQ",
        icon: "drive",
      },
    ],
  },
  {
    title: "WA Housing Market Insights Dashboard",
    category: "Personal Project",
    org: "Portfolio Case Study",
    description:
      "Built an interview-style advisory dashboard translating Perth housing market signals into site strategy, suburb selection, and affordability insights. Engineered custom scoring indices across five client lenses.",
    tags: ["Power BI", "DAX", "Data Modeling", "REIWA Data"],
    links: [
      {
        label: "Live Dashboard",
        url: "https://adwaitr27.github.io/WA-housing-dashboard/",
        icon: "external",
      },
    ],
  },
  {
    title: "AI Calorie Tracker",
    category: "Personal Project",
    org: "Full-Stack Web Application",
    description:
      "Built a full-stack AI-powered food logging app that transforms natural language meal descriptions into structured nutrition data via LLM (Groq API / LLaMA 3.3 70B). Data is persisted in a two-layer architecture (Firestore + localStorage) and aggregated into a weekly analytics dashboard.",
    tags: ["Vanilla JS", "Groq API", "Firebase", "LLaMA 3.3", "Firestore", "CI/CD"],
    links: [
      {
        label: "Live Demo",
        url: "https://adwaitr27.github.io/CalorieTracker/",
        icon: "external",
      },
      {
        label: "GitHub",
        url: "https://github.com/AdwaitR27/CalorieTracker",
        icon: "github",
      },
      {
        label: "Notion Report",
        url: "https://petal-parent-686.notion.site/AI-Calorie-Tracker-Project-Case-Study-348efa52acd88115a667ea8c027deb14",
        icon: "notion",
      },
    ],
  },
  {
    title: "Multi-Agent System (MoE AI Chatbot)",
    category: "Project Internship",
    org: "Perth, Australia · Jul 2024 – Oct 2024",
    description:
      "Developed and simulated multi-agent systems to optimize real-time resource allocation and decision-making. Designed a Mixture-of-Experts (MoE) based AI chatbot using Sentence-BERT embeddings, K-Means and Hierarchical Clustering, and Python-modelled agent behaviours with robust distributed communication protocols.",
    tags: ["Python", "Sentence-BERT", "K-Means", "Multi-Agent", "NLP"],
    links: [
      {
        label: "Notion Report",
        url: "https://petal-parent-686.notion.site/ebd//342efa52acd881b89bb9d78757d142ce",
        icon: "notion",
      },
    ],
  },
];

const LinkIcon = ({ type }: { type: string }) => {
  if (type === "notion") {
    return (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
      </svg>
    );
  }
  if (type === "github") {
    return (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }
  if (type === "drive") {
    return (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.28 3h11.44l4.76 8-4.76 8H6.28L1.52 11zm5.14 8.5L7.93 5.5H3.62l3.81 6zm1.16 0h6.77l-3.38-5.85zm-.58 1L8.7 18.5h6.6l3.38-5.85L15.1 7.5zM3.62 12.5l3.81 6h4.31L8.25 12.5zm12.78 6h4.31L24.38 12.5h-4.31z" />
      </svg>
    );
  }
  return <ExternalLink className="w-3.5 h-3.5" />;
};

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
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">
            Data Analysis & Visualization
          </p>
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
              className="glass-card rounded-xl p-6 hover:glow-border transition-all duration-500 group flex flex-col"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs text-primary tracking-wider uppercase">
                  {project.category}
                </span>
                <div className="flex gap-2 shrink-0">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs border border-primary/40 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-200"
                    >
                      <LinkIcon type={link.icon} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <h3 className="font-display text-2xl tracking-wider text-foreground mt-1 mb-1">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-4">{project.org}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs border border-border text-muted-foreground"
                  >
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