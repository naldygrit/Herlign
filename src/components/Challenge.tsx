import { Section, SectionTitle } from "./Section";

export const Challenge = () => {
  return (
    <Section>
      <SectionTitle>The Challenge & Opportunity</SectionTitle>
      <p className="mb-8 text-gray-700 leading-relaxed">
        Africa is a continent of immense potential, boasting the highest rate of
        female entrepreneurial activity globally, at approximately{" "}
        <strong>24%</strong>. This vibrant entrepreneurial spirit is undeniable,
        yet the path for NXT GEN female builders to truly thrive is
        significantly hampered by systemic barriers.
      </p>

      <div className="bg-herlign-card rounded-3xl p-8 md:p-10 shadow-sm border border-green-100">
        <ul className="space-y-6 text-gray-800">
          <li className="flex gap-3">
            <span className="text-herlign-dark font-bold">•</span>
            <span>
              Of 2,600 African startups surveyed, by{" "}
              <span className="text-blue-600 font-medium">Disrupt Africa</span>{" "}
              only <strong>17.3%</strong> have at least one female co-founder. A
              mere <strong>11.1%</strong> of these startups have a female CEO,
              though this is an increase from <strong>9.6%</strong> in 2023.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-herlign-dark font-bold">•</span>
            <span>
              Despite their leadership, female CEOs in the African tech
              ecosystem received a paltry <strong>2%</strong> of the total
              funding in 2024.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-herlign-dark font-bold">•</span>
            <span>
              According to a UN report from 2020,{" "}
              <strong>"52% of women-led firms</strong> identified access to
              finance as a major constraint to growth, compared to only{" "}
              <strong>30%</strong> of male-led firms."
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-herlign-dark font-bold">•</span>
            <span>
              The{" "}
              <span className="text-blue-600 font-medium">
                Global Entrepreneurship Monitor (GEM)
              </span>{" "}
              highlights that if women were supported to start and grow
              businesses at the same rate as men, it could result in an
              additional $5 to 6 trillion in global economic output.
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-10 space-y-4 text-gray-700">
        <p>
          The opportunity is clear: Empowering African women isn't just the
          right thing to do, it's a powerful lever for unlocking inclusive
          growth across the continent. That's where we come in.
        </p>
        <p>
          As a venture studio, Herlign is strategically positioned to dismantle
          these barriers. We are actively building, raising money, building
          ventures, and curating movements to directly address these critical
          gaps, transforming potential into unparalleled progress for Africa's
          female champions.
        </p>
      </div>
    </Section>
  );
};
