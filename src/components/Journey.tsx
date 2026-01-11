import React from "react";
import { Section } from "./Section";
import { motion } from "framer-motion";

export const Journey = () => {
  return (
    <Section className="bg-white">
      <div className="flex flex-col items-center text-center space-y-12">
        {/* Ecosystem Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-7xl"
        >
          <img
            src="/images/expressions.jpeg"
            alt="Herlign Ecosystem"
            className="w-full h-auto drop-shadow-sm"
          />
        </motion.div>

        {/* Text Content */}
        <div className="w-full space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-herlign-dark"
          >
            Our Journey of Empowerment
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            Herlign Venture Studio aims to empower the next generation of female
            innovators in Africa. Our mission focuses on creating a supportive
            community that combines education, funding, and meaningful impact.
            Central to our vision is a wellness garden designed to inspire and
            nurture growth among women, encouraging them to thrive and lead in
            their ventures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <button className="px-8 py-3 border border-herlign-primary text-herlign-primary font-semibold rounded-lg hover:bg-herlign-primary hover:text-white transition-all duration-300">
              Learn more about us
            </button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
