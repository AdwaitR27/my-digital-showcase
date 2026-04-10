import { motion } from "framer-motion";
import uwaLogo from "@/assets/UWA.jpg";
import accentureLogo from "@/assets/accenture.png";
import norwoodLogo from "@/assets/norwood.png";
import isroLogo from "@/assets/isro.png";

const experiences = [
  {
    title: "Research Assistant — Casual",
    company: "University of Western Australia",
    location: "Perth, Australia",
    period: "Sep 2025 – Present",
    image: uwaLogo,
    alt: "University of Western Australia logo",
    description:
      "Assisted researchers on evaluation projects by supporting data-driven analysis through survey design, data collection, and stakeholder engagement.",
    responsibilities: [
      "Contributed to the design and refinement of survey questions to ensure effective data collection",
      "Supported the preparation and organization of data collection materials",
      "Engaged with business owners and community stakeholders across the Perth CBD to conduct interviews and gather survey data",
      "Collected, clarified, and validated responses to ensure accuracy and usability of data",
    ],
    achievements: [
      "Successfully gathered and structured real-world data through direct stakeholder interaction",
      "Strengthened communication skills by working with diverse business and community participants",
      "Contributed to data-driven evaluation processes supporting research outcomes",
    ],
  },
  {
    title: "Application Data Analyst — Full Time",
    company: "Accenture",
    location: "Pune, India",
    period: "Jan 2021 – Jun 2023",
    image: accentureLogo,
    alt: "Accenture logo",
    description:
      "Worked in a client-facing consulting environment delivering end-to-end data analytics and reporting solutions for insurance product portfolios at IDFC Bank. Utilized tools such as Salesforce, Power BI, SQL, Python, Jira, Git, Jenkins and Bitbucket to translate business requirements into actionable insights.",
    responsibilities: [
      "Designed and developed Salesforce-integrated Power BI dashboards using DAX, aligning reporting with stakeholder-defined KPIs and enabling real-time performance tracking",
      "Built and optimized SQL-based ETL pipelines to migrate and process large-scale Salesforce datasets, ensuring high data integrity and reliable reporting",
      "Collaborated with cross-functional teams using Jira and supported CI/CD workflows (Jenkins, Bitbucket) to manage deployments and ensure smooth product releases",
    ],
    achievements: [
      "Offered a senior delivery role post-COVID to manage end-to-end deployment cycles for insurance products, aligning KPIs with stakeholder expectations",
      "Achieved early promotion within one year due to strong adaptability, rapid learning of new tools, and effective stakeholder engagement",
    ],
  },
  {
    title: "AI/ML Intern",
    company: "Norwood Systems",
    location: "Perth, Australia",
    period: "Nov 2024 – Feb 2025",
    image: norwoodLogo,
    alt: "Norwood Systems logo",
    description:
      "Contributed to the development of a real-time AI communication system, focusing on building scalable backend architecture and integrating speech-based AI capabilities into production-oriented workflows.",
    responsibilities: [
      "Developed a testing architecture with real-time Speech-to-Text (STT) and Text-to-Speech (TTS) capabilities using an MVC-based design",
      "Integrated WebSocket and SIP protocols to enable seamless, low-latency audio streaming and communication",
      "Built and optimized a FastAPI backend for real-time call management and dynamic AI model selection",
      "Designed and supported efficient audio processing workflows for responsive, real-time AI interactions",
    ],
    achievements: [
      "Recognized as part of the AI team contributing to award-winning innovations at Norwood Systems, including:",
      "Research & Innovation Industry Award (INCITE Awards) for OpenSpan™ Call Protect",
      "Dr Mal Bryce WA Tech Company of the Year Award",
    ],
  },
  {
    title: "Research Analyst — Intern",
    company: "Indian Space Research Organisation (ISRO)",
    location: "Nagpur, India",
    period: "July 2020 - Aug 2020",
    image: isroLogo,
    alt: "ISRO logo",
    description:
      "Analyzed large geospatial datasets to provide insights for public policies during a research internship.",
    responsibilities: [
      "Analyzed large geospatial datasets with SQL and PostgreSQL to provide insights for public policies",
      "Profiled data to standardize and remove anomalous patterns from large datasets",
    ],
    achievements: [],
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
          <div className="absolute left-0 md:left-[calc(10rem+2rem)] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 md:pl-20 md:ml-40"
              >
                {/* Timeline date label — left of the line */}
                <div className="hidden md:block absolute left-0 md:left-[calc(-10rem-1rem)] top-7 w-36 text-right">
                  <p className="font-display text-lg md:text-xl tracking-wider text-primary whitespace-nowrap">
                    {exp.period}
                  </p>
                </div>
                {/* Mobile date label — above card */}
                <p className="md:hidden text-sm font-display tracking-wider text-primary mb-2">
                  {exp.period}
                </p>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-8 w-3 h-3 -translate-x-1.5 rounded-full bg-primary" />

                {/* Card */}
                <div className="glass-card group overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex flex-col md:flex-row">
                    {/* Logo tile — big square on the left */}
                    <div className="flex items-center justify-center h-48 md:h-auto md:w-64 lg:w-72 shrink-0 bg-white px-8 py-8 rounded-t-xl md:rounded-t-none md:rounded-l-xl">
                      <img
                        src={exp.image}
                        alt={exp.alt}
                        className="max-h-24 md:max-h-28 lg:max-h-32 max-w-full w-auto object-contain"
                      />
                    </div>

                    {/* Text content — slides in from right on hover */}
                    <div className="flex-1 p-5 md:p-6 lg:p-8 flex flex-col justify-center">
                      {/* Always visible: company name */}
                      <h3 className="font-display text-xl md:text-2xl lg:text-3xl tracking-wider text-foreground leading-tight">
                        {exp.company}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 md:hidden">
                        {exp.period}
                      </p>

                      {/* Hover reveal: designation + details */}
                      <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-[1200px] group-hover:opacity-100 group-hover:mt-3">
                        <p className="text-primary text-sm font-medium mb-1">
                          {exp.title}
                        </p>
                        <p className="text-xs text-muted-foreground mb-3">
                          {exp.location}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Key Responsibilities */}
                        <p className="text-xs text-primary tracking-[0.2em] uppercase mb-2">
                          Key Responsibilities
                        </p>
                        <ul className="space-y-2 mb-4">
                          {exp.responsibilities.map((point, j) => (
                            <li
                              key={j}
                              className="text-muted-foreground text-sm flex gap-2"
                            >
                              <span className="text-primary mt-1 shrink-0">▸</span>
                              {point}
                            </li>
                          ))}
                        </ul>

                        {/* Achievements */}
                        {exp.achievements.length > 0 && (
                          <>
                            <p className="text-xs text-primary tracking-[0.2em] uppercase mb-2">
                              Achievements
                            </p>
                            <ul className="space-y-2">
                              {exp.achievements.map((point, j) => (
                                <li
                                  key={j}
                                  className="text-muted-foreground text-sm flex gap-2"
                                >
                                  <span className="text-primary mt-1 shrink-0">★</span>
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
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