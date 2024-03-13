# 에러 처리

에러 처리는 프로그래밍에서 굉장히 중요하다. 애플리케이션에서 예상치 못한 에러가 발생했을때 애플리케이션이 비정상적으로 동작을 멈추는것을 해결해준다. 즉 에러처리를 통해 사용자 경험을 한 층 높일 수 있다.

에러 처리를 하지 않을경우 사용자에게 미칠 수 있는 영향을 예시를 통해 보여주겠다.
파일 경로를 찾을 수 없다는 이유로 애플리케이션 작동이 멈추면 될까? 만약 멈추면 **사용자 경험을 떨어뜨리게 될것이다.** 이럴 때 에러를 처리하는 방법으로 `try` ,`catch` , `finally`가 있다.

```jsx
function readFile(path) {
  throw new Error('경로를 찾을 수 없습니다.');
  return `${path}경로 파일 내용 `;
}

function processFile(path) {
  const content = readFile(path);
  const result = content + '처리 완료';

  return result;
}

const result = processFile('정재웅3458경로');
console.log(result);
```

에러가 발생 할 수 있는 로직을 `try` `catch` `finally`구문으로 감싸주자. 이렇게 에러를 처리해주면 에러가 발생해도 애플리케이션이 멈추지 않고 유용한 처리를 이어나갈 수 있다.

```jsx
function readFile(path) {
  throw new Error('경로를 찾을 수 없습니다.');
  return `${path}경로 파일 내용 `;
}

function processFile(path) {
  let content;
  try {
    // 에러가 발생할 수 있는 부분을 try로 감싸주자.
    content = readFile(path);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    // 에러가 발생할 경우 처리할 내용
    content = '에러발생으로 기본값 처리';
  } finally {
    console.log('에러 발생하든 안하든 마지막으로 정리');
  }

  const result = content + '처리 완료';

  return result;
}

const result = processFile('정재웅3458경로');
console.log(result);
```

### 에러 버블링

에러는 버블링 UP 되기 때문에 하위 함수에서 에러가 발생하면 상위 레벨에서 그 에러를 잡아 처리 할 수있다. 아래 예시처럼 에러를 최상위 레벨에서 잡아도 되지만, 사용자가 원하는 위치에서 에러를 잡아도 된다. 예를들어 에러가 발생한곳과 가장 인접한 곳에서 잡아도된다.

```jsx
function a() {
  throw new Error('최하위 레벨에서 에러 발생');
}

function b() {
  a();
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log(error);
  console.log('최상위에서 에러를 잡았다.');
}
```

```jsx
function a() {
  throw new Error('최하위 레벨에서 에러 발생');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log('에러 잡았다. 근데 처리를 못하겠다.');
    throw error;
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log(error);
  console.log('최상위에서 에러를 잡았다.');
}
```
