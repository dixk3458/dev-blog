# 재귀함수 개념

재귀함수란 자기 자신을 호출하는 함수를 말하며 함수 호출은 Call Stack에 쌓이기 때문에 스택 자료구조와 유사하게 동작한다.
함수형 프로그래밍에선 루프 구현을 재귀로 구현하는 경우가 많다. 재귀함수는 무한 루프에 빠질 가능성이 높기때문에 탈출문을 적절하게 사용해줘야한다. 재귀함수를 잘 알아두면 코딩테스트에서 유용하게 활용 가능하다.

### Javascript에서의 재귀함수

- Call Stack에 제한이 있다.
- 꼬리 재귀가 제공되지 않는다.
- 성능이 좋지 않다.

### 재귀함수의 장점을 보여주는 알고리즘

- Union-Find
- DFS
- Backtracking

### 재귀함수 예시 - 피보나치 수열

피보나치 수열은 앞 두항의 합이 뒤 항의 값이 되는 수열이다.

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F370ecab6-577b-4684-a819-5f69d24f1652%2FUntitled.png?table=block&id=1fbd9ee9-19cb-4c9b-a7a8-c8a0b608f217&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=770&userId=&cache=v2)

```jsx
// 피보나치 수열
// 1 1 2 3 5 8 13

function fibonacci(x) {
  if (x <= 2) {
    return 1;
  }

  return fibonacci(x - 1) + fibonacci(x - 2);
}

console.log(fibonacci(7)); //13
```

### 재귀함수 예시 - 변수 없는 합병 정렬

```jsx
function merge(a, b) {
  if (a.length === 0) {
    return b;
  } else if (b.length === 0) {
    return a;
  } else if (a[0] < b[0]) {
    return [a[0], ...merge(a.slice(1), b)];
  } else {
    return [b[0], ...merge(a, b.slice(1))];
  }
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const mid = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
  }
}

console.log(mergeSort([21, 10, 12, 20, 25, 13, 15, 22]));
```

### 재귀함수 예시 - 트리 순회

트리 순회는 자료구조 트리에서 각 노드를 한번씩 탐색하는 알고리즘이다. 재귀함수를 이용해 트리를 순회할 수 있다.

1. 전위 순회(preorder)
2. 중위 순회(inorder)
3. 후위 순회(postorder)

```jsx
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 트리 구현
class Tree {
  // 처음에 루트를 만든다.
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    // 만약 트리에 요소가 하나도 없다면 root에 새로운 노드 추가
    if (!this.root) {
      this.root = newNode;
      return;
    }

    // 그게 아니라면 적절한 위치에 추가되어야한다.
    let currentNode = this.root;

    // 내려갈 수 있을 때까지
    while (currentNode !== null) {
      if (currentNode.value < newNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }

        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }

        currentNode = currentNode.left;
      }
    }
  }

  has(value) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }

      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    return false;
  }

  // 탐색하고자 하는 노드를 받아서
  preorder(currentNode) {
    console.log(currentNode.value);
    if (currentNode.left) {
      this.preorder(currentNode.left);
    }

    if (currentNode.right) {
      this.preorder(currentNode.right);
    }
  }

  inorder(currentNode) {
    if (currentNode.left) {
      this.inorder(currentNode.left);
    }
    console.log(currentNode.value);

    if (currentNode.right) {
      this.inorder(currentNode.right);
    }
  }

  postorder(currentNode) {
    if (currentNode.left) {
      this.postorder(currentNode.left);
    }
    if (currentNode.right) {
      this.postorder(currentNode.right);
    }
    console.log(currentNode);
  }
}

const tree = new Tree();

// 트리 생성
console.log(tree);

// 첫 번째 노드 추가

console.log(tree);
```
