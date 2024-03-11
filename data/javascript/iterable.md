# 이터러블이란 무엇인가?

이터레이션(Iteration)은 반복, 순회를 의미한다. 반복 순회가 가능하기 위해서는 이터레이션 프로토콜을 따라야한다. 이터레이션 프로토콜을 따르는 대표적인 자료구조는 다음과 같다.

1. Array
2. String
3. Map
4. Set

이터레이션 프로토콜을 따르면 `for…of`, `spread`와 같은 반복, 순회연산이 가능하다.

### 이터레이션 프로토콜

어떠한 객체라도 `Symbol.iterator()`를 호출했을때 Iterator 프로토콜을 준수하는 반복자 객체를 반환하거나, 어떠한 함수라도 Iterator 프로토콜을 따르는 반복자 객체만 반환하면된다.

여기에서 Iterator 프로토콜을 따른다는것은 반복자 객체안에서 `next()`함수를 호출했을때 다음값을 반환하는것을 말한다.

즉 이터레이션 프로토콜을 따르는 객체란 Iterator 프로토콜을 따르는 반복자 객체를 반환하는 객체를 말하고, `for…of` ,`spread` 연산이 가능하다.

따라서 이터레이션 프로토콜을 준수하면 for…of 연산 없이도 이렇게 직접 구현할 수 있다.

```jsx
const array = [1, 3, 5, 7];

const iterator = array.entries(); // 이터러블 프로토콜을 준수하는 이터레이터 객체 반환

while (true) {
  const item = iterator.next();
  if (item.done) {
    break;
  }
  console.log(item.value[1]);
}

```

```jsx
const multiple = {
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;
    return {
      next() {
        return {
          value: num++ * 2,
          done: num > max,
        };
      },
    };
  },
};

for (const x of multiple) {
  console.log(x);
}

function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]() {
      let num = initialValue;
      return {
        next() {
          return {
            value: callback(num++),
            done: num > maxValue,
          };
        },
      };
    },
  };
}

const single = makeIterable(0, 20, num => num);
for (const num of single) {
  console.log(num);
}

```