# 모듈 작성 법

프로그래밍을 하다보면, 코드의 역할에 따라 작은 단위의 모듈로 나누어 작성해 가독성과 유지 보수성을 높일 수 있다. 이러한 작업을 가능하게 하는 모듈 작성 방법을 알아보자.

기본적으로 HTML파일에서 `<script>` 태그를 통해 Javascript 파일을 연결 시키면 모든 Javascript파일에서 사용하는 전역 변수의 값을 공유하게 된다. 안좋은 예시를 들어보겠다.
서로 다른 file이더라도 전역변수 count에 접근이 가능해 예상치 못한 에러가 발생할 수 있다.

```jsx
// file1.js

let count = 0;
function increase() {
  count = count + 1;
  console.log(count);
}

console.log(count);
```

```jsx
// file2.js

console.log(count);
count = -20;
```

이러한것을 해결해주기위해 모듈화를 해줘야한다. 모듈화를 해주는 방법으로는 `<script>` 태그의 속성으로 `type=”module”` 을 작성하는것이다. 서로간의 모듈성을 높여서 개발을 진행할 수있다.

만약에 특정 변수, 함수 딱 하나만 외부로 노출 시키기를 원한다면, `export` `default` `import`키워드를 이용할 수 있다. 한 개 이상을 노출 시킨다면 default를 사용할 수 없고 중괄호로 감싸주어야한다.
