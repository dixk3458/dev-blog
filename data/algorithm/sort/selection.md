### 선택 정렬

선택한 요소와 가장 우선순위가 높은 요소를 교환하는 정렬 알고리즘으로 O(n^2)의 시간복잡도가 걸린다.
![img](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F6ea58098-c1f5-4d3c-9e1b-4d646f689183%2FUntitled.png?table=block&id=d7161e27-dbd0-4031-9fd7-8adc66fde148&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=1300&userId=&cache=v2)
![img](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F6ea58098-c1f5-4d3c-9e1b-4d646f689183%2FUntitled.png?table=block&id=d7161e27-dbd0-4031-9fd7-8adc66fde148&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=1300&userId=&cache=v2)

```js
const array = [7, 4, 5, 1, 3];

function select(array) {
  for (let i = 0; i < array.length - 1; i++) {
    // i요소를 우선순위 높은요소의 index와 교체
    let minIndex = i + 1;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array;
}

console.log(select(array));
```
