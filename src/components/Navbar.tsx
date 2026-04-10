import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  // Desktop: detect mouse near right edge of screen
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const threshold = 40; // pixels from right edge to trigger
      const distFromRight = window.innerWidth - e.clientX;

      if (distFromRight <= threshold) {
        setShowSidebar(true);
      } else if (distFromRight > 300) {
        // Only close when mouse moves well away from the sidebar
        setShowSidebar(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Desktop: Right-edge sidebar nav */}
      <div className="hidden md:block">
        {/* Invisible hover trigger zone on the right edge */}
        <div
          className="fixed top-0 right-0 w-10 h-full z-50"
          onMouseEnter={() => setShowSidebar(true)}
        />

        {/* Sidebar */}
        <nav
          className="fixed top-0 right-0 h-full z-50 flex items-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          style={{
            transform: showSidebar ? "translateX(0)" : "translateX(100%)",
          }}
          onMouseLeave={() => setShowSidebar(false)}
        >
          <div className="h-full flex items-center">
            {/* Tab indicator — visible when sidebar is hidden */}
            <div
              className="absolute -left-8 top-1/2 -translate-y-1/2 w-8 h-24 rounded-l-xl bg-background/60 backdrop-blur-md border border-r-0 border-border/50 flex items-center justify-center transition-opacity duration-300"
              style={{ opacity: showSidebar ? 0 : 0.6 }}
            >
              <div className="flex flex-col gap-1">
                <div className="w-3 h-0.5 bg-primary/60 rounded-full" />
                <div className="w-3 h-0.5 bg-primary/60 rounded-full" />
                <div className="w-3 h-0.5 bg-primary/60 rounded-full" />
              </div>
            </div>

            {/* Nav content */}
            <div className="bg-background/80 backdrop-blur-xl border-l border-border/50 h-full flex flex-col items-center justify-center px-6 gap-1 min-w-[200px]">
              {/* Logo */}
              <a
                href="#home"
                className="font-display text-3xl tracking-wider text-gradient mb-8"
              >
              </a>

              {/* Links */}
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setShowSidebar(false)}
                  className="w-full text-right py-3 px-4 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
                  style={{
                    transitionDelay: showSidebar ? `${i * 50}ms` : "0ms",
                    opacity: showSidebar ? 1 : 0,
                    transform: showSidebar
                      ? "translateX(0)"
                      : "translateX(20px)",
                    transition: `all 0.3s ease ${showSidebar ? i * 50 : 0}ms`,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile: Hamburger menu at the top */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="px-6 flex items-center justify-between h-14">
          <a
            href="#home"
            className="font-display text-2xl tracking-wider text-gradient"
          >
            AR
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-2 rounded-lg border border-border hover:border-primary transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="bg-card/95 backdrop-blur-md border-b border-border">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;