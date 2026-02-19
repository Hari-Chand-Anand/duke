import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Search, Zap, Settings, Droplets } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Search, title: "Comprehensive Diagnostics", description: "Full machine assessment and performance evaluation" },
  { icon: Zap, title: "Motor & Electrical Repairs", description: "Restore power and functionality" },
  { icon: Settings, title: "Genuine Spare Parts", description: "OEM parts for Duke, Hikari, Highlead, Kansai & more" },
  { icon: Droplets, title: "Routine Maintenance", description: "Cleaning, oiling, calibration, and tune-ups" },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;
    const headline = headlineRef.current;
    const list = listRef.current;
    const cta = ctaRef.current;

    if (!section || !leftPanel || !rightPanel || !headline || !list || !cta) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=130%",
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (balanced like ProductsSection)
      scrollTl.fromTo(
        leftPanel,
        { x: "-55vw", opacity: 0 },
        { x: 0, opacity: 1, ease: "none" },
        0
      );

      scrollTl.fromTo(
        rightPanel,
        { x: "45vw", opacity: 0, scale: 1.06 },
        { x: 0, opacity: 1, scale: 1, ease: "none" },
        0
      );

      scrollTl.fromTo(
        headline,
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, ease: "none" },
        0.05
      );

      const listItems = list.querySelectorAll(".service-item");
      scrollTl.fromTo(
        listItems,
        { x: "10vw", opacity: 0, rotateZ: 1 },
        { x: 0, opacity: 1, rotateZ: 0, stagger: 0.012, ease: "none" },
        0.1
      );

      scrollTl.fromTo(
        cta,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, ease: "none" },
        0.2
      );

      // EXIT
      scrollTl.fromTo(
        leftPanel,
        { x: 0, opacity: 1 },
        { x: "-16vw", opacity: 0, ease: "power2.in" },
        0.7
      );

      scrollTl.fromTo(
        rightPanel,
        { x: 0, opacity: 1 },
        { x: "12vw", opacity: 0, ease: "power2.in" },
        0.7
      );

      scrollTl.fromTo(
        listItems,
        { y: 0, opacity: 1 },
        { y: "6vh", opacity: 0, stagger: 0.008, ease: "power2.in" },
        0.72
      );

      scrollTl.fromTo(
        cta,
        { y: 0, opacity: 1 },
        { y: "3vh", opacity: 0, ease: "power2.in" },
        0.76
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full h-screen bg-transparent overflow-hidden z-40"
    >
      {/* Left content panel */}
      <div
        ref={leftPanelRef}
        className="absolute left-0 top-0 w-[45vw] h-full flex flex-col justify-center px-[6vw]"
      >
        <span className="micro-label mb-6">Services</span>

        <h2 ref={headlineRef} className="headline-lg mb-8">
          SERVICE.
          <br />
          SUPPORT.
        </h2>

        <div ref={listRef} className="space-y-3 mb-8">
          {services.map((service, index) => (
            <div key={index} className="service-item info-card group py-2">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-md bg-[rgba(244,244,245,0.05)] flex items-center justify-center">
                  <service.icon className="w-4 h-4 text-[#B9B9B9]" />
                </div>

                <div>
                  <h3 className="text-[#F4F4F5] text-xs font-medium">
                    {service.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-[10px]">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          ref={ctaRef}
          href="https://api.whatsapp.com/send?phone=919313308705"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary w-fit flex items-center gap-2"
        >
          Book a Service
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Divider */}
      <div className="absolute left-[45vw] top-0 w-px h-full hairline z-20" />

      {/* Right media panel */}
      <div
        ref={rightPanelRef}
        className="absolute left-[45vw] top-0 w-[55vw] h-full"
      >
        <img
          src="/services_technician.png"
          alt="Technician servicing machine"
          className="w-full h-full object-cover editorial-image object-[60%_center]"
        />
      </div>
    </section>
  );
}
