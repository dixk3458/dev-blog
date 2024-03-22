# 조합

조합의 시간복잡도는 O(2^n) 이다.

```jsx
function combination(arr, n) {
  if (n === 1) {
    return arr.map(v => [v]);
  }

  const result = [];

  arr.forEach((fixed, idx, arr) => {
    // 현재 index이후 요소를 추출

    // idx + 1번째 부터 끝까지
    // 즉 idx 이후 요소 전부
    const rest = arr.slice(idx + 1);

    const combis = combination(rest, n - 1);

    const combine = combis.map(v => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}

console.log(combination([3, 4, 5, 8], 2));

```