import React from "react";
import { Section, SectionTitle } from "./Section";

const HeroCard = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => (
  <div className="bg-green-100 p-8 rounded-2xl h-full flex flex-col justify-start hover:bg-green-50 transition-colors border border-transparent hover:border-green-200">
    <h3 className="font-bold text-herlign-dark mb-2 text-lg">{title}</h3>
    <p className="text-gray-700 text-sm leading-relaxed">{children}</p>
  </div>
);

export const HeroGrid = () => {
  return (
    <Section>
      <SectionTitle>
        Power The Future of African Female Entrepreneurship
      </SectionTitle>

      <div className="flex flex-col lg:flex-row gap-8 mt-10">

        {/* Cards Grid Column */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 order-2 lg:order-2">
          <HeroCard title="Cultivate NXT GEN leaders:">
            Directly support and nurture female builders shaping the continent's
            future economy
          </HeroCard>

          <HeroCard title="Fuel Impact & Growth:">
            Drive herlign's mission across impact, Education, and Funding,
            including contributing capital to The Herlign Fund (focused On SMEs,
            IOT, & Fintech)
          </HeroCard>

          <HeroCard title="Accelerate Scale:">
            Co-design and deliver practical, high-impact programs that equip
            founders to successfully scale their ventures.
          </HeroCard>

          <HeroCard title="Sponsor NXT GEN WOMEN">
            to build the village and lead the future via TNNCLUB
          </HeroCard>

          <HeroCard title="Engage The Network:">
            Provide Mentorship, Host program facilities, and champion The New
            Narrative Conversations In major cities.
          </HeroCard>
        </div>
      </div>
    </Section>
  );
};
