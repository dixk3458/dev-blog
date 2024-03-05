# Queue 개념

큐는 First In First Out이라는 특징을 가진 선형 자료구조로 front와 rear로 구성되어있다.

rear를 통해 데이터가 queue에 enqueue 되고 front를 통해 데이터가 dequeue된다.

1. 선형 큐
2. 원형 큐

### 큐의 구현 방법

1. Array
2. Linked List

배열을 이용해 큐를 구현할 경우 dequeue과정에서 시간복잡도 O(n)이 걸린다.

`shift()` 메서드를 이용해 dequeue를 구현할 수 있지만, 배열의 맨 앞의 요소를 삭제하고 뒤 요소들을 앞당기는 과정에서 O(n)이 걸린다.

그렇기에 Linked List를 이용해 구현하는것을 추천한다.

### 큐의 활용 예시

1. BFS 알고리즘
2. 선입선출 시스템

### 배열을 이용한 Queue

JavaScript에서는 Queue를 독립적으로 제공하지 않지만 배열을 이용해 기능을 흉내낼수있다. 
배열의 메서드중 `shift()`를 이용해 Queue의 dequeue를 수행하고 `push()`를 이용해 enqueue를 수행할수있다.

하지만 문제가 있다. 원래 Queue 자료구조의 시간복잡도와 상당한 차이가 발생한다. 예를들어 `shift()`를 이용해 배열의 맨 앞의 원소를 제거할때 그 뒤 나머지 원소들의 재정렬이 이루어진다. 성능을 높이기위해선 Queue를 직접 구현하는것을 추천한다.

### 구현 방법

```jsx
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(data) {
    const newNode = new Node(data);

    // front가 아무것도 가리키지 않는다면, 참조값을 주어 가리키게 해주자.
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      // rear가 가리키는 곳으로 가서 next에 새로운 노드의 참조를 주어 연결시키자.
      this.rear.next = newNode;
      this.rear = newNode;
    }

    this.size = this.size + 1;
  }

  dequeue() {
    if (!this.front) {
      return null;
    }

    // 삭제된거
    const removeNode = this.front;
    this.front = this.front.next;
    // 삭제하고 다음 값이 없다면, 비어있는 노드처리
    if (!this.front) {
      this.rear = null;
    }

    this.size = this.size - 1;
    return removeNode.data;
  }
}

const queue = new Queue();

function makeQueue(arr) {
  for (let x of arr) {
    console.log(x);
    queue.enqueue(x);
  }

  return queue;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(makeQueue(arr));

```