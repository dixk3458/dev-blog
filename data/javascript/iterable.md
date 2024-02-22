# 이터러블 & 이터러블 프로토콜

### 이터레이션 프로토콜이란?

Iteration은 반복, 순회를 의미하고 이터레이션 프로토콜이란 순회가 가능하기위해서 따라야 하는 규칙, 인터페이스이다.

따라서 이터레이션 프로토콜을 따른다는것은 순회가 가능하다는것이다. 순회가 가능하면 for…of, spread 연산자를 사용할 수 있다.
대표적으로 Array, String, Map, Set

**이터레이션 프로토콜을 준수하기위해선 Iterable 프로토콜을 따라야한다.**

순회가 가능한 객체가 되려면, [Symbol.iterator]() 라는 함수를 호출했을때 Iterator 프로토콜을 따르는 객체를 반환해야한다.

그러면 Iterator 프로토콜을 따른다는것은 무엇일까?
next()라는 함수를 가진 객체를 리턴하면 된다.

즉 자바스크립트에서 이터레이션 프로토콜을 따르기 위해서는 2가지 프로토콜을 따라야한다.

1. Iterable 프로토콜
   1. [Symbol.iterator]() 함수를 호출하면 Iterator 프로토콜을 따르는 객체를 반환해야한다.

순회가 가능한 객체가 되기위해선 Iteration 프로토콜을 준수해야한다. 이 프로토콜을 준수해 순회가 가능하면, for…of , spread 연산자를 사용할수 있다.

Iteration 프로토콜을 준수하기 위해서는 Iterable 프로토콜을 따라야한다.
Iterable 프로토콜을 따른 다는것은 [Symbol.iterator]() 함수를 호출했을때 Iterator 프로토콜을 따르는 객체를 반환해야한다. Iterator 프로토콜을 준수하는 객체는 next()라는 함수를 내부적으로 가지고있고 호출했을때 다음값을 반환해야한다.

### 순회가 가능하면 무엇을 할 수 있을까?

순회가 가능하면, for …of, spread 연산자와 같은 연산이 가능하다.
예를들어 배열의 경우도 Iterable한 객체이다. 배열은 다음과 같이 순회가 가능하다.

```jsx
const array = [1, 2, 3, 4, 5];

for (let x of array) {
  console.log(x);
}
```

### Iterator 프로토콜은 무엇일까?

먼저 프로토콜의 의미를 정리 할 필요가 있다.
프로토콜이란 무언가를 위한 규격사항, 지켜야하는규칙을 의미한다. 따라서 Iterator 프로토콜은 순회가 가능한 객체 Iterator가 되기위한 규격사항을 말한다.

Iterator 프로토콜을 따르기 위해서는 객체안에있는 next()를 호출했을때 계속 다음값을 반환할 수 있어야한다.

```
const array = [1, 2, 3, 4, 5];

const iterator = array.values();

console.log(iterator.next()); // [value:1 , done: false]
console.log(iterator.next()); // [value:1 , done: false]
console.log(iterator.next()); // [value:1 , done: false]
console.log(iterator.next()); // [value:1 , done: false]
console.log(iterator.next()); // [value:1 , done: false]
console.log(iterator.next()); // [value:undefined , done: true]
```
