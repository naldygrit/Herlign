import { useState } from "react";
import { RiWhatsappLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Herlign Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-white">
        <div className="flex items-center gap-3">
          <img
            src="/images/hermedia.png"
            alt="Herlign Logo"
            className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full"
          />
          <span className="text-xl md:text-2xl font-bold text-herlign tracking-tight text-[#0f766e]">
            Herlign Venture Studio
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-black font-normal text-lg">
          <a
            href="#about"
            className="hover:text-herlign-accent transition-colors"
          >
            About us
          </a>
          <a
            href="#services"
            className="hover:text-herlign-accent transition-colors"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="hover:text-herlign-accent transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#work"
            className="hover:text-herlign-accent transition-colors"
          >
            Work
          </a>
          <a
            href="#book"
            className="hover:text-herlign-accent transition-colors"
          >
            Book a service
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#0f766e]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-[74px] left-0 right-0 bg-white z-20 flex flex-col items-center py-6 shadow-lg border-t border-gray-100 overflow-hidden"
          >
            <a
              href="#about"
              className="py-2 text-lg font-medium text-[#333]"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </a>
            <a
              href="#services"
              className="py-2 text-lg font-medium text-[#333]"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="py-2 text-lg font-medium text-[#333]"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#work"
              className="py-2 text-lg font-medium text-[#333]"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#book"
              className="py-2 text-lg font-medium text-[#333]"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a service
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center grow px-6 md:px-16 lg:px-24 mb-10">
        <div className="max-w-xl lg:max-w-3xl text-white mt-10 lg:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
          >
            Empowering the <br /> Next Generation <br /> of Female
            <br />
            Builders
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base md:text-lg lg:text-md font-light leading-relaxed mb-10 max-w-3xl drop-shadow-md"
          >
            At Herlign Venture Studio, we nurture aspiring female entrepreneurs
            across Africa by focusing on impact, education, and funding. Join us
            in transforming dreams into reality.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white text-herlign-primary px-8 py-3 rounded-sm font-bold text-lg hover:bg-transparent hover:text-white border border-white transition-colors shadow-lg"
          >
            Join our mission
          </motion.button>
        </div>
      </div>

      {/* WhatsApp Bubble (Optional match to design) */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-xl hover:scale-110 transition-transform"
        >
          <RiWhatsappLine className="w-8 h-8 text-white" />
        </a>
      </div>
    </div>
  );
};
