import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(({ children, className = "", id }, ref) => {
  return (
    <section ref={ref} id={id} className={`py-6 md:py-10 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
});

export const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <h2 className={`text-3xl md:text-5xl max-w-165 font-display font-bold text-herlign-dark mb-8 flex text-center items-center mx-auto gap-3 ${className}`}>
    {children}
  </h2>
); 