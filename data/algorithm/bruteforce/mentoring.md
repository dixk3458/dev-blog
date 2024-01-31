# 멘토링

### ⭐ 문제 추상화

- M번의 수학테스트 등수를 가지고 멘토와 멘티를 정한다.
- 멘토와 멘티가 될수있는 조건은 멘토 학생이 M번의 테스트에서 모두 멘티학생보다 등수가 앞서야한다.
- 멘토와 멘티가 되는 짝을 만들수있는 경우가 총 몇가지인지 출력

### 🔧 알고리즘 설계

-

### 🔨 알고리즘 구현

```js
function solution(test) {
  let answer = 0;

  // 총 시험 횟수
  m = test.length;

  // 총 학생 수
  n = test[0].length;

  // 1번 학생 ~ 4번 학생 정함
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      // 멘토 멘티 검사 flag
      let cnt = 0;

      // 첫 번째 시험부터 마지막 시험까지
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);

        // 각 테스트에서 위에서 정한 학생 점수 얻음
        for (let s = 0; s < n; s++) {
          // pi는 멘토학생 점수
          // pj는 멘티학생 점수
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;

        //
        if (pi > pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}
let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
```

### ✅ 검증 및 트러블 슈팅

- 오답
- 다시 풀어봐야한다.
- 조금만 복잡해지니 설계조차 못하고있다.
- 2차원 배열 탐색에 어려움을 겪는것같다.
