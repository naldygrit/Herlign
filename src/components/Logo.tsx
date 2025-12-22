const MosaicH = () => (
  <svg
    width="55"
    height="74"
    viewBox="0 0 55 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0 mr-[2px] mb-[2px]"
  >
    {/* Row 1 */}
    <path d="M0 0H27.5V18.5H0V0Z" fill="#F59E0B" /> {/* Orange Top Left */}
    <path d="M27.5 0H55V18.5H27.5V0Z" fill="#047857" /> {/* Green Top Right */}
    <path d="M27.5 0L55 18.5H27.5V0Z" fill="#FCD34D" opacity="0.4" />{" "}
    {/* Highlight */}
    {/* Row 2 */}
    <path d="M0 18.5H27.5V37H0V18.5Z" fill="#065F46" /> {/* Dark Green Left */}
    <path d="M0 18.5L27.5 37H0V18.5Z" fill="#047857" opacity="0.5" />
    <path d="M27.5 18.5H55V37H27.5V18.5Z" fill="#DC2626" /> {/* Red Right */}
    <path d="M27.5 18.5L55 37H27.5V18.5Z" fill="#B91C1C" opacity="0.3" />
    {/* Row 3 */}
    <path d="M0 37H27.5V55.5H0V37Z" fill="#047857" /> {/* Green Left */}
    <path d="M27.5 37H55V55.5H27.5V37Z" fill="#F59E0B" /> {/* Orange Right */}
    <path d="M27.5 37V55.5L55 37H27.5Z" fill="#FBBF24" opacity="0.5" />
    {/* Row 4 */}
    <path d="M0 55.5H27.5V74H0V55.5Z" fill="#F59E0B" /> {/* Orange Left */}
    <path d="M27.5 55.5H55V74H27.5V55.5Z" fill="#065F46" />{" "}
    {/* Dark Green Right */}
  </svg>
);

export const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center relative z-10">
      <div className="flex items-end leading-none">
        <MosaicH />
        <div className="text-[4rem] md:text-[5.5rem] font-display font-bold tracking-tight flex items-baseline -ml-1 translate-y-[0.08em]">
          <span className="text-[#DC2626]">er</span>
          <span className="text-herlign-dark flex">
            l
            <span className="relative mx-1">
              {/* Dotless i approx */}ı{/* Custom Red Dot */}
              <span className="absolute top-[-0.2em] left-1/2 -translate-x-1/2 w-[0.25em] h-[0.25em] bg-[#DC2626] rounded-full"></span>
            </span>
            gn
          </span>
        </div>
      </div>
      <div className="text-sm md:text-xl font-medium text-[#0f766e] tracking-wide font-sans mt-3">
        Venture Studio And Wellness Garden
      </div>
    </div>
  );
};
