# 보이는 학생

### :star: 문제의 추상화

- 선생님이 볼수있는 학생의 수 출력
- 앞에 서 있는 사람보다 크면 보이고, 작거나 같다면 보이지 않는다.

<br>

### :wrench: 알고리즘 설계

앞선 문제와 마찬가지로 배열을 순회하면서 볼수있는 기준에 따라 판단을 해야한다.

- 맨 앞 사람은 항상 볼 수 있다. ⇒ answer = 1 초기화
- 현재 볼수있는 기준이 되는 키는 arr의 첫번째 인덱스 사람이다. max = arr[0];
- 배열을 1부터 순회하면서 판단을 하자.
  - if(arr[i]>max)
    - answer = answer + 1;
    - max = arr[i]
  - else
    - 패스

<br>

### :hammer: 알고리즘 구현

```js
function solution(arr) {
  let answer = 1;
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer = answer + 1;
      max = arr[i];
    }
  }
  return answer;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 정답
