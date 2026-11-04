"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

type Slide = { src: string; caption: string };
type Selection = Slide & { slides?: Slide[]; index?: number };
const ImageContext = createContext<(image: Selection) => void>(() => {});

// Coordinates follow each photo's aspect ratio at a reference width of 900.
const activityHighlights: Record<string, { height: number; frame: [number, number, number, number]; color: string }> = {
  "startup-camp-2023-crop.png": { height: 792, frame: [294, 86, 226, 310], color: "yellow" },
  "hackathon-team-award.jpg": { height: 600, frame: [539, 183, 74, 168], color: "pink" },
  "hackathon-audience.jpg": { height: 514, frame: [434, 327, 27, 31], color: "pink" },
  "sw-hackathon-2023.jpg": { height: 600, frame: [616, 367, 22, 27], color: "pink" },
  "hackathon-photo-zone.jpg": { height: 892, frame: [345, 301, 149, 245], color: "pink" },
  "chiang-mai-program-group.jpg": { height: 676, frame: [598, 426, 43, 43], color: "yellow" },
  "chiang-mai-presentation.jpg": { height: 1200, frame: [196, 441, 76, 189], color: "yellow" },
  "chiang-mai-outdoor-group.jpg": { height: 508, frame: [592, 280, 103, 118], color: "yellow" },
  "chiang-mai-camt-portrait.jpg": { height: 1604, frame: [506, 545, 269, 318], color: "yellow" },
  "nomad-web-study-session.jpg": { height: 676, frame: [617, 278, 167, 174], color: "cyan" },
  "nomad-web-study-group.jpg": { height: 676, frame: [261, 245, 146, 181], color: "cyan" },
  "nomad-night-group.jpg": { height: 506, frame: [397, 241, 46, 49], color: "cyan" },
};

function ActivityHighlight({ src }: { src: string }) {
  const filename = src.slice(src.lastIndexOf("/") + 1);
  const highlight = activityHighlights[filename];
  if (!highlight) return null;

  const [x, y, width, height] = highlight.frame;
  const corner = Math.min(width, height) * 0.28;
  const color = `var(--${highlight.color})`;
  const labelX = x + width + 12;
  const labelY = y - 20;

  return (
    <svg className="activity-photo-highlight" viewBox={`0 0 900 ${highlight.height}`} aria-hidden="true">
      <path
        d={`M ${x} ${y + corner} v ${-corner} h ${corner}
            M ${x + width - corner} ${y} h ${corner} v ${corner}
            M ${x + width} ${y + height - corner} v ${corner} h ${-corner}
            M ${x + corner} ${y + height} h ${-corner} v ${-corner}
            M ${x + width} ${y} L ${labelX} ${y - 5}`}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <rect x={labelX} y={labelY} width="66" height="37" rx="18.5" fill={color} />
      <text x={labelX + 33} y={labelY + 19} className="activity-highlight-label">ME</text>
    </svg>
  );
}

function selectGalleryImage(target: HTMLElement, src: string, caption: string): Selection {
  const gallery = target.closest(".detail-page") || target.closest("[data-image-gallery]");
  if (!gallery) return { src, caption };
  const slides = Array.from(gallery.querySelectorAll<HTMLImageElement>("[data-zoom-image] img"))
    .map((item) => ({ src: item.getAttribute("src") ?? item.src, caption: item.alt }));
  const index = slides.findIndex((item) => item.src === src);
  return index < 0 ? { src, caption } : { src, caption, slides, index };
}

export function ImageViewer({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<Selection | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const isOpen = image !== null;
  const move = (direction: number) => {
    setImage((current) => {
      if (!current?.slides?.length) return current;
      const index =
        ((current.index ?? 0) + direction + current.slides.length) %
        current.slides.length;
      return { ...current.slides[index], slides: current.slides, index };
    });
  };
  useEffect(() => {
    setImage(null);
  }, [pathname]);
  useEffect(() => {
    if (!isOpen) {
      dialog.current?.close();
      return;
    }
    opener.current = document.activeElement as HTMLElement | null;
    dialog.current?.showModal();
  }, [isOpen]);
  return (
    <ImageContext.Provider value={setImage}>
      {children}
      <dialog
        className="learning-lightbox"
        aria-label="프로젝트 이미지 크게 보기"
        ref={dialog}
        onCancel={() => setImage(null)}
        onKeyDown={(event) => {
          if (!image?.slides || image.slides.length < 2) return;
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setImage(null);
        }}
        onClose={() => {
          setImage(null);
          opener.current?.focus({ preventScroll: true });
        }}
      >
        <button
          type="button"
          aria-label="이미지 닫기"
          onClick={() => setImage(null)}
        >
          <span>닫기</span>
          <span aria-hidden="true">×</span>
        </button>
        {image && (
          <>
            <div className="lightbox-image-frame">
              <img src={image.src} alt={image.caption} />
              <ActivityHighlight src={image.src} />
            </div>
            <p>{image.caption}</p>
            {image.slides && image.slides.length > 1 && (
              <div className="image-gallery-navigation" aria-label="사진 탐색">
                <button
                  type="button"
                  aria-label="이전 사진"
                  onClick={() => move(-1)}
                >
                  ← 이전
                </button>
                <span aria-live="polite" aria-atomic="true">
                  {(image.index ?? 0) + 1} / {image.slides.length}
                </span>
                <button
                  type="button"
                  aria-label="다음 사진"
                  onClick={() => move(1)}
                >
                  다음 →
                </button>
              </div>
            )}
          </>
        )}
      </dialog>
    </ImageContext.Provider>
  );
}

export function ZoomImage({
  src,
  alt,
  className,
  cover = false,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  cover?: boolean;
  width?: number;
  height?: number;
}) {
  const open = useContext(ImageContext);
  const image = (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
    />
  );
  if (cover)
    return (
      <button
        type="button"
        className="project-cover__image-button"
        aria-label={`${alt} 크게 보기`}
        aria-haspopup="dialog"
        data-zoom-image
        onClick={(event) => open(selectGalleryImage(event.currentTarget, src, alt))}
      >
        {image}
      </button>
    );
  return (
    <a
      href={src}
      aria-label={`${alt} 크게 보기`}
      aria-haspopup="dialog"
      data-zoom-image
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
          return;
        event.preventDefault();
        open(selectGalleryImage(event.currentTarget, src, alt));
      }}
    >
      {image}
      <ActivityHighlight src={src} />
    </a>
  );
}

export function LearningImage({
  src,
  caption,
}: {
  src: string;
  caption: string;
}) {
  const open = useContext(ImageContext);
  return (
    <button
      type="button"
      className="learning-image"
      aria-label={`${caption} 크게 보기`}
      aria-haspopup="dialog"
      data-zoom-image
      onClick={(event) => open(selectGalleryImage(event.currentTarget, src, caption))}
    >
      <img src={src} alt={caption} loading="lazy" />
      <span aria-hidden="true">크게 보기 ↗</span>
    </button>
  );
}
