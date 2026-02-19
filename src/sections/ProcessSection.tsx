import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageSquare, Lightbulb, Truck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description: 'Tell us your requirements, volume, and budget.'
  },
  {
    icon: Lightbulb,
    title: 'Recommendation',
    description: 'We suggest the best machines for your needs.'
  },
  {
    icon: Truck,
    title: 'Delivery & Support',
    description: 'Installation, training, and after-sales service.'
  }
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;
    const headline = headlineRef.current;
    const stepsEl = stepsRef.current;
    const tagline = taglineRef.current;
    const cta = ctaRef.current;

    if (!section || !leftPanel || !rightPanel || !headline || !stepsEl || !tagline || !cta) return;

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
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.05
      );

      const stepItems = stepsEl.querySelectorAll('.process-step');
      scrollTl.fromTo(stepItems,
        { x: '-8vw', opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.02, ease: 'none' },
        0.1
      );

      scrollTl.fromTo(tagline,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.16
      );

      scrollTl.fromTo(cta,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.2
      );

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      scrollTl.fromTo(leftPanel,
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(rightPanel,
        { x: 0, opacity: 1 },
        { x: '16vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(stepItems,
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
      id="process"
      className="relative w-full h-screen bg-transparent overflow-hidden z-[60]"
    >
      {/* Left content panel */}
      <div
        ref={leftPanelRef}
        className="absolute left-0 top-0 w-[45vw] h-full flex flex-col justify-center px-[6vw]"
      >
        {/* Micro label */}
        <span className="micro-label mb-6">Process</span>

        {/* Headline */}
        <h2 ref={headlineRef} className="headline-lg mb-8">
          HOW WE WORK.
        </h2>

        {/* Process steps */}
        <div ref={stepsRef} className="space-y-5 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="process-step info-card">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[rgba(244,244,245,0.1)] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#B9B9B9] text-xs font-mono">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-[#F4F4F5] font-medium text-sm mb-1">{step.title}</h3>
                  <p className="text-[#A1A1AA] text-xs">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div ref={taglineRef} className="mb-6">
          <p className="text-[#B9B9B9] text-sm font-medium">
            Making Automation Affordable
          </p>
        </div>

        {/* CTA */}
        <a 
          ref={ctaRef} 
          href="https://api.whatsapp.com/send?phone=919313308705"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-fit flex items-center gap-2"
        >
          Start Your Inquiry
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
          src="/process_machine.png"
          alt="Sewing machine head side view"
          className="w-full h-full object-cover editorial-image"
        />
      </div>
    </section>
  );
}
