import { Award, GraduationCap, Globe, Building2, ShieldCheck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const timeline = [
  { icon: Award, title: "1st Generation", subtitle: "Shri Hari Chand Anand", body: "Singer-trained pioneer; built trust on service-first selling." },
  { icon: GraduationCap, title: "2nd Generation", subtitle: "Mr. D.C. Anand", body: "Technical depth from Adler (Germany), 1933–1939." },
  { icon: Globe, title: "3rd Generation", subtitle: "Mr. Anil Anand", body: "Global technology exploration; scalable systems and training." },
];

const pillars = [
  { icon: ShieldCheck, title: "Genuine Parts", body: "Right spares, right fit-reduce downtime and rework loops." },
  { icon: Wrench, title: "Service Network", body: "Fast response, trained technicians, and clear preventive routines." },
  { icon: Building2, title: "Factory Outcomes", body: "Focus on throughput, quality, and cost-per-piece-not just price." },
];

export default function AboutPage() {
  return (
    <section className="px-[4vw] pb-20">
      <header className="max-w-6xl mx-auto pt-10 md:pt-14">
        <p className="micro-label mb-4">About</p>
        <h1 className="headline-xl mb-4">Built on reliability. Scaled with systems.</h1>
        <p className="text-[#A1A1AA] max-w-2xl leading-relaxed">
          Duke Sewing is supported by Hari Chand Anand &amp; Co. (HCA) - a service‑driven distribution and support team for industrial sewing and factory automation.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/#contact" className="btn-primary">Connect with us</a>
          <Link to="/customers" className="btn-secondary">See customer stories</Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {pillars.map((p) => (
          <div key={p.title} className="info-card p-6">
            <div className="w-10 h-10 rounded-lg bg-[rgba(244,244,245,0.06)] flex items-center justify-center">
              <p.icon className="w-5 h-5 text-[#D4D4D8]" />
            </div>
            <h3 className="text-[#F4F4F5] font-semibold mt-4">{p.title}</h3>
            <p className="text-[#A1A1AA] text-sm mt-2 leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-10">
        <h2 className="headline-md mb-4">Legacy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {timeline.map((t) => (
            <div key={t.title} className="info-card p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[rgba(244,244,245,0.06)] flex items-center justify-center">
                  <t.icon className="w-5 h-5 text-[#D4D4D8]" />
                </div>
                <div>
                  <p className="text-[#F4F4F5] font-semibold">{t.title}</p>
                  <p className="text-[#A1A1AA] text-xs">{t.subtitle}</p>
                </div>
              </div>
              <p className="text-[#A1A1AA] text-sm mt-4 leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 info-card p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h3 className="headline-sm mb-2">Want a quick recommendation?</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed max-w-2xl">
              Tell us your operation (garment/leather/home textile), stitch type, and daily output. We’ll propose the best-fit model with a support plan.
            </p>
          </div>
          <a href="/#contact" className="btn-primary w-fit">Get a recommendation</a>
        </div>
      </div>
    </section>
  );
}
