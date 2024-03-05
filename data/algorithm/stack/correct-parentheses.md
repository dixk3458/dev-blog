# 올바른 괄호

### 문제 추상화 ⭐

전달받은 문자열이 올바른 괄호인지 아닌지 판단해야한다.
보통 괄호 문제는 자료구조 Stack을 이용하는것이 대부분이다.

### 전략 🔧

1. `true` 또는 `false`를 반환해야하기때문에 answer를 true로 초기화한후에 검사를 진행하면서 실패하면 false를 반환해주자.
2. 자료구조 stack을 만들어주자.
3. 문자열을 순회하면서 “(”라면 push를 “)”라면 pop을 해주자.

### 구현 🔨

```jsx
function solution(s) {
  let answer = true;

  const stack = [];

  for (let x of s) {
    if (x === '(') {
      stack.push(x);
    } else {
      // 아무것도 없는데 pop을 해서는 안된다. 즉 올바르지 않은 괄호
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  // 올바른 괄호라면 stack이 비어있어야한다.
  if (stack.length !== 0) {
    console.log(stack);
    return false;
  }

  return answer;
}

const s = '(())()';
console.log(solution(s));
```

### 시행착오

이 문제는 이전에 풀었던 문제로 쉽게 해결했다. 시행착오없이 깔끔하게 문제를 풀었다.
