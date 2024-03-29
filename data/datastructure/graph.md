# 그래프 개념

그래프는 정점과 간선으로 이루어진 비선형 자료구조이다.
간선은 정점과 정점사이를 연결하는 선을 말한다.

### 그래프의 특징

- 정점은 여러개의 간선을 가질 수 있다.
- 크게 방향 그래프와 무방향 그래프로 나눌 수 있다.
- 간선은 가중치를 가질 수 있다.
- 사이클이 발생할 수 있다.

### 그래프의 종류

- `무방향 그래프` - 간선으로 이저니 정점끼리 양방향으로 이동이 가능한 그래프 (양방향 통행 도로)
- `방향 그래프` - 간선에 방향성이 존재하는 그래프이다. (일방 통행)
- `연결 그래프` - 모든 정점이 서로 이동 가능한 그래프
- `비연결 그래프` - 특정 정점쌍 사이에 간선이 존재하지 않는 그래프
- `완전 그래프` - 모든 정점끼리 연결된 그래프

### 그래프의 구현방법

그래프는 인접 행렬과 인접 리스트 방식으로 그래프를 구현할 수 있다.

인접 행렬은 2차원 배열을 이용해 간단히 구현할 수 있다는 장점이 있지만, 정점의 개수가 많아 지면 그래프를 구현하는데에 있어 불필요한 메모리가 발생하고 접근하는데 O(n^2)가 걸린다.

반면 인접 리스트는 상대적으로 구현이 어렵지만, 특정 정점에 접근이 용이해 정점의 개수가 많은경우 장점을 발휘한다.

### 인접 행렬을 이용한 구현

```jsx
const array = [
  [1, 2],
  [1, 3],
  [1, 5],
  [2, 3],
  [3, 4],
  [4, 5],
];

// 정점의 개수+1 X 정점의 개수+1 크기의 배열을 만듬
const graph = Array.from(Array(array.length).fill(0), () =>
  Array(array.length).fill(0)
);

for (let [x, y] of array) {
  graph[x][y] = 1;
  graph[y][x] = 1;
}

console.log(graph);
```

### 인접 리스트를 이용한 구현

```jsx
const array = [
  [1, 2],
  [1, 3],
  [1, 5],
  [2, 3],
  [3, 4],
  [4, 5],
];

// 정점의 개수+1 X 정점의 개수+1 크기의 배열을 만듬
const graph = [[]];

for (let [x, y] of array) {
  if (graph[x]) {
    graph[x].push(y);
  } else {
    graph[x] = [y];
    graph[y] = [x];
  }
}

console.log(graph);
```
