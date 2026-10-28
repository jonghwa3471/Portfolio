"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const distance =
          document.documentElement.scrollHeight - window.innerHeight;
        setProgress(
          distance > 0
            ? Math.min(100, Math.max(0, (window.scrollY / distance) * 100))
            : 100,
        );
      });
    };
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="reading-progress"
      role="progressbar"
      aria-label="페이지 읽기 진행도"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
    >
      <span className="reading-progress__track" aria-hidden="true">
        <span
          className="reading-progress__fill"
          style={{ transform: `scaleY(${progress / 100})` }}
        />
      </span>
      <span className="reading-progress__value" aria-hidden="true">
        {Math.round(progress)}%
      </span>
    </div>
  );
}
