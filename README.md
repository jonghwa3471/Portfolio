# 송종화 포트폴리오

기존 디자인과 콘텐츠를 유지한 **Next.js App Router + React + TypeScript** 포트폴리오입니다. `output: 'export'`로 빌드 시 HTML을 생성하므로 GitHub Pages에서 별도 애플리케이션 서버 없이 제공합니다.

## 실행과 검사

Node.js 24를 권장합니다.

```bash
npm ci
npm run dev
npm test
npm run typecheck
npm run build
```

로컬 주소: `http://localhost:4173/`. 빌드 결과는 `out/`에 생성됩니다.

## 수정할 파일

- `src/app/`: 페이지 경로, 공통 레이아웃과 페이지별 메타데이터
- `src/content/home.tsx`: 홈의 소개·기술·활동 콘텐츠
- `src/content/eokka.tsx`: EOKKA의 사례 설명과 서비스 화면
- `src/content/portfolio.json`: 학습 프로젝트 74개 데이터(학습 목록에서는 EOKKA 제외)
- `src/content/learning.json`: 대표 학습 흐름과 하이라이트 카드
- `src/components/`: 헤더, 검색·보기 전환, 카드, 학습 상세와 공통 이미지 모달
- `src/lib/journey-query.ts`: 검색·날짜 정렬 로직
- `styles.css`: 기존 디자인 스타일
- `src/app/migration.css`: Next.js 전환에 필요한 보완 스타일

콘텐츠는 Server Component에서 정적 렌더링하고, 검색·보기 전환·메뉴 활성화·모달만 Client Component에서 처리합니다. 기존 `innerHTML` 기반 화면 생성이나 전역 스크립트는 새 앱에서 실행하지 않습니다. 이미지 모달과 검색은 React 상태로 관리하며 전역 상태 관리 라이브러리는 추가하지 않았습니다.

학습 상세 주소는 `/journey/carrot/`처럼 프로젝트별로 생성됩니다. 기존 `/journey/detail.html?id=carrot` 링크도 Next.js의 호환 페이지가 새 주소로 연결합니다. 사용하지 않는 구형 HTML·JS는 제거했으며, **콘텐츠와 화면은 `src/`를 수정**합니다. Python 정적 서버 대신 `npm run dev`로 새 앱을 실행하세요. 전환 전 원본은 Git 이력에서 복구할 수 있습니다.

이미지 원본은 기존 `assets/`, `photos/`, `profile/`, `journey/images/`, `projects/eokka/images/`에 둡니다. `predev`·`prebuild`에서 참조하는 이미지만 `public/`에 복사합니다. 생성된 `public/`, `.next/`, `out/`은 커밋하지 않습니다.

## GitHub Pages 배포

`.github/workflows/pages.yml`은 의존성 설치 → 테스트 → Next.js 빌드 → `out/` 배포 순서로 실행합니다. `main`에 푸시하면 배포되므로, 로컬 검토 단계에서는 푸시하지 않습니다.

배포 빌드에는 `NEXT_PUBLIC_BASE_PATH=/Portfolio`를 지정합니다. 이 설정으로 내부 링크·스크립트·이미지 경로에 저장소 경로가 반영됩니다. 정적 내보내기이므로 Server Actions, 요청 시점 SSR, 기본 서버 이미지 최적화는 사용하지 않습니다.

배포 주소: `https://jonghwa3471.github.io/Portfolio/`
