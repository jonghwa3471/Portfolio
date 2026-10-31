import Link from "next/link";
import {
  assetPath,
  learningProjects,
  projectPath,
  type LearningProject,
  type Reflection,
} from "@/lib/portfolio";
import { LearningImage } from "./image-viewer";
import { ScrollToTop } from "./scroll-to-top";
import { ReadingProgress } from "./reading-progress";
import { LearningBackLink } from "./learning-back-link";
import type { ReactNode } from "react";

const formatDate = (value: string) => value.replaceAll("-", ".");
const challenges = new Set([
  "화면 크기별 레이아웃을 자연스럽게 조정하는 어려움",
  "DOM을 직접 다루며 느낀 번거로움",
  "구현하지 못한 기능에서 남은 과제",
  "재생바와 실제 영상 상태를 맞추는 어려움",
  "이벤트별 역할을 나누며 다듬은 조작 경험",
  "달라진 S3 업로드 방식 적용",
  "영상 수정 오류 원인 찾기",
]);
const category = (reflection: Reflection) =>
  reflection.category ||
  (challenges.has(reflection.title) ? "challenge" : "positive");
function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="detail-block">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function LearningDetail({ item }: { item: LearningProject }) {
  const related = learningProjects
    .filter((project) => project.group === item.group && project.id !== item.id)
    .sort((a, b) => b.created.localeCompare(a.created))
    .slice(0, 3);
  return (
    <div className="detail-page learning-detail">
      <div className="noise" aria-hidden="true" />
      <ScrollToTop />
      <ReadingProgress key={item.id} />
      <a className="skip-link" href="#main">
        본문으로 이동
      </a>
      <main id="main">
        <header className="detail-header">
          <div className="container">
            <LearningBackLink />
            <div className="detail-title">
              <div>
                <p className="label">
                  {item.group} · {item.kind}
                </p>
                <h1>{item.title}</h1>
              </div>
              <p>{item.purpose}</p>
            </div>
            <div className="detail-meta">
              <div>
                <span>저장소 생성일</span>
                <strong>{formatDate(item.created)}</strong>
              </div>
              <div>
                <span>마지막 커밋일</span>
                <strong>{formatDate(item.updated)}</strong>
              </div>
              <div>
                <span>확인한 커밋</span>
                <strong>{item.commits}개 · 기본 브랜치</strong>
              </div>
              <div>
                <span>관련 학습 글</span>
                <strong>{item.blogs.length}편</strong>
              </div>
            </div>
            <p className="learning-date-note">
              날짜는 GitHub 기록 기준입니다. 두 날짜 사이를 연속 개발 기간으로
              계산하지 않았습니다.
            </p>
          </div>
        </header>
        <div className="detail-body container">
          {item.motivation && (
            <Block title="이 공부를 시작한 이유">
              <p>{item.motivation}</p>
            </Block>
          )}
          <Block title="무엇을 배웠나요?">
            <div>
              <p>{item.purpose}</p>
              <ul>
                {item.learned.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="badges">
                {item.stack.map((stack) => (
                  <span key={stack}>{stack}</span>
                ))}
              </div>
            </div>
          </Block>
          {!!item.reflections?.length && (
            <Block title="공부하며 느낀 점">
              <div className="learning-reflections">
                {[
                  { id: "positive", title: "좋았던 점" },
                  { id: "challenge", title: "어려웠던 점과 남은 과제" },
                ].map((group) => {
                  const entries = item.reflections!.filter(
                    (reflection) => category(reflection) === group.id,
                  );
                  return entries.length ? (
                    <div
                      className="learning-reflection-group"
                      data-kind={group.id}
                      key={group.id}
                    >
                      <h3 className="learning-reflection-group-title">
                        {group.title}
                      </h3>
                      {entries.map((reflection) => (
                        <article key={reflection.title}>
                          <h4>{reflection.title}</h4>
                          <p>{reflection.text}</p>
                          {reflection.code && (
                            <div className="learning-reflection-code">
                              <div className="learning-code-label">
                                {reflection.codeLanguage || "코드"} · 핵심 코드
                                발췌
                              </div>
                              <pre>
                                <code>{reflection.code}</code>
                              </pre>
                              {reflection.codeTakeaway && (
                                <p>{reflection.codeTakeaway}</p>
                              )}
                            </div>
                          )}
                          {reflection.image && (
                            <figure>
                              <LearningImage
                                src={assetPath(reflection.image)}
                                caption={
                                  reflection.imageCaption || reflection.title
                                }
                              />
                              <figcaption>{reflection.imageCaption}</figcaption>
                            </figure>
                          )}
                          {(reflection.link?.startsWith("https://") ||
                            reflection.link?.startsWith("/")) && (
                            <a
                              className="learning-reflection-link"
                              href={reflection.link.startsWith("/") ? assetPath(reflection.link) : reflection.link}
                              target={reflection.link.startsWith("https://") ? "_blank" : undefined}
                              rel={reflection.link.startsWith("https://") ? "noreferrer" : undefined}
                            >
                              {reflection.linkLabel || "관련 기록"} ↗
                            </a>
                          )}
                        </article>
                      ))}
                    </div>
                  ) : null;
                })}
              </div>
            </Block>
          )}
          {!!item.codeHighlights?.length && (
            <Block title="인상 깊었던 코드">
              <div className="learning-code-highlights">
                {item.codeHighlights.map((entry) => (
                  <article key={entry.title}>
                    <h3>{entry.title}</h3>
                    <p>{entry.description}</p>
                    <div className="learning-code-label">
                      {entry.language || "CSS"} · 핵심 코드 발췌
                    </div>
                    <pre>
                      <code>{entry.code}</code>
                    </pre>
                    <p>{entry.takeaway}</p>
                  </article>
                ))}
              </div>
            </Block>
          )}
          {!!item.images?.length && (
            <Block title="프로젝트 화면">
              <div
                className={`learning-gallery${item.galleryLayout === "landscape" ? " learning-gallery--landscape" : ""}${item.galleryLayout === "comparison" ? " learning-gallery--comparison" : ""}`}
              >
                {item.images.map((image) => (
                  <figure key={image.src}>
                    <LearningImage
                      src={assetPath(image.src)}
                      caption={`${item.title} · ${image.caption}`}
                    />
                    <figcaption>{image.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </Block>
          )}
          {item.nextDirection && (
            <Block title="다음 학습 방향">
              <p>{item.nextDirection}</p>
            </Block>
          )}
          {!!item.blogs.length && (
            <Block title="글로 남긴 학습">
              <div>
                <p>
                  프로젝트에서 다룬 주제와 연결되는 블로그 기록입니다. 관련 개념
                  글은 프로젝트 자체의 개발 후기가 아닌 기술 정리 글입니다.
                </p>
                <div className="learning-blog-list">
                  {item.blogs.map((blog) => (
                    <a
                      key={blog.url}
                      href={blog.url}
                      target="_blank"
                      rel="noreferrer"
                      className={blog.image ? "has-preview" : undefined}
                    >
                      {blog.image && (
                        <img className="learning-blog-preview" src={assetPath(blog.image)} alt={`${blog.title} 미리보기`} loading="lazy" width={160} height={100} />
                      )}
                      <span>{blog.kind}</span>
                      <strong>{blog.title}</strong>
                      <i aria-hidden="true">↗</i>
                    </a>
                  ))}
                </div>
              </div>
            </Block>
          )}
          <Block title="코드에서 확인하기">
            <div>
              <p>실제 구현 파일을 바탕으로 정리한 학습 기록입니다.</p>
              {!!item.sources.length && (
                <details className="learning-evidence">
                  <summary>
                    구현 근거 코드 {item.sources.length}개 살펴보기
                  </summary>
                  <ul className="learning-source-list">
                    {item.sources.map((source) => (
                      <li key={source}>
                        <a
                          href={`${item.repo}/blob/${item.branch}/${source.split("/").map(encodeURIComponent).join("/")}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {source} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
              {item.runtimeNote && (
                <p className="learning-runtime">{item.runtimeNote}</p>
              )}
              <div className="learning-actions">
                <a href={item.repo} target="_blank" rel="noreferrer">
                  GitHub 저장소 ↗
                </a>
                {item.demo && (
                  <a href={item.demo} target="_blank" rel="noreferrer">
                    프로젝트 실행 ↗
                  </a>
                )}
              </div>
              {item.demo && (
                <p className="learning-date-note">
                  {item.demoStatus ||
                    "저장소에 안내된 배포 주소입니다. 외부 API·배포 상태에 따라 일부 기능이 제한될 수 있습니다."}
                </p>
              )}
            </div>
          </Block>
          {!!related.length && (
            <Block title="같은 기술, 다른 시도">
              <div className="learning-related">
                {related.map((project) => (
                  <Link href={projectPath(project.id)} key={project.id}>
                    {project.images?.[0] && (
                      <div className="journey-card-preview" aria-hidden="true">
                        <img
                          src={assetPath(project.images[0].src)}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          width={720}
                          height={450}
                        />
                      </div>
                    )}
                    <span>
                      {project.year} · {project.group}
                    </span>
                    <strong>{project.title} ↗</strong>
                    <p>{project.purpose}</p>
                  </Link>
                ))}
              </div>
            </Block>
          )}
        </div>
      </main>
      <footer className="site-footer container">
        <span>송종화 포트폴리오</span>
        <Link href="/#contact">연락처</Link>
      </footer>
    </div>
  );
}
