import Link from "next/link";
import { ActivityVideoDialog } from "@/components/activity-video-dialog";
import type { CSSProperties } from "react";
import { assetPath } from "@/lib/portfolio";
import { SiteHeader } from "@/components/site-header";
import { ReadingProgress } from "@/components/reading-progress";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ZoomImage } from "@/components/image-viewer";
import { ActivityStoryDialog } from "@/components/activity-story-dialog";
import JourneyArchive, {
  ArchiveSearchButton,
} from "@/components/journey-archive";
import {
  LearningPath,
  LearningHighlights,
  LearningWriting,
} from "@/components/learning-highlights";

const awards = [
  {
    title: "캡스톤디자인 경진대회",
    date: "2023.12",
    award: "최우수상",
    description: "구직자와 현직자를 멘티와 멘토로 연결하는 웹 플랫폼을 개발해 출품했습니다.",
  },
  {
    title: "IT경력관리 경진대회",
    date: "2023.11",
    award: "금상",
    description: "그동안의 학습과 프로젝트 경험을 포트폴리오로 정리해 발표했습니다.",
  },
  {
    title: "문제해결형 콘텐츠개발 경진대회",
    date: "2023.11",
    award: "금상",
    description: "해커톤에서 만든 Pose Pro에 MediaPipe의 자세 추정 기능을 적용해 재활 동작을 더 부드럽게 인식하도록 개선했습니다.",
  },
  {
    title: "2023 OSS 아카데미 제2회 OSS Training 캠프 및 경진대회",
    date: "2023.09",
    award: "장려상",
    description: "기존 AI 모델을 카카오톡 형태의 채팅 UI에 연결해, 이성에게 말을 걸기 어려운 사용자가 호감을 표현하는 대화를 연습할 수 있는 웹 서비스를 만들었습니다.",
  },
  {
    title: "SW중심대학 공동해커톤 2023",
    date: "2023.06",
    award: "장려상",
    description: "OpenPose로 재활 동작을 인식하고 운동 가이드를 보여주는 Pose Pro를 팀으로 개발했습니다.",
  },
  {
    title: "기술창업캠프 경진대회",
    date: "2023.02",
    award: "대상",
    description: "AI 기반 태블릿 드로잉 보조 서비스를 기획하고 발표했습니다.",
  },
];

const activities = [
  {
    title: "기술창업캠프 경진대회",
    date: "2023.02",
    description: "세 명이 함께 AI 기반 태블릿 드로잉 보조 서비스를 기획해 대상을 받았습니다.",
    photo: assetPath("/photos/startup-camp-2023-crop.png"),
    alt: "기술창업캠프 대상 수상 기념 사진",
    story: [
      "컴퓨터공학과 친구와 창업 아이디어 경진대회에 나갔고, 같은 과 선배가 합류해 세 명이 팀을 이뤘습니다. 저희는 AI 기반 태블릿 드로잉 보조 서비스를 기획했습니다.",
      "저는 사용자가 서비스의 핵심을 쉽게 이해할 수 있도록 기능을 줄이고, 결제 방식도 월 구독제로 단순화하자고 제안했습니다. 팀원은 기능을 줄이면 차별성과 확장성이 약해질 수 있다고 지적했습니다. 처음엔 의견이 달랐지만, 팀원이 제안한 방향에도 가능성이 있다고 생각해 첫날 발표에서 먼저 시도해 보자고 했습니다.",
      "첫날 발표를 마치고 평가위원에게 서비스가 무엇을 제공하는지 명확하지 않다는 피드백을 받았습니다. 팀원들과 다시 논의해 핵심 기능과 결제 방식을 단순화했고, 둘째 날 발표에서 대상을 받았습니다. 수상 결과를 듣고 셋이서 함께 환호했던 순간이 기억에 남습니다.",
      "의견이 갈릴 때는 각자의 제안을 직접 시도해 보고, 그 결과와 사용자 관점에서 받은 피드백을 바탕으로 함께 판단하는 법을 배웠습니다.",
    ],
  },
  {
    title: "SW중심대학 공동해커톤 2023",
    date: "2023.06",
    description: "OpenPose 기반 재활 동작 보조 서비스 Pose Pro의 프론트엔드를 담당했습니다.",
    photo: assetPath("/photos/hackathon-team-award.jpg"),
    alt: "Pose Pro 팀의 한글과컴퓨터 후원기업상 수상 사진",
    story: [
      "HTML, CSS, JavaScript로 간단한 화면을 만들던 시기에 해커톤이 어떻게 진행되는지 직접 경험해 보고 싶어 참가했습니다. 현장에서는 팀장들이 참가자와 면접처럼 이야기를 나누고 팀원을 골랐습니다. 개발 경험이 많은 참가자들은 먼저 팀을 꾸렸고, 저희 팀은 실전 경험이 많지 않은 여섯 명으로 모여 무박 3일 동안 작업했습니다.",
      "한 명은 자료 조사와 발표 자료 작성, 발표를 맡았고 네 명은 AI를 담당했습니다. 저는 Flask 서버에서 실행한 동작 인식 결과를 웹 화면에 연결했습니다. Pose Pro는 OpenPose로 사용자의 동작을 인식해, 재활이 필요한 부위별로 미리 정한 동작을 잘 따라 하는지 확인하고 가이드를 보여주는 프로그램이었습니다.",
      "당시에는 GitHub의 기본 사용법은 알았지만, 브랜치를 나눠 작업하고 PR로 변경 사항을 합치는 방식은 익숙하지 않았습니다. 발표까지 시간이 빠듯해서 카카오톡으로 코드를 주고받으며 각자 만든 부분을 합쳤습니다.",
      "마감 전에 프로그램을 완성하고 발표까지 마쳤습니다. 팀이 한글과컴퓨터 후원기업상을 받았을 때, 처음 만난 팀원들과 함께 끝까지 해냈다는 게 기뻤고 서로 축하하던 순간이 기억에 남습니다.",
    ],
    gallery: [
      { src: assetPath("/photos/hackathon-pose-pro.jpg"), caption: "Pose Pro 재활 부위 선택 화면" },
      { src: assetPath("/photos/hackathon-pose-pro-demo-2.png"), caption: "Pose Pro 실행 화면 · 팔을 들어 올렸을 때의 동작 인식" },
      { src: assetPath("/photos/sw-hackathon-2023.jpg"), caption: "공동해커톤 시상식 단체 사진" },
      { src: assetPath("/photos/hackathon-audience.jpg"), caption: "공동해커톤 참가자 단체 사진" },
      { src: assetPath("/photos/hackathon-photo-zone.jpg"), caption: "공동해커톤 현장 포토존" },
    ],
  },
  {
    title: "SW 해외교육 · Chiang Mai Program",
    date: "2023.07",
    description: "치앙마이대학교 학생들과 2주간 교육을 듣고, 현지에서 즐겨 입던 코끼리 바지를 소개하는 마케팅 영상을 만들었습니다.",
    photo: assetPath("/photos/chiang-mai-program-group.jpg"),
    alt: "치앙마이대학교 CAMT 앞 해외교육 단체 사진",
    story: [
      "2주간 치앙마이 현지를 둘러보고 치앙마이대학교에서 수업을 듣는 프로그램에 참여했습니다. 수업에서는 현지 학생들과 함께 로봇을 미로의 골인 지점까지 보내는 실습을 했고, 디스코드에서 미드저니 봇으로 AI 이미지를 만드는 법도 배웠습니다. 가장 기억에 남는 건 조별로 전공에 어울리는 자유 주제를 골라 프로젝트를 진행하고 발표하는 과제였습니다.",
      "당시 저는 디지털콘텐츠공학과 소속이었고, 저희 조도 같은 과 학생들로 구성됐습니다. 다른 팀에는 컴퓨터공학과 학생이 많았고, 어떤 소프트웨어를 만들고 어떻게 구현할지 정리한 기획안을 발표할 계획인 팀이 많았습니다. 저희 팀은 디지털콘텐츠공학 전공을 살려 발표에 차별점을 주고 싶었습니다. 그래서 저는 마케팅 영상 기획에서 한발 더 나아가, 직접 촬영하고 편집해 완성본을 발표 자리에서 상영하자고 제안했습니다. 치앙마이에서 많이 보이고 저희도 시원해서 즐겨 입던 코끼리 바지를 골랐습니다. AJR의 ‘Bang!’이 나온 아이폰 마케팅 영상을 참고해 사과 로고를 코끼리 로고로 바꿔 보고, 음악의 박자에 맞춰 장면을 편집했습니다.",
      "팀원 모두가 영상 기획에 참여해 콘셉트와 스토리보드를 함께 짰습니다. 저는 촬영 연출과 카메라 촬영, 메인 편집을 맡았습니다. 태국 학생 두 명은 보조 촬영을 맡았고, 한국 학생 한 명과 태국 학생 한 명은 영상에 출연했습니다. 한 명은 편집을 도왔고, 나머지 팀원들은 기획을 중심으로 함께했습니다.",
      "처음에는 팀원들도 반신반의했지만 완성된 영상을 보고 함께 웃으며 좋아해 줬습니다. 발표 때 교수님들과 학생들의 반응도 좋았습니다. 조금 딱딱할 수 있었던 과제에서 다 같이 만든 유쾌한 결과물을 보여줄 수 있어 뿌듯했습니다.",
    ],
    video: {
      src: assetPath("/photos/chiang-mai-elephant-pants.mp4"),
      poster: assetPath("/photos/chiang-mai-video-poster.jpg"),
      title: "코끼리 바지 마케팅 영상 완성본",
    },
    gallery: [
      { src: assetPath("/photos/chiang-mai-storyboard.jpg"), caption: "마케팅 영상 스토리보드" },
      { src: assetPath("/photos/chiang-mai-ad-concept.jpg"), caption: "팀이 함께 정리한 마케팅 콘셉트" },
      { src: assetPath("/photos/chiang-mai-editing.jpg"), caption: "마케팅 영상 편집 및 렌더링" },
      { src: assetPath("/photos/chiang-mai-presentation.jpg"), caption: "완성한 마케팅 영상을 발표하는 모습" },
      { src: assetPath("/photos/chiang-mai-ai-art.jpg"), caption: "미드저니 실습에서 만든 그림" },
      { src: assetPath("/photos/chiang-mai-outdoor-group.jpg"), caption: "마케팅 영상 촬영 중에 찍은 기념사진" },
      { src: assetPath("/photos/chiang-mai-camt-portrait.jpg"), caption: "치앙마이대학교 CAMT 방문 기념" },
    ],
  },
  {
    title: "노마드코더 10주 웹 기초 스터디",
    date: "2024.12",
    description: "서로의 코드를 보며 혼자 공부할 때 놓치던 다른 해결 방식을 배웠습니다.",
    photo: assetPath("/photos/nomad-web-study-session.jpg"),
    alt: "노마드코더 웹 기초 스터디 오프라인 모임",
    story: [
      "Node.js 공부를 마치고 React를 배우기 시작할 무렵, 웹 기초를 복습하고 혼자 공부하며 놓친 부분이 있는지 확인하고 싶어 스터디에 신청했습니다. 오프라인에서 개발 이야기를 나누며 다른 분들은 어떻게 공부하는지 듣고, 제가 아는 내용도 필요한 분들과 나누고 싶었습니다.",
      "10주 과정을 모두 마쳤습니다. 스터디 중에는 함께 코딩 테스트 모임을 만들어 하루에 한 문제씩 풀고 기록을 남겼습니다. 이때 처음으로 프로그래머스에서 JavaScript로 코딩 테스트 문제를 풀어봤습니다.",
      "오프라인 모임에서 니콜라스와 영어로 대화한 것도 기억에 남습니다. 영어 회화가 아직 익숙하지 않았지만, 직접 대화를 나누면서 영어로 말을 꺼내는 일이 조금 더 자연스러워지고 자신감도 생겼습니다.",
    ],
    gallery: [
      { src: assetPath("/photos/nomad-web-study-group.jpg"), caption: "웹 기초 스터디 참가자 단체사진" },
    ],
  },
  {
    title: "노마드코더 연말 모임 · Community Night",
    date: "2024.12",
    description: "취업 준비생, 현직 개발자, 프리랜서와 대화하며 개발자의 다양한 커리어를 접했습니다.",
    photo: assetPath("/photos/nomad-night-group.jpg"),
    alt: "2024 노마드코더 Community Night 단체사진",
    story: [
      "노마드코더 연말 모임에는 취업 준비생, 프리랜서, 현직 개발자, 창업가 등 각자의 자리에서 개발을 공부하거나 일하는 분들이 모였습니다. 테이블마다 모더레이터로 지원한 분이 직접 고른 주제로 자신의 경험과 생각을 나눠 주셨습니다.",
      "세 테이블을 돌아다니며 맥주를 한 잔씩 마시고, 서로 다른 일을 하는 분들의 이야기를 들었습니다. 평소에도 사람들을 만나 이야기하는 걸 좋아하는데, 크리스마스 분위기가 더해져 유독 즐거웠던 연말로 기억에 남습니다.",
    ],
    gallery: [
      { src: assetPath("/photos/nomad-night-venue.jpg"), caption: "크리스마스 분위기의 연말 모임 현장" },
      { src: assetPath("/photos/nomad-night-code-gift.jpg"), caption: "코드 문구가 담긴 굿즈" },
      { src: assetPath("/photos/nomad-night-character-gift.jpg"), caption: "캐릭터가 들어간 굿즈" },
      { src: assetPath("/photos/nomad-night-mug.jpg"), caption: "코드가 새겨진 머그컵" },
    ],
  },
];

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
                        "https://img.shields.io/badge/react--beautiful--dnd-00C4CC?style=flat-square&logo=react&logoColor=white",
                      )}
                      alt={"react-beautiful-dnd"}
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
        <section className="activities-section section" id="activities">
          <div className="container">
            <header className="section-heading reveal">
              <p className="label">활동</p>
              <h2>사람과 경험에서 배운 것</h2>
              <p>해외 협업 프로젝트, 해커톤, 개발자 모임에 참여한 기록입니다.</p>
            </header>
            <div className="activity-stories">
              {activities.map(({ title, date, description, photo, alt, story, gallery, video }) => (
                <article
                  className={gallery ? "activity-story activity-story--with-gallery reveal" : "activity-story reveal"}
                  key={title}
                  data-image-gallery
                >
                  {!gallery && (
                    <div className="activity-story-photo">
                      <ZoomImage src={photo} alt={alt} />
                    </div>
                  )}
                  <div>
                    <p className="label">{date}</p>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    {story && <ActivityStoryDialog title={title} story={story} />}
                  </div>
                  {gallery && (
                    <div className="activity-story-gallery">
                      <figure>
                        <ZoomImage src={photo} alt={alt} />
                        <figcaption>{alt}</figcaption>
                      </figure>
                      {video && <ActivityVideoDialog {...video} />}
                      {gallery.map(({ src, caption }) => (
                        <figure key={src}>
                          <ZoomImage src={src} alt={caption} />
                          <figcaption>{caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section" id="awards">
          <div className="container">
            <header className="section-heading reveal">
              <p className="label">수상</p>
              <h2>수상 경력</h2>
            </header>
            <ul className="award-list reveal">
              {awards.map(({ title, date, award, description }) => (
                <li key={title}>
                  <time dateTime={date.replace(".", "-")}>{date}</time>
                  <div>
                    <span>{title}</span>
                    <p className="award-description">{description}</p>
                  </div>
                  <strong>{award}</strong>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className={"contact-section section"} id={"contact"}>
          <div className={"container contact-box reveal"}>
            <h2>연락처</h2>
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
                <span>{"블로그"}</span>
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
