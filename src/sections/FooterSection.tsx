import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const navLinks = ['Products', 'Services', 'About', 'Contact'];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/grouphca/' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/9370183/' },
  { icon: Instagram, href: 'https://www.instagram.com/hca.co/' },
  { icon: Youtube, href: 'https://www.youtube.com/@HariChandAnandCo' }
];

export default function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(content,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="relative w-full bg-transparent border-t border-[rgba(244,244,245,0.08)] z-[90]"
    >
      <div ref={contentRef} className="max-w-[1100px] mx-auto px-[6vw] py-[6vh]">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <span className="font-mono text-sm font-medium tracking-[0.12em] text-[#F4F4F5]">
              Duke Sewing
            </span>
            <p className="text-[#A1A1AA] text-xs mt-2 max-w-[320px]">
              Empowering The Hands Behind Every Stitch. Industrial sewing machines and automation solutions since 1910.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#A1A1AA] text-xs hover:text-[#F4F4F5] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[rgba(244,244,245,0.05)] flex items-center justify-center text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[rgba(244,244,245,0.1)] transition-all"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Row 2 */}
        <div className="pt-6 border-t border-[rgba(244,244,245,0.06)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[#6B6B6B] text-xs">
            © 1910 - 2025 Duke Sewing. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-[#6B6B6B]">
            <a href="#" className="hover:text-[#A1A1AA] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#A1A1AA] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#A1A1AA] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
