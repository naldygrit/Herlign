import { useEffect, useRef } from "react";
import { Section, SectionTitle } from "./Section";

export const Impact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      console.log(
        "Impact section clientWidth:",
        sectionRef.current.clientWidth
      );
      console.log(
        "Impact section offsetWidth:",
        sectionRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <Section ref={sectionRef}>
      <SectionTitle>
        From Seed to Sequoia: Our Impact by the Numbers
      </SectionTitle>
      <p className="mb-8 text-gray-600">
        Herlign is already making a concrete difference through its initiatives:
      </p>

      <div className="bg-herlign-card bg-opacity-50 p-8 rounded-3xl border border-green-100">
        <ul className="space-y-6">
          {[
            {
              bold: "500+ Women Trained:",
              text: "Empowering & Engaging NXT GEN women.",
            },
            {
              bold: "10+ Programs / Events Held:",
              text: "Consistently delivering impactful initiatives across our core pillars.",
            },
            {
              bold: "400+ Community Members:",
              text: "Building a vibrant and engaged network of individuals passionate about sustaining Africa's future.",
            },
            {
              bold: "$10000 in-kind donations:",
              text: "Leveraging non-monetary support to maximize program reach and efficiency.",
            },
            {
              bold: "10+ Partners:",
              text: "Collaborating with key organizations to amplify our reach and effectiveness.",
            },
            {
              bold: "30+ influential C-suite leaders",
              text: "providing invaluable mentorship, strategic guidance, and high-level funding connections.",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row md:items-start gap-1 md:gap-2"
            >
              <span className="font-bold text-herlign-dark shrink-0">
                {item.bold}
              </span>
              <span className="text-gray-700">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
