# Trie 개념

자료구조 `Trie`는 **문자열을 저장하고 효율적으로 탐색**하기위한 `Tree`형태의 자료구조이다.
이러한 특징으로 `Trie` 는 **자동완성 검색, 사전 찾기 등에서 활용**될 수 있다.

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2Ff03171ae-7d3e-4c65-8824-81275b4f8f66%2FUntitled.png?table=block&id=9e6f884c-4dba-4bc8-b5ab-3b178def81fc&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=700&userId=&cache=v2)

### Trie의 특징

문자열을 탐색할 때 단순 비교를 통해 탐색할 때보다 효율적으로 탐색할 수있다.
문자열 길이가 L인 문자열을 추가,탐색할때 걸리는 시간복잡도는 O(L)이 걸린다.
하지만 단점이 있다. `Trie`는 문자열의 각 문자마다 자식에 대한 노드를 전부 가지기 때문에 저장 공간을 많이 사용한다.

### Trie의 구조

Root는 비어있다. 그리고 각 간선은 추가될 문자를 키로 갖는다.
각 정점은 이전 정점의 값 + 간선의 키를 값으로 갖는다.
`Trie`는 `HashTable`과 `연결리스트`로 구현할 수 있다.

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2Ffcfb5fc8-ab24-4161-aa2b-f1600b49f141%2FUntitled.png?table=block&id=76ab17d9-a351-4aee-8283-b49e79fe5746&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=1300&userId=&cache=v2)

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F4a147edd-1d31-4e48-a221-d47da1b40f7f%2FUntitled.png?table=block&id=acedb802-a7c6-4b10-8587-5a709d0c15e7&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=1300&userId=&cache=v2)

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F7867a175-2544-4d64-8a03-9dce14168f7e%2FUntitled.png?table=block&id=0359ea02-ced2-48f5-992d-a4e72640afaf&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=1530&userId=&cache=v2)

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F0789b473-21a5-4a65-934b-b1017b00afee%2FUntitled.png?table=block&id=982f1c19-a86f-4185-b2b5-63d7e1f0d81c&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=1300&userId=&cache=v2)

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F7c2eb248-0460-40ec-8718-c819f778adb2%2FUntitled.png?table=block&id=70427e4d-62db-495c-809b-3d575f72a414&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=1300&userId=&cache=v2)

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F5a992366-c8d9-4159-b303-31dbb7d027ba%2FUntitled.png?table=block&id=64e03e54-d5ee-4a51-a6a4-6010495e1228&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=1530&userId=&cache=v2)

### 구현 방법

```jsx
class Node {
  constructor(value = '') {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }

      currentNode = currentNode.children.get(char);
    }
  }

  has(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.get(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }

    return true;
  }
}

const trie = new Trie();
trie.insert('cat');
console.log(trie.has('can'));
```
