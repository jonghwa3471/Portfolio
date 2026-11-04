"use client";

import { useId, useRef } from "react";

export function ActivityVideoDialog({
  src,
  poster,
  title,
}: {
  src: string;
  poster: string;
  title: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const player = useRef<HTMLVideoElement>(null);
  const titleId = useId();

  return (
    <figure>
      <button
        className="activity-video-trigger"
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
      >
        <span className="activity-video-thumbnail">
          <img src={poster} alt="" loading="lazy" />
          <span aria-hidden="true">▶</span>
        </span>
        완성본 보기
      </button>
      <dialog
        className="activity-story-details activity-video-dialog"
        ref={dialog}
        aria-labelledby={titleId}
        onClose={() => player.current?.pause()}
        onClick={(event) => {
          const panel = event.currentTarget;
          if (event.target !== panel) return;
          const bounds = panel.getBoundingClientRect();
          if (
            event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom
          ) {
            panel.close();
          }
        }}
      >
        <form method="dialog">
          <button type="submit" autoFocus>닫기</button>
        </form>
        <h2 id={titleId}>{title}</h2>
        <video
          ref={player}
          aria-labelledby={titleId}
          controls
          muted
          playsInline
          preload="none"
          poster={poster}
          width={1280}
          height={720}
        >
          <source src={src} type="video/mp4" />
          <a href={src}>{title} 열기</a>
        </video>
      </dialog>
    </figure>
  );
}
