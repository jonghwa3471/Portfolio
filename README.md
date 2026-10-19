# 송종화 포트폴리오

GitHub Pages에서 별도의 빌드 없이 제공하는 정적 포트폴리오입니다.

## 주요 콘텐츠

- 대표 프로젝트 EOKKA의 제품 설계, 구조 리팩터링, 데이터·캐시, 보안과 검증
- 2023 SW중심대학 공동해커톤 Pose Pro와 후원기업상 수상 경험
- Next.js 기반 Carrot Market, React Router 기반 Wemake 학습 프로젝트
- 2022년부터 현재까지의 학습 흐름과 노마드코더 오프라인 커뮤니티 활동
- 수상 경력, 기술 블로그, GitHub 및 연락처

## 로컬 확인

```bash
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173`을 엽니다.

## GitHub Pages 배포

저장소의 기본 브랜치에 푸시하면 `.github/workflows/pages.yml`이 정적 파일을 GitHub Pages에 배포합니다.

1. 저장소 이름을 `Portfolio`로 생성합니다.
2. Settings → Pages → Source에서 **GitHub Actions**를 선택합니다.
3. `main` 브랜치에 푸시합니다.

배포 주소는 `https://jonghwa3471.github.io/Portfolio/`입니다.
