import { Section, SectionTitle } from "./Section";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as const;

const ApproachCard = ({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) => (
  <motion.div
    variants={cardVariants}
    className="flex flex-col border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white group"
  >
    <div className="h-64 relative overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-8 flex flex-col space-y-3">
      <h3 className="text-xl font-bold text-herlign-dark uppercase tracking-wider">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export const Approach = () => {
  const approaches = [
    {
      title: "Immersive Learning",
      description:
        "Equipping women with the skills and resources they need to thrive in the future of work.",
      imageSrc: "/images/immersive_learning.png",
    },
    {
      title: "Diverse Ecosystems",
      description:
        "Curated events and movements to inspire, educate, and elevate female builders.",
      imageSrc: "/images/diverse_ecosystems_new.png",
    },
    {
      title: "Wellness Garden",
      description:
        "Cultivating the behavioural strength and resilience founders need to build for scale, sustainability, and lasting impact.",
      imageSrc: "/images/supportive_networks.png",
    },
    {
      title: "Strategic Partnerships",
      description:
        "Collaborating with organizations, universities, and brands to create access to funding, markets, and coaching.",
      imageSrc: "/images/strategic_partnerships.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Section>
      <SectionTitle>Building the Founders who Build Africa.</SectionTitle>
      <p className="mb-12 text-gray-700 text-lg w-full text-center">
        By aligning behavioral wellness with business strategy, we equip the
        next generation of women with the stamina to become high-impact
        builders; creating startups that will redefine and dominate the African
        marketplace.
      </p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {approaches.map((approach, index) => (
          <ApproachCard key={index} {...approach} />
        ))}
      </motion.div>
    </Section>
  );
};
