import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Package, CheckCircle, Truck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    icon: Package,
    title: 'Multi-brand inventory',
    description: 'Access to leading manufacturers'
  },
  {
    icon: CheckCircle,
    title: 'Pre-ship inspection & testing',
    description: 'Every unit verified before dispatch'
  },
  {
    icon: Truck,
    title: 'Crating, docs & freight handling',
    description: 'End-to-end logistics support'
  }
];

export default function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;
    const headline = headlineRef.current;
    const body = bodyRef.current;
    const list = listRef.current;

    if (!section || !leftPanel || !rightPanel || !headline || !body || !list) return;

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

      scrollTl.fromTo(body,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.1
      );

      const listItems = list.querySelectorAll('.capability-item');
      scrollTl.fromTo(listItems,
        { x: '-6vw', opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.02, ease: 'none' },
        0.12
      );

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
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

      scrollTl.fromTo(listItems,
        { y: 0, opacity: 1 },
        { y: '4vh', opacity: 0, stagger: 0.01, ease: 'power2.in' },
        0.74
      );

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
        <span className="micro-label mb-6">Capabilities</span>

        {/* Headline */}
        <h2 ref={headlineRef} className="headline-lg mb-8">
          GLOBAL SOURCING. LOCAL SUPPORT.
        </h2>

        {/* Body text */}
        <p ref={bodyRef} className="body-text max-w-[32vw] mb-10">
          We stock inspected industrial units from leading manufacturers-ready for garment production, leatherwork, upholstery, and technical textiles.
        </p>

        {/* Capability list */}
        <div ref={listRef} className="space-y-5 mb-8">
          {capabilities.map((cap, index) => (
            <div key={index} className="capability-item info-card">
              <div className="flex items-start gap-3">
                <cap.icon className="w-5 h-5 text-[#B9B9B9] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-[#F4F4F5] font-medium text-sm mb-1">{cap.title}</h3>
                  <p className="text-[#A1A1AA] text-xs">{cap.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <a href="#catalog" className="inline-flex items-center gap-2 text-[#B9B9B9] text-sm hover:text-[#F4F4F5] transition-colors">
          See available models
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Hairline divider */}
      <div className="absolute left-[45vw] top-0 w-px h-full hairline z-20" />

      {/* Right media panel */}
      <div
        ref={rightPanelRef}
        className="absolute left-[45vw] top-0 w-[55vw] h-full"
      >
        <img
          src="/capabilities_operator.png"
          alt="Factory operator at sewing workstation"
          className="w-full h-full object-cover editorial-image"
        />
      </div>
    </section>
  );
}
