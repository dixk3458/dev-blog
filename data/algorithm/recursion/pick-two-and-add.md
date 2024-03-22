# 두 개 뽑아서 더하기

정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

---

### 제한사항

- numbers의 길이는 2 이상 100 이하입니다.
  - numbers의 모든 수는 0 이상 100 이하입니다.

---

### 입출력 예

| numbers     | result        |
| ----------- | ------------- |
| [2,1,3,4,1] | [2,3,4,5,6,7] |
| [5,0,2,7]   | [2,5,7,9,12]  |

### 문제 추상화 ⭐

배열 numbers에서 2개를 뽑아 더해서 만들 수 있는 모든 수를 오름차순 배열에 담아 반환하는문제

### 전략 🔧

1. 순서를 따지면서 2개를 뽑아야하기때문에 combination을 이용한다.
2. 조합을 구한다음 reduce를 이용해 합으로 이루어진 배열을 만든다.
3. 중복된 합을 제거한다.

### 구현 🔨

```jsx
function combination(array, n) {
  let answer;

  if (n === 1) {
    answer = array.map(v => [v]);
    return answer;
  }

  const result = [];

  array.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combins = combination(rest, n - 1);
    const combine = combins.map(v => [fixed, ...v]);
    result.push(...combine);
  });
  answer = result;

  return answer;
}

function solution(numbers) {
  let answer;
  // numbers에서 2개를 뽑아 만든 조합으로 더해주자.
  const combins = combination(numbers, 2).map(arr => {
    return arr.reduce((a, b) => a + b, 0);
  });

  const set = new Set(combins);
  answer = [...set].sort((a, b) => a - b);
  return answer;
}
```

### 시행착오

아직도 재귀함수에 어려움을 겪고있어 코드를 외운것을 기반으로 풀었다.
