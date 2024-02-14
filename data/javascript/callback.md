# JavaScript 콜스택 예제 및 핵심

JavaScript가 동작 할 수 있는 브라우저, node 와 같은 런타임 환경에는 JavaScript 코드를 번역 해 실행 할 수 있는 JavaScript 엔진이 존재한다.

이 엔진 안에 동적으로 생성된 데이터를 저장하는 Memory Heap과 함수의 실행 순서를 기억하는 Call Stack이 있다.

하나의 Call Stack 밖에 없어 JavaScript 자체는 싱글 쓰레드 언어로 한번에 한가지 일만 처리 할 수 있다.

즉 JavaScript는 기본적으로 동기적으로 진행된다.

예제를 살펴보자.

첫 번째 예제는 순차적으로 c → b → a 함수가 콜스택에 쌓이게된다.

```jsx
function a() {
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

const result = c();
console.log(result); // 3
```

마찬가지로 두번째 에제도 콜스택에 쌓이게 되지만, a 함수 내부에서 오래걸리는 작업이 발생해 애플리케이션 자체에 영향을 끼치는것을 볼 수 있다.

```jsx
function a() {
  for (let i = 0; i < 100000000000; i++) {}
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log('시작했다.');
const result = c();
console.log(result); // 3
```

즉 JavaScript는 동기적으로 진행되기때문에 함수 내부에서 오래걸리는 작업을 피하는것이 핵심이다. 이러한 상황을 어떻게 해결 할 수 있을까?

바로 JavaScript 런타임 환경에서 제공해주는 다양한 APIs를 이용해 작업하는것이다. 브라우저를 예로 들겠다. 브라우저에서 제공해주는 Web APIs는 멀티 쓰레드 환경에서 비동기적으로 실행된다. 즉 한번에 많은 일을 처리할 수있다.

함수가 호출되어 Call Stack 내부에 함수가 들어 오게되는데, 그 함수에서 비동기 함수를 실행한다면, JavaScript 엔진은 브라우저에게 해당 비동기 함수(Callback)을 던져두고 마저 하던 일을 진행한다. 브라우저는 비동기 함수를 내부적으로 수행한 뒤에 Task Queue로 전달을 한다.

런타임 환경의 Event Loop가 Call Stack과 Task Queue를 감시하면서 Call Stack이 비었을때 Task Queue에 있는 Callback을 한개씩 가져와 실행 함으로써 비동기적으로 동작하게된다.

예제를 살펴보자.

아래의 예제는 숫자를 출력하는 함수로 `execute()` 함수 내부에 비동기적으로 수행하는 `setTimeout()`이 있다.
즉 execute()를 호출하면 1을 출력하고 엔진이 `setTimeout()` 에 등록해둔 callback을 브라우저에 전달하고 브라우저 내부적으로 3초의 타이머를 실행한다. 그리고 3을 출력하고 CallStack에서 `execute()`가 pop되어 비어있는 상태가 된다. 3초의 시간이 흘러 등록해둔 callback이 Task Queue에 전달되고 Event Loop가 CallStack이 비어있는것을 확인해 console.log(3)을 CallStack으로 전달되고 실행한다.

```jsx
function execute() {
  console.log(1);

  setTimeout(() => {
    console.log(2);
  }, 3000);

  console.log(3);
}
```
