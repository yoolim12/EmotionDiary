# 꽃무리
- 씨앗에 물 대신 감정을 주어 하나의 꽃으로 피어나게 하는 감정 일기장

## 프로젝트 구성 안내

## 1. 프로젝트 소개

**어떠한 인공지능 모델과 알고리즘을 사용했는지에 대한 설명과 엔드유저에게 보이는 웹서비스에 대한 소개**

`인공지능 모델과 알고리즘`
  - Pretrained Fasttext + LSTM

`데이터`
  - AI-HUB(한국어 감정 정보가 포함된 연속적 대화 데이터셋, 감정 분류를 위한 대화 음성 데이터셋)

`기술 스택` 
  - Python, MySQL, JavaScript, React, Flask

`사용된 라이브러리`
  - SQLAlchemy, Flask-JWT-Extended, Fasttext, Numpy, Matplotlib, Okt, Scikit-learn, Tensorflow

`웹서비스 개요`

감정 일기는 정신과에서 추천하는 마음 치유 기법 중 하나이다. 꾸준히 쓸수록 그 효과는 배가 된다. 하지만, 일기를 꾸준히 쓰는 습관을 들이기는 매우 어렵다. 이를 돕기 위해 꽃무리(가제)는 물 대신 감정으로 꽃을 키우는 스토리를 통해 사용자가 일기장을 쓰는 재미를 느끼도록 유도하였다. 일기의 횟수가 늘수록 꽃은 더욱 풍성하게 피어나고, 감정에 따라 꽃의 색깔이 변하는 모습을 보며 사용자는 자신의 감정상태를 파악할 수 있다. 


## 2. 프로젝트 목표


바쁜 생활에 치여 자신을 돌아볼 시간을 가지지 못하는 현대인들이 감정분석기능을 탑재한 감정일기를 통해 자신을 되돌아보는 계기를 가지도록 했다. 현재 시중에 나와있는 감정일기의 경우 사용자가 직접 자신의 주요 감정을 선택해야 하지만, 나의 감정을 나도 모르겠는 날들이 있기에, 이러한 고민을 덜어주고자 일기 내용의 감정을 분석해주는 인공지능 서비스를 기획하게 되었다. 하지만 일기를 꾸준히 쓰기 위해서는 동기부여가 필요하고, 일기를 쓰면서 꽃이라는 하나의 결과물을 만들 수 있다면 동기부여의 계기가 될 것이라 생각했다. 

## 3. 프로젝트 기능 설명


**주요 기능 및 서브 기능**<br>
`일기 분석`
- 일기를 작성하면 일기 내용을 통해 그 날의 감정을 분석해줍니다.
- 분석된 감정을 색으로 표현해 캘린더에 기록합니다.

`감정 식물 성장`
- 일기를 작성한 횟수에 따라 씨앗이 성장을 하면서 꽃을 피우게 됩니다.
- 한달 동안의 일기 분석 결과에 따라 꽃의 모습이 달라집니다.

**프로젝트만의 차별점, 기대 효과**
- 씨앗이 자라나는 모습을 보여주며 일기를 꾸준히 작성할 수 있는 동기를 부여할 수 있습니다.


## 4. 프로젝트 구성도
  - [figma](https://www.figma.com/file/O7EHfWQjetlMOCmFm0sVGe?embed_host=notion&kind=&node-id=708%3A2&viewer=1)

## 5. 프로젝트 팀원 역할 분담

**멤버별 responsibility**
| 이름 | 역할 | 담당 부분 |
| --- | --- | --- |
| 나영민 | 인공지능, 프론트 엔드 | - 데이터 수집 및 라벨링<br> - AI GPU, remote-ssh 셋팅 <br>- 데이터 EDA <br>- 모델 정확도 개발 <br>- 소개 페이지 개발 |
| 박강혜  | 인공지능, 프론트엔드 | - 데이터 EDA<br>- 전처리, 토큰화, 임베딩 등의 과정을 통해 LSTM + Fasttext 기반의 딥러닝 모델 생성<br>- 생성한 모델에 대한 테스트 코드 작성(Python)<br>- 일기 상세페이지 개발 및 디자인 수정 | 
| 문지윤  | 백엔드, 프론트엔드 | - 데이터 베이스 구축 및 API 설계<br>- docker 개발 환경 관리<br>- 로그인 기능 및 페이지 구현<br>- 웹 페이지 디자인<br>- 기획서 및 스크럼, 오피스아워 문서 작성 |
| 최유림 | 프론트엔드 | - 회원가입 기능(Register.js & Register.scss)<br>-	달력 기능(Calendar.js & Calendar.scss) -> 달력 구현 / ② 사용자가 달력에서 날짜를 선택하였을 때 일기를 작성하였다면 일기 작성 페이지로, 작성하지 않았다면 일기 보여주는 페이지로 렌더링 하는 작업 / ③ 감정 별로 달력에 색 나타내기<br>-	일기 작성 페이지(DiaryWritePage.js)<br>-	다이어리 틀 구현(Book.js & Book.scss)<br>-	페이지 렌더링(Navigation.js & Navigation.scss)|

## 6. 시연 영상
![AI_track_](https://user-images.githubusercontent.com/78739536/161405968-ba09e8f1-5e50-4457-a8fc-809b7b93c443.gif)
