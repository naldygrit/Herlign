import React from "react";
import { Section, SectionTitle } from "./Section";

const InitiativeCard = ({
  title,
  children,
  color = "bg-herlign-uniform",
  className = "",
}: {
  title?: string;
  children?: React.ReactNode;
  color?: string;
  className?: string;
}) => (
  <div
    className={`${color} rounded-2xl p-8 flex flex-col justify-center ${className}`}
  >
    {title && (
      <h3 className="text-xl font-bold text-herlign-dark mb-4">{title}</h3>
    )}
    <div className="space-y-6">{children}</div>
  </div>
);

const InitiativeItem = ({ title, desc }: { title: string; desc: string }) => (
  <div>
    <h4 className="font-bold text-herlign-dark text-lg">{title}</h4>
    <p className="text-gray-700 text-sm mt-1">{desc}</p>
  </div>
);

export const Initiatives = () => {
  return (
    <Section>
      <SectionTitle>Mainstream Initiatives</SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <InitiativeCard color="bg-herlign-uniform">
            <InitiativeItem title="Herlign Fund" desc="Fueling the future" />
            <InitiativeItem
              title="Hercellerators"
              desc="Immersive coaching tracks for NXT GEN women uniquely positioned to build robust, investable companies by providing hands-on operational support from conception."
            />
            <InitiativeItem
              title="Global Girls Festival"
              desc="A global celebration spotlighting female innovation and cultural impact."
            />
          </InitiativeCard>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-2 h-full">
          <div className="grow">
            <InitiativeCard color="bg-herlign-uniform" className="h-full">
              <InitiativeItem
                title="The New Narrative"
                desc="Conversations and stories shaping the next generation of African female builders."
              />
              <InitiativeItem
                title="Ayaba Garden Community"
                desc="A wellness space for growth, rest, and sister-love"
              />
            </InitiativeCard>
          </div>

          {/* Logos Placeholder Area */}
          <img src="/images/initiatives.png" alt="initiatives" />
        </div>
      </div>
    </Section>
  );
};
