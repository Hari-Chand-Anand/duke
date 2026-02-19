import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;
    const content = contentRef.current;
    const headline = headlineRef.current;
    const subhead = subheadRef.current;
    const cta = ctaRef.current;

    if (!section || !media || !content || !headline || !subhead || !cta) return;

    const ctx = gsap.context(() => {
      // Auto-play entrance animation on load
      const loadTl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Media panel entrance
      loadTl.fromTo(media,
        { opacity: 0, x: '-6vw', scale: 1.03 },
        { opacity: 1, x: 0, scale: 1, duration: 1 },
        0
      );

      // Headline words entrance
      const words = headline.querySelectorAll('.word');
      loadTl.fromTo(words,
        { opacity: 0, y: 24, rotateX: 18 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.6, stagger: 0.03 },
        0.2
      );

      // Subheadline entrance
      loadTl.fromTo(subhead,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.5 },
        0.5
      );

      // CTAs entrance
      loadTl.fromTo(cta.children,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
        0.6
      );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            gsap.set(media, { opacity: 1, x: 0, scale: 1 });
            gsap.set(words, { opacity: 1, y: 0, rotateX: 0 });
            gsap.set(subhead, { opacity: 1, y: 0 });
            gsap.set(cta.children, { opacity: 1, y: 0 });
          }
        }
      });

      // EXIT (70-100%)
      scrollTl.fromTo(headline,
        { x: 0, opacity: 1 },
        { x: '10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(subhead,
        { x: 0, opacity: 1 },
        { x: '8vw', opacity: 0, ease: 'power2.in' },
        0.72
      );

      scrollTl.fromTo(cta.children,
        { y: 0, opacity: 1 },
        { y: '6vh', opacity: 0, stagger: 0.02, ease: 'power2.in' },
        0.74
      );

      scrollTl.fromTo(media,
        { x: 0, scale: 1, opacity: 1 },
        { x: '-12vw', scale: 1.06, opacity: 0, ease: 'power2.in' },
        0.7
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen + overflow-hidden z-10"
    >
      {/* Vignette overlay */}
      <div className="absolute inset-0 vignette pointer-events-none z-10" />

      {/* Left media panel */}
      <div
        ref={mediaRef}
        className="absolute left-0 top-0 w-[55vw] h-full"
      >
        <img
          src="/hero_machine.png"
          alt="Industrial Sewing Machine"
          className="w-full h-full object-cover editorial-image"
        />
      </div>

      {/* Hairline divider */}
      <div className="absolute left-[55vw] top-0 w-px h-full hairline z-20" />

      {/* Right content panel */}
      <div
        ref={contentRef}
        className="absolute left-[55vw] top-0 w-[45vw] h-full flex flex-col justify-center px-[6vw]"
      >
        {/* Micro label */}
        <span className="micro-label mb-6">Est. 1995</span>

        {/* Headline */}
        <h1 ref={headlineRef} className="headline-xl mb-8">
          <span className="word inline-block">INDUSTRIAL</span>{' '}
          <span className="word inline-block">SEWING</span>{' '}
          <span className="word inline-block">SOLUTIONS</span>
        </h1>

        {/* Subheadline */}
        <p ref={subheadRef} className="body-text max-w-[30vw] mb-10">
          Single-needle, overlock, and automation-sourced, inspected, and delivered across India and beyond.
        </p>

        {/* CTA buttons */}
        <div ref={ctaRef} className="flex items-center gap-4">
          <a href="#products" className="btn-primary flex items-center gap-2">
            Explore Products
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="btn-secondary flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Contact Us
          </a>
        </div>
      </div>

      {/* Top right micro label */}
      <span className="absolute right-[4vw] top-[13vh] micro-label z-20">
        DUKE SEWING
      </span>
    </section>
  );
}
