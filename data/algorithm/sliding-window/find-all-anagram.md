# 모든 아나그램 찾기(슬라이딩 윈도우, 해쉬, 투포인터)

### ⭐ 문제 추상화

- S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구해라
- 아나그램 판별시 대소문자가 구분된다.
- 부분문자열은 연속된 문자열이어야한다.

### 🔧 알고리즘 설계

- 슬라이딩 윈도우, 해쉬, 투포인터를 이용해야한다.
- 아나그램이 되는 개수를 반환하기 위해 변수 answer를 0으로 초기화하자.
- 해쉬 맵 sH, tH를 생성한다.
- sH에는 T문자열의 길이 -1 만큼 값을 삽입
- tH에는 문자열의 개수만큼 삽입
- lt를 0으로 설정한다.
- rt가 T문자열의 길이 -1 부터 시작해 끝까지 순회하면서 아나그램검사를 실행한다.

### 🔨 알고리즘 구현

```js
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }

  for (let [key, value] of map1) {
    if (!map2.has(key)) {
      return false;
    }

    if (value !== map2.get(key)) {
      return false;
    }
  }

  return true;
}

function solution(s, t) {
  let answer = 0;

  let lt = 0;
  let length = t.length;

  const sH = new Map();

  for (let i = 0; i < length - 1; i++) {
    if (sH.has(s[i])) {
      sH.set(s[i], sH.get(s[i]) + 1);
    } else {
      sH.set(s[i], 1);
    }
  }

  const tH = new Map();
  for (let i = 0; i < length; i++) {
    if (tH.has(t[i])) {
      tH.set(t[i], tH.get(t[i]) + 1);
    } else {
      tH.set(t[i], 1);
    }
  }

  for (let rt = length - 1; rt < s.length; rt++) {
    if (sH.has(s[rt])) {
      sH.set(s[rt], sH.get(s[rt]) + 1);
    } else {
      sH.set(s[rt], 1);
    }

    if (compareMaps(sH, tH)) {
      answer = answer + 1;
    }

    let value = sH.get(s[lt]);

    if (value - 1 === 0) {
      sH.delete(s[lt]);
    } else {
      sH.set(s[lt], value - 1);
    }

    lt = lt + 1;
  }

  return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
```

### ✅ 검증 및 트러블 슈팅

- 오답
- 다시 볼 문제
