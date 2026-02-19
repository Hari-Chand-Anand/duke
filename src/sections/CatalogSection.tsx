import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Scissors, Layers, Settings } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    icon: Scissors,
    title: 'Lockstitch & Single-Needle',
    description: 'High-speed, drop-feed, auto-trim.'
  },
  {
    icon: Layers,
    title: 'Overlock & Safety Stitch',
    description: '3–5 thread, edge finishing at speed.'
  },
  {
    icon: Settings,
    title: 'Specialty & Heavy-Duty',
    description: 'Walking foot, cylinder bed, binding.'
  }
];

export default function CatalogSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;
    const headline = headlineRef.current;
    const cards = cardsRef.current;
    const cta = ctaRef.current;

    if (!section || !leftPanel || !rightPanel || !headline || !cards || !cta) return;

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
        { x: '-55vw', opacity: 0, scale: 1.06 },
        { x: 0, opacity: 1, scale: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(rightPanel,
        { x: '45vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(headline,
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.05
      );

      const cardItems = cards.querySelectorAll('.category-card');
      scrollTl.fromTo(cardItems,
        { x: '10vw', opacity: 0, rotateZ: 1 },
        { x: 0, opacity: 1, rotateZ: 0, stagger: 0.015, ease: 'none' },
        0.1
      );

      scrollTl.fromTo(cta,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.2
      );

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      scrollTl.fromTo(leftPanel,
        { x: 0, opacity: 1 },
        { x: '-16vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(rightPanel,
        { x: 0, opacity: 1 },
        { x: '12vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(cardItems,
        { y: 0, opacity: 1 },
        { y: '6vh', opacity: 0, stagger: 0.01, ease: 'power2.in' },
        0.72
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-transparent overflow-hidden z-30"
    >
      {/* Left media panel */}
      <div
        ref={leftPanelRef}
        className="absolute left-0 top-0 w-[55vw] h-full"
      >
        <img
          src="/catalog_closeup.jpg"
          alt="Sewing machine needle close-up"
          className="w-full h-full object-cover editorial-image"
        />
      </div>

      {/* Hairline divider */}
      <div className="absolute left-[55vw] top-0 w-px h-full hairline z-20" />

      {/* Right content panel */}
      <div
        ref={rightPanelRef}
        className="absolute left-[55vw] top-0 w-[45vw] h-full flex flex-col justify-center px-[6vw]"
      >
        {/* Micro label */}
        <span className="micro-label mb-6">Catalog</span>

        {/* Headline */}
        <h2 ref={headlineRef} className="headline-lg mb-10">
          MACHINES FOR EVERY SEAM.
        </h2>

        {/* Category cards */}
        <div ref={cardsRef} className="space-y-5 mb-10">
          {categories.map((cat, index) => (
            <div key={index} className="category-card info-card group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[rgba(244,244,245,0.05)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(244,244,245,0.1)] transition-colors">
                  <cat.icon className="w-5 h-5 text-[#B9B9B9]" />
                </div>
                <div>
                  <h3 className="text-[#F4F4F5] font-medium text-sm mb-1 group-hover:text-white transition-colors">{cat.title}</h3>
                  <p className="text-[#A1A1AA] text-xs">{cat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button ref={ctaRef} className="btn-primary w-fit flex items-center gap-2">
          Request availability
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Top right micro label */}
      <span className="absolute right-[4vw] top-[10vh] micro-label z-20">
        CATALOG
      </span>
    </section>
  );
}
