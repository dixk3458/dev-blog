# 마구간 정하기 (결정 알고리즘)

### ⭐ 문제 추상화

- 말들을 마구간에 배치할때 가장 가까운 말 사이의 거리가 제일 큰 값을 구하라

### 🔧 알고리즘 설계

- 말들이 배치될수있는 범위를 구하자.
- 말들 사이의 거리가 1부터 N이 될수있다.
- 이진 탐색을 이용해 계속해서 그 사이의 값중에 더 좋은 값이 있는지 구하자.

### 🔨 알고리즘 구현

```js
function count(stable, dist) {
  let count = 1;
  let current = stable[0];

  for (let i = 1; i < stable.length; i++) {
    if (dist <= stable[i] - current) {
      count = count + 1;
      current = stable[i];
    }
  }

  return count;
}

function solution(c, stable) {
  let answer = Number.MIN_SAFE_INTEGER;

  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);

    if (count(stable, mid) >= c) {
      answer = Math.max(answer, mid);
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
```

### ✅ 검증 및 트러블 슈팅

- 오답
- 접근을 못했다.
