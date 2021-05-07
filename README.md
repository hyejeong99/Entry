# Entry
엔트리를 이용한 프로그래밍

- entry
- block coding
- [Entry ](https://github.com/hyejeong99/Entry) : Coding with Entry

### 1. 아기 돼지 런
장애물을 피하고 아이템을 먹어서 점수를 얻는 게임이다.
- 늑대와 부딪히면 게임이 끝난다.
- 벽돌을 먹으면 점수가 1점 올라간다.
- 별을 먹으면 점수가 2점 올라간다.
- "점수>10"라면, 추가 점수 획득 기회를 얻는다.
- "점수>50"라면, 게임이 끝난다.

### 2. 방탈출 게임
#### (1) 게임 설명
피지컬 컴퓨팅 하드웨어 일종인 햄스터 로봇이 사용자의 문제 해결 유무에 따라 이동하여 4단계의 방을 모두 통과해 탈출하는 것을 목표로 한다. 엔트리에 문제가 나오고, 사용자가 문제를 풀면 햄스터 로봇이 이동한다. 
![3](https://user-images.githubusercontent.com/59854960/114136594-ec3ac600-9945-11eb-85c9-e46df52f0dc9.JPG)

#### (2) 게임 구조

![1](https://user-images.githubusercontent.com/59854960/114135839-cb25a580-9944-11eb-9780-69bc3d6a14b5.png)

- 총 4단계로 구성되어 있으며, 문제의 난이도는 계속 상승된다.
- 단계별로 15초 이내, 몇 문제는 시도 횟수 2번 이내에 문제를 맞야 다음 단계로 이동할 수 있다.

![4](https://user-images.githubusercontent.com/59854960/114136598-ed6bf300-9945-11eb-9bf3-375be33127d3.JPG)

탈출에 성공하면, 다음과 같은 화면을 볼 수 있다.

![2](https://user-images.githubusercontent.com/59854960/114135840-cc56d280-9944-11eb-88d5-f53f7432661a.png)

### 3. 엔트리와 ROS 연동하기
엔트리 블록 명세 작성하는 법을 참고해, 엔트리와 ROS를 연동하는 카테고리를 만들어줬다.
기존의 14개 카테고리 외에 ROS 카테고리를 하나 더 정의해줬다.

#### (1)ROS 카테고리 추가

![ros카테고리](https://user-images.githubusercontent.com/59854960/117400965-a1a96b00-af3e-11eb-90e5-212521f99611.PNG)

맨 아래에 ROS 카테고리를 추가해줬다.

#### (2)ROS 카테고리 내 블록 추가

![ROS 카테고리](https://user-images.githubusercontent.com/59854960/117401160-01a01180-af3f-11eb-97a2-c97f7dc1c3bb.PNG)

다음과 같이 5개의 카테고리를 추가해줬다.

#### (3)
![us_추가](https://user-images.githubusercontent.com/59854960/117400967-a2420180-af3e-11eb-9f5f-d418f1d8c6f8.PNG)


![최종](https://user-images.githubusercontent.com/59854960/117400953-9e15e400-af3e-11eb-8974-e92d38b2af07.PNG)
![imu연결](https://user-images.githubusercontent.com/59854960/117400961-a110d480-af3e-11eb-9428-81c19f0d55ea.PNG)
![ros카테고리_1](https://user-images.githubusercontent.com/59854960/117400963-a1a96b00-af3e-11eb-9a9e-92b516309ecf.PNG)
![최종](https://user-images.githubusercontent.com/59854960/117400964-a1a96b00-af3e-11eb-9e6a-593c7ee7a1d0.PNG)

![us_추가](https://user-images.githubusercontent.com/59854960/117400967-a2420180-af3e-11eb-9f5f-d418f1d8c6f8.PNG)

