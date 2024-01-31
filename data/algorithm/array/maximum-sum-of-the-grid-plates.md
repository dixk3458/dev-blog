# 격자판 최대합

### :star: 문제 추상화

- N\*N 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력

<br>

### :wrench: 알고리즘 설계

- 최대값을 반환하는 문제이다. 그렇기에 answer를 가장 작은 정수로 초기화를 시킨다.
- 이중 for문을 돌면서 각 열의 합과 행의 합을 구한다.
- 외부 for문에서 사용하는 변수가 고정된 값이다.
- 대각선을 구하기 위해선 for문 한번으로 가능하다.
- answer와 비교를해 answer를 구하자.

<br>

### :hammer: 알고리즘 구현

```js
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    let row = 0;
    let col = 0;
    for (let j = 0; j < arr.length; j++) {
      row = row + arr[i][j];
      col = col + arr[j][i];
    }

    // 내부 for문이 끝나면 answer와 비교
    answer = Math.max(answer, row, col);
  }

  // 대각선 구하기

  let a = 0;
  let b = 0;

  for (let i = 0; i < arr.length; i++) {
    // [0][0] + [1][1] ... [i][i];
    // [arr.length-1-i][arr.length-1-i];
    a = a + arr[i][i];
    b = b + arr[arr.length - 1 - i][arr.length - 1 - i];
  }

  answer = Math.max(answer, a, b);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 정답
