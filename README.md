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
  시간이 초과되면 'YOU WIN!' 메세지와 함께 리플레이 버튼이 있는 팝업창이 뜬다.

![캡처 4](https://user-images.githubusercontent.com/63761624/113819682-9a166b00-97b4-11eb-82f8-f22fdb248e89.PNG)

- 패배  
  시간이 초과되면 'YOU LOSE...' 메세지와 함께 리플레이 버튼이 있는 팝업창이 뜬다.

![캡처 5](https://user-images.githubusercontent.com/63761624/113819724-ae5a6800-97b4-11eb-93ab-2875d50a8a3d.PNG)

- 정지 버튼을 눌렀을 때  
  시간이 초과되면 'REPLAY?' 메세지와 함께 리플레이 버튼이 있는 팝업창이 뜬다.

![캡처 6](https://user-images.githubusercontent.com/63761624/113819760-b9ad9380-97b4-11eb-8833-cfb325703a26.PNG)

- console  
  시간초과, 승리, 패배, 정지 등의 결과에 따라 콘솔에는 각각 lose, win, lose, cancel이 뜬다.  
  ![캡처 7](https://user-images.githubusercontent.com/63761624/113819854-dba71600-97b4-11eb-81e0-41e726ad5f8b.PNG)
