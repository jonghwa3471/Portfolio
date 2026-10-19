# 송종화 포트폴리오

GitHub Pages에서 별도의 빌드 없이 제공하는 정적 포트폴리오입니다.

## 사이트 구성

- `index.html`: 기술 스택, 대표 프로젝트, 필터 가능한 학습 여정, 활동, 연락처
- `projects/eokka/`: EOKKA를 만든 계기, 기술 선택, 문제 해결과 화면 갤러리
- `journey/detail.html`: 학습 프로젝트별 목적, 기간, 배운 내용과 어려웠던 부분
- `data.js`: 메인 카드와 학습 프로젝트 상세 페이지가 함께 사용하는 데이터
- `projects/eokka/images/`: 추후 추가할 EOKKA 화면 이미지 폴더

전체 디자인은 검정과 회색을 중심으로 앨범 아트에서 착안한 선명한 포인트 컬러와 기하학적 구성을 사용합니다.

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
