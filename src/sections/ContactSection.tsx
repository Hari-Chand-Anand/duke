import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const offices = [
  {
    city: 'Delhi',
    type: 'Branch',
    address: 'A-94/1, Okhla Industrial Area, Phase-II',
    detail: 'New Delhi-110020'
  },
  {
    city: 'Bangalore',
    type: 'Branch',
    address: '61/A, 1st Main Road, Industrial Suburb',
    detail: 'Yeshwanthpur, Bangalore-560022'
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const officesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;
    const headline = headlineRef.current;
    const officesEl = officesRef.current;
    const contact = contactRef.current;

    if (!section || !leftPanel || !rightPanel || !headline || !officesEl || !contact) return;

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
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.05
      );

      const officeItems = officesEl.querySelectorAll('.office-item');
      scrollTl.fromTo(officeItems,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.012, ease: 'none' },
        0.12
      );

      scrollTl.fromTo(contact.children,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.015, ease: 'none' },
        0.2
      );

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      scrollTl.fromTo(leftPanel,
        { x: 0, opacity: 1 },
        { x: '-12vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(rightPanel,
        { x: 0, opacity: 1 },
        { x: '10vw', opacity: 0, ease: 'power2.in' },
        0.75
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full h-screen bg-transparent overflow-hidden z-[70]"
    >
      {/* Left media panel */}
      <div
        ref={leftPanelRef}
        className="absolute left-0 top-0 w-[55vw] h-full"
      >
        <img
          src="/contact_detail.png"
          alt="Sewing machine needle plate detail"
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
        <span className="micro-label mb-4">Contact</span>

        {/* Headline */}
        <h2 ref={headlineRef} className="headline-lg mb-5">
          LET'S CONNECT.
        </h2>

        {/* Offices - 2 column grid */}
        <div ref={officesRef} className="grid grid-cols-2 gap-2 mb-5">
          {offices.map((office, index) => (
            <div key={index} className="office-item bg-[rgba(244,244,245,0.03)] border border-[rgba(244,244,245,0.06)] rounded-md p-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <MapPin className="w-3 h-3 text-[#B9B9B9]" />
                <span className="text-[#F4F4F5] text-xs font-medium">{office.city}</span>
                {office.type === 'Head Office' && (
                  <span className="text-[10px] text-[#B9B9B9] font-mono">(HQ)</span>
                )}
              </div>
              <p className="text-[#6B6B6B] text-[9px] leading-tight">{office.address}</p>
            </div>
          ))}
        </div>

        {/* Contact details */}
        <div ref={contactRef} className="space-y-2 pt-4 border-t border-[rgba(244,244,245,0.1)]">
          <div className="flex items-center gap-3 text-[#A1A1AA] text-xs">
            <Phone className="w-4 h-4 text-[#B9B9B9]" />
            <div>
              <span className="text-[#F4F4F5]">+91 93133 08705</span>
              <span className="text-[#6B6B6B] mx-2">|</span>
              <span className="text-[#6B6B6B]">+91 88600 86712</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[#A1A1AA] text-xs">
            <Mail className="w-4 h-4 text-[#B9B9B9]" />
            <a href="mailto:enquiry@grouphca.com" className="hover:text-[#F4F4F5] transition-colors">
              enquiry@grouphca.com
            </a>
          </div>
          <a 
            href="https://api.whatsapp.com/send?phone=919313308705"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full flex items-center justify-center gap-2 mt-4"
          >
            <Phone className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

    </section>
  );
}
