import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);
/*
const generations = [
  {
    icon: Award,
    gen: '1st Gen',
    name: 'Shri Hari Chand Anand',
    detail: 'Singer-trained pioneer, first Asian GM of Singer Machines'
  },
  {
    icon: GraduationCap,
    gen: '2nd Gen',
    name: 'Mr. D.C. Anand',
    detail: 'Trained at Adler, Germany (1933-1939)'
  },
  {
    icon: Globe,
    gen: '3rd Gen',
    name: 'Mr. Anil Anand',
    detail: 'Global technology explorer, Economics Graduate'
  }
];
*/
export default function LegacySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  // ✅ FIX: separate refs for both paragraphs
  const body1Ref = useRef<HTMLParagraphElement>(null);
  const body2Ref = useRef<HTMLParagraphElement>(null);

  const gensRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;
    const headline = headlineRef.current;
    const body1 = body1Ref.current;
    const body2 = body2Ref.current;
    const gens = gensRef.current;
    const quote = quoteRef.current;

    // gensRef is currently commented out in JSX, so it will be null.
    // To avoid blocking animations, we won't require it.
    if (!section || !leftPanel || !rightPanel || !headline || !body1 || !body2 || !quote) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0-30%)
      scrollTl.fromTo(leftPanel,
        { x: '-45vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(rightPanel,
        { x: '55vw', opacity: 0, scale: 1.08 },
        { x: 0, opacity: 1, scale: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(headline,
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.05
      );

      scrollTl.fromTo(body1,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.1
      );

      scrollTl.fromTo(body2,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.12
      );

      // If generations are enabled later, animate them safely
      if (gens) {
        const genItems = gens.querySelectorAll('.gen-item');
        scrollTl.fromTo(genItems,
          { x: '-6vw', opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.02, ease: 'none' },
          0.14
        );

        scrollTl.fromTo(quote,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.2
        );

        // EXIT
        scrollTl.fromTo(leftPanel,
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        );

        scrollTl.fromTo(rightPanel,
          { x: 0, opacity: 1 },
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.7
        );

        scrollTl.fromTo(headline,
          { y: 0, opacity: 1 },
          { y: -10, opacity: 0, ease: 'power2.in' },
          0.72
        );

        scrollTl.fromTo(genItems,
          { y: 0, opacity: 1 },
          { y: '4vh', opacity: 0, stagger: 0.01, ease: 'power2.in' },
          0.74
        );
      } else {
        // generations commented out: still animate quote + exit cleanly
        scrollTl.fromTo(quote,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.18
        );

        scrollTl.fromTo(leftPanel,
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        );

        scrollTl.fromTo(rightPanel,
          { x: 0, opacity: 1 },
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.7
        );

        scrollTl.fromTo([headline, body1, body2, quote],
          { y: 0, opacity: 1 },
          { y: '4vh', opacity: 0, stagger: 0.01, ease: 'power2.in' },
          0.74
        );
      }

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-transparent overflow-hidden z-20"
    >
      {/* Left content panel */}
      <div
        ref={leftPanelRef}
        className="absolute left-0 top-0 w-[45vw] h-full flex flex-col justify-center px-[6vw]"
      >
        {/* Micro label */}
        <span className="micro-label mb-6">Heritage</span>

        {/* Headline */}
        <h2 ref={headlineRef} className="headline-lg mb-6">
          A LEGACY OF QUALITY SINCE 1995.
        </h2>

        {/* Body text 1 */}
        <p ref={body1Ref} className="body-text max-w-[32vw] mb-8">
          DUKE is a Hong Kong–based manufacturer of high-quality industrial sewing machines, with over 35 years of experience serving textile and garment producers worldwide.
        </p>

        {/* Body text 2 */}
        <p ref={body2Ref} className="body-text max-w-[32vw] mb-8">
          Serving global markets, DUKE supports manufacturers of all sizes with reliable industrial sewing machines designed for productivity and maintain the highest standards of quality in their production processes.
        </p>

        {/*
        <div ref={gensRef} className="space-y-4 mb-8">
          {generations.map((gen, index) => (
            <div key={index} className="gen-item info-card">
              <div className="flex items-start gap-3">
                <gen.icon className="w-4 h-4 text-[#B9B9B9] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#B9B9B9] font-mono text-xs">{gen.gen}</span>
                    <span className="text-[#F4F4F5] font-medium text-sm">{gen.name}</span>
                  </div>
                  <p className="text-[#A1A1AA] text-xs mt-0.5">{gen.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        */}

        {/* Quote */}
        <div ref={quoteRef} className="flex items-start gap-3 border-l-2 border-[#B9B9B9] pl-4">
          <Quote className="w-4 h-4 text-[#B9B9B9] flex-shrink-0 mt-0.5" />
          <p className="text-[#F4F4F5] text-sm italic">
            From small workshops to large factories, manufacturers trust DUKE sewing machines for durable, efficient, consistent quality.
          </p>
        </div>
      </div>

      {/* Hairline divider */}
      <div className="absolute left-[45vw] top-0 w-px h-full hairline z-20" />

      {/* Right media panel */}
      <div
        ref={rightPanelRef}
        className="absolute left-[45vw] top-0 w-[55vw] h-full"
      >
        <img
          src="/legacy_workshop.jpg"
          alt="Heritage sewing workshop"
          className="w-full h-full object-cover editorial-image"
        />
      </div>
    </section>
  );
}