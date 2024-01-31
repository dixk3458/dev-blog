# 연속 부분수열(2)

### :star: 문제 추상화

- N개의 수로 이루어진 수열이 주어진다.
- 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그램

<br>

### :wrench: 알고리즘 설계

- 정답을 저장할 answer를 0으로 초기화한다.
- sum을 0으로 초기화한다.
- sum에서 값을 빼는것을 담당할 lt를 0으로 초기화한다.
- rt를 0에서 배열의 끝까지 돌면서 조건을 검사한다.

<br>

### :hammer: 알고리즘 구현

```js
function solution(m, arr) {
  let answer = 0;

  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum = sum + arr[rt];
    if (sum <= m) {
      answer = answer + rt - lt + 1;
    }
    while (sum > m) {
      sum = sum - arr[lt];
      lt = lt + 1;
      if (sum <= m) {
        answer = answer + rt - lt + 1;
      }
    }
  }

  return answer;
}

let a = [1, 3, 1, 2, 3];

console.log(solution(5, a));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 오답
- 다시 봐야 할 문제
- 설계를 못했다.
