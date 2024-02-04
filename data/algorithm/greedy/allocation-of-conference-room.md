# 회의실 배정

### ⭐ 문제 추상화

- 한 개의 회의실이 있는데, n개의 회의들에 대하여 회의실 사용표를 만들려고 한다.
- 각 회의에 대한 시작시간과 끝나는 시간이 주어진다.
- 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 최대수의 회의를 찾아라.
- 회의가 시작되면, 중간에 중단 될 수없고, 회의가 끝나는것과 동시에 다음 회의가 시작될 수 있다.

### 🔧 알고리즘 설계

- 회의 배열을 순회하면서 최대로 회의를 많이 할 수 있는 경우를 찾아야한다. (Greedy 알고리즘)
- 회의 배열을 시작시간을 기준으로 오름차순 정렬을 하는데, 만약 시작시간이 같은 경우 끝나는 시간을 기준으로 오름차순 정렬을 해준다.
- 정답 answer를 0으로 초기화한다.
- for 문의 0번째 인덱스부터 배열의 끝까지 회의 참여 카운트를 세준다.
- for 문이 시작되면 count를 1로 초기화한다.
- currentIndex i으로 초기화
- j가 i+1부터 배열의 끝까지 순회하는데, 만약 arr[currentIndex][1]보다 arr[j][0]이 크거나 같다면 count를 1추가해준다. 그리고 currentIndex는 j가 된다.

### 🔨 알고리즘 구현

```js
function solution(arr) {
  let answer = 0;

  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  for (let i = 0; i < arr.length; i++) {
    let count = 1;

    let currentIndex = i;
    const array = [];
    array.push(arr[i]);

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[currentIndex][1] <= arr[j][0]) {
        count = count + 1;
        currentIndex = j;
        array.push(arr[j]);
      }
    }

    console.log(array);
    answer = Math.max(answer, count);
  }

  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];

console.log(solution(arr));
console.log(solution(arr2));
```

### 정답지 ❓

```js
function solution(arr) {
  let answer = 0;

  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  let et = 0;

  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    // for문을 돌기전에 이전 끝나는 시간을 기억해야한다.
    if (et <= arr[i][0]) {
      answer = answer + 1;
      et = arr[i][1];
    }
  }

  return answer;
}

const arr = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr));
```

### ✅ 검증 및 트러블 슈팅

- 정답
- 정답지와 다르다.
