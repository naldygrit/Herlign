import React from "react";
import { Section, SectionTitle } from "./Section";
import { motion } from "framer-motion";

interface ImpactItemProps {
  imageSrc: string;
  description?: string;
  index: number;
}

const ImpactItem: React.FC<ImpactItemProps> = ({
  imageSrc,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col space-y-3"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl group">
        <img
          src={imageSrc}
          alt={description || "Impact image"}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
      </div>
      {description && (
        <p className="text-sm md:text-base text-gray-700 font-medium leading-tight">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export const ImpactImages = () => {
  const impactItems = [
    {
      imageSrc: "/images/impact_networking.png",
      description: "Women networking at a professional event.",
    },
    {
      imageSrc: "/images/impact_workshop.png",
      description: "A young entrepreneur engaged in a workshop.",
    },
    {
      imageSrc: "/images/impact_discussion.png",
      description: "Group discussion focused on funding possibilities.",
    },
    {
      imageSrc: "/images/impact_leadership.png",
      description: "Inspirational leadership sessions for female builders.",
    },
    {
      imageSrc: "/images/impact_collaboration.png",
      description: "Strategic collaboration and mentorship programs.",
    },
    {
      imageSrc: "/images/impact_community.png",
      description: "A vibrant community of women building the future.",
    },
  ];

  return (
    <Section className="bg-white">
      <SectionTitle className="justify-center">
        Our Impact in Images
      </SectionTitle>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {impactItems.map((item, index) => (
          <ImpactItem
            key={index}
            index={index}
            imageSrc={item.imageSrc}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  );
};
