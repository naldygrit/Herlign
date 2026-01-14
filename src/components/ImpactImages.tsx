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
      imageSrc: "/images/image_1.jpg",
      description: "Some Speakers at the Global Girls Festival, Champions 2025",
    },
    {
      imageSrc: "/images/image_2.jpg",
      description: "A brilliant session at The New Narrative, Lagos, Nigeria.",
    },
    {
      imageSrc: "/images/image_3.jpg",
      description: "Workshop Sessions & Engagements",
    },
    {
      imageSrc: "/images/image_4.jpg",
      description: "The New Narrative, Ibadan, Nigeria",
    },
    {
      imageSrc: "/images/image_5.jpg",
      description: "The New Narrative, Ikoyi, Lagos",
    },
    {
      imageSrc: "/images/image_6.jpg",
      description: "WRAPHER Conversations",
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
