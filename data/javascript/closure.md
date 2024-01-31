클로저는 **함수와 그 함수를 둘러싸는 렉시컬 환경의 조합**이다.

> 💡 **렉시컬 환경**은 블럭, 함수를 실행하기 전에 생성되는 내부 오브젝트로 해당 스코프의 변수와 함수(**Environment Record**), 부모 스코프는 누구인지에 대한 정보(Outer Lexical Environment Reference)를 저장한다. 실행 컨텍스트는 코드를 실행하는데 필요한 환경을 제공하는 객체이다. 즉 코드를 실행하면 함수가 호출되는데, 그 함수의 다양한 정보를 담는 실행 컨텍스트가 생성를 생성하고 콜스택에 push된다. 그 후 함수 본인의 렉시컬 환경을 생성한다.

다음 예제를 통해 살펴보자.

```jsx
function makeFunc() {
  const name = '정재웅';

  function displayName() {
    console.log(name);
  }

  return displayName;
}

const myFunc = makeFunc();
myFunc();
```

클로저는 함수(displayName())과 그 함수를 둘러싼 렉시컬환경(makeFunc()의 렉시컬 환경)의 조합으로 내부함수에서 외부함수의 상태에 접근할수있게해준다.

makeFunc()으로 반환된 displayName()의 참조값을 myFunc에 할당했다.

즉 myFunc를 호출하게되면, displayName()을 호출한것과 동일하다.

이것은 일반적이지 않아 보인다. 몇몇 프로그래밍언어에서는 함수의 지역변수는 그 함수가 처리되는 동안에만 존재해, name에 접근할수없다고 생각할것이다.

Javascript는 클로저가 생성되기에 가능하다.

displayName()(클로저)가 생성된 시점에 그 함수를 둘러싼 렉시컬 환경에는 유효 범위 내에 있는 모든 지역 변수로 구성된다.

한 가지 예시를 더 살펴보자.

```jsx
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const answer = add5(2);

console.log(answer); // 7;
```

makeAdder()는 숫자 x를 전달받아 그 숫자에 y값을 더해주는 함수의 참조값을 반환해준다.

즉 add5에는 5+y를 반환하는 함수의 참조값이 들어있다.

따라서 add5(2)는 7을 반환한다.

### 클로저는 어떤 용도로 사용될까?

클로저는 내부함수에서 외부 함수의 상태에 접근할수있다는 특징을 가져 정보 은닉(캡슐화)의 용도에 사용된다.
