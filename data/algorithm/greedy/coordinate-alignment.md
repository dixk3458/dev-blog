# 좌표정렬

### ⭐ 문제 추상화

- N개의 평면상의 좌표가 주어지면, 모든 좌표를 오름차순으로 정렬하는 프로그램을 작성하세요
- 정렬기준은 x값의 의해서 정렬하고 x값이 같을 경우 y값에 의해 정렬된다.

### 🔧 알고리즘 설계

- 배열을 순회하면서 x값을 기준으로 오름차순 정렬을 한다.
- 만약 x값이 같다면, y값을 비교해준다.
- 선택정렬을 이용했다.

### 🔨 알고리즘 구현

```js
function solution(arr) {
  const answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (answer[minIndex][0] > answer[j][0]) {
        minIndex = j;
      } else if (
        answer[minIndex][0] === answer[j][0] &&
        answer[minIndex][1] > answer[j][1]
      ) {
        minIndex = j;
      }
    }
    let swap = answer[i];
    answer[i] = answer[minIndex];
    answer[minIndex] = swap;
  }
  return answer;
}
let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
```

### 정답지 ❓

```js
function solution(arr) {
  const answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      // 만약에 x값이 같다면, y값을 기준으로 오름차순 정렬
      return a[1] - b[1];
    } else {
      // 그렇지 않은경우에는 모두 x값을 기준으로 정렬하면된다.
      return a[0] - b[0];
    }
  });
  return answer;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
```

### ✅ 검증 및 트러블 슈팅

- 정답
- 정답지와는 다르게 구현을 했다.
- 정답지는 sort 메서드를 이용했다.
- 정답지는 굉장히 간단하게 구현했다.
