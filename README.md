# 📟 레트로 탁상 계산기 (MODEL 86-B)

클래식 기계식 계산기의 감성과 직관적인 조작감을 웹 브라우저에서 구현한 프로젝트입니다.
웹 표준 관심사 분리(SoC) 원칙에 맞춰 기능별(디자인, 뼈대, 연산, 화면 렌더링, 이벤트 조율)로 모듈화하여 구성했습니다.

---

## 📁 파일 구성과 동작 흐름

```text
calculator-project/
├── index.html        # 화면 뼈대 (UI 레이아웃)
├── style.css         # 레트로 디자인 및 입체 버튼 효과
├── calculator.js     # 순수 연산 로직 모듈 (두뇌)
├── ui.js             # 텍스트 포맷팅 및 화면 출력 모듈 (모니터)
├── main.js           # 사용자 입력 감지 및 전체 조율 (조종사)
└── README.md         # 프로젝트 안내서
```

각 모듈은 다음과 같이 협업합니다:

1. **main.js**가 버튼 클릭이나 키보드 입력을 감지합니다.
2. 입력값을 **calculator.js**로 전달해 실제 연산을 수행합니다.
3. 연산 결과를 **ui.js**가 화면에 표시할 형태로 포맷팅합니다.
4. **index.html**과 **style.css**가 이 모든 과정을 시각적으로 담아냅니다.

---

## 🚀 실행 방법

별도의 빌드나 의존성 설치 없이 웹 브라우저에서 바로 실행할 수 있습니다.

1. 본 저장소의 코드를 로컬 디렉토리에 클론하거나 다운로드합니다.
   ```bash
   git clone https://github.com/your-username/calculator-project.git
   ```
2. `index.html` 파일을 더블 클릭하거나 브라우저(Chrome, Edge, Safari 등)로 엽니다.

> ES 모듈 사용으로 인해 파일을 직접 열면 CORS 오류가 발생할 수 있습니다. 아래 "로컬 실행 도구" 섹션을 참고해 로컬 서버를 통해 실행하는 것을 권장합니다.

---

## 🛠️ 기술 사양 및 권장 버전

본 프로젝트는 별도의 패키지 설치나 빌드 과정(Webpack, Vite 등) 없이 표준 웹 기술만으로 구동되는 순수 프론트엔드 프로젝트입니다.

### 1. 언어 및 웹 표준 사양

* **HTML**: HTML5 표준 마크업 (`<!DOCTYPE html>`)
* **CSS**: CSS3 (CSS Grid, CSS Custom Properties / Variables `:root` 사용)
* **JavaScript**: ECMAScript 2015 (ES6+) 이상
  * `import` / `export` 모듈 시스템 (`type="module"`)
  * 블록 스코프 변수 (`const`, `let`), 템플릿 리터럴, 화살표 함수 등

### 2. 권장 브라우저 환경 (ES Modules 지원 브라우저)

ES6 모듈 문법을 지원하는 **Google Chrome** 최신 버전에서 실행 및 테스트되었습니다.

| 브라우저 | 권장 최소 버전 | 지원 상태 |
| :--- | :--- | :--- |
| **Google Chrome** | 61 이상 | ✅ 완전 지원 |

> ⚠️ 그 외 브라우저(Edge, Firefox, Safari, Internet Explorer 등)에서는 별도로 테스트되지 않았으므로 정상 동작을 보장하지 않습니다.

### 3. 로컬 실행 도구 (택 1)

ES 모듈의 보안 정책(CORS) 처리를 위해 아래 도구 중 하나를 사용합니다.

* **VS Code Live Server (확장 프로그램)**: v5.6 이상 권장
* **Python**: Python 3.x (`python -m http.server` 내장 모듈 사용)
* **Node.js (선택)**: v14.0 이상 (npm `serve` 또는 `live-server` 사용 시)

---

## 🤝 기여 (Contributing)

버그 제보, 기능 제안, PR은 언제든 환영합니다. 이슈를 먼저 등록해 논의한 뒤 작업해 주시면 감사하겠습니다.

## 📄 라이선스

별도 명시가 없는 한 [MIT License](LICENSE)를 따릅니다.
