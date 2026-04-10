import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl tracking-wider text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto text-sm">
            I'm always open to discussing data analytics opportunities, collaborations, or just connecting.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Mail, label: "Email", value: "arwork860@gmail.com", href: "mailto:arwork860@gmail.com" },
              { icon: Phone, label: "Phone", value: "0478 883 722", href: "tel:+61478883722" },
              { icon: MapPin, label: "Location", value: "Perth, Australia", href: "#" },
              { icon: Linkedin, label: "LinkedIn", value: "adwait-reddy", href: "https://www.linkedin.com/in/adwait-reddy" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-card rounded-xl p-6 text-center hover:glow-border transition-all duration-500 group"
              >
                <item.icon size={24} className="mx-auto mb-3 text-primary" />
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors">{item.value}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
