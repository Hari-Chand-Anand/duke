import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import FooterSection from "../../sections/FooterSection";

type ModelItem = {
  name: string;
  note?: string;
};

type Props = {
  label: string;   // small top label e.g. "OUR MACHINES"
  title: string;   // big heading e.g. "LOCK STITCH"
  desc: string;    // subtitle
  models?: ModelItem[]; // ✅ ADD THIS
};

export default function MachineCategoryPage({ label, title, desc }: Props) {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="px-[4vw] pb-16 pt-28 md:pt-32">
        <div className="max-w-6xl mx-auto">
          <header className="text-center">
            <p className="mb-6 tracking-[0.32em] text-[13px] md:text-[14px] font-medium text-white/80">
              {label}
            </p>

            <h1 className="headline-xl leading-[0.92]">{title}</h1>

            <p className="mt-5 max-w-2xl mx-auto leading-relaxed text-white/60">
              {desc}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition border"
                style={{
                  background: "rgba(2,115,191,0.14)",
                  borderColor: "rgba(2,115,191,0.35)",
                  color: "#EAF6FF",
                  backdropFilter: "blur(10px)",
                }}
              >
                Back to Products <ArrowRight className="w-4 h-4" />
              </Link>

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

          {/* Content Box (same theme) */}
          <div
            className="mt-12 rounded-2xl p-7 md:p-9 border"
            style={{
              background: "rgba(255,255,255,0.035)",
              borderColor: "rgba(255,255,255,0.10)",
              boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
              backdropFilter: "blur(14px)",
            }}
          >
            <div className="text-center">
              <h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight">
                Models & Recommended Setups
              </h2>
              <p className="mt-3 text-white/60 max-w-2xl mx-auto leading-relaxed">
                We can add model cards here later (e.g. DY series), with needle system, max speed,
                fabric range, motor + table suggestions and folders.
              </p>

              <div className="mt-6 flex justify-center">
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
                  Ask for the best model <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

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
                  Tell us fabric type, thickness, stitch requirement, and output target. We’ll recommend the ideal setup with motor, table, folders and spares.
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
