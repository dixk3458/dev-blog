# 괄호 문자 제거

### :star: 문제 추상화

- 입력된 문자열에서 소괄호() 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하라

<br>

### :wrench: 알고리즘 설계

- 문자열을 담을 Stack을 생성한다.
- )라면 (가 나올때까지 pop()을 해준다.
- 그게 아니라면 push()

<br>

### :hammer: 알고리즘 구현

```js
function solution(str) {
  let answer;

  const stack = [];
  for (let s of str) {
    if (s === ')') {
      while (true) {
        if (stack.pop() === '(') {
          break;
        }
      }
    } else {
      stack.push(s);
    }
  }

  answer = stack.join('');

  return answer;
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 오답
- 다시 볼 문제
- 설계를 하지 못했다.
