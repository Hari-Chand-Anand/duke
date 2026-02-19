// src/pages/machines/ChainStitchPage.tsx
import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

import Navigation from "../../components/Navigation";
import FooterSection from "../../sections/FooterSection";

type Item = {
  title: string;
  img: string;
  pdf: string;       // ✅ catalog pdf link
  youtube?: string;  // ✅ optional youtube link
};

const ITEMS_PER_PAGE = 12;

const items: Item[] = [
  // ✅ Example (add youtube only if available)
  { title: "DY 1411 PSF",  img: "/images/chain/dy-1411psf.png", pdf: "/catalogs/dy-1411psf.pdf", youtube: "https://www.youtube.com/watch?v=HbCVdZL4SDM" },
  { title: "DY 1025 PSSM", img: "/images/chain/dy-1025pssm.png", pdf: "/catalogs/dy-1025pssm.pdf" },
  { title: "DY 1104 PTC", img: "/images/chain/dy-1104ptc.png", pdf: "/catalogs/dy-1104ptc.pdf" },
  { title: "DY 1104 UTC", img: "/images/chain/dy-1104utc.png", pdf: "/catalogs/dy-1104utc.pdf" },
  { title: "DY 1104 P", img: "/images/chain/dy-1104p.png", pdf: "/catalogs/dy-1104p.pdf" },
  { title: "DY 12064 PQ",  img: "/images/chain/dy-12064pq.png",  pdf: "/catalogs/dy-12064pq.pdf" },
  { title: "DY 1411 P",  img: "/images/chain/dy-1411p.png",      pdf: "/catalogs/dy-1411p.pdf" },
  { title: "DY 1412 PMR", img: "/images/chain/dy-1412pmr.png", pdf: "/catalogs/dy-1412pmr.pdf" },
  { title: "DY 1412/1417 PQSM",  img: "/images/chain/dy-1412pqsm.png",  pdf: "/catalogs/dy-1412pqsm.pdf" },
  { title: "DY 1412 PSMPTV", img: "/images/chain/dy-1412psmptv.png", pdf: "/catalogs/dy-1412psmptv.pdf" },
  { title: "DY 1412/1417 PQ",  img: "/images/chain/dy-1412pq.png",  pdf: "/catalogs/dy-1412pq.pdf" },

  // Page 2
  { title: "DY 1425 PSSM", img: "/images/chain/dy-1425pssm.png", pdf: "/catalogs/dy-1425pssm.pdf"},
  { title: "DY 1425P", img: "/images/chain/dy-1425p.png", pdf: "/catalogs/dy-1425p.pdf" },
  { title: "DY 1433P", img: "/images/chain/dy-1433p.png", pdf: "/catalogs/dy-1433p.pdf" },
  { title: "DY 1508 PRD D", img: "/images/chain/dy-1508prdd.png", pdf: "/catalogs/dy-1508prdd.pdf" },
  { title: "DY 787-CB356-N600-EST-DSW", img: "/images/chain/dy-787cb356n600estdsw.png", pdf: "/catalogs/dy-787cb356n600estdsw.pdf" },
  { title: "DY 1012 PS/ 1017 PS", img: "/images/chain/dy-1012.png", pdf: "/catalogs/dy-1012.pdf" },
  { title: "DY 1050 PS", img: "/images/chain/dy-1050ps.png", pdf: "/catalogs/dy-1050ps.pdf" },
  { title: "DY 1302 4W D", img: "/images/chain/dy-13024wd.png", pdf: "/catalogs/dy-13024wd.pdf" },
  { title: "DY 1404 P D", img: "/images/chain/dy-1404pd.png", pdf: "/catalogs/dy-1404pd.pdf" },
  { title: "DY 1404 PSFD", img: "/images/chain/dy-1404psfd.png", pdf: "/catalogs/dy-1404psfd.pdf" },
  { title: "DY 1406 P D", img: "/images/chain/dy-1406pd.png", pdf: "/catalogs/dy-1406pd.pdf" },


  // Page 3
  { title: "DY 1411 PSF D", img: "/images/chain/dy-1411psfd.png", pdf: "/catalogs/dy-1411psfd.pdf" },
  { title: "DY 1412 PL D", img: "/images/chain/dy-1412pld.png", pdf: "/catalogs/dy-1412pld.pdf" },
  { title: "DY 1412 PQ", img: "/images/chain/dy-1412pq.png", pdf: "/catalogs/dy-1412pq.pdf" },
  { title: "DY 1412 PS", img: "/images/chain/dy-1412ps.png", pdf: "/catalogs/dy-1412ps.pdf" },
  { title: "DY 1412 PSSM", img: "/images/chain/dy-1412pssm.png", pdf: "/catalogs/dy-1412pssm.pdf" },
  { title: "DY 1412 PSSM ET", img: "/images/chain/dy-1412pssmet.png", pdf: "/catalogs/dy-1412pssmet.pdf" },
  { title: "DY 1412 PTV", img: "/images/chain/dy-1412ptv.png", pdf: "/catalogs/dy-1412ptv.pdf" },
  { title: "DY 1433 PQSM", img: "/images/chain/dy-1433pqsm.png", pdf: "/catalogs/dy-1433pqsm.pdf" },
  { title: "DY 1433 PSSM EI", img: "/images/chain/dy-1433pssmei.png", pdf: "/catalogs/dy-1433pssmei.pdf" },
  { title: "DY 1508P D", img: "/images/chain/dy-1508pd.png", pdf: "/catalogs/dy-1508pd.pdf" },

  // Page 4
  { title: "DY 4404 P", img: "/images/chain/dy-4404p.png", pdf: "/catalogs/dy-4404p.pdf" },
  { title: "DY 4404 PQ UTC", img: "/images/chain/dy-4404pqutc.png", pdf: "/catalogs/dy-4404pqutc.pdf" },
  { title: "DY 4406 P D", img: "/images/chain/dy-4406pd.png", pdf: "/catalogs/dy-4406pd.pdf" },
  { title: "DY 4406 PL D", img: "/images/chain/dy-4406pld.png", pdf: "/catalogs/dy-4406pld.pdf" },
  { title: "DY 4412 P D", img: "/images/chain/dy-4412pd.png", pdf: "/catalogs/dy-4412pd.pdf" },
  { title: "DY 1509 (PRD ETR/F/K)", img: "/images/chain/dy-1509.png", pdf: "/catalogs/dy-1509.pdf" },
  { title: "DY 9588 XH MPF HM", img: "/images/chain/dy-9588xhmpfhm.png", pdf: "/catalogs/dy-9588xhmpfhm.pdf" },
  { title: "H928 XH PS", img: "/images/chain/h928xhps.png", pdf: "/catalogs/h928xhps.pdf" },
];

function toEmbedUrl(url: string) {
  try {
    const u = new URL(url);

    // youtu.be/<id>
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
    }

    // youtube.com/watch?v=<id>
    const id = u.searchParams.get("v");
    if (id) {
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
    }

    // youtube.com/embed/<id>
    if (u.pathname.includes("/embed/")) {
      return `${u.toString()}${u.search ? "&" : "?"}autoplay=1&rel=0&modestbranding=1`;
    }

    return url;
  } catch {
    return url;
  }
}

export default function ChainStitchPage() {
  const [page, setPage] = useState(1);

  // ✅ PDF popup state
  const [openPdf, setOpenPdf] = useState<{ title: string; pdf: string } | null>(null);

  // ✅ Video popup state
  const [openVideo, setOpenVideo] = useState<{ title: string; youtube: string } | null>(null);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(items.length / ITEMS_PER_PAGE)), []);
  const pageItems = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return items.slice(start, start + ITEMS_PER_PAGE);
  }, [page]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  // ✅ ESC close modals
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenPdf(null);
        setOpenVideo(null);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const showingFrom = (page - 1) * ITEMS_PER_PAGE + 1;
  const showingTo = Math.min(page * ITEMS_PER_PAGE, items.length);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="px-[4vw] pb-16 pt-28 md:pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-white/60 text-xs md:text-sm mb-6">
            <Link to="/" className="hover:text-white/80 transition">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-white/80 transition">
              Our Machines
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/85">Chain Stitch</span>
          </div>

          {/* Title row */}
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h1 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">
                Chainstitch Machines
              </h1>
            </div>
          </div>

          {/* Showing line */}
          <div className="mt-6 text-white/45 text-xs">
            Showing {showingFrom}–{showingTo} of {items.length} results
          </div>

          {/* Grid */}
          <section className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pageItems.map((it) => (
              <div
                 key={it.title}
                 className="
                            group rounded-2xl overflow-hidden border
                            transition hover:-translate-y-[3px]
                            hover:border-white/20 hover:bg-white/[0.055]
                            "
                  style={{
                    background: "rgba(255,255,255,0.035)",
                    borderColor: "rgba(255,255,255,0.10)",
                    boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
                    backdropFilter: "blur(14px)",
                  }}
                >

                {/* Image (same premium strip + grid like ProductsPage) */}
                <div className="relative h-56 overflow-hidden">
                  {/* Blue-to-black glow */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(70% 120% at 20% 0%, rgba(2,115,191,0.28) 0%, rgba(2,115,191,0.10) 45%, rgba(0,0,0,0) 100%)",
                    }}
                  />

                  {/* Subtle vertical grid lines */}
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                    }}
                  />

                  {/* Moving sheen on hover */}
                  <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/12 to-transparent rotate-12 translate-x-[-60%] group-hover:translate-x-[260%] transition duration-700" />

                  {/* Machine image */}
                  <div className="relative h-full flex items-center justify-center px-5">
                    <img
                      src={it.img}
                      alt={it.title}
                      className="
                        w-full h-full object-contain
                        scale-[1.08]
                        drop-shadow-[0_18px_40px_rgba(0,0,0,0.55)]
                        transition-transform duration-300 ease-out
                        group-hover:scale-[1.12]
                      "
                      loading="lazy"
                    />
                  </div>
                </div>


                {/* Text + buttons */}
                <div className="p-4">

                  <div className="mt-2 text-white font-semibold tracking-tight">{it.title}</div>

                  {/* ✅ READ MORE + VIDEO */}
                  <div className="mt-4 flex items-center justify-between">
                  {/* Left: CATALOG */}
                  <button
                    onClick={() => setOpenPdf({ title: it.title, pdf: it.pdf })}
                    className="h-[30px] inline-flex items-center justify-center rounded-md px-4 text-[11px] font-semibold border"
                    style={{
                      background: "rgba(2,115,191,0.14)",
                      borderColor: "rgba(2,115,191,0.35)",
                      color: "#EAF6FF",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    CATALOG
                  </button>

                  {/* Right: Play Video */}
                  {it.youtube && (
                    <button
                      onClick={() =>
                        setOpenVideo({ title: it.title, youtube: it.youtube! })
                      }
                      title="Watch Video"
                      className="h-[30px] w-[33px] flex items-center justify-center rounded-md border transition"
                      style={{
                        background: "rgba(2,115,191,0.10)",
                        borderColor: "rgba(2,115,191,0.30)",
                        color: "#EAF6FF",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                    <Play className="w-3 h-3" />

                    </button>
                  )}
                </div>

                </div>
              </div>
            ))}
          </section>

          {/* Pagination */}
          <div className="mt-10 flex items-center justify-start gap-2 text-white/70">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="h-8 w-8 rounded border flex items-center justify-center disabled:opacity-40"
              style={{
                borderColor: "rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const n = i + 1;
              const active = n === page;

              return (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className="h-8 w-8 rounded border text-xs font-medium"
                  style={{
                    borderColor: active ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.18)",
                    background: active ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
                    color: active ? "#fff" : "rgba(244,244,245,0.85)",
                  }}
                >
                  {n}
                </button>
              );
            })}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="h-8 w-8 rounded border flex items-center justify-center disabled:opacity-40"
              style={{
                borderColor: "rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      {/* ✅ PDF MODAL (normal open) */}
      {openPdf && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.70)" }}
          onClick={() => setOpenPdf(null)}
        >
          <div
            className="w-full max-w-5xl rounded-2xl border overflow-hidden"
            style={{
              background: "rgba(20,20,22,0.92)",
              borderColor: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(18px)",
              boxShadow: "0 30px 120px rgba(0,0,0,0.55)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex items-center justify-between px-5 py-4 border-b"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div>
                <p className="text-white/50 text-xs">Catalog</p>
                <h3 className="text-white font-semibold">{openPdf.title}</h3>
              </div>

              <button
                onClick={() => setOpenPdf(null)}
                className="text-white/70 hover:text-white transition px-3 py-2 rounded-lg"
                style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4">
              <iframe
                src={openPdf.pdf}
                title={openPdf.title}
                className="w-full rounded-xl"
                style={{ height: "70vh", border: "1px solid rgba(255,255,255,0.10)" }}
              />
              <p className="mt-3 text-xs text-white/45">
                Press <span className="text-white/70">Esc</span> to close.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ✅ VIDEO MODAL */}
      {openVideo && (
        <div
          className="fixed inset-0 z-[210] flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.70)" }}
          onClick={() => setOpenVideo(null)}
        >
          <div
            className="w-full max-w-4xl rounded-2xl border overflow-hidden"
            style={{
              background: "rgba(20,20,22,0.92)",
              borderColor: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(18px)",
              boxShadow: "0 30px 120px rgba(0,0,0,0.55)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex items-center justify-between px-5 py-4 border-b"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div>
                <p className="text-white/50 text-xs">Video</p>
                <h3 className="text-white font-semibold">{openVideo.title}</h3>
              </div>

              <button
                onClick={() => setOpenVideo(null)}
                className="text-white/70 hover:text-white transition px-3 py-2 rounded-lg"
                style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4">
              <iframe
                className="w-full rounded-xl"
                style={{ height: "60vh", border: "1px solid rgba(255,255,255,0.10)" }}
                src={toEmbedUrl(openVideo.youtube)}
                title={openVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <p className="mt-3 text-xs text-white/45">
                Press <span className="text-white/70">Esc</span> to close.
              </p>
            </div>
          </div>
        </div>
      )}

      <FooterSection />
    </div>
  );
}
