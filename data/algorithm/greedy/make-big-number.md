# 큰 수 만들기

어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

### 제한 조건

- number는 2자리 이상, 1,000,000자리 이하인 숫자입니다.
- k는 1 이상 `number의 자릿수` 미만인 자연수입니다.

### 입출력 예

| number       | k   | return   |
| ------------ | --- | -------- |
| "1924"       | 2   | "94"     |
| "1231234"    | 3   | "3234"   |
| "4177252841" | 4   | "775841" |

### 문제 추상화 ⭐

문자열 숫자에서 k개의 수를 제거했을때 얻을 수 있는 가장 큰 수 반환하기

### 전략 🔧

1. k번을 순회하는데, 제일 큰 수를 만들기 위해 가장 적절한 값을 제거해야한다.
2. 즉 Greedy 알고리즘이다.
3. 문자열을 돌면서 Stack에 push하는데, push하기전 검사부터하자
   1. 즉 더 삭제할 수 있으면서, Stack의 제일 위에있는 값이 현재 값보다 작을때까지 pop();
4. 계속 작아지는 수를 대비해 마지막에 count가 k보다 작을때까지 더 pop()을 해주자.

### 구현 🔨

```jsx
function solution(number, k) {
  let answer;

  const stack = [];
  let count = 0;

  for (let x of number) {
    while (count < k && stack[stack.length - 1] < x) {
      stack.pop();
      count = count + 1;
    }
    stack.push(x);
  }

  for (let i = count; i < k; i++) {
    stack.pop();
  }
  answer = stack.join('');

  return answer;
}

console.log(solution('987654', 4));
```

### 시행 착오

while() 보다 for가 더 빠르다는것을 알았다.
