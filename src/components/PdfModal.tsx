import { useEffect } from "react";
import { X } from "lucide-react";

export default function PdfModal({
  open,
  title,
  url,
  onClose,
}: {
  open: boolean;
  title: string;
  url: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.65)" }}
      onClick={onClose}
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
            <h3 className="text-white font-semibold">{title}</h3>
          </div>

          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition p-2 rounded-lg"
            style={{ border: "1px solid rgba(255,255,255,0.12)" }}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4">
          <div
            className="rounded-xl overflow-hidden border"
            style={{ borderColor: "rgba(255,255,255,0.10)" }}
          >
            <iframe
              src={url}
              title={title}
              className="w-full"
              style={{ height: "75vh", background: "white" }}
            />
          </div>
          <p className="mt-3 text-xs text-white/45">
            Press <span className="text-white/70">Esc</span> to close.
          </p>
        </div>
      </div>
    </div>
  );
}
