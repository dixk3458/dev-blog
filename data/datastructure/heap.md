# 힙 개념

힙은 이진 트리의 형태를 가지며 우선순위가 높은 요소가 먼저 나가기 위해 요소가 삽입, 삭제 될때 바로 정렬되는 특징이 있는 자료구조이다.

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F2b9ee0dd-375e-4bbb-9b76-d295f47aa46e%2FUntitled.png?table=block&id=16a2e712-0ad8-4a17-a319-68374b9d8084&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=630&userId=&cache=v2)

### 힙의 특징

- 우선순위가 높은 요소가 먼저 나가는 특징이 있다.
- 루투가 가장 큰 값이 되는 최대 힙과 루트가 가장 작은 값이 되는 최소 힙이 있다.
- 우선순위 큐를 구현할때 유용하게 사용되는 자료구조이다.

<aside>
💡 **우선순위 큐는 자료구조가 아니라 개념이다.**

</aside>

### 힙 요소 추가 알고리즘

1. 요소가 추가될 때는 트리의 가장 마지막 정점에 위치한다.
2. 추가 후 부모 정점보다 우선순위가 높다면 부모 정점과 순서를 바꾼다.
3. 이 과정을 반복하면 우선순위가 높은 정점이 루트가 된다.

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2Ffb5f4bf1-3f44-4cb9-887d-5fdb0ac1c6c5%2FUntitled.png?table=block&id=0a1800a8-e739-4c88-89f9-a654ce6356e5&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=1530&userId=&cache=v2)

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F7c1e32d2-c324-4299-a40e-d98a6b506071%2FUntitled.png?table=block&id=5badcbab-f059-47b3-bf60-8b4f2f963721&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=1530&userId=&cache=v2)

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2Fe821b359-72c6-48fc-a44c-e0f11879b90a%2FUntitled.png?table=block&id=207b2a41-30a0-41f5-b07f-478df72f0135&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=1530&userId=&cache=v2)

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F448eda4b-2c61-4915-99a0-0ba5b6165db8%2FUntitled.png?table=block&id=f5890773-e6e8-4478-8e54-3d681c975291&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=1530&userId=&cache=v2)

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F068ae7a7-e8a5-4d23-8012-2775aff7a46c%2FUntitled.png?table=block&id=3bf06fa7-fad6-4f7e-846c-f6313abb9882&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=1530&userId=&cache=v2)

### 힙 요소 삭제 알고리즘

1. 루트 정점의 요소가 삭제된다.
2. 가장 마지막 정점이 루트 요소에 위치한다.
3. 루트 정점의 두 자식 정점 중 우선순위가 높은 정점과 바꾼다.
4. 두 자식 정점이 우선순위가 더 낮을 때 까지 반복한다.
   ![undefined](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F70a82632-ef63-4c8e-aba8-e0089cc1992a%2FUntitled.png?table=block&id=fb8528e7-ea69-47e3-a25a-445d2dd1a34e&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=1530&userId=&cache=v2)
   ![undefined](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2Fe02d9d0d-bcf1-426b-9351-44ca6dbad75e%2FUntitled.png?table=block&id=0fe14954-9e1a-4f0b-b392-ebcbd3275888&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=1530&userId=&cache=v2)
   ![undefined](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2Fe1975f43-7f07-40da-8580-00f177d97fa1%2FUntitled.png?table=block&id=7bc47e9e-a574-493a-aac6-4122a6e3752f&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=1530&userId=&cache=v2)
   ![undefined](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F10215427-88b7-44f9-8b7b-bdb1b48ec959%2FUntitled.png?table=block&id=e236cfd5-903c-44a7-8880-8e3dc59d7197&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=1530&userId=&cache=v2)

![undefined](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F561c118e-a526-4db5-902c-92eccfb3f9e7%2FUntitled.png?table=block&id=7015e8db-642d-455f-bbc7-0add0c36d63e&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=1530&userId=&cache=v2)

### 구현 방법

```jsx
class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    // 1번째 인덱스에 있는 값을 삭제할것 (Root)
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;

        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;

        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}
```
