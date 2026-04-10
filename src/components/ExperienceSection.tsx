import { motion } from "framer-motion";

const experiences = [
  {
    title: "Research Assistant — Casual",
    company: "University of Western Australia",
    location: "Perth, Australia",
    period: "Sep 2025 – Present",
    points: [
      "Assisting researchers on an evaluation project, supporting data-driven assessment through structured surveys.",
      "Managed, cleaned, and structured survey datasets in Excel; prepared semantic data models in Power BI using Power Query.",
      "Communicated with business owners and stakeholders across Perth CBD, conducting structured interviews.",
    ],
  },
  {
    title: "Application Data Analyst — Full Time",
    company: "Accenture",
    location: "Pune, India",
    period: "Jan 2021 – Jun 2023",
    points: [
      "Designed 15+ Salesforce-integrated Power BI dashboards using DAX, reducing manual reporting by 40%.",
      "Developed complex SQL queries and ETL pipelines migrating thousands of records with <5% error rate.",
      "Oversaw end-to-end deployment cycles, coordinating cross-functional teams using Jira, Jenkins, and Bitbucket.",
    ],
  },
  {
    title: "AI/ML Intern",
    company: "Norwood Systems",
    location: "Perth, Australia",
    period: "Nov 2024 – Feb 2025",
    points: [
      "Contributed to AI/ML initiatives in a product-focused environment supporting award-recognised solutions.",
      "Worked across technical and collaborative tasks, strengthening practical AI application and delivery experience.",
    ],
  },
  {
    title: "Research Analyst — Intern",
    company: "Indian Space Research Organisation (ISRO)",
    location: "Nagpur, India",
    period: "July 2020",
    points: [
      "Analyzed large geospatial datasets with SQL and PostgreSQL to provide insights for public policies.",
      "Profiled data to standardize and remove anomalous patterns from large datasets.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-6xl tracking-wider text-foreground mb-12">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 w-3 h-3 -translate-x-1.5 rounded-full bg-primary" />

                <div className="glass-card rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl tracking-wider text-foreground">{exp.title}</h3>
                      <p className="text-primary text-sm">{exp.company}</p>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 md:mt-0 md:text-right whitespace-nowrap">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
