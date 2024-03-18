# Binary Search Tree 개념

### 선형 탐색

순서대로 하나씩 찾는 탐색 알고리즘으로 O(n) 시간복잡도가 걸린다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3cf9fec-22fc-4497-8749-8a20369906be/131c1a3b-1b70-4c8e-8be9-44cbbb726f3b/Untitled.png)

### 이진 탐색

정렬 되어있는 요소들을 반씩 제외하며 찾는 알고리즘으로 O(log n)만큼 시간복잡도가 걸린다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3cf9fec-22fc-4497-8749-8a20369906be/bca5b41d-fb71-45e6-8c42-67a925b810d2/Untitled.png)

### 이진 탐색의 특징

- 반드시 정렬이 되어있어야 사용할 수 있다.
- 배열 또는 이진 트리를 이용해 구현할 수 있다.
- 절반씩 제외하며 찾는 알고리즘이기에 O(log n)의 시간 복잡도가 걸린다.

### 배열을 이용한 구현

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3cf9fec-22fc-4497-8749-8a20369906be/eb63560e-c931-4c4e-bf62-66bb3dc32bc9/Untitled.png)

### 이진 탐색 트리

이진 탐색을 위한 이진 트리로 왼쪽 서브 트리는 루트보다 작은 값이 모여있고 오른쪽 서브 트리는 루트보다 큰 값이 모여있다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3cf9fec-22fc-4497-8749-8a20369906be/8f433cc8-992d-4026-aaff-42badc4c2cbc/Untitled.png)

### 단말 정점을 삭제하는 경우

별다른 처리 없이 부모 정점과의 연결을 끊으면 된다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3cf9fec-22fc-4497-8749-8a20369906be/9dd4b3e8-6c0c-49f5-89ed-4f1d7348a8fb/Untitled.png)

### 하나의 서브 트리를 가지는 경우

제거되는 정점의 부모 간선을 자식 정점을 가리키게 바꾸면 된다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3cf9fec-22fc-4497-8749-8a20369906be/1797503c-f320-4ec4-8ae6-c5b5d9437736/Untitled.png)

### 두 개의 서브 트리를 가지는 경우

왼쪽 서브트리의 가장 큰 값 혹은 오른쪽 서브트리의 가장 작은 값으로 교체한다. 이 경우 교체된 정점의 좌우 자식이 없다면 제거되는 정점의 링크로 대체된다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3cf9fec-22fc-4497-8749-8a20369906be/1d46eb15-5b8a-4187-b3c9-38b2466890bd/Untitled.png)

### 이진 탐색 트리의 문제점

- 최악의 경우 한쪽으로 편향된 트리가 될 수 있다.
- 순차 탐색과 동일한 시간 복잡도를 가진다.
- 이를 해결하기 위해 AVL 트리, 레드-블랙 트리를 이용한다.

### 배열을 이용한 구현

```jsx
function binarySearch(array, findValue) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    console.log(left, mid, right);
    if (array[mid] === findValue) {
      return mid;
    }

    if (array[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }

  return -1;
}
const array = [1, 3, 5, 7, 9, 20];

console.log(binarySearch(array, 20));
```

### 이진 트리를 이용한 이진 탐색 트리

```jsx
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    // 현재 트리의 root가 없다면 rootNode 삽입하고 끝
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    // 만약 root가 존재한다면 그 밑으로 규칙에 맞게 삽입해야한다.
    let currentNode = this.root;
    while (currentNode !== null) {
      // 새로운노드의 value가 크다면, 현재노드의 오른쪽으로 새로운 노드를 보내야한다.
      if (currentNode.value < newNode.value) {
        // 만약 오른쪽에 요소가 없으면 그냥 삽입하고 끝
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
      // 현재 노드가 찾는것이라면 true
      if (currentNode.value === value) {
        return true;
      }

      // 현재 노드의 값보다 크다면 오른쪽에서 찾아야한다.
      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        // 작거나 같다면 왼쪽에서 찾고
        currentNode = currentNode.left;
      }
    }

    // 노드가 없을때까지 돌았는데, 못찾았다.?
    return false;
  }
}

const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(5);
binarySearchTree.insert(8);
binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.insert(7);

console.log(binarySearchTree.has(8));
console.log(binarySearchTree.has(1));
```
