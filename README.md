# 클래스101 과제 : 장바구니 시스템 만들기
이 프로젝트는 클래스101의 상품 목록 페이지와 장바구니 기능을 구현한 페이지 입니다. <br>
상품 목록 페이지에서는 상품의 리스트를 확인하고 최대 3개의 상품을 장바구니에 넣을 수 있으며, 장바구니 페이지에서는 구매하고자 하는 상품의 목록과 수량을 선택한 후, 쿠폰의 적용 가격을 확인하실 수 있습니다. 

 <br></br>
 <br></br>
 <br></br>
 <br></br>
### 프로젝트 데모 영상
[![GLASS 101 Project Demo](https://images.velog.io/images/carminchameleon/post/d5485be1-dc83-40cf-88a9-c2899b638e79/image.png
)](https://youtu.be/INNFL6JMFIs)

**클릭하면 데모 영상으로 이동합니다.**

### 기술스택
이 프로젝트에서 사용된 기술은 다음과 같습니다.

- Language: JavaScript
- Library: React, Hooks, Redux, Axios
- Styling: styled-components

- Project Setup: Create React App

### 프로젝트 시연
- 프로젝트 디렉터리에서 npm run start 명령어 실행 후 브라우저에서 http://localhost:3000 접속

### 구현 기능

**상품 목록 페이지**

- fetch 함수를 이용한 상품 목록 API 데이터 호출, 상품 데이터 목록 구현
- 상품 Score에 따른 내림차순 정렬
- Pagenation 구현
- 상품의 장바구니 포함 여부에 따른 버튼 UI 구현

**장바구니 페이지**
- fetch 함수를 이용한 쿠폰 리스트 API 호출, 쿠폰 리스트 구현
- 담을 수 있는 상품 수량 최대 3개로 제한
- 장바구니 상품 목록 결제 여부 체크 박스로 선택
- 장바구에 있는 상품을 제거 및 수량을 수정할 수 있도록 구현
- 각 상품 쿠폰 정보 명시 및 쿠폰 사용 가능 여부에 따른 상품 가격 책정

**반응형**

- 1024px, 767px, 479px 을 기준으로 반응형을 적용했습니다.  
![반응형](https://images.velog.io/images/carminchameleon/post/0993bd3e-c3b1-415d-864f-f8454755194a/image.png)


### [프로젝트 노션](https://www.notion.so/carminido/101-89228e37b23c44cdb2a709824822bc69)
- 프로젝트에 더 자세한 설명을 보실 수 있습니다.
