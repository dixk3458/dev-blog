# K번째 큰 수

### ⭐: 문제 추상화

- 현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고있다.
- 같은 숫자의 카드가 여러장 있을 수 있다.
- 현수는 3장을 뽑아 합한 값을 기록
- 3장을 뽑을 수 있는 모든 경우를 기록
- 기록한 값 중 K번째 큰 수를 출력
- 만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값은 22입니다.

### 🔧 알고리즘 설계

- 3장을 뽑아 합한 값을 모두 기록하기위한 자료구조 Set을 선언한다.
- 중복된 숫자를 허용하지 않기때문이다.
- 3번의 반복문을 돌면서 3장을 뽑은 후 Set에 add를 해준다.
- 모든 반복이 끝난 후 에 Set의 K-1번째를 반환해준다.

### 🔨 알고리즘 구현

```js
function solution(k, card) {
  let answer;
  const set = new Set();

  for (let i = 0; i < card.length - 2; i++) {
    for (let j = i + 1; j < card.length - 1; j++) {
      for (let q = j + 1; q < card.length; q++) {
        let sum = card[i] + card[j] + card[q];
        set.add(sum);
      }
    }
  }

  const sorted = [...set].sort((a, b) => b - a);
  answer = sorted[k - 1];
  return answer;
}
let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(3, arr));
```

### ✅ 검증 및 트러블 슈팅

- 정답
