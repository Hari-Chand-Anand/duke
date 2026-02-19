import { useEffect, useRef } from "react";
import * as THREE from "three";
import DOTS from "vanta/dist/vanta.dots.min";

type VantaEffect = { destroy: () => void } | null;

export default function VantaDotsBackground() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<VantaEffect>(null);

  useEffect(() => {
    if (!vantaRef.current) return;
    if (effectRef.current) return;

    effectRef.current = DOTS({
      el: vantaRef.current,
      THREE,

      backgroundAlpha: 1.0,
      backgroundColor: 0x223696,
      color: 0x7b67bb,
      color2: 0x0273bf,

      size: 2.2,
      spacing: 22,
      showLines: false,

      mouseControls: true,
      touchControls: false,
      gyroControls: false,

      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
    });

    return () => {
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return <div ref={vantaRef} className="fixed inset-0 -z-10" style={{ pointerEvents: "none" }} />;
}
