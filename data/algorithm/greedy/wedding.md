# 결혼식

### ⭐ 문제 추상화

- 도착시간과 퇴장시간을 담은 시간정보가 주어질때 피로연 장에 동시에 존재하는 최대 인원수를 구하라

### 🔧 알고리즘 설계

- 최대값을 구하는것이기에, answer를 가장 작은 값으로 초기화하자.
- 도착시간과 퇴장시간에 따라서 count를 해줘야하기때문에, 새로운 timeLine 배열을 만들어 정렬해주자.
- timeLine 배열을 순회하면서 count

### 🔨 알고리즘 구현

```js
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  const timeLine = [];

  for (let x of arr) {
    timeLine.push([x[0], 's']);
    timeLine.push([x[1], 'e']);
  }

  timeLine.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1].charCodeAt() - b[1].charCodeAt();
    } else {
      return a[0] - b[0];
    }
  });

  console.log(timeLine);

  let count = 0;

  for (let x of timeLine) {
    if (x[1] === 's') {
      count = count + 1;
    } else {
      count = count - 1;
    }
    answer = Math.max(count, answer);
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
```

### ✅ 검증 및 트러블 슈팅

- 오답
- 접근을 못했다.
