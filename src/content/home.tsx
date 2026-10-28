import Link from "next/link";
import type { CSSProperties } from "react";
import { assetPath } from "@/lib/portfolio";
import { SiteHeader } from "@/components/site-header";
import { ReadingProgress } from "@/components/reading-progress";
import { ScrollToTop } from "@/components/scroll-to-top";
import JourneyArchive, {
  ArchiveSearchButton,
} from "@/components/journey-archive";
import {
  LearningPath,
  LearningHighlights,
  LearningWriting,
} from "@/components/learning-highlights";

export default function HomeContent() {
  return (
    <div>
      <a className={"skip-link"} href={"#main"}>
        {"본문으로 이동"}
      </a>

      <div className={"noise"} aria-hidden={"true"}></div>

      <SiteHeader />

      <ReadingProgress />
      <ScrollToTop />
      <main id={"main"} tabIndex={-1}>
        <section className={"hero section"} id={"top"}>
          <div className={"spectrum spectrum-a"} aria-hidden={"true"}></div>
          <div className={"spectrum spectrum-b"} aria-hidden={"true"}></div>
          <div className={"hero-inner container"}>
            <div className={"hero-copy reveal"}>
              <p className={"label"}>{"FRONTEND DEVELOPER · 2026"}</p>
              <h1>
                {"만들면서 배우고,"}
                <br />
                <span>{"이해한 기술로 완성합니다."}</span>
              </h1>
              <p>
                {
                  "아직 배워야 할 것이 많은 신입이지만, 작은 기능도 원리를 이해하고 끝까지 확인하려 노력합니다. 매일 꾸준히 배우고 직접 구현하며, 사용자가 이해하고 신뢰할 수 있는 화면을 만들어 가는 프론트엔드 개발자 송종화입니다."
                }
              </p>
            </div>
            <figure className={"identity-art reveal"}>
              <div className={"profile-frame"}>
                <img
                  src={assetPath(
                    "/profile/%ED%83%9C%EA%B5%AD%20%ED%94%84%EB%A1%9C%ED%95%84.jpeg",
                  )}
                  className={"profile-photo"}
                  alt={"태국의 산 전망대에 서 있는 송종화"}
                />
                <div className={"profile-overlay"} aria-hidden={"true"}></div>
                <span className={"profile-mark"} aria-hidden={"true"}>
                  {"JH"}
                </span>
                <div
                  className={"frame-accent accent-pink"}
                  aria-hidden={"true"}
                ></div>
                <div
                  className={"frame-accent accent-cyan"}
                  aria-hidden={"true"}
                ></div>
                <div
                  className={"frame-accent accent-yellow"}
                  aria-hidden={"true"}
                ></div>
              </div>
              <figcaption>{"SONG JONGHWA · FRONTEND DEVELOPER"}</figcaption>
            </figure>
          </div>
        </section>
        <section
          className={"stack-section section"}
          id={"stack"}
          aria-labelledby={"tech-title"}
        >
          <div className={"container"}>
            <header className={"tech-heading reveal"}>
              <div>
                <p className={"label"}>{"기술 스택"}</p>
                <h2 id={"tech-title"}>{"직접 사용하며 익힌 기술"}</h2>
                <p className={"tech-description"}>
                  {"기술은 문제를 해결하기 위해 탄생한다고 생각합니다."}
                  <br />
                  {
                    "사용법만 익히기보다 어떤 문제를 해결하려 만들어졌는지 이해하며 공부했고, 그 과정에서 직접 경험한 기술들입니다."
                  }
                </p>
              </div>
            </header>
            <div className={"tech-overview reveal"}>
              <div className={"language-panel"}>
                <div className={"language-title"}>
                  <span className={"panel-kicker"}>{"언어 구성"}</span>
                  <strong>
                    {"TypeScript를 중심으로"}
                    <br />
                    {"웹 서비스를 개발합니다."}
                  </strong>
                  <small>{"GitHub 저장소 기준 · 고정 스냅샷"}</small>
                </div>
                <div
                  className={"language-chart"}
                  role={"img"}
                  aria-label={
                    "TypeScript 68.05%, HTML 13.40%, Jupyter Notebook 6.07%, JavaScript 4.87%, SCSS 2.53%, CSS 2.33%, Python 1.45%, Java 1.29%"
                  }
                >
                  <div className={"language-track"} aria-hidden={"true"}>
                    <span
                      style={
                        {
                          "--share": "68.05",
                          "--tone": "#3478c5",
                        } as CSSProperties
                      }
                    ></span>
                    <span
                      style={
                        {
                          "--share": "13.4",
                          "--tone": "#ee4c2c",
                        } as CSSProperties
                      }
                    ></span>
                    <span
                      style={
                        {
                          "--share": "6.07",
                          "--tone": "#e66b0e",
                        } as CSSProperties
                      }
                    ></span>
                    <span
                      style={
                        {
                          "--share": "4.87",
                          "--tone": "#f7df1e",
                        } as CSSProperties
                      }
                    ></span>
                    <span
                      style={
                        {
                          "--share": "2.53",
                          "--tone": "#c94f88",
                        } as CSSProperties
                      }
                    ></span>
                    <span
                      style={
                        {
                          "--share": "2.33",
                          "--tone": "#7041a8",
                        } as CSSProperties
                      }
                    ></span>
                    <span
                      style={
                        {
                          "--share": "1.45",
                          "--tone": "#3978aa",
                        } as CSSProperties
                      }
                    ></span>
                    <span
                      style={
                        {
                          "--share": "1.29",
                          "--tone": "#c98218",
                        } as CSSProperties
                      }
                    ></span>
                  </div>
                  <div className={"language-legend"}>
                    <span style={{ "--tone": "#3478c5" } as CSSProperties}>
                      <b>{"TypeScript"}</b>
                      <em>{"68.05%"}</em>
                    </span>
                    <span style={{ "--tone": "#ee4c2c" } as CSSProperties}>
                      <b>{"HTML"}</b>
                      <em>{"13.40%"}</em>
                    </span>
                    <span style={{ "--tone": "#e66b0e" } as CSSProperties}>
                      <b>{"Jupyter Notebook"}</b>
                      <em>{"6.07%"}</em>
                    </span>
                    <span style={{ "--tone": "#f7df1e" } as CSSProperties}>
                      <b>{"JavaScript"}</b>
                      <em>{"4.87%"}</em>
                    </span>
                    <span style={{ "--tone": "#c94f88" } as CSSProperties}>
                      <b>{"SCSS"}</b>
                      <em>{"2.53%"}</em>
                    </span>
                    <span style={{ "--tone": "#7041a8" } as CSSProperties}>
                      <b>{"CSS"}</b>
                      <em>{"2.33%"}</em>
                    </span>
                    <span style={{ "--tone": "#3978aa" } as CSSProperties}>
                      <b>{"Python"}</b>
                      <em>{"1.45%"}</em>
                    </span>
                    <span style={{ "--tone": "#c98218" } as CSSProperties}>
                      <b>{"Java"}</b>
                      <em>{"1.29%"}</em>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={"stack-cloud"}
                aria-label={"GitHub 프로필에 등록된 기술 스택"}
              >
                <section className={"stack-group"}>
                  <h3>{"언어"}</h3>
                  <div className={"stack-badges"}>
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white",
                      )}
                      alt={"HTML"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS&logoColor=white",
                      )}
                      alt={"CSS"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white",
                      )}
                      alt={"JavaScript"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white",
                      )}
                      alt={"TypeScript"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white",
                      )}
                      alt={"Python"}
                    />
                  </div>
                </section>
                <section className={"stack-group"}>
                  <h3>{"UI · 스타일링"}</h3>
                  <div className={"stack-badges"}>
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Pug-A86454?style=flat-square&logo=Pug&logoColor=white",
                      )}
                      alt={"Pug"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white",
                      )}
                      alt={"Sass"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white",
                      )}
                      alt={"styled-components"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white",
                      )}
                      alt={"Tailwind CSS"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Framer-0055FF?style=flat-square&logo=framer&logoColor=white",
                      )}
                      alt={"Framer"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/shadcn%2Fui-000000?style=flat-square&logo=react&logoColor=white",
                      )}
                      alt={"shadcn/ui"}
                    />
                  </div>
                </section>
                <section className={"stack-group"}>
                  <h3>{"프레임워크 · 런타임"}</h3>
                  <div className={"stack-badges"}>
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white",
                      )}
                      alt={"Node.js"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white",
                      )}
                      alt={"Express"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white",
                      )}
                      alt={"React"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/React%20Native-20232A?style=flat-square&logo=react&logoColor=61DAFB",
                      )}
                      alt={"React Native"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Expo-20232A?style=flat-square&logo=expo&logoColor=white",
                      )}
                      alt={"Expo"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white",
                      )}
                      alt={"Next.js"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Remix-000000?style=flat-square&logo=remix&logoColor=white",
                      )}
                      alt={"Remix"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Gatsby-663399?style=flat-square&logo=gatsby&logoColor=white",
                      )}
                      alt={"Gatsby"}
                    />
                  </div>
                </section>
                <section className={"stack-group"}>
                  <h3>{"빌드 · 통신"}</h3>
                  <div className={"stack-badges"}>
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Gulp-CF4647?style=flat-square&logo=Gulp&logoColor=white",
                      )}
                      alt={"Gulp"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=Webpack&logoColor=white",
                      )}
                      alt={"Webpack"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Zod-3068B7?style=flat-square&logo=zod&logoColor=white",
                      )}
                      alt={"Zod"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=Socket.io&logoColor=white",
                      )}
                      alt={"Socket.io"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/WebRTC-333333?style=flat-square&logo=WebRTC&logoColor=white",
                      )}
                      alt={"WebRTC"}
                    />
                  </div>
                </section>
                <section className={"stack-group"}>
                  <h3>{"상태 · API"}</h3>
                  <div className={"stack-badges"}>
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white",
                      )}
                      alt={"Redux"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=white",
                      )}
                      alt={"Recoil"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=GraphQL&logoColor=white",
                      )}
                      alt={"GraphQL"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Apollo-311C87?style=flat-square&logo=apollographql&logoColor=white",
                      )}
                      alt={"Apollo"}
                    />
                  </div>
                </section>
                <section className={"stack-group"}>
                  <h3>{"데이터"}</h3>
                  <div className={"stack-badges"}>
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white",
                      )}
                      alt={"AWS"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white",
                      )}
                      alt={"MongoDB"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Realm-39477F?style=flat-square&logo=realm&logoColor=white",
                      )}
                      alt={"Realm"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white",
                      )}
                      alt={"Prisma"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white",
                      )}
                      alt={"SQLite"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white",
                      )}
                      alt={"MySQL"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=PostgreSQL&logoColor=white",
                      )}
                      alt={"PostgreSQL"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white",
                      )}
                      alt={"Redis"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Drizzle-C5F74F?style=flat-square&logo=drizzle&logoColor=black",
                      )}
                      alt={"Drizzle"}
                    />
                  </div>
                </section>
                <section className={"stack-group"}>
                  <h3>{"도구 · 배포"}</h3>
                  <div className={"stack-badges"}>
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Cursor-000000?style=flat-square&logo=cursor&logoColor=white",
                      )}
                      alt={"Cursor"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white",
                      )}
                      alt={"Git"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white",
                      )}
                      alt={"Firebase"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Supabase-000000?style=flat-square&logo=supabase&logoColor=3FCF8E",
                      )}
                      alt={"Supabase"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=white",
                      )}
                      alt={"Netlify"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Heroku-430098?style=flat-square&logo=heroku&logoColor=white",
                      )}
                      alt={"Heroku"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white",
                      )}
                      alt={"Vercel"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Render-12100E?style=flat-square&logo=render&logoColor=white",
                      )}
                      alt={"Render"}
                    />
                    <img
                      src={assetPath(
                        "https://img.shields.io/badge/Fly.io-430098?style=flat-square&logo=flydotio&logoColor=white",
                      )}
                      alt={"Fly.io"}
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className={"projects-section section"} id={"projects"}>
          <div className={"container"}>
            <header className={"section-heading reveal"}>
              <p className={"label"}>{"대표 프로젝트"}</p>
              <h2>
                {"직접 만들고,"}
                <br />
                {"사용하며 개선했습니다."}
              </h2>
            </header>
            <Link
              className={"featured-project reveal"}
              href={"/projects/eokka/"}
              aria-label={"EOKKA 프로젝트 상세 보기"}
            >
              <div className={"project-art project-art--screen"}>
                <img
                  src={assetPath(
                    "/projects/eokka/images/home-desktop-clean.jpg",
                  )}
                  alt={
                    "내 주식이 목표 금액에 도달하는 시점을 분석하는 EOKKA 홈 화면"
                  }
                  width={"2970"}
                  height={"1620"}
                  loading={"lazy"}
                />
              </div>
              <div className={"project-copy"}>
                <div className={"project-meta"}>
                  <span>{"개인 풀스택 개발"}</span>
                  <span>{"2026.07.24 — 10.17 · 85일"}</span>
                </div>
                <h3>{"EOKKA"}</h3>
                <p>
                  {"“이대로 계속 투자하면, 언제쯤 얼마가 될까?”"}
                  <br />
                  {
                    "복수 종목 입력과 검증, 5,000개 미래 경로의 통계 결과를 한 흐름으로 설계한 투자 분석 서비스입니다. 금액·기간·확률을 읽기 쉬운 시나리오로 시각화하고, 로딩·실패·재시도와 10년 시세 캐시·최근 구간 증분 갱신까지 고려했습니다."
                  }
                </p>
                <div className={"badges"}>
                  <span>{"React Router 7"}</span>
                  <span>{"React 19"}</span>
                  <span>{"TypeScript"}</span>
                  <span>{"Supabase"}</span>
                  <span>{"PostgreSQL"}</span>
                  <span>{"Drizzle"}</span>
                </div>
                <strong className={"detail-link"}>
                  {"프로젝트 자세히 보기 "}
                  <i>{"↗"}</i>
                </strong>
              </div>
            </Link>
          </div>
        </section>
        <section className={"journey-section section"} id={"journey"}>
          <div className={"container"}>
            <header className={"section-heading reveal"}>
              <p className={"label"}>{"학습 여정"}</p>
              <h2>
                {"화면을 만드는 기초에서,"}
                <br />
                {"서비스를 "}
                <span className={"journey-heading-phrase"}>
                  {"출시하기까지."}
                </span>
              </h2>
              <p>
                {
                  "정적인 화면에 상호작용을 더하고, 서버와 데이터베이스를 연결했습니다. React로 화면과 상태를 다루는 방식을 익히고 풀스택 설계로 배움을 넓혀, 직접 기획한 서비스를 출시했습니다."
                }
              </p>
            </header>
            <LearningPath />
            <div className={"learning-section-heading"}>
              <h3>{"직접 구현하며 익힌 것"}</h3>
              <p>
                {
                  "강의·챌린지에서 구현한 기능과 학습 포인트를 중심으로 고른 대표 기록입니다."
                }
              </p>
            </div>
            <LearningHighlights />
            <section
              className={"learning-practice"}
              aria-labelledby={"learning-practice-title"}
            >
              <div>
                <span className={"label"}>{"반복하며 다진 기본기"}</span>
                <h3 id={"learning-practice-title"}>
                  {"다양한 화면으로 연습한 레이아웃"}
                </h3>
                <p>
                  {
                    "SCSS 레이아웃 학습 20개를 통해 Grid·Flexbox 배치와 스타일 재사용을 연습했습니다. 비슷한 연습은 하나로 묶고, 실제 구현 화면을 골라 담았습니다."
                  }
                </p>
                <ArchiveSearchButton query="SCSS" />
              </div>
              <div className={"learning-practice-images"}>
                <Link href={"/journey/paintbox/"}>
                  <img
                    src={assetPath(
                      "/journey/images/study-scss-paint-box-clone.jpg",
                    )}
                    alt={"Paintbox 레이아웃 구현 화면"}
                    loading={"lazy"}
                  />
                  <span>{"Paintbox · 스타일 재사용 ↗"}</span>
                </Link>
                <Link href={"/journey/study-scss-museum-clone/"}>
                  <img
                    src={assetPath(
                      "/journey/images/study-scss-museum-clone.jpg",
                    )}
                    alt={"Museum CSS Grid 구현 화면"}
                    loading={"lazy"}
                  />
                  <span>{"Museum · Grid 레이아웃 ↗"}</span>
                </Link>
              </div>
            </section>
            <section
              className={"learning-writing"}
              aria-labelledby={"learning-writing-title"}
            >
              <div className={"learning-section-heading"}>
                <h3 id={"learning-writing-title"}>
                  {"구현한 내용을 글로 정리했습니다."}
                </h3>
                <p>
                  {
                    "학습 회고와 기술 개념 기록입니다. 프로젝트별 관련 글은 각 상세 페이지에서도 확인할 수 있습니다."
                  }
                </p>
              </div>
              <LearningWriting />
            </section>
            <JourneyArchive />
          </div>
        </section>
        <section className={"activities-section section"} id={"activities"}>
          <div className={"container"}>
            <header className={"section-heading reveal"}>
              <p className={"label"}>{"활동"}</p>
              <h2>{"사람과 경험에서 배운 것"}</h2>
              <p>
                {
                  "추후 활동별 사진 폴더가 추가되면 같은 형식으로 확장할 수 있습니다."
                }
              </p>
            </header>
            <div className={"activity-grid"}>
              <article className={"activity-card wide reveal"}>
                <img
                  src={assetPath(
                    "/photos/KakaoTalk_Photo_2026-10-19-13-07-12%20001.png",
                  )}
                  alt={"SW중심대학 공동해커톤 후원기업상 수상 사진"}
                />
                <div>
                  <span>{"2023.06"}</span>
                  <h3>{"SW중심대학 공동해커톤"}</h3>
                  <p>
                    {
                      "OpenPose 기반 재활 동작 보조 서비스 Pose Pro의 프론트엔드를 담당하고 한글과컴퓨터 후원기업상을 수상했습니다."
                    }
                  </p>
                </div>
              </article>
              <article className={"activity-card reveal"}>
                <img
                  src={assetPath("/photos/KakaoTalk_20241130_214336355_08.jpg")}
                  alt={"노마드코더 웹 기초 오프라인 모임"}
                />
                <div>
                  <span>{"WEB STUDY"}</span>
                  <h3>{"노마드코더 웹 기초 모임"}</h3>
                  <p>
                    {
                      "서로의 코드를 보며 혼자 공부할 때 놓치던 다른 해결 방식을 배웠습니다."
                    }
                  </p>
                </div>
              </article>
              <article className={"activity-card reveal"}>
                <img
                  src={assetPath(
                    "/photos/KakaoTalk_Photo_2026-10-19-12-53-05.png",
                  )}
                  alt={"2024년 노마드코더 연말 모임"}
                />
                <div>
                  <span>{"2024 YEAR-END"}</span>
                  <h3>{"개발자 교류 모임"}</h3>
                  <p>
                    {
                      "취업 준비생, 현직 개발자, 프리랜서와 대화하며 개발자의 다양한 커리어를 접하고 시야를 넓혔습니다."
                    }
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className={"contact-section section"} id={"contact"}>
          <div className={"container contact-box reveal"}>
            <div>
              <p className={"label"}>{"연락처"}</p>
              <h2>{"함께 만들 기회를 기다립니다."}</h2>
            </div>
            <div className={"contact-links"}>
              <a
                href={"https://github.com/jonghwa3471"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                <span>{"GitHub"}</span>
                <strong>{"github.com/jonghwa3471"}</strong>
              </a>
              <a
                href={"https://j2yonghwa.tistory.com/"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                <span>{"기술 블로그"}</span>
                <strong>{"j2yonghwa.tistory.com"}</strong>
              </a>
              <a href={"mailto:whdghk3471@gmail.com"}>
                <span>{"이메일"}</span>
                <strong>{"whdghk3471@gmail.com"}</strong>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={"site-footer container"}>
        <span>
          {"© "}
          <span id="year">{new Date().getFullYear()}</span>
          {" 송종화"}
        </span>
        <a href={"#top"}>{"맨 위로 ↑"}</a>
      </footer>
    </div>
  );
}
