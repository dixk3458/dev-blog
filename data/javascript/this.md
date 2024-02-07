# this란 무엇인가?

### this의 개념

---

JavaScript에서 this는 문맥에 따라서 가리키는 대상이 달라진다. 즉 어디에서 호출했느냐에 따라서 this가 가리키는 대상이 달라지는것을 말한다.

### 전역에서의 this

---

전역에서 this를 호출하게되면, this는 전역객체 window를 가리킨다.

```jsx
console.log(this); // window

let name = 'Jaewoong';
console.log(window.name); // 'Jaewoong'

this.fullName = 'JeongJaeWoong';
console.log(window.fullName); // 'JeongJaeWoong'
console.log(fullname); // 'JeongJaeWoong'
```

### 함수 문맥에서의 this

---

함수 내부에서 this는 함수를 호출한 방법에 의해서 결정된다.

1. 단순호출

```jsx
function f1() {
  return this;
}

f() === window; // true;
```

1. 엄격모드에서의 호출

```jsx
'use strict';

function f2() {
  return this;
}

f2() === window; // false;
```

### 객체의 메서드안에서 this

---

객체의 메서드 즉 객체안에 정의된 함수 내부에서 this를 호출하면 this는 객체 자신을 가리킨다.

```jsx
const jaewoong = {
  name: 'jaewoong',
  age: '26',
  print: function () {
    console.log(`안녕하세요 저는 ${this.age}살 ${this.name}입니다.`);
  },
};

jaewoong.print(); // "안녕하세요 저는 26살 jaewoong입니다.'
```

이렇게 문맥에 따라서 달라지는 this를 특정한 객체와 묶을수있는 방법이 있다.바로 this 바인딩이라고 하는데, 어떤 방식으로 구현하는지 살펴보자.

1. bind, call, apply 메서드 사용

```jsx
function print() {
  console.log(this.name);
}

const obj = {
  name: '정재웅',
};

const bind = print.bind(obj);
bind();
```

```jsx
function print() {
  console.log(this.name);
}

const obj = {
  name: '정재웅',
};

print.apply(obj);
```

```jsx
function print() {
  console.log(this.name);
}

const obj = {
  name: '정재웅',
};

print.call(obj);
```

1. 화살표 함수

```jsx
const jaewoong = {
  print: () => {
    let x = () => this;
    return x;
  },
};

console.log(jaewoong.print());
```

this는 면접에서도 많이 묻는 질문이다. 만약 물어본다면 이렇게 답변하자.

<aside>
💡 This는 문맥에 따라서 다른 값을 가지고, 크게 4가지로 나뉩니다.

첫 번째 일반함수로 호출된 경우 this는 전역 객체이며 브라우저의 경우 window 객체가 됩니다.

두 번째로 메소드로 호출되었을경우 this는 메서드를 호출한 객체입니다.

세 번째로 함수가 호출될 때나 생성될 때 apply,call 또는 bind가 사용되었다면 이 함수 안에서 this는 첫번째 인자값이 됩니다.

마지막으로 함수가 호출될때 new 키워드를 사용했다면, 이 함수 안의 this는 새로운 객체이기 때문에 빈 객체입니다.

</aside>
