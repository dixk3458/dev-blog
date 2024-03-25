# 후위식 연산

후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

▣ 입력설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
식은 1~9의 숫자와 +, -, \*, / 연산자로만 이루어진다.

▣ 출력설명
연산한 결과를 출력합니다.

▣ 입력예제 1
352+\*9-

▣ 출력예제 1
12

### 문제 추상화 ⭐

입력을 받은 후위식의 결과를 반환하라.

### 전략 🔧

후위식 연산은 자료구조 Stack을 이용해 쉽게 해결할 수 있다.

1. 자료구조 Stack을 생성한다.
2. 입력된 값을 순회하면서 연산 기호가 아니라면 push하고 연산기호라면 두개를 pop하고 해당 연산을 한 후 결과를 다시 push한다.

### 구현 🔨

```jsx
function solution(s) {
  let answer;

  const stack = [];

  for (let x of s) {
    // 숫자라면
    if (!isNaN(x)) {
      stack.push(x);
    } else {
      const right = parseInt(stack.pop());
      const left = parseInt(stack.pop());
      switch (x) {
        case '+':
          stack.push(left + right);
          break;
        case '-':
          stack.push(left - right);
          break;
        case '*':
          stack.push(left * right);
          break;
        case '/':
          stack.push(left / right);
          break;
        default:
          throw new Error('잘못된 연산자입니다.');
      }
    }
  }
  // answer = stack.join();
  answer = stack[0];

  return answer;
}

console.log(solution('82+59-/'));
```

### 시행착오

문자열을 순회하면서 순간 숫자인지 아닌지 판별하는 방법을 잊어버렸다. isNaN()
