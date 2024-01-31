# 점수계산

### ⭐ 추상화

- 연속으로 문제를 맞추는경우 연속으로 맞춘만큼 점수를 부여한다.
- 문제를 틀리고 다시 맞추면 가산점으로 부여하는 점수를 다시 1점부터 시작한다.

### 🔧 알고리즘 설계

- answer를 0으로 초기화한다.
- 현재 몇연승인지를 저장할 변수 stack을 0으로 초기화한다.
- 배열을 순회하면서 문제를 맞추면(O라면) stack을 +1을 하고 answer에 더해준다.
- 문제를 틀리면 stack을 다시 0으로 초기화한다.

### 🔨 알고리즘 구현

```js
function solution(arr) {
  let answer = 0;
  let stack = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      // 문제를 맞춘경우
      stack = stack + 1;
      answer = answer + stack;
    } else {
      // 문제를 틀린 경우
      stack = 0;
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr)); //10
```

### ✅ 검증과 트러블 슈팅

- 정답
