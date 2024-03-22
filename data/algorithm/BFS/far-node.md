# 가장 먼 노드

n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.

노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.

### 제한사항

- 노드의 개수 n은 2 이상 20,000 이하입니다.
- 간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
- vertex 배열 각 행 [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.

### 입출력 예

| n   | vertex                                                   | return |
| --- | -------------------------------------------------------- | ------ |
| 6   | [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]] | 3      |

### 입출력 예 설명

예제의 그래프를 표현하면 아래 그림과 같고, 1번 노드에서 가장 멀리 떨어진 노드는 4,5,6번 노드입니다.

![img](https://grepp-programmers.s3.amazonaws.com/files/ybm/fadbae38bb/dec85ab5-0273-47b3-ba73-fc0b5f6be28a.png)

### 문제 추상화 ⭐

1번 노드에서 가장 멀리 떨어진 노드의 개수를 구하는 문제이다.

### 전략 🔧

1. 주어진 vertex 배열을 이용해 그래프를 구현한다.
2. 각 정점마다 최단거리를 저장할 distance 배열을 생성한다.
3. 1번 노드에서 n번 정점까지 최단 거리를 구해 distance[n]배열에 넣는다.
4. distance 배열에서 최소값을 구하고 개수를 파악한다.
5. 최단경로찾기문제이기때문에 BFS 알고리즘을 이용했다.

### 구현 🔨

```jsx
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    this.size = this.size + 1;
  }

  dequeue() {
    if (this.size === 0) {
      return;
    }

    const removeNode = this.front;

    this.front = this.front.next;
    this.size = this.size - 1;

    if (this.size === 0) {
      this.rear = null;
    }

    return removeNode;
  }
}

function solution(n, edge) {
  let answer;

  // 인접 리스트를 이용해 그래프 구현
  const graph = Array.from(Array(n + 1).fill(0), () => []);
  for (let [from, to] of edge) {
    graph[from].push(to);
    graph[to].push(from);
  }

  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  // BFS를 이용해서 동일 너비를 우선 탐색하면서 한 칸 씩 넓혀감
  // BFS는 Queue를 이용해서 구현가능

  // 1번이 시작
  // const queue = [1]
  const queue = new Queue();

  queue.enqueue(1);

  // Queue가 비어있을때까지 탐색
  while (queue.size !== 0) {
    // 시작
    const from = queue.dequeue().value;

    // from에서 어디로 갈 수 있는지 알 수있다.
    for (let to of graph[from]) {
      // to로 간적이 없을때만
      if (distance[to] === 0) {
        queue.enqueue(to);
        // to까지의 거리는 현재 출발지까지의 거리 + 1
        distance[to] = distance[from] + 1;
      }
    }
  }

  const max = Math.max(...distance);
  answer = distance.filter(num => num === max).length;

  return answer;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
```

### 시행착오

그래프를 구현하고 BFS알고리즘을 구현해야한다는것까지 알았지만, 구현해 실패했다.
