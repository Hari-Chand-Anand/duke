// src/pages/CustomersPage.tsx
import { ArrowRight, Gauge, ShieldCheck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";
import FooterSection from "../sections/FooterSection";

/* ================================
   ONE FEATURED (HERO)
================================ */
const featured = {
  micro: "MOST PREFERRED SETUP",
  name: "DUKE R9",
  desc:
    "The default choice for daily production lines. Optimized for stable stitch formation, low vibration, and consistent output—easy for operators to adopt.",
  bullets: [
    { icon: Gauge, label: "High-speed stability" },
    { icon: ShieldCheck, label: "Consistent stitch quality" },
    { icon: Wrench, label: "Spares + service ready" },
  ],
  meta: "Lockstitch • Daily Production",
  img: "/services_technician.png", // replace with real R9 image if available
  to: "/our-machines/lock-stitch",
};

/* ================================
   PRODUCTION SEGMENTS (CLEAN)
================================ */
type Segment = {
  title: string;
  subtitle: string;
  badge: string;
};

const segments: Segment[] = [
  { title: "Knitwear & Hosiery", subtitle: "Overlock • Interlock • Coverstitch", badge: "Seam stability at speed" },
  { title: "Export Garment Units", subtitle: "Lockstitch • Buttonhole • Bartack", badge: "Consistency at scale" },
  { title: "Denim & Heavy Fabric", subtitle: "Heavy lockstitch • Attachments", badge: "Higher penetration" },
  { title: "Leather & Upholstery", subtitle: "Walking foot • Post bed", badge: "Controlled feeding" },
  { title: "Innerwear & Activewear", subtitle: "Flatlock • Coverstitch • Elastic", badge: "Premium finishing" },
  { title: "Automated Workstations", subtitle: "Pattern • Guides • Automation", badge: "Throughput boost" },
];

export default function CustomersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="px-[4vw] pb-16 pt-28 md:pt-32">
        <div className="max-w-6xl mx-auto">
          {/* ================================
              HEADER
          ================================= */}
          <header className="text-center">
            <p className="mb-6 tracking-[0.32em] text-[13px] md:text-[14px] font-medium text-white/80">
              OUR CUSTOMERS
            </p>

            <h1 className="headline-xl leading-[0.92]">TRUSTED IN PRODUCTION.</h1>

            <p className="mt-5 max-w-2xl mx-auto leading-relaxed text-white/60">
              DUKE machines—backed by HCA configuration, installation, spares and service support.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition border"
                style={{
                  background: "rgba(2,115,191,0.14)",
                  borderColor: "rgba(2,115,191,0.35)",
                  color: "#EAF6FF",
                  backdropFilter: "blur(10px)",
                }}
              >
                Talk to HCA <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition border"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.12)",
                  color: "#F4F4F5",
                  backdropFilter: "blur(10px)",
                }}
              >
                Explore Products <ArrowRight className="w-4 h-4 opacity-70" />
              </Link>
            </div>
          </header>

          {/* ================================
              FEATURED HERO (PREMIUM)
          ================================= */}
          <section
            className="mt-14 overflow-hidden rounded-2xl border"
            style={{
              background: "rgba(255,255,255,0.035)",
              borderColor: "rgba(255,255,255,0.10)",
              boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
              backdropFilter: "blur(14px)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* LEFT CONTENT */}
              <div className="p-7 md:p-10">
                <p className="tracking-[0.32em] text-[12px] font-medium text-white/70">
                  {featured.micro}
                </p>

                <h2 className="mt-4 text-white font-semibold tracking-tight text-[28px] md:text-[34px] leading-[1.05]">
                  {featured.name}
                </h2>

                <p className="mt-4 text-white/60 leading-relaxed max-w-xl">
                  {featured.desc}
                </p>

                {/* Proof chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.bullets.map((b) => {
                    const Icon = b.icon;
                    return (
                      <span
                        key={b.label}
                        className="inline-flex items-center gap-2 text-xs rounded-full px-3 py-1"
                        style={{
                          color: "rgba(234,246,255,0.9)",
                          border: "1px solid rgba(2,115,191,0.25)",
                          background: "rgba(2,115,191,0.08)",
                        }}
                      >
                        <Icon className="w-4 h-4 opacity-80" />
                        {b.label}
                      </span>
                    );
                  })}
                </div>

                <div className="mt-7 flex items-center gap-3 flex-wrap">
                  <Link
                    to={featured.to}
                    className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition border"
                    style={{
                      background: "rgba(2,115,191,0.14)",
                      borderColor: "rgba(2,115,191,0.35)",
                      color: "#EAF6FF",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    View Models <ArrowRight className="w-4 h-4" />
                  </Link>

                  <span className="text-sm text-white/55">{featured.meta}</span>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative min-h-[260px] lg:min-h-[380px]">
                {/* same top-strip + grid feel */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(70% 120% at 20% 0%, rgba(2,115,191,0.26) 0%, rgba(2,115,191,0.10) 48%, rgba(0,0,0,0) 100%)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />

                <img
                  src={featured.img}
                  alt={featured.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />

                {/* subtle edge fade to blend */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/10 to-black/40" />
              </div>
            </div>
          </section>

          {/* ================================
              SEGMENTS GRID
          ================================= */}
          <div className="mt-16 mb-8 text-center">
            <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-tight">
              Production Segments We Support
            </h2>
            <p className="mt-3 text-white/55 text-sm md:text-[15px] max-w-2xl mx-auto leading-relaxed">
              Clear setups, stable output and service coverage—built for real factories.
            </p>
          </div>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {segments.map((s) => (
              <div
                key={s.title}
                className="
                  group relative overflow-hidden rounded-2xl
                  transition hover:-translate-y-[3px]
                  hover:border-white/20 hover:bg-white/[0.055]
                "
                style={{
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
                  backdropFilter: "blur(14px)",
                }}
              >
                {/* top strip (same language) */}
                <div className="relative h-24">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(70% 120% at 20% 0%, rgba(2,115,191,0.28) 0%, rgba(2,115,191,0.10) 45%, rgba(0,0,0,0) 100%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                    }}
                  />
                </div>

                <div className="p-6 pt-5">
                  <h3 className="text-white font-semibold tracking-tight text-[18px]">
                    {s.title}
                  </h3>

                  <p className="text-sm mt-2 leading-relaxed text-white/60">
                    {s.subtitle}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span
                      className="text-xs rounded-full px-3 py-1"
                      style={{
                        color: "rgba(234,246,255,0.9)",
                        border: "1px solid rgba(2,115,191,0.25)",
                        background: "rgba(2,115,191,0.08)",
                      }}
                    >
                      {s.badge}
                    </span>

                    <Link to="/#contact" className="inline-flex items-center gap-2 text-sm text-white/90">
                      <span className="underline underline-offset-4 decoration-white/10 group-hover:decoration-white/30">
                        Get Setup
                      </span>
                      <ArrowRight className="w-4 h-4 opacity-80 group-hover:opacity-100 group-hover:translate-x-[2px] transition" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* ================================
              BOTTOM CTA (SAME STYLE)
          ================================= */}
          <div
            className="mt-10 rounded-2xl p-7 md:p-9 border"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(14px)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="headline-md mb-2">Need the right setup fast?</h2>
                <p className="text-sm leading-relaxed max-w-2xl text-white/60">
                  Share stitch type, material, thickness and output targets. We’ll recommend model + motor + folders + spares kit.
                </p>
              </div>

              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition border w-fit"
                style={{
                  background: "rgba(2,115,191,0.14)",
                  borderColor: "rgba(2,115,191,0.35)",
                  color: "#EAF6FF",
                  backdropFilter: "blur(10px)",
                }}
              >
                Talk to HCA <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
