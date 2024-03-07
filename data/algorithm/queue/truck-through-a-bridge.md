# 다리를 지나는 트럭

### 문제 추상화 ⭐

모든 트럭이 다리를 지나려면 몇 시간 걸리는가?

### 전략 🔧

- 큐를 이용하여 다리의 현재 상태를 재현한다는 발상으로 접근할 때 빠르고 깔끔하게 풀린다!

1. 입력값으로 주어진 다리의 길이만큼의 길이를 가진 배열 `bridge`를 생성한다.
   - 이 배열은 다리의 현재 상태를 나타낸다.
     - 배열의 0번 인덱스가 다리의 도착 지점이고, -1번 인덱스가 다리의 출발 지점이다.
     - 다음 트럭이 다리에 올라가면 다리의 -1번 인덱스에 추가된다.
     - 트럭은 매 초 한 칸씩 앞으로 이동한다. 즉, 인덱스가 하나씩 감소한다.
   - 처음에는 다리 위에 아무 트럭도 올라가 있지 않으므로 배열의 모든 요소는 0으로 초기화한다.
   - 배열의 끝에 새로운 요소를 추가하고, 배열의 맨 앞 요소를 꺼낼 것이므로 이 배열은 큐!
2. 현재 다리 위에 올라간 트럭의 하중을 나타내는 변수 `bridge_sum`을 생성한다.
   - 처음에는 다리 위에 아무 트럭도 올라가 있지 않으므로, 0으로 초기화한다.
3. 1초가 지났다. 첫 트럭을 다리의 출발 지점에 올린다.
   - 소요시간을 나타내는 `answer`를 1 증가시킨다.
   - `truck_weights` 배열의 맨 첫 요소가 첫 트럭이 된다.
     - `bridge` 배열의 끝에 이 요소를 `push()`하고,
     - `bridge_sum`에 이 요소를 더한다.
   - 다리 전체의 길이를 유지하기 위해 `bridge` 배열의 맨 첫 요소를 `shift()` 한다.
4. 다리 위에 트럭이 올라가 있는 동안, 즉 다리의 현재 하중(`bridge_sum`)이 0보다 클 동안 반복하여:
   - 우선 시간을 1초 증가시키고,
   - 다리의 맨 앞 요소를 `shift()`하고, 해당 요소만큼의 값을 `bridge_sum`에서 빼준다.
   - 현재 다리의 하중(`bridge_sum`)에 다음 트럭의 무게(`truck_weight[0]`)를 더했을 때 다리가 견딜 수 있는 전체 무게(`weight`)보다 작거나 같다면,
     - 다음 트럭을 `bridge` 배열에 `push()`하고, `bridge_sum`에 더한다.
   - 만약 전체 무게보다 크다면, 다음 트럭이 올라갈 수 없다는 뜻이므로,
     - `bridge` 배열에 0을 `push()`한다.
5. 다리의 현재 하중이 0이 되는 순간, 즉 모든 트럭이 다리를 다 건넌 순간 `answer`를 반환한다.

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

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;

  const bridge = new Queue();
  for (let i = 0; i < bridge_length; i++) {
    bridge.enqueue(0);
  }

  const queue = new Queue();

  for (let x of truck_weights) {
    queue.enqueue(x);
  }

  let sum = 0;

  answer = answer + 1;
  bridge.dequeue();

  const value = queue.dequeue().value;

  sum = sum + value;
  bridge.enqueue(value);

  while (sum !== 0) {
    answer = answer + 1;
    sum = sum - bridge.dequeue().value;
    if (queue.front && queue.front.value + sum <= weight) {
      const value = queue.dequeue().value;
      sum = sum + value;
      bridge.enqueue(value);
    } else {
      bridge.enqueue(0);
    }
  }

  return answer;
}

const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];

console.log(solution(bridge_length, weight, truck_weights));
```

### 시행 착오

접근방법은 맞았으나, 구현능력이 부족했다. 처음 작업이 필요하다면, 해주자.
