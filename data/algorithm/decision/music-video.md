# 뮤직비디오 (결정 알고리즘)

### ⭐ 문제 추상화

- N개의 곡이 들어가는 DVD
- 라이브에서의 순서가 그대로 유지되어야한다.
- 한개의 노래를 쪼개서 두개의 DVD에 녹화하면 안된다.
- M개의 DVD에 모든 동영상을 녹화하기로 했다.
- DVD 크기를 최소로 하려고한다.
- 입력으로 M개의 DVD 개수와 라이브에서 부른 순서의 노래가 입력된다.
- DVD의 초소 용량 크기를 출력하라.

### 🔧 알고리즘 설계

- 이진 탐색을 이용해 최소 DVD 용량이 될수있는 범위를 구한 후 탐색해준다.

### 🔨 알고리즘 구현

```js
function count(songs, capacity) {
  let count = 1;
  let sum = 0;

  for (let x of songs) {
    if (sum + x > capacity) {
      count = count + 1;
      sum = x;
    } else {
      sum = sum + x;
    }
  }

  return count;
}

function solution(m, songs) {
  let answer = Number.MAX_SAFE_INTEGER;

  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);

    if (count(songs, mid) <= m) {
      answer = Math.min(answer, mid);
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
```


### ✅ 검증 및 트러블 슈팅
- 오답
- 접근을 못했다.