import { Section, SectionTitle } from "./Section";

export const Vision = () => {
  return (
    <Section>
      <SectionTitle>Our 5-Year Vision</SectionTitle>
      <p className="mb-12 text-gray-600">
        We are building something bold and lasting. Over the next five years,
        Herlign aims to:
      </p>

      {/* Responsive Grid/Timeline Layout */}
      <img
        src="/images/roadmap.png"
        alt="Vision Timeline"
        className="w-full mx-auto"
      />
    </Section>
  );
};
