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
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
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
            <img src={image.src} alt={image.caption} />
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
