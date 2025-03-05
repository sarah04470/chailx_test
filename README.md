# Chalix Coding Test (과제형)

## 📌 프로젝트 각종 정보
이 프로젝트는 천린스 코딩 테스트(과제형)의 일하로 진행되었습니다.  
주어진 디자인 및 요구사항을 기반으로 화면 및 인텍리션을 구현하며, 게시판도 포함했습니다.

## 🖠 기술 스택
- **Frontend:** React, Vite
- **Styling:** CSS Modules
- **Animation:** GSAP (ScrollTrigger)
- **State Management:** useState, useRef
- **Swiper.js** (슬라이드 UI 구현)
- **JSON 데이터 사용**

## 포맷 구성
```
📺 src
 ├ 📂 components             # UI 컴포넌트
 ┃ ├ 📂 fixed-button         # 화면 하단 고정 버튼
 ┃ ├ 📂 footer               # 푸터 컴포넌트
 ┃ ├ 📂 header               # 헤더 컴포넌트
 ┃ ┃ ├ 📄 Header.jsx         # 전체 헤더
 ┃ ┃ ├ 📄 HeaderMobile.jsx   # 모바일용 헤더
 ┃ ┃ ├ 📄 HeaderPC.jsx       # PC용 헤더
 ┃ ├ 📂 sections             # 섹션별 UI
 ┃ ┃ ├ 📄 BoardList.jsx      # 게시판 리스트
 ┃ ┃ ├ 📄 Expertise.jsx      # 전문 지식 섹션
 ┃ ┃ ├ 📄 ExpertiseMobile.jsx # 모바일 전용 전문 지식 섹션
 ┃ ┃ ├ 📄 HeroSection.jsx    # 히어로 섹션 (Swiper 적용)
 ┃ ┃ ├ 📄 MainVideo.jsx      # 메인 비디오 섹션
 ┃ ┃ ├ 📄 PlaidPattern.jsx   # 패턴 스타일 섹션
 ┃ ┃ ├ 📄 SlideImage.jsx     # 슬라이드 이미지 섹션
 ├ 📂 data                   # JSON 데이터 저장 폴더
 ┃ └ 📄 chailx.json          # 발표논문 게시판 데이터
 ├ 📂 pages                  # 페이지별 컴포넌트
 ┃ ├ 📂 board                # 게시판 페이지 폴더
 ┃ ┃ ├ 📄 Presentation.jsx   # 게시판 페이지
 ┃ └ 📄 Home.jsx             # 홈 페이지
 ├ 📂 styles                 # CSS Modules (스타일링)
 ├ 📄 App.jsx                # 전체 라우팅 및 페이지 설정
 ├ 📄 main.jsx               # React 엔트리 파일
 ├ 📄 .gitignore             # Git 무시 파일 목록
 ├ 📄 .prettierrc            # 코드 스타일 규칙
```

## 📦 사용된 주요 라이브러리

### ✅ 개발 필수 라이브러리

| 라이브러리          | 버전   |
| ------------------- | ------ |
| `react`             | 19.0.0 |
| `react-dom`         | 19.0.0 |
| `react-router-dom`  | 7.2.0  |
| `vite`              | 6.2.0  |
| `gsap`              | 3.12.7 |
| `swiper`            | 11.2.4 |
| `split-type`        | 0.3.4  |

### ✅ 개발 도구 & Linter

| 도구 / 라이브러리    | 버전   |
| -------------------- | ------ |
| `eslint`             | 9.21.0 |
| `prettier`           | 3.5.2  |
| `eslint-config-prettier` | 10.0.1 |

## 🔧 개발 환경

| 도구      | 버전    |
| --------- | ------- |
| `Node.js` | 20.0.0  |
| `Yarn`    | 1.22.19 |

## ✅ 구현한 기능
### 1. 화면 및 인터랙션 구현
- 기본적인 레이아웃 및 스타일 적용
- GSAP을 활용한 애니메이션 추가
  - `SlideImage.jsx`: 특정 이미지가 스크롤되면서 확대/축소되는 애니메이션 구현
  - `HeroSection.jsx`: Swiper 적용 및 페이지 전환 시 애니메이션 설정
  - `PlaidPattern.jsx`: 뉴스 섹션에 텍스트 애니메이션 적용

### 2. 헤더 'WHAT WE DO - 발표논문' 클릭 이벤트
- 클릭 시 `board/Presentation.jsx` 페이지로 이동
- JSON 데이터를 활용하여 게시판 리스트를 동적으로 렌더링

### 3. 발표논문 게시판
- `chailx.json`을 사용하여 게시판 목록을 보여줌


## 🚀 프로젝트 실행 방법

```bash
# 1. 패키지 설치
yarn install

# 2. 개발 서버 실행
yarn dev

# 3. 프로젝트 빌드
yarn build

# 4. 프로덕션 실행
yarn serve
```

---
