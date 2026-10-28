"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const homeItems = [
  ["stack", "기술 스택"],
  ["projects", "프로젝트"],
  ["journey", "학습 여정"],
  ["activities", "활동"],
  ["contact", "연락처"],
];
const projectItems = [
  ["motivation", "기획·핵심 역량"],
  ["experience", "핵심 기능"],
  ["frontend", "구현·문제 해결"],
  ["architecture", "구조·검증"],
  ["feedback", "사용자 피드백"],
];

export function SiteHeader({ project = false }: { project?: boolean }) {
  const items = project ? projectItems : homeItems;
  const [active, setActive] = useState("");
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const marker =
        (document.querySelector(".site-header")?.getBoundingClientRect()
          .height || 72) + (project ? 100 : innerHeight * 0.28);
      let current = "";
      if (project) {
        const owners: Record<string, string> = {
          motivation: "motivation",
          "frontend-decisions": "motivation",
          experience: "experience",
          frontend: "frontend",
          loading: "frontend",
          architecture: "architecture",
          backend: "architecture",
          technical: "architecture",
          verification: "architecture",
          operations: "architecture",
          feedback: "feedback",
        };
        for (const section of document.querySelectorAll<HTMLElement>(
          "section[id]",
        )) {
          if (
            owners[section.id] &&
            section.getBoundingClientRect().top <= marker
          )
            current = owners[section.id];
        }
      } else {
        for (const [id] of items) {
          const section = document.getElementById(id);
          if (section && section.getBoundingClientRect().top <= marker)
            current = id;
        }
      }
      setActive(current);
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [items, project]);
  return (
    <header className="site-header">
      <Link className="logo" href="/">
        <span className="logo-triangle" />
        <span>송종화</span>
      </Link>
      <nav aria-label={project ? "EOKKA 프로젝트 목차" : "포트폴리오 목차"}>
        {items.map(([id, label]) => (
          <a
            href={`#${id}`}
            key={id}
            className={active === id ? "is-active" : undefined}
            aria-current={active === id ? "location" : undefined}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
