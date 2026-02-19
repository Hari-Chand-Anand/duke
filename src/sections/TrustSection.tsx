import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Users, Globe, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const trustPoints = [
  {
    icon: Users,
    title: 'Family-run trading desk',
    description: 'Personal attention to every order'
  },
  {
    icon: Globe,
    title: 'Repeat buyers in 20+ countries',
    description: 'Global reach, local relationships'
  },
  {
    icon: Shield,
    title: 'Clear specs, no hidden fees',
    description: 'Transparent pricing always'
  }
];

export default function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const pointsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;
    const headline = headlineRef.current;
    const points = pointsRef.current;
    const cta = ctaRef.current;

    if (!section || !leftPanel || !rightPanel || !headline || !points || !cta) return;

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

      const pointItems = points.querySelectorAll('.trust-point');
      scrollTl.fromTo(pointItems,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.018, ease: 'none' },
        0.12
      );

      scrollTl.fromTo(cta,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.2
      );

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      scrollTl.fromTo(leftPanel,
        { x: 0, opacity: 1 },
        { x: '-14vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(rightPanel,
        { x: 0, opacity: 1 },
        { x: '10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(pointItems,
        { y: 0, opacity: 1 },
        { y: '5vh', opacity: 0, stagger: 0.01, ease: 'power2.in' },
        0.74
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-transparent overflow-hidden z-50"
    >
      {/* Left media panel */}
      <div
        ref={leftPanelRef}
        className="absolute left-0 top-0 w-[55vw] h-full"
      >
        <img
          src="/trust_hands.jpg"
          alt="Hands guiding fabric"
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
        <span className="micro-label mb-6">Trust</span>

        {/* Headline */}
        <h2 ref={headlineRef} className="headline-lg mb-10">
          BUILT ON RELIABILITY.
        </h2>

        {/* Trust points */}
        <div ref={pointsRef} className="space-y-5 mb-10">
          {trustPoints.map((point, index) => (
            <div key={index} className="trust-point info-card">
              <div className="flex items-start gap-3">
                <point.icon className="w-5 h-5 text-[#B9B9B9] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-[#F4F4F5] font-medium text-sm mb-1">{point.title}</h3>
                  <p className="text-[#A1A1AA] text-xs">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button ref={ctaRef} className="btn-secondary w-fit flex items-center gap-2">
          Meet the team
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
}
