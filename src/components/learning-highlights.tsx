import Link from "next/link";
import learning from "@/content/learning.json";
import { assetPath, learningProjects, projectPath } from "@/lib/portfolio";
import type { CSSProperties } from "react";

export function LearningPath() {
  return (
    <ol
      className="learning-path"
      id="learning-path"
      aria-label="학습의 확장 과정"
    >
      {learning.stages.map((stage, index) => (
        <li key={stage.target}>
          <a href={`#learning-${stage.target}`}>
            <span className="learning-path-step">
              0{index + 1} · {stage.year}
            </span>
            <h3>{stage.title}</h3>
            <strong>{stage.tech}</strong>
            <p>{stage.text}</p>
          </a>
        </li>
      ))}
    </ol>
  );
}

export function LearningHighlights() {
  return (
    <div className="learning-highlights" id="learning-highlights">
      {learning.highlights.map((highlight, index) => {
        const project = learningProjects.find(
          (item) => item.id === highlight.id,
        );
        if (!project) return null;
        const previews = (project.images || []).slice(0, 4);
        return (
          <article
            className="learning-highlight"
            id={`learning-${project.id}`}
            key={project.id}
          >
            <div className="learning-highlight-copy">
              <span className="learning-highlight-meta">
                0{index + 1} · {project.year} · {project.kind}
              </span>
              <h4>
                <Link
                  className="learning-highlight-title-link"
                  href={projectPath(project.id)}
                >
                  <span>{project.title}</span>
                  <i aria-hidden="true">↗</i>
                </Link>
              </h4>
              <p>{highlight.feature}</p>
              <div className="learning-point">
                <span>학습 포인트</span>
                <p>{highlight.point}</p>
              </div>
              <div className="mini-badges">
                {highlight.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="learning-highlight-links">
                <Link href={projectPath(project.id)}>
                  {previews.length ? "화면·학습 내용" : "학습 내용"} ↗
                </Link>
                <a
                  href={`${project.repo}/blob/${project.branch}/${highlight.path}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {highlight.evidence} ↗
                </a>
              </div>
            </div>
            {previews.length > 0 && (
              <Link
                className="learning-highlight-image"
                href={projectPath(project.id)}
                aria-label={`${project.title} 화면과 학습 내용`}
              >
                <span
                  className="learning-preview-canvas learning-preview-strip"
                  style={
                    { "--preview-count": previews.length } as CSSProperties
                  }
                >
                  {previews.map((preview) => (
                    <span className="learning-preview-tile" key={preview.src}>
                      <img
                        src={assetPath(preview.src)}
                        alt={`${project.title} · ${preview.caption}`}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  ))}
                </span>
                <span className="learning-preview-caption">
                  <span>PROJECT PREVIEW · {previews.length}장</span>
                  <span>자세히 보기 ↗</span>
                </span>
              </Link>
            )}
          </article>
        );
      })}
    </div>
  );
}

export function LearningWriting() {
  const blogs = learningProjects.flatMap((item) => item.blogs);
  return (
    <div id="learning-writing-links" className="learning-writing-links">
      {["41", "87", "164"].map((id) => {
        const blog = blogs.find((item) => item.url.endsWith("/" + id));
        return blog ? (
          <a href={blog.url} target="_blank" rel="noreferrer" key={id}>
            {blog.image && (
              <img className="learning-writing-preview" src={assetPath(blog.image)} alt={`${blog.title} 미리보기`} loading="lazy" width={320} height={160} />
            )}
            <span>{blog.kind}</span>
            <strong>{blog.title}</strong>
            <i aria-hidden="true">↗</i>
          </a>
        ) : null;
      })}
    </div>
  );
}
