
import { Section } from './Section';

export const About = () => {
  return (
    <Section>
      <h2 className='text-3xl md:text-5xl w-full font-display font-bold text-herlign-dark mb-8 text-center'>About Herlign</h2>
     
      <div className="prose prose-lg text-gray-700 max-w-none">
        <p className="mb-6">
          Herlign is a venture studio and wellness garden dedicated to nurturing and grooming <strong className="text-herlign-dark">"NXT GEN"</strong> female builders to exceptionally drive venture building and promote a thriving economy. We prioritize wellness, nurturing both professional growth and well-being.
        </p>
        
        <h3 className="text-xl font-bold text-herlign-dark mt-8 mb-4">Our mission</h3>
        <p>
          To shape the future of work and catalyze impactful ventures across Africa, championing female empowerment, wellness, and offering extensive coaching to unlock the full potential of individuals and organizations. At the core of our work is <strong className="text-herlign-dark">IMPACT, EDUCATION, AND FUNDING.</strong>
        </p>
      </div>
    </Section>
  );
};