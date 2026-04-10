import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">Data-Driven and Dedicated</p>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider text-foreground mb-8">
            Data Analyst Ready to Make an Impact
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="text-muted-foreground leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                I'm Adwait Reddy, a data professional based in Perth, Australia with a Master's in Data Science 
                from the University of Western Australia. My journey spans consulting at Accenture, research at UWA, 
                and AI/ML work at Norwood Systems.
              </p>
              <p>
                At Accenture, I designed 15+ Salesforce-integrated Power BI dashboards using DAX, reducing manual 
                reporting effort by 40%. I developed complex SQL queries and ETL pipelines migrating thousands of 
                records with less than 5% error rate.
              </p>
              <p>
                I'm passionate about translating complex data into actionable insights that drive real business 
                decisions. Whether it's building real-time analytics platforms for emergency services or housing 
                market dashboards, I bring analytical rigor and clear communication to every project.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-display text-2xl tracking-wider text-foreground mb-2">Education</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-foreground font-medium">MS. Data Science</p>
                    <p className="text-muted-foreground">University of Western Australia · GPA: 5.9/7.0</p>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">B.E. Mechanical Engineering</p>
                    <p className="text-muted-foreground">RCOEM, India · CGPA: 8.13/10</p>
                  </div>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/adwait-reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-primary hover:text-foreground transition-colors text-sm font-medium"
              >
                <ExternalLink size={18} /> LinkedIn Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
