### 퀵 정렬

분할 정복 알고리즘을 이용한 매우 빠르지만 최악의 경우가 존재하는 불안정 정렬 알고리즘으로 O(n log n) 시간 복잡도를 가진다.
![img](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2Ffda7e6cb-ed04-4448-a88d-bb85efdeeffe%2FUntitled.png?table=block&id=af1ef9ae-4131-4171-9b10-73c88100e2d8&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=720&userId=&cache=v2)

```js
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  // 맨 앞을 기준
  const pivot = array[0];

  const left = [];
  const right = [];

  // 1부터 배열 끝까지 검사
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  console.log('left', left);
  const leftSorted = quickSort(left);
  console.log('leftsorted', leftSorted);
  const rightSorted = quickSort(right);

  return [...leftSorted, pivot, ...rightSorted];
}

console.log(quickSort([4, 7, 5, 1, 3]));
```
