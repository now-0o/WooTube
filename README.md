# :mag: WooTube 


### 1) 프로젝트 소개
>React 연습을 위해 유튜브api를 활용하여 만든 개인 프로젝트
>
>index에서 가장 인기있는 영상 리스트를 보여주고 클릭 시 해당 영상을 보여줍니다.
>
>검색 창에 검색 시 관련된 영상 및 채널을 보여주고 클릭 시 해당 영상을 볼 수 있습니다.
>
>우측 상단에 아이콘을 이용해 다크모드를 사용할 수 있습니다.

### 2) 배포주소
- **[WooTube](https://web-wootube-nx562olf6hlia8.sel3.cloudtype.app/)** (클라우드타입) 

# :watch: 개발기간
>2023.03.09 ~ 진행 중

# :books: 시작 가이드

### 1) React
> **[React](https://ko.reactjs.org/docs/create-a-new-react-app.html)** 설치가 필요합니다.

<span style="opacity : 0.3">react-icons, react-router-dom, axios 사용</span>
```
$ npm i
$ npm start
```

### 2) API

> **[유튜브 API](https://developers.google.com/youtube/v3?hl=ko)** 를 사용하기 위해 환경 변수로 다음과 같은 API KEY가 필요합니다.
```
// .env

REACT_APP_GOOGLE_KEY = "";
```
# :computer: 페이지 구성 
| 메인 페이지 |
|---|
|<img src="https://user-images.githubusercontent.com/117905287/228240853-ff6bb029-307f-40d8-a21c-d4c20b597e18.png">|
|<img src="https://user-images.githubusercontent.com/117905287/228241332-cd5c4654-9447-457e-bcce-9dcf9317b9a5.png">|

| 검색 페이지 |
|---|
|<img src="https://user-images.githubusercontent.com/117905287/228242847-dedb2f42-29f1-45f9-8dcf-db8aee0c0504.png">|

| 영상 시청 페이지 |
|---|
|<img src="https://user-images.githubusercontent.com/117905287/228243385-d5bb4c7b-c599-4993-a6ea-2b01be60d75f.png">|

# :bulb: 주요 기능
### 1) 한국 인기 영상 목록 확인 및 시청
* 인기 영상의 썸네일, 업로드 채널, 조회수, 업로드 날짜 확인이 가능합니다.
* 클릭 시 해당 영상 시청 페이지로 이동합니다.
* 업로드 채널의 프로필 이미지도 표시 할 예정입니다.
### 2) 검색 시 검색 관련 영상 및 채널 표시
* 검색 관련 영상의 썸네일, 업로드 채널, 업로드 날짜, 영상 설명 확인이 가능합니다.
* 클릭 시 해당 영상 시청 페이지로 이동합니다.
### 3) 영상 클릭 시 해당 영상 시청 페이지로 이동해 시청이 가능합니다.
* 시청 페이지에서는 영상 플레이어, 영상 제목, 조회수, 자세한 영상 설명 확인이 가능합니다.
* 인기 영상 시청 시 우측에 인기 영상 목록을 보여주고 검색 영상 시청 시 검색 관련 영상 목록을 보여줍니다.
### 4) 다크모드를 지원합니다.
* 우측 상단 아이콘을 클릭하여 다크모드를 사용 할 수 있습니다.

# :wrench: 진행하며
React를 배우고 활용하기 위해 만든 유튜브 페이지입니다. 이전 프로젝트의 경험을 생각하며 class 명이나 구조들을 더 보기 좋게 만들 수 있을지 고민하여 제작해보았습니다. 개인 프로젝트를 진행하니 단순히 구글링으로 찾아보는 것보다 기억에도 잘 남으며 즐거움도 크다는 것을 또 한번 느끼게 되었고 팀 프로젝트도 진행하고픈 욕심이 생겼습니다.
하지만 React를 사용하는 과정에서 아직 이 프레임 워크를 능숙하게 다루지 못하는 것도 느끼게 되었습니다. React의 Hook 기능을 편하게 다룰 수 있게 더 공부가 필요한 것 같습니다.

# :page_facing_up: 기술 스택
<img src="https://img.shields.io/badge/html5-1572B6?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-E34F26?style=for-the-badge&logo=css&logoColor=white"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
