# 학급 회장

### :star: 문제 추상화

- 학급 회장 선거에 A, B, C, D, E 후보가 등록
- 반 학생들이 후보 중 한명에 투표한다.
- 입력으로 반 학생들이 뽑은 후보 기호가 담긴 배열을 전달받는다.
- 누가 학급 회장에 당선되었는지를 출력해라
- 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정한다.
- 해쉬 맵 방식을 이용한다.

<br>

### :wrench: 알고리즘 설계

- 해쉬 맵을 이용해야하기때문에 중복된 키를 허용하지 않는 hash 맵을 생성한다.
- 전달받은 문자열을 순회하면서 해쉬 맵에 등록을 한다.
- 해쉬 맵의 key에 해당 후보가 있는지 검사한다.
- 처음 등록된 후보라면 key에 등록을 하고 value에 1을 할당한다.
- 그렇지 않다면,해당 후보의 키의 값에 1을 더해준다.
- 모든 동작이 끝난 후 에 해쉬 맵을 순회하면서 최대값을 파악한다.

<br>

### :hammer: 알고리즘 구현

```js
function solution(str) {
  let answer;
  let max = 0;

  const hash = new Map();

  for (let x of str) {
    if (hash.has(x)) {
      hash.set(x, hash.get(x) + 1);
    } else {
      hash.set(x, 1);
    }
  }

  for (let [key, value] of hash) {
    if (max < Number.parseInt(value)) {
      max = Number.parseInt(value);
      answer = key;
    }
  }

  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 정답
- 해쉬는 중복된 키를 허용하지 않으면서 값을 저장하기에 사물함 같은 느낌이든다.
- 해쉬는 자료구조 Map으로 쉽게 구현할수있다.
