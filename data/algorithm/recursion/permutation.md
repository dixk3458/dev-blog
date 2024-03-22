# 순열

순열의 시간복잡도는 O(n!) 이다.

```jsx
// 배열 arr에서 n개를 뽑아주세요
function permutation(array, n) {
  let answer;
  if (n === 1) {
    answer = array.map(v => [v]);
    return answer;
  }

  let result = [];

  array.forEach((fixed, idx, arr) => {
    // 현재 idx 제외한 요소를 추출한다.
    // 전체 arr에서 idx번째 인덱스만 제외하고 나머지로 구성된 배열 생성
    const rest = arr.filter((_, index) => index !== idx);

    // 선택된 요소를 제외하고 재귀 호출
    // 나머지 배열에서 n-1개 뽑는것
    const perms = permutation(rest, n - 1);

    const combine = perms.map(v => [fixed, ...v]);

    result.push(...combine);
  });

  return result;
}

console.log(permutation([3, 4, 5, 8], 2));
```