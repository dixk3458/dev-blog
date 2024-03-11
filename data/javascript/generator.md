# 제너레이터란 무엇인가?

제너레이터는 이터러블한 객체를 손쉽게 만들어준다.

사용법은 `function` 키워드 옆에 `*` 를 붙여 제너레이터 함수라는것을 명시해야한다. 그리고 yield를 사용해 값을 반환해야한다.

yield는 return과 비슷하지만, 사용자가 반환되는 시점을 결정할 수 있다는것에 차이가 있다. 즉 사용자에게 제어권이 주어진다.

```jsx
function* multipleGenerator() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
    yield i ** 2;
  }
}

const multiple = multipleGenerator();
console.log(multiple.next());
console.log(multiple.next());
console.log(multiple.next()); // 3까지 진행했기에

// x는 4부터 시작이다.
for (let x of multiple) {
  console.log(x);
}
```
