# 주식 가격

### 문제 추상화 ⭐

각 초에 해당하는 가격이 몇초 동안 유지되는지 반환하는 문지이다.

### 전략 🔧

1. 이중 for문을 돌면서 해당 초를 기준으로 그 이후 초들을 탐색하자.

### 구현 🔨

```jsx
function solution(prices) {
  const answer = [];
  for (let i = 0; i < prices.length; i++) {
    let count = 0;
    for (let j = i + 1; j < prices.length; j++) {
      count++;
      if (prices[i] > prices[j]) {
        break;
      }
    }
    answer.push(count);
  }
  return answer;
}

const prices = [1, 2, 3, 2, 3];
console.log(solution(prices));
```

### 시행착오

이 문제는 Stack or Queue 주제로 풀어야하는데, 도저히 접근을 할 수 없었다. 해당 자료구조를 이용해서 푸는 방법이 떠오르지 않아 이중 for문을 사용했다.
