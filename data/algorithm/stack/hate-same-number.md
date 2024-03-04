# 같은 숫자는 싫어

### 문제 추상화 ⭐

0~9사이의 숫자로 이루어진 배열이 주어지면 배열에서 연속적으로 나타나는 숫자는 하나만 남기고 저부 제거하자.

배열 arr을 순회하면서 원소를 담아 answr 배열을 만드는데, 만약 바로 직전에 값이 넣으려는 값과 동일하다면 넣지말아주자. 즉 Stack을 이용해야하는것을 알 수 있다.

### 전략 🔧

1. 스택은 배열을 이용해 구현한다. 즉 answer 배열을 이용해주자.
2. arr을 순회하면서 이전 값에 따라서 값을 넣을지 말지 결정하자.

### 구현 🔨

```jsx
function solution(arr) {
  const answer = [];

  for (let x of arr) {
    if (answer.length === 0) {
      answer.push(x);
    } else if (answer[answer.length - 1] !== x) {
      answer.push(x);
    }
  }

  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
```

### 시행착오

처음 문제를 풀때 Stack이라고 pop()을 생각했는데, 굳이 원소를 뺄 필요가 없었다. top만 확인하면 되기때문에 마지막 인덱스 번호만 확인해주자.
