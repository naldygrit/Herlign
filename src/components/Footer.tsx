import { motion } from "framer-motion";

export const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-herlign-uniform/60 py-16 px-6 md:px-20 text-[#1F2937]">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Brand Section */}
        <motion.div
          className="md:col-span-5 flex flex-col gap-6"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-gray-200 flex items-center justify-center bg-white">
              <img
                src="/images/hermedia.png"
                alt="Herlign Logo"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                Empowering <br /> Women Across <br /> Africa
              </h2>
              <p className="text-gray-600 text-xs leading-relaxed max-w-sm">
                Herlign Venture Studio fosters growth and innovation for the
                next generation of female leaders.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Links Grid Section */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          {/* Column 1 */}
          <motion.div className="flex flex-col gap-4" variants={itemVariants}>
            <p className="font-medium text-gray-900">+98 00000000</p>
            <a href="/about" className="text-gray-600 hover:text-gray-900">
              About us
            </a>
            <a href="/privacy" className="text-gray-600 hover:text-gray-900">
              Privacy policy
            </a>
          </motion.div>

          {/* Column 2 */}
          <motion.div className="flex flex-col gap-4" variants={itemVariants}>
            <p className="font-medium text-gray-900">info@acmedesign.com</p>
            <a href="/services" className="text-gray-600 hover:text-gray-900">
              Services
            </a>
            <a href="/terms" className="text-gray-600 hover:text-gray-900">
              Terms & Conditions
            </a>
          </motion.div>

          {/* Column 3 */}
          <motion.div className="flex flex-col gap-4" variants={itemVariants}>
            <div className="font-medium text-gray-900">
              <p>2972 Westheimer Rd.</p>
              <p>Santa Ana, Illinois</p>
              <p>85486</p>
            </div>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact us
            </a>
            <a href="/refund" className="text-gray-600 hover:text-gray-900">
              Refund Policy
            </a>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};
