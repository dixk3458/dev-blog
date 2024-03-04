# Stack 개념

- Last In First Out이라는 개념을 가진 선형 자료구조
- 바닥이 막힌 상
- Stack의 동작으로 Push와 Pop이 있다.

### 스택의 표현 방법

1. Array
2. Linked List

일반적으로 스택은 Array로 표현한다.

```jsx
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    if (!value) {
      return;
    }
    const newNode = new Node(value);

    if (this.size === 0) {
      this.top = newNode;
    } else {
      // 기존에 top이 가리키던 Node위에 쌓아주자.
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size = this.size + 1;
  }

  pop() {
    if (this.size === 0) {
      return;
    }
    const removeNode = this.top;
    this.top = this.top.next;
    this.size = this.size - 1;

    return removeNode;
  }
}
```
