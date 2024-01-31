# 연속 부분 수열(1)

### :star: 문제 추상화

- N개의 수로 이루어진 수열이 주어진다.
- 이 수열에서 연속부분수열의 합이 특정 숫자 M이 되는 경우가 몇 번 있는지 구하라

<br>

### :wrench: 알고리즘 설계

- 정답 count를 기억할 answer를 0으로 초기화한다.
- 연속 부분 수열의 시작 범위를 기억할 lt를 0으로 초기화
- 범위의 합을 기억할 sum을 0으로 초기화
- rt가 증가하면서 연속 부분 수열의 범위를 정할것이다.
- 만약 sum + rt가 가리키는 값이 특정 숫자 m이라면 answer 증가
- 아니라면 sum이 m보다 작거나 같아질때까지 sum에 lt값을 빼준다.
- lt 값을 뺀 후에 sum이 m인지 검사를 한다.

<br>

### :hammer: 알고리즘 구현

```js
function solution(m, arr) {
  let answer = 0;

  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum = sum + arr[rt];
    if (sum === m) {
      answer = answer + 1;
    } else {
      while (sum >= m) {
        sum = sum - arr[lt];
        lt = lt + 1;
        if (sum === m) {
          answer = answer + 1;
        }
      }
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 오답
- 다시 볼 문제
