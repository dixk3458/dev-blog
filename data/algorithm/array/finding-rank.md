# 등수 구하기

### :star: 문제 추상화

- 학생의 등수를 입력된 순서대로 출력
- 동일한 점수가 있다면, 높은 등수로 동일 처리한다.

<br>

### :wrench: 알고리즘 설계

- 모든 학생의 등수를 담을 answer 배열을 생성하자.
- 이중 for문을 돌면서 각 학생의 등수를 파악하자.
- 외부 for문에서 검사 대상을 정하고 검사대상보다 높은 점수를 가지고있는 사람의 인원을 저장할 변수 count를 1로 초기화하자.
- 내부 for문을 돌면서 검사대상보다 큰 점수라면 count를 +1해주자 , 내부 for문이 끝나고 count를 answer에 push

<br>

### :hammer: 알고리즘 구현

```js
function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        count = count + 1;
      }
    }

    answer.push(count);
  }

  return answer;
}

const arr = [87, 89, 92, 100, 76];
const arr2 = [87, 89, 92, 100, 76, 87];
console.log(solution(arr));
console.log(solution(arr2));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 정답
- 동일한 점수가 존재할때도 올바르게 등수를 도출한다.
