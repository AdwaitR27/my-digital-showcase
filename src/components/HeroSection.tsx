import { motion } from "framer-motion";
import { Download } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import resumePdf from "@/assets/Adwait Reddy-Data_Analyst.pdf";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-20 md:pt-0">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-start order-1 lg:order-1"
        >
          <div className="relative w-80 h-80 md:w-[26rem] md:h-[26rem] lg:w-[34rem] lg:h-[34rem]">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
            <img
              src={profileImg}
              alt="Adwait Reddy"
              className="relative w-full h-full object-cover rounded-full border-2 border-primary/30 glow-border"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 lg:order-2"
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none tracking-wider text-foreground">
            ADWAIT
            <br />
            REDDY
          </h1>
          <p className="font-display text-lg md:text-xl tracking-[0.3em] text-primary mt-2 mb-6">
            DATA & AI ANALYST
          </p>
          <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-6 max-w-lg">
            "Data is the fuel. AI is the engine. I work with both."
          </blockquote>

        <p className="text-muted-foreground leading-relaxed max-w-lg mb-8 text-sm md:text-base">   I don't just analyze data — I engineer intelligence from it. As a Data & AI professional with experience at Accenture and UWA, I work across the full stack: SQL, Python, Power BI, and beyond. I love digging deep into data, uncovering the story it tells — and then using AI to amplify those insights into smarter, real-world solutions. From crafting analytics that drive business decisions to exploring Machine Learning and LLM architectures, I bring both the rigour of a data analyst and the curiosity of an AI enthusiast. I'm not here to describe the past — I'm here to build what's next.
          </p>
          <a
            href={resumePdf}
            download="Adwait Reddy-Data_Analyst.pdf"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium text-sm"
          >
            Download CV <Download size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;