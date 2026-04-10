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

// Inline SVG data URIs for logos not available on CDNs
const tableauSvg = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="%23E97627" d="M24 2v8h-4v-3h-3v-2h3v-3h4zm0 36v8h-4v-3h-3v-2h3v-3h4zM10 16v8H6v-3H2v-2h4v-3h4zm28 0v8h-4v-3h-4v-2h4v-3h4zM10 28v8H6v-3H2v-2h4v-3h4zm28 0v8h-4v-3h-4v-2h4v-3h4zM17 9v10h-5v-4H6v-2h6V9h5zm14 0v10h-5v-4h-6v-2h6V9h5zM17 29v10h-5v-4H6v-2h6v-4h5zm14 0v10h-5v-4h-6v-2h6v-4h5z"/></svg>')}`;
const powerBISvg = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect x="18" y="4" width="8" height="40" rx="2" fill="%23F2C811"/><rect x="8" y="16" width="8" height="28" rx="2" fill="%23F2C811" opacity="0.7"/><rect x="28" y="10" width="8" height="34" rx="2" fill="%23F2C811" opacity="0.85"/><rect x="38" y="22" width="8" height="22" rx="2" fill="%23F2C811" opacity="0.55"/></svg>')}`;
const excelSvg = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="%2321A366" d="M28 4H14a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V16L28 4z"/><path fill="%23185C37" d="M28 4v12h12L28 4z"/><path fill="%23fff" d="M19.5 22l3.5 6-3.5 6h3l2-3.5 2 3.5h3L26 28l3.5-6h-3l-2 3.5-2-3.5h-3z"/></svg>')}`;
const chatgptSvg = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="%2310A37F" d="M37.5 21.2c.8-2.5.5-5.2-.8-7.4a9.2 9.2 0 0 0-9.9-4.2A9.2 9.2 0 0 0 13 13.2a9.2 9.2 0 0 0-6.2 4.5 9.2 9.2 0 0 0 1.2 10.8 9.2 9.2 0 0 0 .8 7.4 9.2 9.2 0 0 0 9.9 4.2A9.2 9.2 0 0 0 25.6 44a9.2 9.2 0 0 0 8.7-6.3 9.2 9.2 0 0 0 6.2-4.5 9.2 9.2 0 0 0-3-12zM25.6 41.6a6.9 6.9 0 0 1-4.4-1.6l.2-.1 7.3-4.2a1.2 1.2 0 0 0 .6-1v-10.3l3.1 1.8v8.5a6.9 6.9 0 0 1-6.8 6.9zM10.2 34.9a6.8 6.8 0 0 1-.8-4.7l.2.1 7.3 4.2a1.2 1.2 0 0 0 1.2 0l8.9-5.1v3.5l-7.4 4.3a6.9 6.9 0 0 1-9.4-2.3zM8.3 18.3a6.9 6.9 0 0 1 3.6-3l0 .2v8.5a1.2 1.2 0 0 0 .6 1l8.9 5.1-3.1 1.8-7.4-4.3a6.9 6.9 0 0 1-2.6-9.3zm25.2 5.9-8.9-5.1 3.1-1.8 7.4 4.3a6.9 6.9 0 0 1-1.1 12.2v-8.7a1.2 1.2 0 0 0-.5-.9zm3-4.8-.2-.1-7.3-4.2a1.2 1.2 0 0 0-1.2 0l-8.9 5.1v-3.5l7.4-4.3a6.9 6.9 0 0 1 10.2 7zm-19.6 6.3-3.1-1.8v-8.5a6.9 6.9 0 0 1 11.3-5.3l-.2.1-7.3 4.2a1.2 1.2 0 0 0-.6 1l-.1 10.3zm1.7-3.6 4-2.3 4 2.3v4.5l-4 2.3-4-2.3v-4.5z"/></svg>')}`;
const snowflakeSvg = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="%2356B9EB" d="M24 2l2 6.5 4.5-5-0.5 6.7 6-3.2-3.2 6 6.7-.5-5 4.5L41 19v2l-6.5 2 5-4.5-6.7.5 3.2-6-6 3.2.5-6.7-4.5 5L24 4l-2 6.5-4.5-5 .5 6.7-6-3.2 3.2 6-6.7-.5 5 4.5L7 19v2l6.5 2-5-4.5 6.7.5-3.2-6 6 3.2-.5-6.7 4.5 5L24 2zm0 15a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 22l-2-6.5-4.5 5 .5-6.7-6 3.2 3.2-6-6.7.5 5-4.5L7 27v-2l6.5-2-5 4.5 6.7-.5-3.2 6 6-3.2-.5 6.7 4.5-5L24 38l2-6.5 4.5 5-.5-6.7 6 3.2-3.2-6 6.7.5-5-4.5L41 27v-2l-6.5-2 5 4.5-6.7-.5 3.2 6-6-3.2.5 6.7-4.5-5L24 38z"/></svg>')}`;

const toolLogos = [
  { name: "Snowflake", logo: snowflakeSvg },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
  { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "Power BI", logo: powerBISvg },
  { name: "Bitbucket", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Tableau", logo: tableauSvg },
  { name: "Salesforce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
  { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Excel", logo: excelSvg },
  { name: "Google Docs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" },
  { name: "LaTeX", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg" },
  { name: "ChatGPT", logo: chatgptSvg },
  { name: "Claude AI", logo: "https://cdn.simpleicons.org/anthropic/D4A574" },
  { name: "Ollama", logo: "https://cdn.simpleicons.org/ollama/FFFFFF" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
];

// Duplicate the array so the marquee loops seamlessly
const marqueeLogos = [...toolLogos, ...toolLogos];

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
                  <span className="text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
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

          {/* Infinite scrolling logo marquee */}
          <div className="mt-14 relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[hsl(220,20%,7%)] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[hsl(220,20%,7%)] to-transparent pointer-events-none" />

            <div className="flex items-center gap-12 animate-marquee">
              {marqueeLogos.map((tool, i) => (
                <div
                  key={`${tool.name}-${i}`}
                  className="flex flex-col items-center gap-2 shrink-0 group"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl border border-border/40 bg-[#f0f0f0] group-hover:border-primary/50 group-hover:bg-[#e8e8e8] transition-all duration-300">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-9 h-9 md:w-11 md:h-11 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;