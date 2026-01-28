// Background.jsx
import { useEffect, useRef } from "react";
import p5 from "p5";
import { backgroundSketch } from "../sketches/background";

export default function Background() {
  const sketchRef = useRef(null);

  useEffect(() => {
    const p5Instance = new p5(backgroundSketch, sketchRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return (
    <div
      ref={sketchRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1000,
        backgroundColor: "transparent",
        pointerEvents: "none",
      }}
    />
  );
}
