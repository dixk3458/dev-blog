# Tree 개념

Tree는 방향 그래프의 일종으로 정점을 가리키는 간선이 하나 밖에 없는 구조를 가지고 있다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3cf9fec-22fc-4497-8749-8a20369906be/a9b805b7-fb1b-46b0-84a2-cf7c830b99b1/Untitled.png)

### 트리의 특징

- 트리는 루트 정점 제외한 모든 정점은 하나의 부모 정점을 가진다.
- 정점이 N개인 트리는 반드시 N-1개의 간선을 가진다.
- 루트에서 특정 정점으로 가는 경로는 유일하다.

### 이진트리

이진트리는 각 정점이 최대 2개의 자식을 가지는 트리를 의미합니다. 이진트리의 종류는 완전 이진트리, 포화 이진트리, 편향트리가 있습니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3cf9fec-22fc-4497-8749-8a20369906be/a01ab558-9743-40e3-ba93-8e556fae5f16/Untitled.png)

### 이진트리의 특징

- 정점이 N개인 이진트리는 최악의 경우 높이가 N이 될수있습니다.
- 정점이 N개인 포화 또는 완전 이진 트리의 높이는 logN입니다.
- 높이가 h인 포화 이진 트리는 2^h -1개의 정점을 가진다.

### 이진트리의 활용

이진트리는 이진 탐색 트리, 힙, AVL 트리, 레드 블랙 트리에서 활용된다.

### 트리 구현방법

1. 인접 행렬
2. 인접 리스트

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3cf9fec-22fc-4497-8749-8a20369906be/ec66413e-d342-44a9-8035-06b9e973f93f/Untitled.png)

### 이진트리 구현방법

1. 배열
2. 링크가 두개인 연결리스트

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3cf9fec-22fc-4497-8749-8a20369906be/9e3da946-e89c-4e56-8006-aa446f778e31/Untitled.png)

```jsx
const arr = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
];

function solution(arr) {
  const array = Array.from(Array(5).fill(0), () => Array(5).fill(0));

  for (let a of arr) {
    const [x, y] = a;
    array[x][y] = 1;
  }

  const list = Array.from(Array(5).fill(0), () => []);

  for (let a of arr) {
    const [x, y] = a;
    list[x].push(y);
  }
  console.log(array);
  console.log(list);
}

console.log(solution(arr));
```
