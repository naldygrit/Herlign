import { Section, SectionTitle } from "./Section";

export const Testimonial = () => {
  return (
    <Section>
      <SectionTitle>Real Women. Real Stories.</SectionTitle>
      <p className="mb-10 text-gray-600">
        See how Herlign is changing lives, one builder at a time.
      </p>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/3">
          {/* Placeholder for the group of women image */}
          <div className="bg-gray-300 rounded-3xl overflow-hidden aspect-4/3 relative shadow-md">
            <img
              src="https://picsum.photos/id/338/600/500"
              alt="Community of women"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <div className="bg-herlign-card p-10 rounded-[3rem] relative">
            <p className="text-xl md:text-2xl font-display text-herlign-dark leading-relaxed mb-6">
              "The community is an exposé on what An African woman could achieve
              and become when supported by a community of women"
            </p>
            <div className="text-gray-700 italic font-medium">
              — Esther Asuquo, Community member
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
