# 가위 바위 보

### ⭐ 문제의 추상화

- 두사람이 N번의 게임을 진행하는데, **이긴 사람을 출력 비길경우 D를 출력**

- 누가 이겼는지 출력하는 프로그램 작성

### 🔧 알고리즘 설계

- 0번 인덱스부터 배열의 마지막 인덱스 까지 순회하면서 각 인덱스 마다 누가이겼는지 판단하자.

- 조건문을 사용하면된다.

### 🔨 알고리즘 구현

```js
function solution(a, b) {
  let answer = '';

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      answer = answer + 'D' + '';
    } else if (a[i] === 1 && b[i] === 3) {
      // a가 가위로 이기는 경우
      answer = answer + 'A' + '';
    } else if (a[i] === 2 && b[i] === 1) {
      // a가 바위로 이기는 경우
      answer = answer + 'A' + '';
    } else if (a[i] === 3 && b[i] === 2) {
      // a가 보로 이기는 경우
      answer = answer + 'A' + '';
    } else {
      // 그렇지 않은경우(지는경우)
      answer = answer + 'B' + '';
    }
  }
  return answer;
}

const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];

console.log(solution(a, b));
```

### ✅ 검증 및 트러블 슈팅

- 정답
