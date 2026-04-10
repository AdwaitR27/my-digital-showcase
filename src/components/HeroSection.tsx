import { motion } from "framer-motion";
import { Download } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

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
            DATA ANALYST
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-lg mb-8 text-base md:text-lg">
            Data professional with experience across consulting, research, analytics, and operations. 
            Skilled in SQL, Power BI, Excel, and Python. Combines technical reporting experience from 
            Accenture and UWA with strong communication and stakeholder-facing expertise.
          </p>
          <a
            href="/Adwait_Reddy_Resume.pdf"
            download
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