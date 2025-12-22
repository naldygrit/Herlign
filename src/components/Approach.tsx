
import { Section, SectionTitle } from "./Section";


export const Approach = () => {
  return (
    <Section>
      <SectionTitle>Our Four-Fold Approach</SectionTitle>
      <p className="mb-10 text-gray-700">
        For <strong>next-gen female</strong> entrepreneurs, we provide full
        operational support to build{" "}
        <strong>investable, strong companies</strong> from the ground up.
      </p>
      <img
        src="/images/approach.png"
        alt="approach"
        className="w-full max-h-166"
      />
    </Section>
  );
};
