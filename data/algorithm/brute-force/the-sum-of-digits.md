# 자릿수의 합

N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요.
자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

▣ 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다. 각 자연수의 크기는 10,000,000를 넘지 않는다.

▣ 출력설명
자릿수의 합이 최대인 자연수를 출력한다.

▣ 입력예제 1
7
128 460 603 40 521 137 123

▣ 출력예제 1
137

### 문제 추상화 ⭐

각 자릿수의 총합이 큰 수를 반환하는 문제이다.

### 전략 🔧

입력을 받은 배열을 순회하면서 각 배열의 요소마다 자릿수의 합을 구해야한다. 즉 모든 경우를 탐색해 적절한 값을 반환하는 문제로 Brute Force에 해당한다. 반복문을 이용해보자.

1. 최대값을 저장할 max 배열을 생성하자.
   max[0] : 자릿수의 합
   max[1] : 기존 값
2. arr을 순회하면서 자릿수의 합을 구하고 max[0]과 비교
   만약 max[0]보다 크다면 변경한다.
   동일하다면 기존값과 max[1]을 비교한다.

### 구현 🔨

```jsx
function solution(arr) {
  let answer;

  const max = [Number.MIN_SAFE_INTEGER, 0];

  for (let x of arr) {
    // 자릿수 합 구하기
    const sum = x
      .toString()
      .split('')
      .reduce((a, b) => parseInt(a) + parseInt(b), 0);

    if (max[0] < sum) {
      max[0] = sum;
      max[1] = x;
    } else if (max[0] === sum) {
      max[1] = max[1] < x ? x : max[1];
    }
  }

  answer = max[1];

  return answer;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123, 1234]));
```

### 시행착오

자연수의 각 자릿수의 합을 구하는 방법으로는 꽤 있다. 두가지만 알아보자.

```jsx
const sum = x
  .toString()
  .split('')
  .reduce((a, b) => parseInt(a) + parseInt(b), 0);
```

```jsx
let sum = 0;
while (num) {
  sum = sum + (num % 10);
  num = Math.floor(num / 10);
}
```
