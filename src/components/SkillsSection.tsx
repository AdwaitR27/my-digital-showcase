import { motion } from "framer-motion";

const skills = [
  { name: "SQL / PostgreSQL / MySQL", level: 95 },
  { name: "Power BI / DAX", level: 95 },
  { name: "Excel (Advanced)", level: 90 },
  { name: "Python / pandas / NumPy", level: 85 },
  { name: "Tableau", level: 75 },
  { name: "R / Statistical Analysis", level: 70 },
  { name: "ETL / Data Pipelines", level: 85 },
  { name: "Salesforce / Jira", level: 80 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-6xl tracking-wider text-foreground mb-12">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className="h-full rounded-full skill-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {["Snowflake", "Git", "Docker", "Jenkins", "AWS", "Azure", "FastAPI", "Power Query", "Bitbucket", "API Integration"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-border text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
