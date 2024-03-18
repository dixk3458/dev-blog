### 버블 정렬

서로 인접한 두 요소를 검사하여 정렬하는 알고리즘으로 O(n^2) 시간 복잡도가 걸린다.

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2Fdcd11a6b-2867-45e6-966d-32707bfbb61a%2FUntitled.png?table=block&id=a21b00df-173d-4a88-af36-fc7a7feec6b2&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=880&userId=&cache=v2)

```jsx
const array = [7, 4, 5, 1, 3];

function bubble(array) {
  // 마지막 인덱스부터 1번째 인덱스까지만 동작
  for (let i = array.length - 1; i > 0; i--) {
    console.log('i', i);
    for (let j = 0; j < i; j++) {
      console.log(j);
      if (array[j] > array[j + 1]) {
        const temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

console.log(bubble(array));
```
