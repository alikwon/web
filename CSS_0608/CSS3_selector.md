# CSS3 선택자

## 1. 선택자 개요

- CSS3 선택자

  - 특정한 HTML 태그를 선택할 때 사용하는기능

  - 선택한 태그에 원하는 스타일 적용가능

    

  ```html
  // [css block]
  <style>
  	h1 {color: red;}
  </style>
  ```

  - h1 : 선택자
  - color : 스타일 속성
  - red : 스타일 값

- 스타일 시트 : style 태그 내부에 입력하는 코드

- 보통은 CSS 파일을 따로 빼서 불러오는 식으로 처리함

  

## 2. 기본선택자

|  선택자 종류  | 선택자 형태 | 설명                            |
| :-----------: | :---------: | ------------------------------- |
|  전체 선택자  |      *      | HTML문서 안의 모든 태그 선택    |
|  태그 선택자  |    태그     | HTML페이지 내부의 특정 태그     |
| 아이디 선택자 |     #id     | 특정 id 속성이 있는 태그를 선택 |
| 클래스 선택자 |   .클래스   | 특정 클래스가 있는 태그 선택    |

(**Tag 의 id 속성은 속성값을 중복해서 쓰지 않는다 →  자바스크립트에서 문제발생!!**)

- 전체선택자

  ```html
  <style>
      * {
          color: red;
      }
  </style>
  ```

- 태그 선택자

  ```html
  <style>
      /* p태그 */
      p {
          font-size: 20px;
          font-style: italic;
      }
  
      /* 여러 태그 */ 
      /* solid 한줄 외곽선 */
      /* margin, padding 간격 */
      h1,p {
          border: 5px solid blue;
          margin: 0;
          padding: 0;
      }
  </style>
  ```

  

- 아이디 선택자

  ```html
  <style>
      #header {
          margin: 0 auto;
          width: 300px;
          background-color: skyblue;
      }
      #aside {
          margin: 20px auto;
          width: 200px;
          background-color: aquamarine;
      }
      #content {
          width: 500px;
          background-color: cadetblue;
      }
  </style>
  ```

  

- 클래스 선택자

  ```html
  <style>
      .font_color {
          width: 200px;
          color: blanchedalmond;
          background-color: darkcyan
      }
      /* li 태그만 적용되게 해보기 */
      li.font_bold {
          font-weight: 900;
      }
  
      .font_size {
          font-size: 200%;
      }
  
      div.font_bold{
          font-size: 150%;
      }
  </style>
  ```

  