# 학습 여정 자료 확인 기록

## 2026-10-23 커리큘럼 대조·내용 편집

- 노마드코더 공식 강의 소개·공개 커리큘럼 26개를 열어 주제와 섹션 목록을 대조했습니다. 로그인된 강의 페이지에서는 당근마켓의 상세 목차도 확인했습니다. 강의 영상을 전부 재시청한 것은 아닙니다.
- 현재 학습 목록 73개 중 관련 강의를 연결할 수 있는 69개에 강의 링크를 붙였습니다. CSS 반복 실습은 같은 강의로 묶되 각 저장소의 기존 레이아웃 학습 내용은 유지했습니다.
- 알고리즘·Java·북클럽·Avante N은 강의 출처를 확정하지 않아 연결하지 않았습니다. EOKKA는 학습 여정에서 제외한 기존 결정을 유지합니다.
- 현재 커리큘럼이 수강 당시 버전과 같다고 가정하지 않습니다. Next12/14, React 클래스/함수, CSS 구·신 버전의 기존 기록을 유지합니다. 강의에 있다고 프로젝트의 모든 기능을 완성했다고 표시하지 않습니다.
- 강의 출처는 학습 맥락이고, 구현 근거는 저장소입니다. 기존 저장소별 조사 기록을 바탕으로 정리했으며, 이번에는 아래 파일을 추가로 확인했습니다.

| 프로젝트 | 추가로 확인한 구현 | 편집 방향 |
| --- | --- | --- |
| Wemake | 제품 등록·로그인 페이지의 loader/action, Zod, actionData, useNavigation, Storage | 서버 데이터와 폼 UX를 중심으로 보강 |
| 유튜브 | commentSection.js의 201 응답 확인·DOM 추가 | 플레이어·비동기 댓글을 앞세우고 학습 9→6개, 회고 10→5개로 축약 |
| 투두리스트 | weather.js의 위치 요청·실패 콜백·날씨 fetch | 외부 API와 실패 안내를 구체화, 중복 설명 축약 |
| Netflix | Home.tsx의 query key·isLoading·AnimatePresence·layoutId | 로딩 상태와 화면 전환의 연결을 구체화 |
| Custom Hooks | useScroll의 useEffect 정리 함수 | 이벤트 등록뿐 아니라 리스너 해제도 명시 |
| GraphQL 영화 앱 | Movies.jsx의 useQuery·loading | 쿼리와 대기 UI 연결을 명시 |
| Nwitter 기초 | App.tsx의 authStateReady·ProtectedRoute | 인증 초기화 전후 화면 분기를 구체화 |
| Zoom | server.js의 room·offer/answer/ice 전달 | Socket.IO의 시그널링 역할을 명시 |
| Next14 영화 앱 | 비동기 HomePage의 fetch | 기존 서버 렌더링 학습 설명 유지 |

- 카카오톡·투두리스트의 입문 계기, 유튜브의 오류 기록·DB 이미지, Trello의 계산된 속성명에 대한 감상은 보존합니다. 새로운 개인 감정이나 성능 개선 수치는 만들지 않습니다.
- 긴 구현 근거 파일 목록은 접힌 영역으로 제공해 본문의 읽기 흐름을 줄입니다. 기존 블로그 링크는 유지합니다.

### 확인한 공식 강의 페이지

코코아톡, JavaScript 입문, 유튜브, React 마스터클래스, Maker, CSS Layout, ES6, 그림 앱, React 영화 앱, React Native 101/마스터클래스, Hooks, Redux, Gulp, TypeScript, GraphQL 서버/클라이언트, Python 스크래퍼, Selenium, 데이터 시각화, Nwitter, Zoom, Next.js 입문, 당근마켓, Fullstack GPT, SQL. 각 URL과 프로젝트 연결은 data.js 하단의 courses 목록에 기록했습니다.

확인일: 2026-10-22

## 범위와 표시 원칙

- GitHub 저장소 80개 중 공개 학습·개인 프로젝트 74개를 수록했습니다. capstone2는 사용자 요청으로 표시 목록과 통계에서 제외했습니다.
- 포트폴리오 자체·프로필 저장소·자동화용 포크 2개·비공개 저장소는 수록하지 않았습니다.
- 각 저장소의 README(있는 경우), package.json/requirements.txt(있는 경우), 파일 구조와 주요 소스 파일을 확인했습니다.
- 의존성에 남아 있지만 화면 구현에서 사용 여부가 확인되지 않은 기술은 핵심 React 프로젝트의 태그에서 제외했습니다. 예: Netflix 저장소의 Recoil·Drag & Drop.
- 전체 코드를 감사하거나 모든 저장소의 빌드·기능 테스트를 완료했다는 의미는 아닙니다.
- 생성일은 GitHub createdAt, 마지막 커밋은 기본 브랜치 HEAD의 committedDate입니다. 연속 개발 기간이나 강의 수강 기간으로 해석하지 않습니다.
- 커밋 수는 확인 당시 기본 브랜치 history.totalCount입니다.
- 학습 챌린지·클론과 독자 기획 서비스는 구분합니다. 개인적인 어려움·성능 수치·미확인 성과를 추측해 적지 않았습니다.
- 블로그 sitemap의 공개 글 191개에서 제목·요약을 대조했습니다. 실제 회고 글과 관련 기술 개념 정리 글을 구분했습니다.
- 관련 글이 확인되지 않은 항목에는 블로그 링크를 억지로 추가하지 않았습니다.
- 개인정보나 비공개 저장소의 내용을 포트폴리오 데이터로 복사하지 않았습니다.

## 실행·화면 확인

- 직접 실행 확인·캡처: Next 챌린지 1의 목록, Next 챌린지 2의 로그인, Carrot Market Next14의 시작 화면.
- 로컬 실행 확인·캡처: Paintbox, Museum. 임시 체크아웃의 SCSS를 Sass로 컴파일했습니다. Museum은 로컬 실행용으로 SCSS 링크를 컴파일한 CSS 링크로만 변경했습니다.
- 그 외 등록 화면은 각 저장소에 기존 등록된 preview 이미지에서 가져왔습니다. 현재 서비스 실행 화면이라는 의미는 아닙니다.
- Trello는 초기 빈 보드 화면을 실행 불가로 잘못 판단했던 내용을 정정했습니다. 배포 앱에서 보드 추가·카드 이동·할 일 수정·중복 보드명 오류 안내를 확인했고, 해당 화면 4개를 캡처해 실행 링크와 함께 표시합니다. 기능 확인에는 별도의 시연용 데이터를 사용했습니다.
- Wemake 배포는 DEPLOYMENT_PAUSED(503)여서 실행 링크·화면을 제외했습니다.
- 모바일 앱은 네이티브 SDK·기기 환경이 필요하므로 실행을 완료했다거나 웹에서 동작한다고 표시하지 않았습니다.
- GraphQL 영화 클라이언트는 localhost:4000 서버가 필요한 점을 표시했습니다.
- 이미지마다 원래 출처를 data.js에 남겼고 상세 페이지에 표시합니다. PNG 화면은 최대 1600px JPEG로 최적화했습니다.

## 저장소별 확인

| 저장소 | 주요 학습 분야 | 생성일 | 마지막 커밋 | 확인한 소스 |
| --- | --- | --- | --- | --- |
| [EOKKA](https://github.com/jonghwa3471/EOKKA) | React Router | 2026-07-24 | 2026-10-17 | [app/routes.ts](https://github.com/jonghwa3471/EOKKA/blob/master/app/routes.ts), [app/debug/analytics.tsx](https://github.com/jonghwa3471/EOKKA/blob/master/app/debug/analytics.tsx) |
| [Fullstack-GPT](https://github.com/jonghwa3471/Fullstack-GPT) | Python · AI | 2026-08-14 | 2026-10-12 | [Home.py](https://github.com/jonghwa3471/Fullstack-GPT/blob/master/Home.py), [pages/01_DocumentGPT.py](https://github.com/jonghwa3471/Fullstack-GPT/blob/master/pages/01_DocumentGPT.py) |
| [wemake](https://github.com/jonghwa3471/wemake) | React Router | 2026-04-23 | 2026-07-23 | [app/routes.ts](https://github.com/jonghwa3471/wemake/blob/master/app/routes.ts), [app/db.ts](https://github.com/jonghwa3471/wemake/blob/master/app/db.ts) |
| [data-visualization](https://github.com/jonghwa3471/data-visualization) | Python · AI | 2026-04-17 | 2026-04-23 | [main.py](https://github.com/jonghwa3471/data-visualization/blob/master/main.py), [builders.py](https://github.com/jonghwa3471/data-visualization/blob/master/builders.py) |
| [seleniumpro](https://github.com/jonghwa3471/seleniumpro) | Python · AI | 2026-04-06 | 2026-04-17 | [google.py](https://github.com/jonghwa3471/seleniumpro/blob/master/google.py), [instamining.py](https://github.com/jonghwa3471/seleniumpro/blob/master/instamining.py) |
| [SQL-masterclass](https://github.com/jonghwa3471/SQL-masterclass) | 데이터 · 백엔드 | 2026-04-09 | 2026-04-14 | [main.py](https://github.com/jonghwa3471/SQL-masterclass/blob/master/main.py), [drizzle.config.ts](https://github.com/jonghwa3471/SQL-masterclass/blob/master/drizzle.config.ts) |
| [dynamic-scrapper](https://github.com/jonghwa3471/dynamic-scrapper) | Python · AI | 2026-03-13 | 2026-03-26 | [main.py](https://github.com/jonghwa3471/dynamic-scrapper/blob/master/main.py), [build/index.html](https://github.com/jonghwa3471/dynamic-scrapper/blob/master/build/index.html) |
| [social-coin](https://github.com/jonghwa3471/social-coin) | React Native | 2026-02-25 | 2026-02-26 | [App.tsx](https://github.com/jonghwa3471/social-coin/blob/master/App.tsx), [screens/Home.tsx](https://github.com/jonghwa3471/social-coin/blob/master/screens/Home.tsx) |
| [nomad-diary](https://github.com/jonghwa3471/nomad-diary) | React Native | 2026-02-22 | 2026-02-25 | [app/index.tsx](https://github.com/jonghwa3471/nomad-diary/blob/master/app/index.tsx), [screens/Home.tsx](https://github.com/jonghwa3471/nomad-diary/blob/master/screens/Home.tsx) |
| [langApp](https://github.com/jonghwa3471/langApp) | React Native | 2026-02-11 | 2026-02-13 | [App.tsx](https://github.com/jonghwa3471/langApp/blob/master/App.tsx), [icons.ts](https://github.com/jonghwa3471/langApp/blob/master/icons.ts) |
| [noovies](https://github.com/jonghwa3471/noovies) | React Native | 2026-01-20 | 2026-02-10 | [app/index.tsx](https://github.com/jonghwa3471/noovies/blob/master/app/index.tsx), [api.ts](https://github.com/jonghwa3471/noovies/blob/master/api.ts) |
| [WorkHardTravelHardApp](https://github.com/jonghwa3471/WorkHardTravelHardApp) | React Native | 2026-01-19 | 2026-01-20 | [App.js](https://github.com/jonghwa3471/WorkHardTravelHardApp/blob/master/App.js), [colors.js](https://github.com/jonghwa3471/WorkHardTravelHardApp/blob/master/colors.js) |
| [Learning-React-Native](https://github.com/jonghwa3471/Learning-React-Native) | React Native | 2026-01-12 | 2026-01-16 | [App.js](https://github.com/jonghwa3471/Learning-React-Native/blob/master/App.js), [index.js](https://github.com/jonghwa3471/Learning-React-Native/blob/master/index.js) |
| [next-challenge-2](https://github.com/jonghwa3471/next-challenge-2) | Next.js | 2025-12-31 | 2026-01-15 | [app/(private)/page.tsx](https://github.com/jonghwa3471/next-challenge-2/blob/master/app/(private)/page.tsx), [app/(private)/actions.ts](https://github.com/jonghwa3471/next-challenge-2/blob/master/app/(private)/actions.ts) |
| [Movie-App-with-GraphQL](https://github.com/jonghwa3471/Movie-App-with-GraphQL) | React | 2026-01-07 | 2026-01-07 | [src/App.js](https://github.com/jonghwa3471/Movie-App-with-GraphQL/blob/master/src/App.js), [public/index.html](https://github.com/jonghwa3471/Movie-App-with-GraphQL/blob/master/public/index.html) |
| [Learning-GraphQL](https://github.com/jonghwa3471/Learning-GraphQL) | 데이터 · 백엔드 | 2026-01-04 | 2026-01-06 | [server.js](https://github.com/jonghwa3471/Learning-GraphQL/blob/master/server.js) |
| [cloudflare-workers](https://github.com/jonghwa3471/cloudflare-workers) | 데이터 · 백엔드 | 2025-12-24 | 2025-12-29 | [src/index.ts](https://github.com/jonghwa3471/cloudflare-workers/blob/master/src/index.ts), [src/home.html](https://github.com/jonghwa3471/cloudflare-workers/blob/master/src/home.html) |
| [next-challenge-1](https://github.com/jonghwa3471/next-challenge-1) | Next.js | 2025-12-26 | 2025-12-26 | [app/(home)/page.tsx](https://github.com/jonghwa3471/next-challenge-1/blob/master/app/(home)/page.tsx), [app/(home)/loading.tsx](https://github.com/jonghwa3471/next-challenge-1/blob/master/app/(home)/loading.tsx) |
| [carrot-market-next14](https://github.com/jonghwa3471/carrot-market-next14) | Next.js | 2025-09-03 | 2025-12-23 | [app/(auth)/page.tsx](https://github.com/jonghwa3471/carrot-market-next14/blob/master/app/(auth)/page.tsx), [app/add/page.tsx](https://github.com/jonghwa3471/carrot-market-next14/blob/master/app/add/page.tsx) |
| [coding-test](https://github.com/jonghwa3471/coding-test) | CS · 기초 | 2025-01-06 | 2025-11-21 | 문제별 디렉터리와 README |
| [carrot-market-next12](https://github.com/jonghwa3471/carrot-market-next12) | Next.js | 2025-05-06 | 2025-08-28 | [pages/blog/index.tsx](https://github.com/jonghwa3471/carrot-market-next12/blob/master/pages/blog/index.tsx), [pages/chats/index.tsx](https://github.com/jonghwa3471/carrot-market-next12/blob/master/pages/chats/index.tsx) |
| [nwitter-challenge-firebase](https://github.com/jonghwa3471/nwitter-challenge-firebase) | React | 2025-06-10 | 2025-06-18 | [index.html](https://github.com/jonghwa3471/nwitter-challenge-firebase/blob/master/index.html), [src/App.tsx](https://github.com/jonghwa3471/nwitter-challenge-firebase/blob/master/src/App.tsx) |
| [capstone2](https://github.com/jonghwa3471/capstone2) | 데이터 · 백엔드 | 2025-03-24 | 2025-06-04 | [src/controllers/userController.js](https://github.com/jonghwa3471/capstone2/blob/master/src/controllers/userController.js), [src/controllers/videoController.js](https://github.com/jonghwa3471/capstone2/blob/master/src/controllers/videoController.js) |
| [study-java-for-oop](https://github.com/jonghwa3471/study-java-for-oop) | CS · 기초 | 2025-03-14 | 2025-05-23 | [src/ex1/App.java](https://github.com/jonghwa3471/study-java-for-oop/blob/master/src/ex1/App.java), [src/ex1/Ramyon.java](https://github.com/jonghwa3471/study-java-for-oop/blob/master/src/ex1/Ramyon.java) |
| [js-challenge-wetube](https://github.com/jonghwa3471/js-challenge-wetube) | 데이터 · 백엔드 | 2024-04-15 | 2025-05-12 | [src/controllers/userController.js](https://github.com/jonghwa3471/js-challenge-wetube/blob/master/src/controllers/userController.js), [src/controllers/videoController.js](https://github.com/jonghwa3471/js-challenge-wetube/blob/master/src/controllers/videoController.js) |
| [study-firebase-nwitter](https://github.com/jonghwa3471/study-firebase-nwitter) | React | 2025-04-17 | 2025-04-29 | [index.html](https://github.com/jonghwa3471/study-firebase-nwitter/blob/master/index.html), [src/App.tsx](https://github.com/jonghwa3471/study-firebase-nwitter/blob/master/src/App.tsx) |
| [study-vanilla-redux](https://github.com/jonghwa3471/study-vanilla-redux) | React | 2025-04-10 | 2025-04-15 | [src/store.js](https://github.com/jonghwa3471/study-vanilla-redux/blob/master/src/store.js), [public/index.html](https://github.com/jonghwa3471/study-vanilla-redux/blob/master/public/index.html) |
| [study-react-hooks](https://github.com/jonghwa3471/study-react-hooks) | React | 2025-04-07 | 2025-04-08 | [useAxios/index.js](https://github.com/jonghwa3471/study-react-hooks/blob/master/useAxios/index.js), [useBeforeLeave/index.js](https://github.com/jonghwa3471/study-react-hooks/blob/master/useBeforeLeave/index.js) |
| [study-next-v14](https://github.com/jonghwa3471/study-next-v14) | Next.js | 2025-03-20 | 2025-04-04 | [app/(home)/page.tsx](https://github.com/jonghwa3471/study-next-v14/blob/master/app/(home)/page.tsx), [app/about-us/page.tsx](https://github.com/jonghwa3471/study-next-v14/blob/master/app/about-us/page.tsx) |
| [study-next-v12](https://github.com/jonghwa3471/study-next-v12) | Next.js | 2025-02-27 | 2025-03-20 | [pages/index.js](https://github.com/jonghwa3471/study-next-v12/blob/master/pages/index.js), [components/Layout.js](https://github.com/jonghwa3471/study-next-v12/blob/master/components/Layout.js) |
| [study-gatsby-DevStickers-clone](https://github.com/jonghwa3471/study-gatsby-DevStickers-clone) | React | 2024-08-15 | 2025-02-08 | [src/pages/index.tsx](https://github.com/jonghwa3471/study-gatsby-DevStickers-clone/blob/master/src/pages/index.tsx), [gatsby-browser.ts](https://github.com/jonghwa3471/study-gatsby-DevStickers-clone/blob/master/gatsby-browser.ts) |
| [study-react-netflix-clone](https://github.com/jonghwa3471/study-react-netflix-clone) | React | 2024-04-08 | 2025-02-01 | [src/App.tsx](https://github.com/jonghwa3471/study-react-netflix-clone/blob/master/src/App.tsx), [public/index.html](https://github.com/jonghwa3471/study-react-netflix-clone/blob/master/public/index.html) |
| [study-react-movie-app-clone-2019](https://github.com/jonghwa3471/study-react-movie-app-clone-2019) | React | 2024-03-31 | 2024-12-18 | [src/App.js](https://github.com/jonghwa3471/study-react-movie-app-clone-2019/blob/master/src/App.js), [public/index.html](https://github.com/jonghwa3471/study-react-movie-app-clone-2019/blob/master/public/index.html) |
| [study-react-movie-app-clone](https://github.com/jonghwa3471/study-react-movie-app-clone) | React | 2024-03-19 | 2024-12-18 | [src/App.js](https://github.com/jonghwa3471/study-react-movie-app-clone/blob/master/src/App.js), [public/index.html](https://github.com/jonghwa3471/study-react-movie-app-clone/blob/master/public/index.html) |
| [kakao-challenge-2024-recap](https://github.com/jonghwa3471/kakao-challenge-2024-recap) | HTML · CSS | 2024-11-30 | 2024-12-01 | [index.html](https://github.com/jonghwa3471/kakao-challenge-2024-recap/blob/master/index.html), [pages/chat.html](https://github.com/jonghwa3471/kakao-challenge-2024-recap/blob/master/pages/chat.html) |
| [study-ts-blockchain](https://github.com/jonghwa3471/study-ts-blockchain) | JavaScript · TypeScript | 2024-11-22 | 2024-11-29 | [src/index.ts](https://github.com/jonghwa3471/study-ts-blockchain/blob/master/src/index.ts) |
| [study-js-es6](https://github.com/jonghwa3471/study-js-es6) | JavaScript · TypeScript | 2024-10-14 | 2024-11-08 | [index.html](https://github.com/jonghwa3471/study-js-es6/blob/master/index.html), [es2020/ObjectMethods.js](https://github.com/jonghwa3471/study-js-es6/blob/master/es2020/ObjectMethods.js) |
| [study-js-zoom-clone](https://github.com/jonghwa3471/study-js-zoom-clone) | 데이터 · 백엔드 | 2024-09-20 | 2024-10-14 | [src/server.js](https://github.com/jonghwa3471/study-js-zoom-clone/blob/master/src/server.js) |
| [study-gulp](https://github.com/jonghwa3471/study-gulp) | HTML · CSS | 2023-05-11 | 2024-09-20 | [build/index.html](https://github.com/jonghwa3471/study-gulp/blob/master/build/index.html), [src/scss/style.scss](https://github.com/jonghwa3471/study-gulp/blob/master/src/scss/style.scss) |
| [study-html-kakao-clone](https://github.com/jonghwa3471/study-html-kakao-clone) | HTML · CSS | 2022-09-29 | 2024-09-20 | [index.html](https://github.com/jonghwa3471/study-html-kakao-clone/blob/main/index.html), [chat.html](https://github.com/jonghwa3471/study-html-kakao-clone/blob/main/chat.html) |
| [react-challenge-crypto-tracker](https://github.com/jonghwa3471/react-challenge-crypto-tracker) | React | 2024-09-04 | 2024-09-20 | [src/App.tsx](https://github.com/jonghwa3471/react-challenge-crypto-tracker/blob/master/src/App.tsx), [public/index.html](https://github.com/jonghwa3471/react-challenge-crypto-tracker/blob/master/public/index.html) |
| [study-js-toDoList-clone](https://github.com/jonghwa3471/study-js-toDoList-clone) | JavaScript · TypeScript | 2023-01-18 | 2024-09-20 | [index.html](https://github.com/jonghwa3471/study-js-toDoList-clone/blob/main/index.html), [js/todo.js](https://github.com/jonghwa3471/study-js-toDoList-clone/blob/main/js/todo.js) |
| [study-js-meme-maker-clone](https://github.com/jonghwa3471/study-js-meme-maker-clone) | JavaScript · TypeScript | 2024-02-12 | 2024-09-20 | [index.html](https://github.com/jonghwa3471/study-js-meme-maker-clone/blob/master/index.html), [app.js](https://github.com/jonghwa3471/study-js-meme-maker-clone/blob/master/app.js) |
| [react-coingecko-crypto-tracker](https://github.com/jonghwa3471/react-coingecko-crypto-tracker) | React | 2024-05-15 | 2024-09-20 | [public/index.html](https://github.com/jonghwa3471/react-coingecko-crypto-tracker/blob/master/public/index.html), [src/index.tsx](https://github.com/jonghwa3471/react-coingecko-crypto-tracker/blob/master/src/index.tsx) |
| [react-challenge-trello](https://github.com/jonghwa3471/react-challenge-trello) | React | 2024-07-16 | 2024-09-12 | [src/App.tsx](https://github.com/jonghwa3471/react-challenge-trello/blob/master/src/App.tsx), [public/index.html](https://github.com/jonghwa3471/react-challenge-trello/blob/master/public/index.html) |
| [react-challenge-toDoList](https://github.com/jonghwa3471/react-challenge-toDoList) | React | 2024-09-10 | 2024-09-10 | [src/App.tsx](https://github.com/jonghwa3471/react-challenge-toDoList/blob/master/src/App.tsx), [public/index.html](https://github.com/jonghwa3471/react-challenge-toDoList/blob/master/public/index.html) |
| [study-js-youtube-clone](https://github.com/jonghwa3471/study-js-youtube-clone) | 데이터 · 백엔드 | 2023-06-22 | 2024-09-07 | [src/controllers/userController.js](https://github.com/jonghwa3471/study-js-youtube-clone/blob/master/src/controllers/userController.js), [src/controllers/videoController.js](https://github.com/jonghwa3471/study-js-youtube-clone/blob/master/src/controllers/videoController.js) |
| [study-react-router-v6](https://github.com/jonghwa3471/study-react-router-v6) | React | 2024-08-12 | 2024-08-13 | [public/index.html](https://github.com/jonghwa3471/study-react-router-v6/blob/master/public/index.html), [src/index.tsx](https://github.com/jonghwa3471/study-react-router-v6/blob/master/src/index.tsx) |
| [study-react-masterclass-without-ts](https://github.com/jonghwa3471/study-react-masterclass-without-ts) | React | 2024-04-07 | 2024-04-08 | [src/App.js](https://github.com/jonghwa3471/study-react-masterclass-without-ts/blob/master/src/App.js), [public/index.html](https://github.com/jonghwa3471/study-react-masterclass-without-ts/blob/master/public/index.html) |
| [study-scss-concert-poster-clone](https://github.com/jonghwa3471/study-scss-concert-poster-clone) | HTML · CSS | 2024-03-10 | 2024-03-10 | [index.html](https://github.com/jonghwa3471/study-scss-concert-poster-clone/blob/master/index.html), [styles/style.scss](https://github.com/jonghwa3471/study-scss-concert-poster-clone/blob/master/styles/style.scss) |
| [study-scss-pixies-poster-clone](https://github.com/jonghwa3471/study-scss-pixies-poster-clone) | HTML · CSS | 2024-03-10 | 2024-03-10 | [index.html](https://github.com/jonghwa3471/study-scss-pixies-poster-clone/blob/master/index.html), [styles/style.scss](https://github.com/jonghwa3471/study-scss-pixies-poster-clone/blob/master/styles/style.scss) |
| [study-scss-error-404-clone](https://github.com/jonghwa3471/study-scss-error-404-clone) | HTML · CSS | 2024-03-09 | 2024-03-09 | [index.html](https://github.com/jonghwa3471/study-scss-error-404-clone/blob/master/index.html), [styles/style.scss](https://github.com/jonghwa3471/study-scss-error-404-clone/blob/master/styles/style.scss) |
| [study-scss-museum-clone](https://github.com/jonghwa3471/study-scss-museum-clone) | HTML · CSS | 2024-03-07 | 2024-03-07 | [index.html](https://github.com/jonghwa3471/study-scss-museum-clone/blob/master/index.html), [styles/style.scss](https://github.com/jonghwa3471/study-scss-museum-clone/blob/master/styles/style.scss) |
| [study-scss-mac-os-clone](https://github.com/jonghwa3471/study-scss-mac-os-clone) | HTML · CSS | 2024-03-06 | 2024-03-06 | [index.html](https://github.com/jonghwa3471/study-scss-mac-os-clone/blob/master/index.html), [styles/style.scss](https://github.com/jonghwa3471/study-scss-mac-os-clone/blob/master/styles/style.scss) |
| [study-scss-architect-studio-clone](https://github.com/jonghwa3471/study-scss-architect-studio-clone) | HTML · CSS | 2024-03-03 | 2024-03-05 | [index.html](https://github.com/jonghwa3471/study-scss-architect-studio-clone/blob/master/index.html), [styles/style.scss](https://github.com/jonghwa3471/study-scss-architect-studio-clone/blob/master/styles/style.scss) |
| [study-scss-design-agency-clone](https://github.com/jonghwa3471/study-scss-design-agency-clone) | HTML · CSS | 2024-03-01 | 2024-03-03 | [index.html](https://github.com/jonghwa3471/study-scss-design-agency-clone/blob/master/index.html), [styles/style.scss](https://github.com/jonghwa3471/study-scss-design-agency-clone/blob/master/styles/style.scss) |
| [study-scss-beauty-store-clone](https://github.com/jonghwa3471/study-scss-beauty-store-clone) | HTML · CSS | 2024-03-01 | 2024-03-01 | [index.html](https://github.com/jonghwa3471/study-scss-beauty-store-clone/blob/master/index.html), [styles/style.scss](https://github.com/jonghwa3471/study-scss-beauty-store-clone/blob/master/styles/style.scss) |
| [study-scss-fashion-store-clone](https://github.com/jonghwa3471/study-scss-fashion-store-clone) | HTML · CSS | 2024-02-27 | 2024-02-27 | [index.html](https://github.com/jonghwa3471/study-scss-fashion-store-clone/blob/master/index.html), [styles/styles.scss](https://github.com/jonghwa3471/study-scss-fashion-store-clone/blob/master/styles/styles.scss) |
| [study-scss-education-courses-app-clone](https://github.com/jonghwa3471/study-scss-education-courses-app-clone) | HTML · CSS | 2024-02-27 | 2024-02-27 | [index.html](https://github.com/jonghwa3471/study-scss-education-courses-app-clone/blob/master/index.html), [styles/style.scss](https://github.com/jonghwa3471/study-scss-education-courses-app-clone/blob/master/styles/style.scss) |
| [study-scss-layout-masterclass](https://github.com/jonghwa3471/study-scss-layout-masterclass) | HTML · CSS | 2024-02-19 | 2024-02-24 | [index.html](https://github.com/jonghwa3471/study-scss-layout-masterclass/blob/master/index.html), [styles/style.scss](https://github.com/jonghwa3471/study-scss-layout-masterclass/blob/master/styles/style.scss) |
| [challenge-bookclub-nomad](https://github.com/jonghwa3471/challenge-bookclub-nomad) | CS · 기초 | 2024-02-19 | 2024-02-19 | [index.html](https://github.com/jonghwa3471/challenge-bookclub-nomad/blob/master/index.html) |
| [study-gulp-recap](https://github.com/jonghwa3471/study-gulp-recap) | HTML · CSS | 2024-02-06 | 2024-02-09 | [src/scss/style.scss](https://github.com/jonghwa3471/study-gulp-recap/blob/master/src/scss/style.scss), [gulpfile.babel.js](https://github.com/jonghwa3471/study-gulp-recap/blob/master/gulpfile.babel.js) |
| [css-challenge](https://github.com/jonghwa3471/css-challenge) | HTML · CSS | 2023-05-30 | 2023-06-11 | [challenge1.html](https://github.com/jonghwa3471/css-challenge/blob/main/challenge1.html), [challenge2.html](https://github.com/jonghwa3471/css-challenge/blob/main/challenge2.html) |
| [study-scss-won-hundred-clone](https://github.com/jonghwa3471/study-scss-won-hundred-clone) | HTML · CSS | 2023-06-06 | 2023-06-06 | [index.html](https://github.com/jonghwa3471/study-scss-won-hundred-clone/blob/master/index.html), [src/scss/styles.scss](https://github.com/jonghwa3471/study-scss-won-hundred-clone/blob/master/src/scss/styles.scss) |
| [study-scss-donica-clone](https://github.com/jonghwa3471/study-scss-donica-clone) | HTML · CSS | 2023-06-06 | 2023-06-06 | [index.html](https://github.com/jonghwa3471/study-scss-donica-clone/blob/master/index.html), [src/scss/styles.scss](https://github.com/jonghwa3471/study-scss-donica-clone/blob/master/src/scss/styles.scss) |
| [personal-project-AvanteN](https://github.com/jonghwa3471/personal-project-AvanteN) | HTML · CSS | 2023-06-03 | 2023-06-03 | [index.html](https://github.com/jonghwa3471/personal-project-AvanteN/blob/main/index.html) |
| [study-scss-rodic-davidson-clone](https://github.com/jonghwa3471/study-scss-rodic-davidson-clone) | HTML · CSS | 2023-06-02 | 2023-06-03 | [index.html](https://github.com/jonghwa3471/study-scss-rodic-davidson-clone/blob/master/index.html), [src/scss/styles.scss](https://github.com/jonghwa3471/study-scss-rodic-davidson-clone/blob/master/src/scss/styles.scss) |
| [study-scss-tolv-clone](https://github.com/jonghwa3471/study-scss-tolv-clone) | HTML · CSS | 2023-05-30 | 2023-06-02 | [index.html](https://github.com/jonghwa3471/study-scss-tolv-clone/blob/master/index.html), [src/scss/styles.scss](https://github.com/jonghwa3471/study-scss-tolv-clone/blob/master/src/scss/styles.scss) |
| [study-scss-schwartz-clone](https://github.com/jonghwa3471/study-scss-schwartz-clone) | HTML · CSS | 2023-05-27 | 2023-05-28 | [index.html](https://github.com/jonghwa3471/study-scss-schwartz-clone/blob/master/index.html), [src/scss/styles.scss](https://github.com/jonghwa3471/study-scss-schwartz-clone/blob/master/src/scss/styles.scss) |
| [study-scss-zoo-clone](https://github.com/jonghwa3471/study-scss-zoo-clone) | HTML · CSS | 2023-05-26 | 2023-05-26 | [index.html](https://github.com/jonghwa3471/study-scss-zoo-clone/blob/master/index.html), [src/scss/styles.scss](https://github.com/jonghwa3471/study-scss-zoo-clone/blob/master/src/scss/styles.scss) |
| [study-scss-10x19-clone](https://github.com/jonghwa3471/study-scss-10x19-clone) | HTML · CSS | 2023-05-23 | 2023-05-26 | [index.html](https://github.com/jonghwa3471/study-scss-10x19-clone/blob/master/index.html), [src/scss/styles.scss](https://github.com/jonghwa3471/study-scss-10x19-clone/blob/master/src/scss/styles.scss) |
| [study-scss-paint-box-clone](https://github.com/jonghwa3471/study-scss-paint-box-clone) | HTML · CSS | 2023-05-22 | 2023-05-23 | [index.html](https://github.com/jonghwa3471/study-scss-paint-box-clone/blob/master/index.html), [src/scss/styles.scss](https://github.com/jonghwa3471/study-scss-paint-box-clone/blob/master/src/scss/styles.scss) |
| [study-scss-best-horror-scenes-clone](https://github.com/jonghwa3471/study-scss-best-horror-scenes-clone) | HTML · CSS | 2023-05-17 | 2023-05-22 | [index.html](https://github.com/jonghwa3471/study-scss-best-horror-scenes-clone/blob/master/index.html), [src/scss/styles.scss](https://github.com/jonghwa3471/study-scss-best-horror-scenes-clone/blob/master/src/scss/styles.scss) |
| [js-challenge](https://github.com/jonghwa3471/js-challenge) | JavaScript · TypeScript | 2023-02-28 | 2023-03-02 | [colors5.html](https://github.com/jonghwa3471/js-challenge/blob/main/colors5.html), [colors5.js](https://github.com/jonghwa3471/js-challenge/blob/main/colors5.js) |
| [html-challenge](https://github.com/jonghwa3471/html-challenge) | HTML · CSS | 2023-01-11 | 2023-01-18 | [challenge.html](https://github.com/jonghwa3471/html-challenge/blob/main/challenge.html), [challenge2.html](https://github.com/jonghwa3471/html-challenge/blob/main/challenge2.html) |

## 블로그 연결

- [Third-Party Services - Sentry](https://j2yonghwa.tistory.com/183)
- [라이브러리 - React Router v7 - useFetcher](https://j2yonghwa.tistory.com/164)
- [라이브러리 - Supabase SSR Package, Auth](https://j2yonghwa.tistory.com/161)
- [AI - LangChain RAG(Retrieval Augmented Generation)](https://j2yonghwa.tistory.com/188)
- [AI - LangChain Memory](https://j2yonghwa.tistory.com/187)
- [AI - Streamlit](https://j2yonghwa.tistory.com/178)
- [라이브러리 - React Router v7](https://j2yonghwa.tistory.com/151)
- [SQL - Supabase & Drizzle](https://j2yonghwa.tistory.com/156)
- [라이브러리 - pandas(python)](https://j2yonghwa.tistory.com/143)
- [라이브러리 - plotly(python)](https://j2yonghwa.tistory.com/144)
- [Python - Selenium](https://j2yonghwa.tistory.com/130)
- [SQL - Drizzle(ORM)](https://j2yonghwa.tistory.com/140)
- [SQL - SQL with Python](https://j2yonghwa.tistory.com/138)
- [MongoDB - MongoDB with Python](https://j2yonghwa.tistory.com/139)
- [Redis - Get Started](https://j2yonghwa.tistory.com/136)
- [라이브러리 - Flask](https://j2yonghwa.tistory.com/111)
- [라이브러리 - Playwright](https://j2yonghwa.tistory.com/110)
- [라이브러리 - BeautifulSoup](https://j2yonghwa.tistory.com/109)
- [Firebase - React Native Android Setup](https://j2yonghwa.tistory.com/107)
- [Firebase - React Native iOS Setup](https://j2yonghwa.tistory.com/106)
- [라이브러리 - Victory Native](https://j2yonghwa.tistory.com/108)
- [라이브러리  - TanStack Query(React Query)](https://j2yonghwa.tistory.com/102)
- [라이브러리 - Realm](https://j2yonghwa.tistory.com/104)
- [Third-Party Services - Google AdMob](https://j2yonghwa.tistory.com/105)
- [React Native - Animation](https://j2yonghwa.tistory.com/103)
- [React Native - React Navigation](https://j2yonghwa.tistory.com/97)
- [React Native - Dark Mode](https://j2yonghwa.tistory.com/99)
- [React Native - 기본 Layout, API](https://j2yonghwa.tistory.com/91)
- [React Native - 배포하기](https://j2yonghwa.tistory.com/94)
- [React Native - React Native 시작하기](https://j2yonghwa.tistory.com/90)
- [Next.js 14 - Server Action](https://j2yonghwa.tistory.com/78)
- [Prisma - Prisma v7 사용법](https://j2yonghwa.tistory.com/92)
- [라이브러리 - Zod](https://j2yonghwa.tistory.com/82)
- [GraphQL - GraphQL Client 시작하기](https://j2yonghwa.tistory.com/89)
- [GraphQL - GraphQL Server 시작하기](https://j2yonghwa.tistory.com/88)
- [Next.js 14 - Pages router vs App router 한 눈에 비교](https://j2yonghwa.tistory.com/87)
- [Next.js 14 - 시작하기](https://j2yonghwa.tistory.com/74)
- [Next.js 14 - useFormState(useActionState)](https://j2yonghwa.tistory.com/80)
- [Next.js 14 - useFormStatus](https://j2yonghwa.tistory.com/79)
- [[level 0] 평행 - 120875 - 프로그래머스 코딩테스트 입문](https://j2yonghwa.tistory.com/33)
- [[level 0] 저주의 숫자 3 - 120871 - 프로그래머스 코딩테스트 입문](https://j2yonghwa.tistory.com/31)
- [[level 0] 안전지대 - 120866 - 프로그래머스 코딩테스트 입문](https://j2yonghwa.tistory.com/28)
- [Next.js 12 - API Routes](https://j2yonghwa.tistory.com/46)
- [라이브러리 - SWR](https://j2yonghwa.tistory.com/62)
- [Next.js 12 - SSR + SWR](https://j2yonghwa.tistory.com/69)
- [Next.js 12 - getStaticProps, getStaticPaths](https://j2yonghwa.tistory.com/70)
- [노마드코더 - 강의 영상과 똑같이 따라 만들기 (트위터 클론코딩 챌린지)](https://j2yonghwa.tistory.com/54)
- [Firebase - query(), getDocs(), onSnapshot()을 사용해 Firestore DB에서 데이터를 가져오기](https://j2yonghwa.tistory.com/57)
- [Firebase - Firestore Database와 Storage에 document와 사진 업로드하기](https://j2yonghwa.tistory.com/56)
- [MongoDB - Mongoose](https://j2yonghwa.tistory.com/142)
- [Firebase - 이메일 & 비밀번호 로그인과 소셜 로그인(Github)](https://j2yonghwa.tistory.com/55)
- [Firebase - Rules](https://j2yonghwa.tistory.com/59)
- [Next.js 12 - getServerSideProps](https://j2yonghwa.tistory.com/37)
- [Next.js 12 - Dynamic Routes](https://j2yonghwa.tistory.com/38)
- [Next.js 12 - Layout, Head component](https://j2yonghwa.tistory.com/35)
- [Next.js 12 - public dir, API key 숨기기(redirects, rewrites)](https://j2yonghwa.tistory.com/36)
- [과제 제출율 100% 달성! 웹 기초 10주 스터디 7기 회고(25.01.22)](https://j2yonghwa.tistory.com/41)
- [TypeScript - 배열, 튜플](https://j2yonghwa.tistory.com/48)
- [라이브러리 - React Hook Form](https://j2yonghwa.tistory.com/47)

## 로컬 검증

- node --check app.js / data.js / journey/detail.js
- node --test tests/journey.test.cjs
- 브라우저에서 날짜순·기술별, 기술·연도 복합 필터, 검색의 빈 결과, 초기화, 더 보기, 상세 페이지, 이미지 모달을 확인합니다.
- 배포는 별도 요청 전까지 하지 않습니다.
