# 배상 비용 최소화

### **문제 설명**

OO 조선소에서는 태풍으로 인한 작업지연으로 수주한 선박들을 기한 내에 완성하지 못할 것이 예상됩니다. 기한 내에 완성하지 못하면 손해 배상을 해야 하므로 남은 일의 작업량을 숫자로 매기고 배상비용을 최소화하는 방법을 찾으려고 합니다.

**_배상 비용은 각 선박의 완성까지 남은 일의 작업량을 제곱하여 모두 더한 값이 됩니다._**

조선소에서는 1시간 동안 남은 일 중 하나를 골라 작업량 1만큼 처리할 수 있습니다. 조선소에서 작업할 수 있는 N 시간과 각 일에 대한 작업량이 담긴 배열(works)이 있을 때 배상 비용을 최소화한 결과를 반환하는 함수를 만들어 주세요. 예를 들어, N=4일 때, 선박별로 남은 일의 작업량이 works = [4, 3, 3]이라면 배상 비용을 최소화하기 위해 일을 한 결과는 [2, 2, 2]가 되고 배상 비용은 22 + 22 + 22 = 12가 되어 12를 반환해 줍니다.

### 제한사항

- 일할 수 있는 시간 N : 1,000,000 이하의 자연수
- 배열 works의 크기 : 1,000 이하의 자연수
- 각 일에 대한 작업량 : 1,000 이하의 자연수

### 입출력 예

| N   | works   | result |
| --- | ------- | ------ |
| 4   | [4,3,3] | 12     |
| 2   | [3,3,3] | 17     |

### 입출력 예 설명

입출력 예 #1

문제의 예제와 같습니다.

입출력 예 #2

배상 비용을 최소화하기 위해 일을 한 결과는 [2, 2, 3]가 되고 배상 비용은 22 + 22 + 32 = 17가 되어 17를 반환해 줍니다.

### 문제 추상화 ⭐

입력 받는 N만큼 works 배열에서 1만큼 일처리를 할 수있는데, 만약 모두 처리하지 못하면 배상금을 줘야한다. 이 최소 배상금을 반환하자.

### 전략 🔧

1. 최소 배상금을 주기 위해선 works중 가장 큰 값을 처리해야한다.
2. n번의 반복마다 가장 큰 값을 처리하고 정렬이 발생 할 수있도록 자료구조 Heap을 생성하자.

### 구현 🔨

```jsx
class Heap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && value > this.heap[parentIndex]) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop();
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

function solution(n, works) {
  if (works.reduce((a, b) => a + b, 0) <= n) {
    return 0;
  }

  let answer = 0;

  const heap = new Heap();
  for (let x of works) {
    heap.push(x);
  }

  for (let i = 0; i < n; i++) {
    const value = heap.pop();
    heap.push(value - 1);
  }

  answer = heap.heap.reduce((a, b) => a + b ** 2);
  return answer;
}

const n = 4;
const works = [4, 3, 3];
console.log(solution(n, works));
```

### 시행 착오

남은 일 처리량이 n보다 작아 배상금이 0일 수도 있는 경우를 놓쳤다.
