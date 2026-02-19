// src/pages/ProductsPage.tsx
import {
  ArrowRight,
  Scissors,
  Cpu,
  Settings,
  Wrench,
  Layers,
  Shirt,
  Sparkles,
  ShieldCheck,
  Gauge,
  Combine,
  CircleDot,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";
import FooterSection from "../sections/FooterSection";

type Cat = {
  icon: any;
  title: string;
  desc: string;
  to: string;
  meta?: string;
  img?: string;
};

const cats: Cat[] = [
  { icon: Shirt, title: "Lock Stitch", desc: "Straight, durable stitches for daily production-light to heavy fabrics.", to: "/our-machines/lock-stitch", meta: "Explore models",img: "/images/categories/lock.png" },
  { icon: Layers, title: "Chain Stitch", desc: "Flexible high-speed stitches for seams needing strength + elasticity.", to: "/our-machines/chain-stitch", meta: "Explore models",img: "/images/categories/chain.png"  },
  { icon: ShieldCheck, title: "Button Stitch", desc: "Fast, accurate button attaching-consistent output at scale.", to: "/our-machines/button-stitch", meta: "Explore models",img: "/images/categories/button-stitch.png"  },
  { icon: Combine, title: "Interlock", desc: "Smooth, stretchable seams for knitwear, innerwear, sportswear lines.", to: "/our-machines/interlock", meta: "Explore models",img: "/images/categories/interlock.png" },
  { icon: Scissors, title: "Overlock", desc: "Trim + stitch + finish in one pass-clean edges, durable seams.", to: "/our-machines/overlock", meta: "Explore models",img: "/images/categories/overlock.png" },
  { icon: CircleDot, title: "Button Hole", desc: "Uniform, high-quality buttonholes with speed and repeatability.", to: "/our-machines/button-hole", meta: "Explore models",img: "/images/categories/button-hole.png" },
  { icon: Cpu, title: "Automatic", desc: "Automation for higher throughput and operator-independent consistency.", to: "/our-machines/automatic", meta: "Explore automation",img: "/images/categories/automatic.png" },
  { icon: Gauge, title: "Leather", desc: "High penetration power for leather, upholstery, and thick materials.", to: "/our-machines/leather", meta: "Explore heavy-duty",img: "/images/categories/leather.png" },
  { icon: Sparkles, title: "Decorative", desc: "Aesthetic stitching and ornamental operations to elevate finish.", to: "/our-machines/decorative", meta: "Explore finishes",img: "/images/categories/decorative.png" },
  { icon: Scissors, title: "Cutting & Fusing", desc: "Accurate cutting + strong bonding support for stable production flow.", to: "/our-machines/cutting-fusing", meta: "Explore solutions",img: "/images/categories/cutting-fusing.png" },
  { icon: Wrench, title: "Specialized", desc: "Purpose-built machines for unique operations and niche requirements.", to: "/our-machines/specialized", meta: "Explore use-cases",img: "/images/categories/specialized.png" },
  { icon: Settings, title: "Spare & Accessories", desc: "Genuine spares and kits to maintain uptime, performance and life.", to: "/our-machines/spares-accessories", meta: "Explore spares",img: "/images/categories/spares-accessories.png" },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="px-[4vw] pb-16 pt-28 md:pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Top heading */}
          <header className="text-center">
            <p className="mb-6 tracking-[0.32em] text-[13px] md:text-[14px] font-medium text-white/80">
              PRODUCTS
            </p>

            <h1 className="headline-xl leading-[0.92]">EXPLORE BY CATEGORY</h1>

            <p className="mt-5 max-w-2xl mx-auto leading-relaxed text-white/60">
              We’ll help you finalize the exact model,
              configuration and accessories.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/products#our-machines"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition border"
                style={{
                  background: "rgba(2,115,191,0.14)",
                  borderColor: "rgba(2,115,191,0.35)",
                  color: "#EAF6FF",
                  backdropFilter: "blur(10px)",
                }}
              >
                View Models <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition border"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.12)",
                  color: "#F4F4F5",
                  backdropFilter: "blur(10px)",
                }}
              >
                Request a Demo <ArrowRight className="w-4 h-4 opacity-70" />
              </Link>
            </div>
          </header>

          {/* ✅ CENTER-ALIGNED "Our Machines" + subtitle (your issue) */}
          <div className="mt-16 mb-8 text-center">
            <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-tight">
              Our Machines
            </h2>
            {/* <p className="mt-3 text-white/55 text-sm md:text-[15px] max-w-2xl mx-auto leading-relaxed">
              Choose a category to explore models, applications, and recommended setups.
            </p> */}
          </div>

          {/* Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cats.map((c) => {
              const Icon = c.icon;

              return (
                <Link
                  key={c.title}
                  to={c.to}
                  className="
                    group relative overflow-hidden rounded-2xl
                    transition hover:-translate-y-[3px]
                    hover:border-white/20 hover:bg-white/[0.055]
                    focus:outline-none focus:ring-2 focus:ring-white/15
                  "
                  style={{
                    background: "rgba(255,255,255,0.035)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  {/* Unified top strip */}
<div className="relative h-44 md:h-48 lg:h-52 overflow-hidden rounded-t-2xl mb-3">

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

  <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/12 to-transparent rotate-12 translate-x-[-60%] group-hover:translate-x-[260%] transition duration-700" />

  {/* ✅ FULL IMAGE */}
  {c.img && (
    <img
      src={c.img}
      alt={c.title}
      className="
        absolute inset-0
        w-full h-full object-cover

        transition-transform duration-300 ease-out
        group-hover:scale-110
      "
      loading="lazy"
    />
  )}

</div>


                  <div className="p-6 pt-5">
                    <h3 className="text-white font-semibold tracking-tight text-[18px]">
                      {c.title}
                    </h3>

                    <p className="text-sm mt-2 leading-relaxed min-h-[44px] text-white/60">
                      {c.desc}
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
                        {c.meta ?? "Explore"}
                      </span>

                      <span className="inline-flex items-center gap-2 text-sm text-white/90">
                        <span className="underline underline-offset-4 decoration-white/10 group-hover:decoration-white/30">
                          Explore
                        </span>
                        <ArrowRight className="w-4 h-4 opacity-80 group-hover:opacity-100 group-hover:translate-x-[2px] transition" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </section>

          {/* Bottom CTA */}
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
                <h2 className="headline-md mb-2">Need the right model fast?</h2>
                <p className="text-sm leading-relaxed max-w-2xl text-white/60">
                  Share stitch type, material, thickness and output targets. We’ll recommend the best setup with motor, table,
                  folders and spares.
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
