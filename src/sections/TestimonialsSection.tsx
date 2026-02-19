import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: 'Duke has been our trusted partner for over 35 years. Their service quality is unmatched.',
    author: 'Production Manager',
    location: 'Delhi'
  }
];

const faqs = [
  {
    question: 'Do you sell new or used machines?',
    answer: 'We offer both new and refurbished industrial machines. All units undergo thorough inspection and testing before shipment, ensuring you receive reliable equipment.'
  },
  {
    question: 'Can you configure voltage and table size?',
    answer: 'Yes, we can configure machines for your specific voltage requirements and provide various table sizes and motor options to match your production needs.'
  }
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const testimonialsEl = testimonialsRef.current;
    const faqEl = faqRef.current;

    if (!section || !testimonialsEl || !faqEl) return;

    const ctx = gsap.context(() => {
      // Testimonial cards animation
      const cards = testimonialsEl.querySelectorAll('.testimonial-card');
      cards.forEach((card, index) => {
        gsap.fromTo(card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // FAQ items animation
      const faqItems = faqEl.querySelectorAll('.faq-item');
      faqItems.forEach((item, index) => {
        gsap.fromTo(item,
          { x: '6vw', opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            delay: index * 0.08,
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0B0B0D]/35 py-[10vh] z-[80]"
    >
      <div className="max-w-[1100px] mx-auto px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16">
          {/* Testimonials column */}
          <div ref={testimonialsRef}>
            <h2 className="font-display font-black uppercase tracking-[-0.02em] text-[clamp(24px,3vw,40px)] text-[#F4F4F5] mb-8">
              Our Client Say
            </h2>
            <div className="space-y-5">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card bg-[rgba(244,244,245,0.03)] border border-[rgba(244,244,245,0.08)] rounded-lg p-5"
                >
                  <Quote className="w-5 h-5 text-[#B9B9B9] mb-3" />
                  <p className="text-[#F4F4F5] text-sm mb-3 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-[#A1A1AA]">{testimonial.author},</span>
                    <span className="text-[#B9B9B9] font-mono">{testimonial.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ column */}
          <div ref={faqRef}>
            <h2 className="font-display font-black uppercase tracking-[-0.02em] text-[clamp(24px,3vw,40px)] text-[#F4F4F5] mb-8">
              FAQs
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="faq-item group bg-[rgba(244,244,245,0.02)] border border-[rgba(244,244,245,0.06)] rounded-lg overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-4 cursor-pointer list-none hover:bg-[rgba(244,244,245,0.04)] transition-colors">
                    <span className="text-[#F4F4F5] text-sm pr-4">{faq.question}</span>
                    <ChevronDown className="w-4 h-4 text-[#B9B9B9] flex-shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-4 pb-4">
                    <p className="text-[#A1A1AA] text-xs leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
