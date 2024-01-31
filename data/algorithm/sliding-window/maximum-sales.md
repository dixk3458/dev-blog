# 최대 매출

### :star: 문제 추상화

- N일 동안의 매출기록을 주고 연속된 K일 동안의 최대 매출액이 얼마인지 구하라
- 만약 N이 10이고 K가 3이라면
  12 15 <span style="background-color:#ffdce0">11 20 25</span> 10 20 19 13 15
  연속된 3일간의 최대 매출액은 11+20+25=56만원이다.

<br>

### :wrench: 알고리즘 설계

- 탐색을 시작 할 때 0부터 k보다 작을때까지의 값을 기억해주자.(38)
- 그것을 answer에 초기화
- i가 1부터 시작해서 arr.length-k+1보다 작을때까지 탐색
- sum에서 arr[i-1]를 빼주고 arr[i+2]값을 더해준다.
- 그 값을 answer와 비교
- 큰 값을 answer에 할당

<br>

### :hammer: 알고리즘 구현

```js
function solution(k, arr) {
  let answer;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum = sum + arr[i];
  }

  answer = sum;

  for (let i = k; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 정답
