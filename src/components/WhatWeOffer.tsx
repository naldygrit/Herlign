import { Section, SectionTitle } from "./Section";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as const;

const OfferCard = ({
  title,
  description,
  imageSrc,
  isReversed,
  link,
}: {
  title: string;
  description: string;
  imageSrc: string;
  isReversed?: boolean;
  link?: string;
}) => {
  const commonClasses =
    "mt-4 px-6 py-2 border border-green-600 text-green-700 font-semibold rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent hover:bg-green-50";

  return (
    <motion.div variants={cardVariants}>
      {isReversed ? (
        <div className="flex flex-col md:flex-row border border-gray-200 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
          {/* Image Section */}
          <div className="flex-1 min-h-[300px] relative center">
            <img
              src={imageSrc}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center items-start space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-herlign-dark">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {description}
            </p>
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={commonClasses}
              >
                Learn more
              </a>
            ) : (
              <button disabled className={commonClasses}>
                Learn more
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row border border-gray-200 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
          {/* Content Section */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center items-start space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-herlign-dark">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {description}
            </p>
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={commonClasses}
              >
                Learn more
              </a>
            ) : (
              <button disabled className={commonClasses}>
                Learn more
              </button>
            )}
          </div>

          {/* Image Section */}
          <div className="flex-1 min-h-[300px] relative">
            <img
              src={imageSrc}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export const WhatWeOffer = () => {
  const offers = [
    {
      title: "Growth Programs & Hubs",
      description:
        "Connect with experienced mentors who guide you through every step of your business development.",
      imageSrc: "/images/mentorship_programs.png",
      link: undefined,
    },
    {
      title: "TNN Club",
      description:
        "TNN CLUB is the guiding light that ensures NXT GEN women become high impact builders",
      imageSrc: "/images/tnn_club_community.png",
      link: "https://t.me/+39XcMjOta08yODQ0",
    },
    {
      title: "Global Events and Conversations",
      description:
        "Join our global network of events and conversations designed to connect and inspire women entrepreneurs worldwide.",
      imageSrc: "/images/global_events.png",
      isReversed: true,
      link: "https://globalgirlsfestival.com",
    },
    {
      title: "Venture Studio",
      description:
        "Work with our venture studio to co-create and launch scalable businesses that solve real-world problems.",
      imageSrc: "/images/venture_studio.png",
      isReversed: true,
      link: undefined,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <Section>
      <SectionTitle className="justify-center">What We Offer</SectionTitle>
      <motion.div
        className="flex flex-col gap-8 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {offers.map((offer, index) => (
          <OfferCard key={index} {...offer} />
        ))}
      </motion.div>
    </Section>
  );
};
