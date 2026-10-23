"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  assetPath,
  groups,
  learningProjects,
  projectPath,
  type LearningProject,
} from "@/lib/portfolio";
import { searchProjects } from "@/lib/journey-query";
import { useArchiveSearch } from "./learning-archive-scope";

export function JourneyCard({ item }: { item: LearningProject }) {
  return (
    <article className="journey-card">
      <Link className="journey-card-link" href={projectPath(item.id)}>
        {item.images?.[0] && (
          <div className="journey-thumb">
            <img
              src={assetPath(item.images[0].src)}
              alt={`${item.title} 실행 화면`}
              loading="lazy"
              decoding="async"
              width="720"
              height="450"
            />
          </div>
        )}
        <div className="journey-card-body">
          <div className="card-top">
            <time dateTime={item.created}>
              {item.created.replaceAll("-", ".")}
            </time>
            <span>{item.kind}</span>
          </div>
          <h3>{item.title}</h3>
          <p>{item.purpose}</p>
          <div className="mini-badges">
            {item.stack.slice(0, 4).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
            {item.stack.length > 4 && <span>+{item.stack.length - 4}</span>}
          </div>
          <span className="journey-detail-link">학습 내용 보기 ↗</span>
        </div>
      </Link>
      {item.blogs.length > 0 && (
        <a
          className="journey-blog-link"
          href={item.blogs[0].url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${item.title} 관련 블로그: ${item.blogs[0].title}`}
        >
          {item.blogs[0].kind} · 블로그 {item.blogs.length}편 ↗
        </a>
      )}
    </article>
  );
}

export default function JourneyArchive() {
  const { request } = useArchiveSearch();
  const [view, setView] = useState<"date" | "tech">("date");
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(9);
  const archive = useRef<HTMLDetailsElement>(null);
  const catalog = useRef<HTMLDivElement>(null);
  const nextFocus = useRef<number | null>(null);
  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get(
      "learningSearch",
    );
    if (query) {
      setSearch(query);
      setView("tech");
      if (archive.current) archive.current.open = true;
    }
  }, []);
  useEffect(() => {
    if (!request.revision) return;
    setSearch(request.query);
    setView("tech");
    setLimit(9);
    if (archive.current) {
      archive.current.open = true;
      archive.current.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      });
    }
  }, [request]);
  useEffect(() => {
    if (nextFocus.current !== null) {
      catalog.current
        ?.querySelectorAll<HTMLAnchorElement>(".journey-card-link")
        [nextFocus.current]?.focus({ preventScroll: true });
      nextFocus.current = null;
    }
  }, [limit]);
  const query = search.trim().toLocaleLowerCase();
  const filtered = searchProjects(learningProjects, search);
  const visible = view === "date" ? filtered.slice(0, limit) : filtered;
  const keys =
    view === "date"
      ? [...new Set(visible.map((item) => item.year))]
      : groups.map((group) => group.id);
  return (
    <details className="learning-archive" id="learning-archive" ref={archive}>
      <summary>
        <span>
          <strong>전체 학습 기록 살펴보기</strong>
          <small>
            {learningProjects.length}개 프로젝트 · 연도와 기술로 찾아보기
          </small>
        </span>
        <span aria-hidden="true">＋</span>
      </summary>
      <div className="learning-archive-body">
        <div className="journey-toolbar">
          <div
            className="journey-views"
            role="group"
            aria-label="학습 여정 보기 방식"
          >
            {(
              [
                ["date", "연도별"],
                ["tech", "기술별"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                aria-pressed={view === value}
                onClick={() => {
                  setView(value);
                  setLimit(9);
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <label className="journey-search">
            <span className="sr-only">프로젝트·기술 검색</span>
            <input
              type="search"
              placeholder="프로젝트·기술 검색"
              autoComplete="off"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setLimit(9);
              }}
            />
          </label>
        </div>
        <div className="journey-status">
          <p role="status" aria-live="polite">
            {filtered.length}개 프로젝트
            {view === "date" && visible.length < filtered.length
              ? ` · ${visible.length}개 표시`
              : ""}{" "}
            · {view === "date" ? "최신 생성일 순" : "주요 학습 분야별"}
          </p>
        </div>
        <div className="journey-catalog" ref={catalog}>
          {keys.map((key) => {
            const items = visible.filter(
              (item) => (view === "date" ? item.year : item.group) === key,
            );
            if (!items.length) return null;
            if (view === "date")
              return (
                <section
                  className="journey-group"
                  key={key}
                  aria-label={`${key}년 학습`}
                >
                  <div className="journey-group-heading">
                    <h3>{key}</h3>
                    <span>
                      {filtered.filter((item) => item.year === key).length}개
                      기록
                    </span>
                  </div>
                  <div className="journey-grid">
                    {items.map((item) => (
                      <JourneyCard key={item.id} item={item} />
                    ))}
                  </div>
                </section>
              );
            return (
              <details
                className="journey-group journey-tech-group"
                key={`${key}:${query}`}
                open={query ? true : undefined}
              >
                <summary>
                  <span>
                    <strong>{key}</strong>
                    <small>
                      {groups.find((group) => group.id === key)?.description} ·
                      펼치면 연도별로 보기
                    </small>
                  </span>
                  <span className="journey-group-count">
                    {items.length}
                    <i aria-hidden="true">＋</i>
                  </span>
                </summary>
                {[...new Set(items.map((item) => item.year))].map((year) => (
                  <section
                    className="journey-year-section"
                    key={year}
                    aria-label={`${key} ${year}년`}
                  >
                    <div className="journey-year-heading">
                      <h4>{year}</h4>
                      <span>
                        {items.filter((item) => item.year === year).length}개
                        프로젝트 · 최신 생성일 순
                      </span>
                    </div>
                    <div className="journey-grid">
                      {items
                        .filter((item) => item.year === year)
                        .map((item) => (
                          <JourneyCard key={item.id} item={item} />
                        ))}
                    </div>
                  </section>
                ))}
              </details>
            );
          })}
        </div>
        {!filtered.length && (
          <p className="empty-state">
            검색 결과가 없습니다. 다른 검색어를 입력해 주세요.
          </p>
        )}
        {view === "date" && visible.length < filtered.length && (
          <button
            className="journey-more"
            type="button"
            onClick={() => {
              nextFocus.current = visible.length;
              setLimit((value) => value + 9);
            }}
          >
            프로젝트 더 보기 ({filtered.length - visible.length}) ↓
          </button>
        )}
        <p className="journey-note">
          공개 저장소의 코드·README를 바탕으로 정리했습니다. 날짜는 저장소
          생성일 기준이며, 상세 페이지에서 마지막 커밋일과 관련 학습 글을 확인할
          수 있습니다.
        </p>
      </div>
    </details>
  );
}

export function ArchiveSearchButton({ query }: { query: string }) {
  const { search } = useArchiveSearch();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  return (
    <button type="button" disabled={!ready} onClick={() => search(query)}>
      레이아웃 학습 모아보기 ↗
    </button>
  );
}
