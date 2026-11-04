"use client";

import { useId, useRef } from "react";

export function ActivityStoryDialog({ title, story }: { title: string; story: string[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  return (
    <>
      <button
        className="activity-story-trigger"
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
      >
        활동 이야기 읽기 <span aria-hidden="true">↗</span>
      </button>
      <dialog
        className="activity-story-details"
        ref={dialog}
        aria-labelledby={titleId}
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
        {story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </dialog>
    </>
  );
}
