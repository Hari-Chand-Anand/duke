import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroSection from "../sections/HeroSection";
import LegacySection from "../sections/LegacySection";
import ProductsSection from "../sections/ProductsSection";
import CustomersSection from "../sections/CustomersSection";
import ServicesSection from "../sections/ServicesSection";
import SolutionsSection from "../sections/SolutionsSection";
import ProcessSection from "../sections/ProcessSection";
import ContactSection from "../sections/ContactSection";
import TestimonialsSection from "../sections/TestimonialsSection";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useEffect(() => {
    // Global snap only on the homepage (desktop/tablet).
    const timer = window.setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter((st) => st.vars.pin)
        .sort((a, b) => (a.start ?? 0) - (b.start ?? 0));

      const maxScroll = ScrollTrigger.maxScroll(window);
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      if (!maxScroll || pinned.length === 0 || isMobile) return;

      const pinnedRanges = pinned.map((st) => ({
        start: (st.start ?? 0) / maxScroll,
        end: ((st.end ?? st.start) ?? 0) / maxScroll,
        center:
          ((st.start ?? 0) +
            (((st.end ?? st.start) ?? 0) - (st.start ?? 0)) * 0.5) /
          maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(
              (r) => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            if (!inPinned) return value;

            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: "power2.out",
        },
      });
    }, 500);

    return () => {
      window.clearTimeout(timer);
      // Kill only the global snap trigger we created (it has no id, so safest is: kill all on unmount)
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div>
      <HeroSection />

      <div id="about">
        <LegacySection />
      </div>

      <ProductsSection />
      <CustomersSection />
      <ServicesSection />
      <SolutionsSection />
      <ProcessSection />

      <div id="contact">
        <ContactSection />
      </div>

      <TestimonialsSection />
    </div>
  );
}
