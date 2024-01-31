# 후위식 연산

### :star: 문제 추상화

- 후위식 연산이 주어지면 연산한 결과를 출력하라

<br>

### :wrench: 알고리즘 설계

- 후위식 연산을 계산할 Stack을 생성한다.
- 문자열을 순회하면서 해당 문자가 숫자로 변환된다면, push를 해준다.
- 아니라면 연산자이므로 연산자에 따라서 Stack에서 두개를 pop을 한 후 계산하고 다시 push한다.

<br>

### :hammer: 알고리즘 구현

```js
function solution(str) {
  let answer;
  const stack = [];
  for (let x of str) {
    if (!isNaN(Number.parseInt(x))) {
      stack.push(Number.parseInt(x));
    } else {
      let right = stack.pop();
      let left = stack.pop();
      switch (x) {
        case '+':
          stack.push(left + right);
          break;
        case '-':
          stack.push(left - right);
          break;
        case '*':
          stack.push(left * right);
          break;
        case '/':
          stack.push(left / right);
          break;
      }
    }
  }
  answer = stack.join('');
  return answer;
}
let str = '352+*9-';
console.log(solution(str));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 정답
- 문자를 0으로 나누면 NaN
- 숫자를 0으로 나누면 Infinity
