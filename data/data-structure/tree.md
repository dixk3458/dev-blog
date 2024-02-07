# 트리(Tree)

**Tree**는 하나의 데이터 아래에 여러개의 데이터가 존재할 수 있는 비선형 구조이다.
트리는 Root라는 하나의 데이터를 시작으로 여러개의 간선으로 연결된다. 각 데이터를 노드라고하며 상위 노드를 부모 노드, 하위 노드를 자식 노드라고 부른다. 그리고 자식이 없는 노드를 리프 노드라고 한다.

![img](https://velog.velcdn.com/images/lsx2003/post/34ba9dbe-4029-4165-a947-ac2e3f9cb252/image.png)

### 트리 순회

트리를 순회하는 방법으로 3가지가 있다. 이들의 차이점은 부모 노드를 언제 탐색하냐이다.

1. **전위 순회**
2. **중위 순회**
3. **후위 순회**

전위 순회는 부모노드먼저 탐색하고 왼쪽 오른쪽 자식을 탐색하는것이다. 중위 순회는 부모 노드를 중간에 탐색하는것이고 후위 순회는 부모노드를 마지막에 탐색하는것을 말한다.

### 코드 구현

1. 전위순회

```js
function search(n) {
  function DFS(n) {
    if (n > 7) {
      return; //7까지만 탐색할것이다.
    } else {
      console.log(n);
      DFS(n * 2);
      DFS(n * 2 + 1);
    }
  }
  DFS(n);
}
```

2. 중위순회

```js
function search(n) {
  function DFS(n) {
    if (n > 7) {
      return; //7까지만 탐색할것이다.
    } else {
      DFS(n * 2);
      console.log(n);
      DFS(n * 2 + 1);
    }
  }
  DFS(n);
}
```

3. 후위순회

```js
function search(n) {
  function DFS(n) {
    if (n > 7) {
      return; //7까지만 탐색할것이다.
    } else {
      DFS(n * 2);
      DFS(n * 2 + 1);
      console.log(n);
    }
  }
  DFS(n);
}
```
