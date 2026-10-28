import Link from "next/link";
import { assetPath } from "@/lib/portfolio";
import { SiteHeader } from "@/components/site-header";
import { ZoomImage } from "@/components/image-viewer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ReadingProgress } from "@/components/reading-progress";

export default function EokkaContent() {
  return (
    <div className="detail-page project-detail">
      <a className={"skip-link"} href={"#main"}>
        {"본문으로 이동"}
      </a>

      <div className={"noise"} aria-hidden={"true"}></div>

      <SiteHeader project />

      <ScrollToTop />
      <ReadingProgress />
      <main id={"main"} tabIndex={-1}>
        <header className={"detail-header"}>
          <div className={"container"}>
            <Link className={"back-link"} href={"/#projects"}>
              {"← 프로젝트로 돌아가기"}
            </Link>
            <div className={"detail-title"}>
              <div>
                <p className={"label"}>{"대표 프로젝트 · 개인 풀스택 개발"}</p>
                <h1>{"EOKKA"}</h1>
              </div>
              <div>
                <p className={"project-summary"}>
                  {"복잡한 투자 데이터를 입력·검증·시각화해"}
                  <br />
                  {"초보 투자자가 현재 상태와 목표까지의 거리를"}
                  <br />
                  {"쉽게 이해하도록 설계한 반응형 웹 서비스입니다."}
                </p>
                <div className={"project-links"}>
                  <a
                    href={"https://eokka.qualius.co/"}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    {"서비스 사용해 보기 ↗"}
                  </a>
                  <a
                    href={"https://github.com/jonghwa3471/EOKKA"}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    {"GitHub ↗"}
                  </a>
                </div>
              </div>
            </div>
            <div className={"detail-meta"}>
              <div>
                <span>{"개발 기간"}</span>
                <strong>{"2026.07.24 — 2026.10.17"}</strong>
                <small>{"약 3개월 · 85일 / 첫·마지막 커밋 기준"}</small>
              </div>
              <div>
                <span>{"인원과 역할"}</span>
                <strong>{"1인 · 기획 / 디자인 / 풀스택 개발"}</strong>
                <small>{"Supaplate 기반 · Codex를 활용한 구현"}</small>
              </div>
              <div>
                <span>{"주요 기술"}</span>
                <strong>{"React Router · TypeScript"}</strong>
                <small>{"Supabase · PostgreSQL · Drizzle"}</small>
              </div>
              <div>
                <span>{"현재 상태"}</span>
                <strong>{"배포 및 사용자 피드백 반영"}</strong>
                <small>{"eokka.qualius.co"}</small>
              </div>
            </div>
            <p className="project-contribution">
              <strong>주요 역할:</strong> 투자 분석 사용자 경험 기획 · 동적 입력
              폼과 데이터 시각화 중심의 반응형 UI 구현 · 서버 데이터 연동 및
              상태·로딩·오류 처리 · 보안과 실제 운영을 고려한 서비스 개선
            </p>
            <div
              className={"project-cover"}
              aria-label={"EOKKA 서비스 미리보기"}
            >
              <ZoomImage
                cover
                src={assetPath("/projects/eokka/images/home-desktop-clean.jpg")}
                alt={
                  "로그인·회원가입 버튼이 표시되는 비로그인 상태의 EOKKA 홈 화면"
                }
                className={"project-cover__desktop"}
                width={2970}
                height={1620}
              />
              <ZoomImage
                cover
                src={assetPath(
                  "/projects/eokka/images/KakaoTalk_Photo_2026-10-21-17-44-50%20002.jpeg",
                )}
                alt={
                  "대시보드의 실제 평가금액과 예상·시장 추이를 비교하는 자산 성장 차트"
                }
                className={"project-cover__chart"}
                width={1384}
                height={848}
              />
              <ZoomImage
                cover
                src={assetPath(
                  "/projects/eokka/images/investment-committee.jpg",
                )}
                alt={"투자 대가 10인의 포트폴리오 심사와 투자 철학별 평가 화면"}
                className={"project-cover__committee"}
                width={2210}
                height={1650}
              />
            </div>
            <ul
              className="project-core-summary"
              aria-label="EOKKA 핵심 구현 요약"
            >
              <li>
                <strong>데이터 UX</strong>
                <span>
                  5,000개 경로의 P20·P50·P80을 세 가지 시나리오로 시각화
                </span>
              </li>
              <li>
                <strong>프론트엔드</strong>
                <span>
                  무료 최대 10개·Pro 최대 20개 종목의 동적 입력과 오류·복원 흐름
                </span>
              </li>
              <li>
                <strong>데이터 연동</strong>
                <span>
                  10년 시세 캐시와 최근 구간 증분 갱신으로 반복 API 호출 감소
                </span>
              </li>
              <li>
                <strong>운영 안정성</strong>
                <span>Zod·요청 제한·RLS·Sentry를 통한 검증과 장애 대응</span>
              </li>
            </ul>
          </div>
        </header>
        <div className={"detail-body container"}>
          <section className={"detail-block"} id={"motivation"}>
            <h2>{"기획 배경과 해결하려는 문제"}</h2>
            <div>
              <h3>
                {"수익률을 보는 것만으로는"}
                <br />
                {"꾸준히 투자할 이유가 선명해지지 않았습니다."}
              </h3>
              <p>
                {"직접 주식 투자를 하면서 궁금했습니다. "}
                <strong>{"지금처럼 계속 투자하면, 언제쯤 얼마가 될까?"}</strong>
                {
                  " 함께 주식을 하는 어머니와 동생도 앞으로의 수익을 가늠하기 어려워, 투자를 꾸준히 이어가는 것이 맞는지 불확실해했습니다."
                }
              </p>
              <p>
                {"발견한 문제는 단순히 계산기가 없다는 것이 아니었습니다. "}
                <strong>
                  {"현재의 투자와 장기 목표 사이를 연결해서 보기 어렵다"}
                </strong>
                {
                  "는 점이었습니다. 과거 데이터를 바탕으로 앞으로 가능한 흐름을 시나리오로 살펴볼 수 있다면, 막연한 불안 대신 미래의 윤곽을 그릴 수 있겠다고 생각했습니다."
                }
              </p>
              <p>
                {
                  "그래서 보유 주식과 목표 금액을 입력하면 현재 상태와 여러 성장 시나리오를 함께 보여주는 EOKKA를 만들었습니다. 하나의 결과를 확정적으로 예측하기보다, 가정에 따라 달라지는 경로를 비교하고 자신의 투자 방향을 돌아보도록 구성했습니다."
                }
              </p>
            </div>
          </section>
          <section className={"detail-block"} id={"frontend-decisions"}>
            <h2>{"프론트엔드 핵심 역량"}</h2>
            <div>
              <h3>
                {"계산 결과를 나열하지 않고,"}
                <br />
                {"사용자가 판단할 수 있는 흐름으로 재구성했습니다."}
              </h3>
              <div className={"reason-grid"}>
                <article className={"reason-card"}>
                  <span>{"01 · 동적 입력"}</span>
                  <h3>{"무료 최대 10개·Pro 최대 20개 종목을 하나의 폼으로"}</h3>
                  <p>
                    {
                      "종목별 자동완성·평균 매수가·수량을 독립적으로 관리하고, 전체 폼의 유효성을 함께 판단했습니다. 시장 모드에 따라 통화와 선택 가능한 종목을 제한해 잘못된 요청을 UI 단계에서 막았습니다."
                    }
                  </p>
                </article>
                <article className={"reason-card"}>
                  <span>{"02 · 정보 시각화"}</span>
                  <h3>{"금액·기간·확률을 읽는 순서로 계층화"}</h3>
                  <p>
                    {
                      "보수적·평균·낙관적 시나리오에 일관된 색상과 순서를 적용했습니다. 억 단위 금액과 개월 단위 기간을 읽기 쉬운 자연어로 바꾸고, 차트에서 시점별 예상 자산을 비교하도록 구성했습니다."
                    }
                  </p>
                </article>
                <article className={"reason-card"}>
                  <span>{"03 · 비동기 UX"}</span>
                  <h3>{"요청 중·입력 오류·서버 오류를 각각 정의"}</h3>
                  <p>
                    {
                      "분석 중에는 중복 요청을 막고 버튼과 로딩 상태를 연결했습니다. 요청이 실패해도 입력은 유지하고, 서버의 오류 이유를 표시해 수정하거나 다시 시도할 수 있게 했습니다."
                    }
                  </p>
                </article>
                <article className={"reason-card"}>
                  <span>{"04 · 설명과 신뢰"}</span>
                  <h3>{"통계 결과의 기준과 한계를 결과 안에서 확인"}</h3>
                  <p>
                    {
                      "분석 기준일, 5,000개 경로와 P20·P50·P80의 의미, 세금·수수료 등 분석의 한계를 설명했습니다. 결과값만 보여주기보다 사용자가 근거를 확인하고 오해하지 않도록 하는 것을 핵심 UX로 봤습니다."
                    }
                  </p>
                </article>
              </div>
              <div className={"technical-note"}>
                <h3>{"편의성과 민감한 정보 보존 사이의 선택"}</h3>
                <p>
                  {
                    "새로고침으로 작업을 잃지 않도록 입력과 분석 결과를 현재 탭에서만 유지되는 "
                  }
                  <code>{"sessionStorage"}</code>
                  {
                    "에 보존했습니다. 브라우저를 닫아도 남는 localStorage와 달리 탭을 닫으면 데이터가 사라져, 투자 정보를 장기간 기기에 남기지 않으면서 새로고침에는 대응할 수 있습니다."
                  }
                </p>
                <p>
                  <strong>{"복원 조건:"}</strong>
                  {
                    " 저장된 값이 현재 코드가 기대하는 항목과 자료형을 갖췄는지 확인하고, 결과를 만든 시장 모드가 현재 화면과 같을 때만 복원합니다. 예전 형식의 데이터나 국내·해외 모드가 다른 결과는 삭제해 잘못된 값이 화면에 표시되지 않도록 했습니다."
                  }
                </p>
                <div className={"project-evidence"}>
                  <a
                    href={
                      "https://github.com/jonghwa3471/EOKKA/commit/1ce692f546ad622c7b8592a1d5375ae9df7dcfa7"
                    }
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    {"입력·분석 결과 세션 저장 구현 커밋 ↗"}
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className={"detail-block"} id={"experience"}>
            <h2>{"핵심 기능"}</h2>
            <div>
              <h3 className="feature-intro-title">
                {"빠르게 확인하고, 기록하며, 꾸준함을 쌓도록"}
              </h3>
              <div className={"feature-list"}>
                <article>
                  <h3>자산 성장 흐름과 목표 도달 시나리오</h3>
                  <p>
                    이대로 투자하면 자산이 어떻게 늘어날지, 목표 금액까지 얼마나
                    걸릴지를 차트로 확인하는 핵심 기능입니다. 보수적·평균·낙관적
                    시나리오의 자산 변화를 비교하고, 매월 추가 투자금을 반영했을
                    때 목표 도달 기간이 어떻게 달라지는지도 살펴볼 수 있습니다.
                    과거 데이터와 입력 조건에 따른 시뮬레이션으로 미래의 흐름을
                    가늠하도록 구성했습니다.
                  </p>
                  <div
                    className="analysis-gallery"
                    data-image-gallery
                    aria-label="분석 결과 화면 모음"
                  >
                    <figure className="context-shot">
                      <ZoomImage
                        src={assetPath(
                          "/projects/eokka/images/asset-growth-scenarios.jpg",
                        )}
                        alt="분석 결과의 시나리오별 자산 성장 곡선과 목표 도달 기간"
                      />
                      <figcaption>자산 성장 시나리오</figcaption>
                    </figure>
                    <figure className="context-shot">
                      <ZoomImage
                        src={assetPath(
                          "/projects/eokka/images/analysis-goal-comparison.jpg",
                        )}
                        alt="매월 추가 투자에 따른 목표 도달 기간 비교"
                      />
                      <figcaption>월 투자금과 목표 도달 기간</figcaption>
                    </figure>
                    <figure className="context-shot">
                      <ZoomImage
                        src={assetPath(
                          "/projects/eokka/images/analysis-ai-committee.jpg",
                        )}
                        alt="AI 투자위원회의 포트폴리오 총평과 투자 대가 캐릭터"
                      />
                      <figcaption>AI 투자위원회 총평</figcaption>
                    </figure>
                    <figure className="context-shot">
                      <ZoomImage
                        src={assetPath(
                          "/projects/eokka/images/analysis-committee-discussion.jpg",
                        )}
                        alt="서로 다른 투자 철학으로 포트폴리오를 살펴보는 AI 투자위원회 분석 과정"
                      />
                      <figcaption>투자 관점별 AI 분석</figcaption>
                    </figure>
                  </div>
                </article>
                <article>
                  <h3>{"빠른 분석"}</h3>
                  <p>
                    {
                      "종목과 평균 매수가·수량만 입력하면 현재 수익률과 목표 도달 시나리오를 빠르게 확인합니다. 로그인 없이 시작할 수 있고, 종목명·티커 자동완성으로 입력 부담을 줄였습니다."
                    }
                  </p>
                  <figure className={"context-shot"}>
                    <ZoomImage
                      src={assetPath(
                        "/projects/eokka/images/stock-autocomplete.jpg",
                      )}
                      alt={"종목 자동완성 목록이 표시된 빠른 분석 입력 화면"}
                    />
                    <figcaption>
                      {"빠른 분석의 종목 검색과 입력 · 클릭하면 크게 보기"}
                    </figcaption>
                  </figure>
                </article>
                <article>
                  <h3>{"대시보드"}</h3>
                  <p>
                    {
                      "분석한 기록을 자산·손익 추이로 연결해 투자 흐름을 한눈에 보여줍니다. 개별 분석 결과를 넘어, 시간에 따라 무엇이 달라졌는지 돌아볼 수 있게 했습니다."
                    }
                  </p>
                  <figure className={"context-shot"}>
                    <ZoomImage
                      src={assetPath(
                        "/projects/eokka/images/KakaoTalk_Photo_2026-10-21-17-44-50%20002.jpeg",
                      )}
                      alt={"대시보드의 자산 성장 추이 차트"}
                    />
                    <figcaption>
                      {
                        "실제 평가금액과 예상·시장 추이 비교 · 클릭하면 크게 보기"
                      }
                    </figcaption>
                  </figure>
                </article>
                <article>
                  <h3>{"투자 인사이트"}</h3>
                  <p>
                    {
                      "분석 기록에서 얻은 기간별 성과와 투자 패턴을 카드와 친근한 설명으로 풀어냈습니다. 숫자를 나열하기보다 주간·월간·연간 흐름을 재미있게 읽고 이해하도록 구성했습니다."
                    }
                  </p>
                  <figure className={"context-shot"}>
                    <ZoomImage
                      src={assetPath(
                        "/projects/eokka/images/investment-insights.jpg",
                      )}
                      alt={"주간 기록에서 발견한 투자 흐름과 성과 카드"}
                    />
                    <figcaption>
                      {
                        "비교 기록이 부족할 때의 안내를 포함한 인사이트 화면 · 클릭하면 크게 보기"
                      }
                    </figcaption>
                  </figure>
                </article>
                <article>
                  <h3>{"도전과제"}</h3>
                  <p>
                    {
                      "분석 기록과 투자 목표를 작은 성취로 연결합니다. 당장의 수익률뿐 아니라 기록을 쌓는 과정에서도 목표의식과 꾸준히 참여할 동기를 얻도록 만들었습니다."
                    }
                  </p>
                  <figure className={"context-shot"}>
                    <ZoomImage
                      src={assetPath("/projects/eokka/images/achievements.jpg")}
                      alt={
                        "획득한 뱃지와 도전 중인 목표가 표시된 도전과제 화면"
                      }
                    />
                    <figcaption>
                      {
                        "도전과제 수집 진행도와 단계별 목표 · 클릭하면 크게 보기"
                      }
                    </figcaption>
                  </figure>
                </article>
                <article id={"daily-eokka"}>
                  <h3>{"오늘의 억까"}</h3>
                  <p>
                    {
                      "직전 거래일 종가와 최근 종가를 비교해, 내 자산이 하루 동안 얼마나 늘거나 줄었는지 쉽게 확인할 수 있습니다. 수익·손실을 무선 이어폰이나 운동화처럼 익숙한 물건의 가격에 빗대어 보여주고, 최근 기록과 목표 도달 기간 변화도 함께 배치해 하루의 투자 흐름을 직관적으로 돌아보도록 구성했습니다."
                    }
                  </p>
                  <figure className={"context-shot"}>
                    <ZoomImage
                      src={assetPath(
                        "/photos/KakaoTalk_Photo_2026-10-27-14-12-58 001.jpeg",
                      )}
                      alt={
                        "오늘의 억까 · 투자 성과를 일상 속 물건과 목표 도달 기간으로 표현한 화면"
                      }
                    />
                    <figcaption>
                      {
                        "일상 속 물건으로 표현한 투자 성과와 목표 도달 기간 · 클릭하면 크게 보기"
                      }
                    </figcaption>
                  </figure>
                  <p className="feature-footnote">
                    미국 종목이 포함된 화면 예시입니다. 공개 베타의 분석 지원
                    범위는 국내 주식·ETF·ETN입니다.
                  </p>
                </article>
              </div>
            </div>
          </section>
          <section className={"detail-block"} id={"frontend"}>
            <h2>{"구현 디테일과 UX 개선"}</h2>
            <div className={"story-list"}>
              <article>
                <h3>{"종목 자동완성으로 간편하게 입력"}</h3>
                <p>
                  {
                    "종목명이나 종목코드를 입력하면 관련 종목을 목록으로 보여주고, 선택한 종목을 분석 입력에 반영하도록 했습니다. 정확한 종목코드를 외워 입력하거나 따로 찾아볼 필요 없이, 원하는 종목을 빠르게 선택할 수 있도록 추가한 기능입니다."
                  }
                </p>
                <p>
                  <strong>{"구현 방식:"}</strong>
                  {" 글자를 입력할 때마다 요청하지 않고, 입력이 멈춘 뒤 "}
                  <strong>{"250ms를 기다리는 디바운스"}</strong>
                  {
                    "를 적용해 불필요한 검색 요청을 줄였습니다. 검색어가 바뀌면 "
                  }
                  <code>{"AbortController"}</code>
                  {
                    "로 이전 요청을 취소하고, 요청 ID도 비교해 늦게 도착한 이전 검색 결과가 현재 목록을 덮지 않도록 했습니다."
                  }
                </p>
                <p>
                  {
                    "마우스뿐 아니라 방향키로 목록을 탐색하고 Enter로 선택할 수 있어, 키보드만으로도 입력을 이어갈 수 있습니다."
                  }
                </p>
                <a
                  href={
                    "https://github.com/jonghwa3471/EOKKA/commit/743519e5fa208b6d473b3a5f9268fdf60639c4d0"
                  }
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  {"종목 검색 자동완성 구현 커밋 ↗"}
                </a>
              </article>
              <article>
                <h3>{"즉시 반응하는 알림 읽음 처리"}</h3>
                <p>
                  {"알림을 읽었을 때 바로 반응하도록, 이전에 학습했던 "}
                  <strong>{"Optimistic UI(낙관적 UI)"}</strong>
                  {
                    "를 떠올려 적용했습니다. 서버 응답을 기다리기 전에 성공을 가정해 읽음 상태와 읽지 않은 개수를 먼저 갱신하여, 사용자가 처리 결과를 즉시 확인할 수 있도록 했습니다."
                  }
                </p>
                <p>
                  <strong>{"구현 방식:"}</strong>
                  {" 화면 상태를 먼저 변경한 뒤 "}
                  <code>{"useFetcher"}</code>
                  {
                    "로 서버에 읽음 처리를 요청합니다. 서버가 실패 응답을 반환하면 변경한 상태와 개수를 이전 값으로 되돌리고 오류를 안내하도록 구성했습니다. 빠른 반응뿐 아니라, 저장에 실패했을 때 화면과 서버의 상태가 어긋나지 않도록 복구하는 과정도 함께 고려했습니다."
                  }
                </p>
                <a
                  href={
                    "https://github.com/jonghwa3471/EOKKA/commit/fc0249dc22816273209358e1b0b028615bfa56dd"
                  }
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  {"알림 Optimistic UI 구현 커밋 ↗"}
                </a>
              </article>
              <article>
                <h3>{"데이터가 없거나 부족할 때도 의미 있는 안내"}</h3>
                <p>
                  {"1년 미만 수익률을 무리하게 연환산하던 문제를 발견해 "}
                  <strong>{"365일 이상일 때만 연평균 수익률"}</strong>
                  {
                    "을 제공하도록 바꿨습니다. 누적 수익률과 ‘1년 기록 필요’를 구분하고, 비교할 기록이 없을 때는 ‘비교 준비 중’으로 안내했습니다."
                  }
                </p>
                <a
                  href={
                    "https://github.com/jonghwa3471/EOKKA/commit/c2211fb97499ddb4bfd9b257bbe63e68196f07f7"
                  }
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  {"연평균 수익률 기준·안내 개선 커밋 ↗"}
                </a>
              </article>
            </div>
          </section>
          <section className={"detail-block"} id={"loading"}>
            <h2>{"개발 중 발생한 문제와 해결"}</h2>
            <div className={"story-list"}>
              <article>
                <span className={"case-kicker"}>
                  {"01 · 로딩과 데이터 최신성"}
                </span>
                <h3>
                  {"페이지 이동마다 반복되는 로딩과 갱신되지 않는 분석 결과"}
                </h3>
                <p>
                  <strong>{"문제:"}</strong>
                  {
                    " 페이지 이동마다 화면 전체가 로딩되고, 분석을 저장한 후에는 일부 화면에 이전 값이 남았습니다."
                  }
                </p>
                <p>
                  <strong>{"개선 방향:"}</strong>
                  {
                    " 화면 전체를 가리는 대신 데이터 영역에 스켈레톤을 표시하고, 이미 조회한 데이터는 재사용하도록 했습니다. 다만 분석을 저장한 뒤에도 이전 값이 남지 않도록, 관련 화면의 캐시를 무효화하고 다시 조회하는 조건이 필요했습니다."
                  }
                </p>
                <p>
                  <strong>{"구현과 동작 확인:"}</strong>
                  {" React Router의 "}
                  <code>{"loader"}</code>
                  {
                    "로 데이터를 조회하던 중, 반복 조회를 줄이기 위해 캐싱을 떠올렸고 AI의 도움으로 빠르게 구현했습니다. 캐시가 의도대로 동작하는지 테스트한 뒤 정상 동작을 확인하고 다음 작업으로 넘어갔습니다."
                  }
                </p>
                <div
                  className={"route-behavior"}
                  aria-label={"방문 상황별 캐시 처리"}
                >
                  <div>
                    <strong>{"최초 조회"}</strong>
                    <p>
                      {"서버에서 받은 데이터를 화면에 표시하고 캐시에 등록"}
                    </p>
                  </div>
                  <div>
                    <strong>{"재방문"}</strong>
                    <p>{"사용 가능한 캐시가 있으면 서버 조회 대신 재사용"}</p>
                  </div>
                  <div>
                    <strong>{"분석 변경"}</strong>
                    <p>
                      {
                        "대시보드·기록·인사이트 등 관련 캐시를 무효화해 다음 조회에서 갱신"
                      }
                    </p>
                  </div>
                </div>

                <a
                  href={
                    "https://github.com/jonghwa3471/EOKKA/commit/75c51f32893aa1b53c5921ceb835fffe51ffc7cb"
                  }
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  {"페이지 데이터 캐싱·스켈레톤 최초 구현 커밋 ↗"}
                </a>
              </article>
              <article>
                <span className={"case-kicker"}>
                  {"02 · 외부 API 호출 최적화"}
                </span>
                <h3>
                  {"10년치 시세를 매번 요청하지 않도록 데이터 갱신 구조를 개선"}
                </h3>
                <p>
                  <strong>{"문제:"}</strong>
                  {
                    " 분석할 때마다 금융위원회 API에서 장기간의 시세를 다시 가져오면 응답이 느려지고, 동일한 과거 데이터에 외부 API 호출이 반복됩니다. 주말·공휴일처럼 새 거래 데이터가 없는 날에도 같은 요청이 계속 발생할 수 있었습니다."
                  }
                </p>
                <p>
                  <strong>{"구현 방식:"}</strong>
                  {
                    " 종목의 캐시가 없을 때만 최근 10년 시세를 페이지 단위로 조회해 Supabase의 stock_prices 테이블에 저장했습니다. 이후에는 최근 21일 구간만 조회하고, 종목 ID와 거래일의 복합 고유 키를 기준으로 upsert해 기존 거래일은 갱신하고 새 거래일은 추가했습니다."
                  }
                </p>
                <p>
                  <strong>{"갱신 조건:"}</strong>
                  {
                    " 한국시간 오후 2시를 기준으로 하루의 갱신 주기를 나눴습니다. 현재 주기에 이미 확인한 종목은 DB 캐시를 그대로 사용하므로 같은 날의 반복 분석에서는 외부 API를 다시 호출하지 않습니다. 주말·공휴일에도 첫 확인 이후에는 기존 캐시를 재사용합니다."
                  }
                </p>
                <div
                  className={"route-behavior"}
                  aria-label={"시세 데이터 캐시와 증분 갱신 처리"}
                >
                  <div>
                    <strong>{"최초 분석"}</strong>
                    <p>{"최근 10년 시세 조회 후 DB에 저장"}</p>
                  </div>
                  <div>
                    <strong>{"다음 갱신 주기"}</strong>
                    <p>{"최근 21일만 조회해 신규·변경 거래일 upsert"}</p>
                  </div>
                  <div>
                    <strong>{"같은 주기 재분석"}</strong>
                    <p>{"외부 API 호출 없이 저장된 시세 재사용"}</p>
                  </div>
                </div>
                <a
                  href={
                    "https://github.com/jonghwa3471/EOKKA/commit/f3a8aa5269947589f677c5a7a20fe5877bf679bc"
                  }
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  {"시세 캐시·증분 갱신 구현 커밋 ↗"}
                </a>
              </article>
              <article>
                <span className={"case-kicker"}>{"03 · 운영 환경 디버깅"}</span>
                <h3>{"로컬에서는 성공하던 분석 요청이 운영환경에서만 실패"}</h3>
                <p>
                  <strong>{"문제:"}</strong>
                  {
                    " 배포 후 사용자 테스트에서 분석이 실패했습니다. 운영 로그에 ‘공공데이터 시세 조회 실패(400)’가 반복되어 환경변수와 API 키가 정상인지 먼저 확인했지만, 설정에 문제가 없는데도 오류가 계속됐습니다."
                  }
                </p>
                <figure className={"context-shot debug-shot"}>
                  <ZoomImage
                    src={assetPath("/projects/eokka/images/analysis-error.png")}
                    alt={
                      "빠른 분석 실행 후 분석 처리 중 오류가 발생했다는 안내 화면"
                    }
                  />
                  <figcaption>
                    {"사용자 화면에 나타난 분석 실패 안내"}
                  </figcaption>
                </figure>
                <figure className={"context-shot debug-shot"}>
                  <ZoomImage
                    src={assetPath(
                      "/projects/eokka/images/analysis-error-logs.png",
                    )}
                    alt={
                      "공공데이터 시세 조회 실패 400과 FSC 조회 HTTP 400이 반복된 운영 로그"
                    }
                  />
                  <figcaption>
                    {"시세 조회 실패와 관련된 운영 로그 발췌"}
                  </figcaption>
                </figure>
                <p>
                  <strong>{"개선 방향:"}</strong>
                  {
                    " 로그를 바탕으로 AI의 도움을 받아 원인을 좁혀 가며, 오류·성능 모니터링 도구인 Sentry가 외부 요청에 추적 헤더를 추가한다는 점을 알게 됐습니다. 같은 키와 요청 조건에서 헤더 유무를 비교한 결과, "
                  }
                  <strong>
                    {"추적 헤더 없음 → 200 / 추적 헤더 있음 → 400"}
                  </strong>
                  {"으로 갈렸습니다. 외부 API가 "}
                  <code>{"sentry-trace"}</code>
                  {"·"}
                  <code>{"baggage"}</code>
                  {" 헤더가 포함된 요청을 거부하는 문제였습니다."}
                </p>
                <p>
                  <strong>{"구현과 동작 확인:"}</strong>
                  {" 서버 Sentry는 "}
                  <code>{"tracePropagationTargets"}</code>
                  {
                    " 설정을 생략하면 기본적으로 추적 헤더를 전파합니다. 이를 빈 배열("
                  }
                  <code>{"[]"}</code>
                  {
                    ")로 지정해 전파 대상을 없애고, 외부 API 요청에 추적 헤더가 추가되지 않도록 했습니다. 오류 수집은 유지했으며, 재배포 후 운영 서비스의 ETF 분석이 200 응답으로 성공하는 것을 확인했습니다."
                  }
                </p>
                <a
                  href={
                    "https://github.com/jonghwa3471/EOKKA/commit/2a662d9e8e8b25b9351d27b261017bfebe780e9f"
                  }
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  {"원인과 수정이 남아 있는 커밋 ↗"}
                </a>
              </article>
              <article>
                <span className={"case-kicker"}>
                  {"04 · 데이터 제공 범위 조정"}
                </span>
                <h3>
                  {"한국투자 API의 시세 제공 제약으로 공개 서비스 운영에 한계"}
                </h3>
                <p>
                  <strong>{"문제:"}</strong>
                  {
                    " 처음에는 한국투자증권 API로 국내·미국 주식을 분석하려 했지만, 개인용 시세를 제3자에게 제공하는 제약 때문에 해당 모드를 공개 서비스에서 그대로 사용할 수 없었습니다."
                  }
                </p>
                <p>
                  <strong>{"개선 방향:"}</strong>
                  {" 공개 서비스에서 제공할 수 있는 데이터 범위에 맞추기 위해 "}
                  <strong>{"금융위원회 주식·증권상품 시세 API"}</strong>
                  {
                    "로 전환하고, 지원 종목과 분석 기준도 함께 조정하기로 했습니다."
                  }
                </p>
                <p>
                  <strong>{"구현과 동작 확인:"}</strong>
                  {
                    " 운영은 공공데이터 API를 사용하도록 바꾸고, KIS 모드는 로컬 테스트 용도로 남겨 프로덕션 실행을 차단했습니다. 베타 서비스에서는 국내 주식·ETF·ETN과 확정 종가 기반 분석을 지원하도록 구성하고, 제공 범위를 화면에 안내했습니다."
                  }
                </p>
                <p>
                  <strong>{"배운 점:"}</strong>
                  {
                    " 원하는 기능을 모두 노출하기보다 실제 제공 가능한 데이터 범위에 맞춰 제품을 조정해야 한다는 점을 배웠습니다."
                  }
                </p>
              </article>
              <article>
                <span className={"case-kicker"}>
                  {"05 · 인증 메일 발송 확장"}
                </span>
                <h3>
                  {"기본 인증 메일 발송만으로는 원하는 템플릿 연동에 한계"}
                </h3>
                <p>
                  <strong>{"문제:"}</strong>
                  {
                    " 매직 링크 메일에 서비스 전용 디자인을 적용하려 했지만, 코드로 작성한 React Email 템플릿을 렌더링해 Resend API로 전달하는 흐름은 별도로 연결해야 했습니다. Supabase가 매직 링크나 템플릿을 지원하지 않는다는 뜻은 아닙니다."
                  }
                </p>
                <p>
                  <strong>{"개선 방향:"}</strong>
                  {
                    " 인증 토큰과 세션 관리는 Supabase Auth에 맡기고, 이메일 내용 구성과 발송은 Edge Function·Resend가 담당하도록 역할을 나눴습니다."
                  }
                </p>
                <p>
                  <strong>{"구현과 동작 확인:"}</strong>
                  {
                    " 로그인 화면에서 Supabase Auth에 매직 링크 발송을 요청하면, Auth의 "
                  }
                  <code>{"Send Email Hook"}</code>
                  {
                    "이 Edge Function을 호출합니다. 함수가 요청 서명을 확인하고 토큰 해시로 만든 인증 링크를 React Email 템플릿에 넣어 Resend로 발송하도록 연결했습니다. 링크를 누르면 앱의 인증 경로에서 Supabase Auth로 토큰을 검증하고 세션을 생성하는 흐름입니다."
                  }
                </p>
                <p>
                  <strong>{"배운 점:"}</strong>
                  {
                    " 인증 기능 전체를 새로 만드는 대신, 기존 인증 서비스에 필요한 이메일 발송 처리를 연결하는 방식으로 확장했습니다."
                  }
                </p>
                <figure className={"context-shot"}>
                  <ZoomImage
                    src={assetPath("/projects/eokka/images/login.jpg")}
                    alt={"이메일 로그인 링크 요청과 소셜 로그인 화면"}
                  />
                  <figcaption>
                    {"이메일 로그인 링크를 요청하는 화면"}
                  </figcaption>
                </figure>
              </article>
            </div>
          </section>
          <section className="detail-block" id="architecture">
            <h2>서비스 구조와 데이터 흐름</h2>
            <div>
              <h3>입력에서 분석, 기록과 화면까지</h3>
              <ol
                className="project-flow"
                aria-label="EOKKA 분석 요청 처리 순서"
              >
                <li>
                  <span className="project-flow-step">01 · 브라우저</span>
                  <div>
                    <h4>사용자가 보유 종목과 목표 입력</h4>
                    <p>
                      React 화면에서 종목·매수가·수량·목표 금액을 입력하고
                      분석을 요청합니다.
                    </p>
                    <small>React · TypeScript</small>
                  </div>
                </li>
                <li>
                  <span className="project-flow-step">02 · 서버</span>
                  <div>
                    <h4>입력을 확인하고 시세 조회·분석</h4>
                    <p>
                      action에서 입력값과 이용 조건을 확인한 뒤 금융위원회 시세
                      API를 조회하고 분석 결과를 계산합니다. AI 요약은 별도
                      처리로 연결합니다.
                    </p>
                    <small>React Router action · Zod · 외부 시세 API</small>
                  </div>
                </li>
                <li>
                  <span className="project-flow-step">03 · 데이터</span>
                  <div>
                    <h4>이용 조건에 따라 분석 기록 저장</h4>
                    <p>
                      저장 대상인 결과를 사용자 ID와 연결해 DB에 보관합니다.
                      비로그인 빠른 분석은 개인 기록으로 저장하지 않습니다.
                    </p>
                    <small>Drizzle ORM · PostgreSQL / Supabase</small>
                  </div>
                </li>
                <li>
                  <span className="project-flow-step">04 · 브라우저</span>
                  <div>
                    <h4>분석 결과 표시와 기록 돌아보기</h4>
                    <p>
                      서버 응답으로 수익률과 목표 시나리오를 표시합니다. 저장된
                      기록은 loader로 조회해 대시보드·인사이트·도전과제 등의
                      화면에 연결합니다.
                    </p>
                    <small>결과 화면 · loader 조회 · 공통 메모리 캐시</small>
                  </div>
                </li>
              </ol>
              <div className="project-flow-support">
                <div>
                  <h4>인증·메일</h4>
                  <p>
                    Supabase Auth → Send Email Hook → Edge Function → Resend
                  </p>
                  <small>
                    메일 링크 클릭 후 Supabase Auth에서 토큰 검증·세션 생성
                  </small>
                </div>
                <div>
                  <h4>운영 확인</h4>
                  <p>
                    Sentry: 오류 모니터링
                    <br />
                    Google Tag Manager · GA4: 이용 흐름 관찰
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="detail-block" id="backend">
            <h2>서버 처리와 데이터 저장</h2>
            <div className="story-list">
              <p>
                화면에서 입력한 정보가 서버의 분석과 기록 저장으로 이어지는
                구조입니다. 복잡한 서버 구현은 Codex의 도움을 받았으며, 아래는
                실제 코드에 구성된 역할을 정리한 내용입니다.
              </p>
              <div
                className="route-behavior"
                aria-label="분석 요청과 결과 전달 흐름"
              >
                <div>
                  <strong>프론트엔드</strong>
                  <p>종목·수량·목표 금액 입력 후 분석 요청</p>
                </div>
                <div>
                  <strong>서버</strong>
                  <p>입력 확인 → 외부 시세 조회 → 분석 처리</p>
                </div>
                <div>
                  <strong>결과 전달</strong>
                  <p>분석 결과를 화면에 반환하고 이용 조건에 따라 기록 저장</p>
                </div>
              </div>
              <article>
                <h3>화면 표시와 외부 API 처리를 분리</h3>
                <p>
                  프론트엔드는 입력과 로딩·결과 표시를 맡고, React Router의{" "}
                  <code>action</code>은 분석 요청을 받아 서버의 분석 함수를
                  호출합니다. 외부 시세 API 호출과 비밀 API 키 사용은{" "}
                  <code>.server.ts</code> 모듈에서 처리해 브라우저 코드에 키를
                  넣지 않도록 구성했습니다.
                </p>
                <a
                  href="https://github.com/jonghwa3471/EOKKA/blob/master/app/features/stocks/api/analyze.ts"
                  target="_blank"
                  rel="noreferrer"
                >
                  분석 요청 처리 코드 ↗
                </a>
              </article>
              <article>
                <h3>입력값과 개인 데이터 접근을 서버에서 확인</h3>
                <p>
                  입력창에서 안내하는 것과 별개로, 서버에서도 Zod로
                  종목·가격·수량 등의 값이 허용 범위인지 확인합니다. 빠른 분석은
                  로그인 없이 이용할 수 있지만, 개인 기록처럼 사용자에게 속한
                  데이터는 서버에서 로그인 사용자를 확인하고 해당 사용자
                  기준으로 조회하도록 구분했습니다.
                </p>
              </article>
              <article>
                <h3>분석 결과를 사용자별 기록으로 연결</h3>
                <p>
                  기록 저장 로직은 분석 결과와 사용자 ID를 연결해 PostgreSQL에
                  보관합니다. 저장된 기록을 대시보드와 인사이트에서 다시 조회해,
                  한 번의 분석 결과뿐 아니라 시간에 따른 변화를 보여주는
                  기반으로 활용했습니다. DB 조회·저장은 Drizzle ORM을
                  사용합니다.
                </p>
                <a
                  href="https://github.com/jonghwa3471/EOKKA/blob/master/app/features/stocks/history/analysis-history.server.ts"
                  target="_blank"
                  rel="noreferrer"
                >
                  분석 기록 저장·조회 코드 ↗
                </a>
              </article>
            </div>
          </section>
          <section className={"detail-block"} id={"technical"}>
            <h2>{"기술 스택과 상태 관리"}</h2>
            <div>
              <div className={"reason-grid"}>
                <article className={"reason-card"}>
                  <span>{"React Router 7 · React"}</span>
                  <h3>{"학습한 조회·변경 구조를 서비스에 적용"}</h3>
                  <p>
                    {
                      "Supaplate 템플릿의 React Router 구조를 바탕으로 개발했습니다. loader는 데이터 조회, action은 변경 요청에 사용하고, 페이지 이동 없이 처리할 알림 읽음에는 useFetcher를 연결했습니다."
                    }
                  </p>
                </article>
                <article className={"reason-card"}>
                  <span>{"TypeScript"}</span>
                  <h3>{"입력과 결과의 데이터 형태 확인"}</h3>
                  <p>
                    {
                      "주식·거래·분석 결과의 형태를 타입으로 표현한 코드를 활용했습니다. 타입 정보와 자동완성을 통해 데이터 구조를 파악하며 개발했습니다. 타입 검사와 실제 입력값 검증은 별개의 과정입니다."
                    }
                  </p>
                </article>
                <article className={"reason-card"}>
                  <span>{"Supabase · PostgreSQL"}</span>
                  <h3>{"인증부터 관계형 데이터까지"}</h3>
                  <p>
                    {
                      "1인 개발에서 인증 구축 부담을 줄이고, 사용자·거래·분석 기록의 관계를 PostgreSQL로 관리했습니다. RLS로 사용자별 데이터 접근 범위를 제한했습니다."
                    }
                  </p>
                </article>
                <article className={"reason-card"}>
                  <span>{"Drizzle ORM"}</span>
                  <h3>{"템플릿의 DB 접근 방식 활용"}</h3>
                  <p>
                    {
                      "템플릿에 포함된 Drizzle을 사용해 TypeScript 코드로 DB 스키마와 조회를 다뤘습니다. 스키마 변경은 마이그레이션 파일로 관리하는 구조를 활용했습니다."
                    }
                  </p>
                </article>
                <article className="reason-card">
                  <span>OpenAI API</span>
                  <h3>분석 수치를 이해하기 쉬운 AI 설명으로</h3>
                  <p>
                    Codex의 도움으로 OpenAI API를 연동해 포트폴리오 총평과 투자
                    원칙별 점검 내용을 제공했습니다. 서버에서 계산한 수익률·종목
                    비중·목표 시나리오 등을 전달하고, 정해진 응답 형식으로 받은
                    설명을 화면에 표시합니다. 자산 성장 수치는 별도 계산 로직이
                    담당하며, AI는 계산 결과의 해석을 돕는 역할입니다. AI 응답에
                    실패하더라도 기본 분석 결과는 제공하도록 구성했습니다.
                  </p>
                </article>
              </div>
              <div className={"technical-note"}>
                <h3>{"서버 데이터와 화면 상태의 구분"}</h3>
                <p>
                  {"조회·변경은 React Router의 "}
                  <code>{"loader/action"}</code>
                  {"과 "}
                  <code>{"useFetcher"}</code>
                  {", 입력·모달은 "}
                  <code>{"useState"}</code>
                  {
                    ", 재방문 데이터는 공통 메모리 캐시로 처리했습니다. 별도 Recoil·Redux 스토어 없이 알림 동기화와 캐시 공유를 처리하는 코드가 구성돼 있습니다."
                  }
                </p>
                <p>
                  {
                    "서버에서 가져온 분석 기록과 화면에서만 사용하는 입력값·모달 상태를 구분했습니다. 공통 캐시와 알림 동기화 로직은 AI의 도움을 받아 구현했으며, 상태가 한 화면에서만 필요한지 여러 화면이 공유해야 하는지, 데이터 변경 후 어떤 화면을 갱신해야 하는지를 직접 확인했습니다."
                  }
                </p>
              </div>
            </div>
          </section>
          <section className={"detail-block"} id={"verification"}>
            <h2>{"개발 방식과 테스트"}</h2>
            <div className={"story-list"}>
              <article>
                <h3>{"직접 판단한 부분과 AI의 도움을 받은 부분"}</h3>
                <p>
                  {
                    "투자 입력·분석·기록·도전과제의 사용자 흐름과 개선 우선순위는 직접 정했습니다. 초기 구성에는 React Router·Supabase 기반 풀스택 웹 개발 템플릿인 Supaplate를 사용했고, 기능 구현과 코드 검토에는 Codex를 활용했습니다."
                  }
                </p>
                <p>
                  {
                    "구현 결과는 직접 사용하며 확인했습니다. 짧은 기간의 수익률이 과도하게 연환산되는 문제를 발견하고 표시 기준을 바꾸는 등, 계산 결과가 실제 사용자에게 어떻게 전달되는지도 살펴봤습니다."
                  }
                </p>
              </article>
              <article>
                <h3>{"AI와 함께 작성한 테스트로 동작 확인"}</h3>
                <p>
                  {
                    "테스트 코드 작성 경험이 없던 상태에서, AI가 작성한 캐시 테스트와 실행 결과를 살펴보며 단위 테스트를 처음 접했습니다. 이전 데이터를 저장하고 캐시를 무효화한 뒤 새 값이 반환되는지, 관계없는 캐시는 유지되는지를 기대값과 비교하는 방식입니다."
                  }
                </p>
                <p>
                  {
                    "캐시 저장·조회·무효화 동작을 단위 테스트로 확인했습니다. 분석 저장부터 화면 갱신까지 이어지는 전체 흐름은 실제 서비스를 직접 사용하며 확인했습니다."
                  }
                </p>
              </article>
              <article>
                <h3>AI 구현을 검토하며 배운 점</h3>
                <p>
                  처음 Codex를 도입했을 때 예상보다 구현이 잘 되어, 동작
                  확인만으로 다음 작업으로 넘어간 적이 있습니다. 이후 코드를
                  살펴보며 React Query가 아닌 Map 기반 캐시와 별도 전역 상태
                  관리 라이브러리 없는 공유 로직을 확인했습니다. 특정
                  라이브러리를 쓰지 않은 것이 문제가 아니라, 구현 방식과 선택
                  근거까지 검토하지 못했던 경험입니다.
                </p>
                <p>
                  <strong>다음 기준:</strong> AI 활용과 AX를 공부하며, 구현 전
                  접근 방식을 확인하고 라이브러리 활용과 직접 구현의 유지보수
                  부담을 비교하려 합니다. 테스트 통과 여부뿐 아니라 코드의
                  데이터 흐름도 검토하는 습관을 쌓고자 합니다.
                </p>
                <p>
                  <strong>학습 계획:</strong> 실무에서 활용한다는 이야기를 들은
                  Zustand·Jotai를 학습 목표로 잡았습니다. 기존에 배운
                  Recoil·Redux와 상태 구성·공유 방식, 사용 편의성, 유지보수
                  측면을 비교하고 다음 프로젝트에서 필요에 맞게 적용해 볼
                  계획입니다.
                </p>
              </article>
            </div>
          </section>
          <section className="detail-block" id="operations">
            <h2>운영과 보안</h2>
            <div>
              <p className="disclosure-intro">
                운영에 연결한 기능의 목적과 역할을 정리했습니다. 세부 구현은
                Codex의 도움을 받았습니다.
              </p>
              <details className="project-disclosure">
                <summary>인증 보호와 사용자별 데이터 접근</summary>
                <div className="project-disclosure__body">
                  <p>
                    인증 메일의 반복 요청을 줄이기 위해 Cloudflare Turnstile과
                    요청 제한을 연결했습니다. 화면에서 입력을 받는 것에 그치지
                    않고, 서버에서 인증 정보를 확인하는 흐름을 구성했습니다.
                  </p>
                  <p>
                    개인 기록은 로그인 사용자 기준으로 조회하고, Supabase의
                    RLS를 통해 사용자별 DB 접근 범위를 제한하는 구조를
                    활용했습니다. 비밀 API 키는 브라우저가 아닌 서버 전용
                    코드에서 사용합니다.
                  </p>
                  <div className={"project-evidence"}>
                    <a
                      href={
                        "https://github.com/jonghwa3471/EOKKA/commit/5451b358eb112eb9cbdad1fc6b47759b82cda1e9"
                      }
                      target={"_blank"}
                      rel={"noreferrer"}
                    >
                      {"분석 API 요청 제한과 서버 검증 강화 커밋 ↗"}
                    </a>
                  </div>
                </div>
              </details>
              <details className="project-disclosure">
                <summary>GA4 이용 흐름 관찰과 Sentry 오류 모니터링</summary>
                <div className="project-disclosure__body">
                  <p>
                    Google Tag Manager와 GA4를 설정해 페이지 이동과 로그인·분석
                    완료 등의 이벤트를 리포트로 확인할 기반을 마련했습니다. 분석
                    도구를 연결한 것과 사용자 행동을 분석해 개선 효과를 확인한
                    것은 구분합니다.
                  </p>
                  <p>
                    Sentry는 브라우저·서버 오류를 확인하기 위해 연결했습니다.
                    배포 후 분석 요청 실패는 운영 로그와 함께 원인을 좁혀
                    해결했으며, 자세한 과정은 위의 문제 해결 사례에 담았습니다.
                  </p>
                </div>
              </details>
              <details className="project-disclosure">
                <summary>결제 연동 테스트와 무료 베타 운영</summary>
                <div className="project-disclosure__body">
                  <p>
                    Codex의 도움으로 Toss Payments의 카드 등록·구독·결제 내역
                    흐름을 구현하고 테스트했습니다. 다만 결제 도입 제약과
                    사업자·심사 준비 조건 때문에 실제 유료 운영으로 연결하지
                    않았습니다.
                  </p>
                  <p>현재 결제 진입은 비활성화하고 무료 베타로 제공합니다.</p>
                </div>
              </details>
            </div>
          </section>
          <section className={"detail-block"} id={"feedback"}>
            <h2>{"사용자 피드백과 배운 점"}</h2>
            <div>
              <h3>{"미래의 윤곽과, 꾸준히 이어갈 이유"}</h3>
              <p>
                {
                  "서비스를 완성하고 가족과 지인에게 소개해 실제로 사용해 보도록 했습니다. 주식 투자를 하는 지인은 도전과제를 달성하고 싶어 투자를 더 꾸준히 이어가고 싶은 의욕이 생겼다고 했고, 빠른 분석이 편리하다는 반응도 받았습니다."
                }
              </p>
              <figure className={"context-shot review-shot"}>
                <ZoomImage
                  src={assetPath("/projects/eokka/images/review.png")}
                  alt={
                    "EOKKA를 사용한 지인이 간편 분석이 좋고 목표를 달성하고 싶은 마음이 커졌다고 전한 실제 후기"
                  }
                />
                <figcaption>
                  {"실제 사용자가 남긴 후기 · 클릭하면 크게 보기"}
                </figcaption>
              </figure>
              <p>
                {
                  "가족들도 시나리오를 통해 앞으로의 자산 흐름을 간접적으로 살펴보며, 장기 투자를 이어갈 용기를 얻었다고 했습니다. 처음 해결하고 싶었던 불확실함에 대해 작은 답을 줄 수 있었습니다."
                }
              </p>
              <p>
                {
                  "이 피드백은 수익 개선이나 장기 행동 변화가 검증됐다는 의미는 아닙니다. 다만 "
                }
                <strong>
                  {
                    "복잡한 데이터를 이해 가능한 경험으로 바꾸는 일이 사용자의 마음과 행동 의지에 영향을 줄 수 있다"
                  }
                </strong>
                {"는 점을 배웠습니다."}
              </p>
            </div>
          </section>
          <div className={"detail-cta"}>
            <h2>{"직접 사용해 보고, 구현 기록도 살펴보세요."}</h2>
            <div className={"project-links"}>
              <a
                href={"https://eokka.qualius.co/"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                {"EOKKA 서비스 ↗"}
              </a>
              <a
                href={"https://github.com/jonghwa3471/EOKKA"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                {"GitHub ↗"}
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className={"site-footer container"}>
        <span>{"송종화 포트폴리오"}</span>
        <Link href={"/#contact"}>{"연락처"}</Link>
      </footer>
    </div>
  );
}
