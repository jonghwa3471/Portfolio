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

type Selection = { src: string; caption: string };
const ImageContext = createContext<(image: Selection) => void>(() => {});

export function ImageViewer({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<Selection | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  useEffect(() => {
    setImage(null);
  }, [pathname]);
  useEffect(() => {
    if (!image) {
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
  }, [image]);
  return (
    <ImageContext.Provider value={setImage}>
      {children}
      <dialog
        className="learning-lightbox"
        aria-label="프로젝트 이미지 크게 보기"
        ref={dialog}
        onCancel={() => setImage(null)}
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
        onClick={() => open({ src, caption: alt })}
      >
        {image}
      </button>
    );
  return (
    <a
      href={src}
      aria-label={`${alt} 크게 보기`}
      aria-haspopup="dialog"
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
          return;
        event.preventDefault();
        open({ src, caption: alt });
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
      onClick={() => open({ src, caption })}
    >
      <img src={src} alt={caption} loading="lazy" />
      <span aria-hidden="true">크게 보기 ↗</span>
    </button>
  );
}
