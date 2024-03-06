# 프로세스

### 문제 추상화 ⭐

운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지 알아내라.

1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼낸다.
2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣는다.
3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행한다.
   1. 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료

### 전략 🔧

1. 큐를 생성한다.
2. 큐에 데이터를 넣을때 기존 자신의 인덱스 위치까지 포함시켜주자.[priority,index]
3. 큐에 데이터가 있을때까지 반복한다.

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

  check(node) {
    let currentNode = this.front;
    for (let i = 0; i < this.size; i++) {
      if (node.value[0] < currentNode.value[0]) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }

    return false;
  }
}

function solution(priorities, location) {
  let answer = 0;

  const queue = new Queue();

  priorities.forEach((value, index) => queue.enqueue([value, index]));

  while (queue.size !== 0) {
    const node = queue.dequeue();
    const isCheck = queue.check(node);

    console.log('현재 노드', node);

    if (isCheck) {
      queue.enqueue(node.value);
    } else {
      // 나보다 큰게 없으면
      // 검사
      answer = answer + 1;
      if (node.value[1] === location) {
        return answer;
      }
    }
  }

  return answer;
}
```

### 시행착오

Queue에서 dequeue를 할때 size가 0이라면 rear에 null처리를 안해주고 enqueue를 할때 node 자체를 넣어서 시간을 허비했다.
나는 Queue를 직접 구현했지만, 아래 처럼 배열을 이용해도 된다.

```js
function solution(priorities, location) {
  var list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  var count = 0;
  while (true) {
    var cur = list.splice(0, 1)[0];
    if (list.some(t => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}
```
