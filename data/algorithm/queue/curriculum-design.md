# 교육과정 설계

### :star: 문제 추상화

- 현수는 1년 과정의 수업계획을 짜야한다.
- 필수과목이 있고 그 순서도 정해져 있다.
- 입력으로 필수과목 순서와 현수가 짠 수업설계가 전달되면 교육과정을 잘 설계했다면 YES를 아니라면 NO를 반환하라.

<br>

### :wrench: 알고리즘 설계

- 변수 answer를 YES로 초기화시킨다.
- 수업설계를 순회하면서 검사를 진행한다.
- 필수과목을 저장할 Queue를 생성한다.
- 필수과목이 아닌 나머지 과목은 검사를 해줄 필요가 없다.
- 즉 수업설계를 설계하면서 검사대상이 needs에 포함된 경우만 검사해주자.
- 검사대상이 needs의 가장 첫번째 인덱스(shift()값)이 아니라면 순서가 잘못된것이다.
- 검사를 다 끝낸 후 Queue의 길이가 1이상이라면 필수과목을 이수하지 않은것이다.

<br>

### :hammer: 알고리즘 구현

```js
function solution(need, plan) {
  let answer = 'YES';

  const queue = need.split('');

  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) {
        return 'NO';
      }
    }
  }

  if (queue.length > 0) {
    return 'NO';
  }

  return answer;
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 오답
- Queue를 사용해야할 이유를 찾지 못했다.
