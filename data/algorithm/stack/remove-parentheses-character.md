# 괄호문자제거

입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는
프로그램을 작성하세요.
▣ 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
남은 문자만 출력한다.
▣ 입력예제 1
(A(BC)D)EF(G(H)(IJ)K)LM(N)
▣ 출력예제 1
EFLM

### 문제 추상화 ⭐

괄호 사이의 문자를 제거하고 남은 문자를 출력하는 문제이다.

### 전략 🔧

문제에서 괄호가 언급되고, 괄호 사이의 문자를 제거하는것을 보아 자료구조 Stack유형의 문제임을 알 수 있다.

1. )가 아닌 다른 문자를 만나면 Stack에 삽입한다.
2. )를 만나면 (까지 pop한다.

### 구현 🔨

```jsx
// Stack을 이용하는게 좋겠다.
// 문자열을 순회하면서 )가 아니라면 삽입하고 )라면 (가 나올때까지 pop()한다.

function solution(s) {
  let answer;

  const stack = [];

  for (let x of s) {
    if (x !== ')') {
      stack.push(x);
    } else {
      while (true) {
        const popped = stack.pop();
        if (popped === '(') {
          break;
        }
      }
    }
  }

  answer = stack.join('');

  return answer;
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));
```

### 시행착오

쉽게 풀었다.
