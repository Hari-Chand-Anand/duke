import { useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Factory, PenTool, Layers, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { icon: Factory, title: "Garment Manufacturers", description: "Bulk apparel & export units" },
  { icon: PenTool, title: "Embroidery & Quilting", description: "Precision decorative stitching" },
  { icon: Layers, title: "Denim & Heavy Fabric", description: "Thick material production" },
  { icon: Shield, title: "Uniform & Workwear", description: "Durable industrial garments" }
];


export default function CustomersSection() {
  const navigate = useNavigate();

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
          start: "top top",
          end: "+=130%",
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE
      scrollTl.fromTo(
        leftPanel,
        { x: "-55vw", opacity: 0, scale: 1.06 },
        { x: 0, opacity: 1, scale: 1, ease: "none" },
        0
      );

      scrollTl.fromTo(
        rightPanel,
        { x: "45vw", opacity: 0 },
        { x: 0, opacity: 1, ease: "none" },
        0
      );

      scrollTl.fromTo(
        headline,
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, ease: "none" },
        0.05
      );

      const cardItems = cards.querySelectorAll(".category-card");
      scrollTl.fromTo(
        cardItems,
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
        cardItems,
        { y: 0, opacity: 1 },
        { y: "6vh", opacity: 0, stagger: 0.008, ease: "power2.in" },
        0.72
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="customers"
      className="relative w-full h-screen bg-transparent overflow-hidden z-30"
    >
      {/* Left media panel */}
      <div ref={leftPanelRef} className="absolute left-0 top-0 w-[55vw] h-full">
        <img
          src="/customers_closeup.jpg"
          alt="Sewing machine needle close-up"
          className="w-full h-full object-cover editorial-image"
        />
      </div>

      {/* Divider */}
      <div className="absolute left-[55vw] top-0 w-px h-full hairline z-20" />

      {/* Right content */}
      <div
        ref={rightPanelRef}
        className="absolute left-[55vw] top-0 w-[45vw] h-full flex flex-col justify-center px-[6vw]"
      >
        <span className="micro-label mb-6">Our Customers</span>

        <h2 ref={headlineRef} className="headline-lg mb-8">
          trusted by industry leaders
        </h2>

        <div ref={cardsRef} className="grid grid-cols-2 gap-3 mb-8">
          {categories.map((cat) => (
            <div key={cat.title} className="category-card info-card group py-2">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-md bg-[rgba(244,244,245,0.05)] flex items-center justify-center">
                  <cat.icon className="w-4 h-4 text-[#B9B9B9]" />
                </div>
                <div>
                  <h3 className="text-[#F4F4F5] text-xs font-medium">
                    {cat.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-[10px]">
                    {cat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          ref={ctaRef}
          onClick={() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    navigate("/customers");
  }}
          className="btn-primary w-fit flex items-center gap-2"
        >
          View Customers
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
}
