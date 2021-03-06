# 개요

본 게임은 1차원의 간단한 게임을 구현한 것으로 주어진 시간 안에 당근을 모두 없애야 한다.

# 프로그램 설명서

### 1. 메인 화면

- 첫 시작 화면에는 게임 재생 버튼만 보이게 되어있다.

![캡처 1](https://user-images.githubusercontent.com/63761624/113818443-bb765780-97b2-11eb-8626-8cf0d803a0c8.PNG)

### 2. 게임 시작 화면

- 게임 재생 버튼을 누르면 게임 필드 내에 지정된 당근과 벌레가 각각 랜덤으로 배치되어 나타난다.

- 동시에 시작버튼은 일시정지 버튼으로 바뀌어 보여지고, 타이머와 게임 스코어를 보여주는 보드가 나타난다.

![캡처 2](https://user-images.githubusercontent.com/63761624/113818775-43f4f800-97b3-11eb-9ad4-4fb009e1f886.PNG)

### 3. 결과 화면

- 시간초과

  시간이 초과되면 'YOU LOSE...' 메세지와 함께 리플레이 버튼이 있는 팝업창이 뜬다.

![캡처 3](https://user-images.githubusercontent.com/63761624/113819589-79e6ac00-97b4-11eb-9302-0b44b24523de.PNG)

- 승리

  주어진 시간 안에 필드에 있는 당근을 모두 제거하면 'YOU WIN!' 메세지와 함께 리플레이 버튼이 있는 팝업창이 뜬다.

![캡처 4](https://user-images.githubusercontent.com/63761624/113819682-9a166b00-97b4-11eb-82f8-f22fdb248e89.PNG)

- 패배

  실수로 벌레를 클릭했을 때 'YOU LOSE...' 메세지와 함께 리플레이 버튼이 있는 팝업창이 뜬다.

![캡처 5](https://user-images.githubusercontent.com/63761624/113819724-ae5a6800-97b4-11eb-93ab-2875d50a8a3d.PNG)

- 정지 버튼을 눌렀을 때

  게임이 시작하고 화면 상단에 있는 정지 버튼을 눌렀을 때 'REPLAY?' 메세지와 함께 리플레이 버튼이 있는 팝업창이 뜬다.

![캡처 6](https://user-images.githubusercontent.com/63761624/113819760-b9ad9380-97b4-11eb-8833-cfb325703a26.PNG)

- console

  시간초과, 승리, 패배, 정지 등의 결과에 따라 콘솔에는 각각 lose, win, lose, cancel이 뜬다.

  ![캡처 7](https://user-images.githubusercontent.com/63761624/113819854-dba71600-97b4-11eb-81e0-41e726ad5f8b.PNG)

---

# 사용 기술

### 언어

- HTML5
- CSS3
- JavaScript

### 작업 툴

- Visual Studio Code

# Point Of Interest

### 1. 타입 정의

#### 원인

- 자바스크립트는 동적 언어의 특성상 타입이 보장되지 않기 때문에 타입스크립트나 정적 언어에서처럼 타입을 정의하여 사용하지 못한다.

- 그래서 사용자가 클릭한 것이 당근인지 벌레인지에 따라 발생하는 결과를 코드로 작성하면서 'carrot', 'bug'와 같은 string 타입을 일일이 문자열로 입력해줘야했다.

![캡처 11-1](https://user-images.githubusercontent.com/63761624/113830165-49f1d580-97c1-11eb-8e38-8ff7e9fecf1a.png)

#### 과정

- 리팩토리 과정에서 아래 코드와 같이 변수를 선언할 때 Object.freeze 매서드를 이용하여 사용하고자 하는 값을 배열로 정의해주었다.

![캡처 8](https://user-images.githubusercontent.com/63761624/113827452-47da4780-97be-11eb-9ae8-9c62599ed2d6.PNG)

![캡처 7](https://user-images.githubusercontent.com/63761624/113827502-588abd80-97be-11eb-99b2-7726c1a34168.PNG)

#### 해결방법 및 결과

- Object.freeze 매서드를 이용하여 값을 정의한 변수를 필요한 js파일에 불러와서 입력해주었다.

- 이와 같이 정의한 변수의 키를 사용하게 되면서 직접 문자열 타입을 쓸 때 생길 수 있는 오류에 대해 예방할 수 있고, 이후 코드를 수정할 경우 선언한 변수에서 직접 값만 변경해주면 되므로 코드의 번거로움 역시 줄일 수 있다.

![캡처 9-1](https://user-images.githubusercontent.com/63761624/113830699-d603fd00-97c1-11eb-92be-bae0e40deb1b.png)

![캡처 10-1](https://user-images.githubusercontent.com/63761624/113831642-c9cc6f80-97c2-11eb-90fb-cb7938146e2f.png)

### 2. 웹 서버 연결

#### 문제

- HTML에서 나눠 놓은 섹션을 토대로 각각의 섹션과 필요한 기능에 따라 이해하기 쉽도록 js 파일로 나눠서 리팩토링 하였다.

- 그리고 JavaScipt ES6 에서 파일을 서로 import 할 수 있도록 html 파일에서 해당 스크립트에 type = "module"을 추가하였지만 import하는 과정에 에러가 생겼다.

#### 원인

- 해당 js 파일의 script에 type = "module"을 추가하면 자바스크립트 모듈 보안 요구사항으로 인해 로컬에서 실행할 때 오류가 발생한다.
- 로컬 시스템에서 로컬 파일의 리소스를 요청 할 때 origin이 null로 넘어가서 CORS 에러가 발생한다. 브라우저는 웹에서 로컬 파일에 접근을 하지 못하도록 이 같은 방법을 사용한다.

#### 해결방법

- 1. 터미널에서 http-server를 설치하고 실행하여 해당하는 폴더를 서버에 올리고 나타나는 포트로 접속하면 된다.

- 2. **(내가 사용한 방법)** 구글 크롬을 쓰고 있어서 크롬 앱스토어 (https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=ko)에 들어가서 앱을 설치하고 실행시켜준다. 해당 폴더를 선택해주고 나타나는 포트로 접속하였다.

- 3. 루트 디렉토리에 있는 pacakge.json 파일에서 “type” : “module” 추가Permalink

#### 결과

- 콘솔에 해당 에러가 사라지고 정상적으로 접속이 가능한 것이 보여진다.
