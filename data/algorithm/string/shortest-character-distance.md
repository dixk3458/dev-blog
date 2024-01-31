# 가장 짧은 문자거리

### ⭐ 문제 추상화

- 문자열과 특정 문자가 입력되는데, 문자열의 각 문자가 특정 문자로부터 떨어진 최소거리 출력

### 🔧 알고리즘 설계

- 정답 배열을 담을 answer라는 빈 배열을 정의하자.
- 문자열을 오른쪽으로 순회하면서 왼쪽에 있는 특정 문자기준으로 떨어진 거리를 찾고
- 왼쪽으로 순회하면서 오른쪽에 있는 특정 문자기준으로 떨어진 거리를 찾아 최소값을 넣는다.

### 🔨 알고리즘 구현

```js
function solution(str, t) {
  const answer = [];

  let p = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === t) {
      p = 0;
      answer[i] = p;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
```

### ✅ 검증 및 트러블 슈팅

- 정답
- 다시 볼 문제이다.
- 특정 문자의 오른쪽 또는 왼쪽으로부터 떨어진 최소거리를 찾을때 좋은 방법이 떠오르지 않았다.
