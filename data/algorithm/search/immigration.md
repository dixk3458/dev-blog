# 입국 심사(이진 탐색)

n명이 입국심사를 위해 줄을 서서 기다리고 있습니다. 각 입국심사대에 있는 심사관마다 심사하는데 걸리는 시간은 다릅니다.

처음에 모든 심사대는 비어있습니다. 한 심사대에서는 동시에 한 명만 심사를 할 수 있습니다. 가장 앞에 서 있는 사람은 비어 있는 심사대로 가서 심사를 받을 수 있습니다. 하지만 더 빨리 끝나는 심사대가 있으면 기다렸다가 그곳으로 가서 심사를 받을 수도 있습니다.

모든 사람이 심사를 받는데 걸리는 시간을 최소로 하고 싶습니다.

입국심사를 기다리는 사람 수 n, 각 심사관이 한 명을 심사하는데 걸리는 시간이 담긴 배열 times가 매개변수로 주어질 때, 모든 사람이 심사를 받는데 걸리는 시간의 최솟값을 return 하도록 solution 함수를 작성해주세요.

### 문제 추상화 ⭐

- 모든 사람이 심사를 받는데 걸리는 시간을 최소로 하고 싶다.

### 전략 🔧

1. 제한사항을 보면 숫자가 굉장히 큰 것을 보아 이진 탐색을 의심할 수 있다.
2. 특정 값을 찾는것이 아니라, 가능한 값중 최소 값을 찾는것이다.
3. 최소 시간 ~ 최대 시간사이에서 조건에 만족하는 시간을 찾자

### 구현 🔨

```jsx
function solution(n, times) {
  let answer = Number.MAX_SAFE_INTEGER;

  const sortedTimes = times.sort((a, b) => a - b);

  let left = 1;
  let right = sortedTimes[sortedTimes.length - 1] * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const sum = sortedTimes.reduce(
      (acc, time) => acc + Math.floor(mid / time),
      0
    );

    // n만큼 처리를 못했기 때문에
    // mid분 이상이 필요하다.
    if (sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  answer = left;
  return answer;
}

console.log(solution(6, [7, 10]));
```

### 시행 착오

접근을 하지 못했고, 이진 탐색을 떠올릴 수 없었다.
