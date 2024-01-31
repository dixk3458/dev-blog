# 올바른 괄호

### :star: 문제 추상화

- 입력 받은 괄호가 올바른 괄호라면 YES를 아니라면 NO를 출력하라

<br>

### :wrench: 알고리즘 설계

- YES 또는 NO를 반환해야하기때문에, 변수 answer를 YES로 초기화하자.
- 괄호를 검사할 자료구조 Stack을 구현하자.(배열)
- 입력받은 문자열을 순회하면서 ( 라면 Stack에 push를 한다.
- ) 라면 Stack에서 pop을 해준다.
- 만약 Stack의 길이가 0일때 ) 라면 NO를 반환해준다.
- 마지막에 Stack의 길이가 0이라면 YES를 반환한다. 아니라면 NO를 반환

<br>

### :hammer: 알고리즘 구현

```js
function solution(str) {
  let answer = 'YES';

  const stack = [];

  for (let s of str) {
    if (s === '(') {
      stack.push(s);
    } else {
      if (stack.length === 0) {
        return 'NO';
      }
      stack.pop();
    }
  }

  if (stack.length !== 0) {
    return 'NO';
  }

  return answer;
}

let a = '(()(()))(()';
console.log(solution(a));

let b = '()';
console.log(solution(b));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 정답
