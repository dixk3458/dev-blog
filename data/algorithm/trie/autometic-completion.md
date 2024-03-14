# 자동 완성

포털 다음에서 검색어 자동완성 기능을 넣고 싶은 라이언은 한 번 입력된 문자열을 학습해서 다음 입력 때 활용하고 싶어 졌다. 예를 들어, `go` 가 한 번 입력되었다면, 다음 사용자는 `g` 만 입력해도 `go`를 추천해주므로 `o`를 입력할 필요가 없어진다! 단, 학습에 사용된 단어들 중 앞부분이 같은 경우에는 어쩔 수 없이 다른 문자가 나올 때까지 입력을 해야 한다.

효과가 얼마나 좋을지 알고 싶은 라이언은 학습된 단어들을 찾을 때 몇 글자를 입력해야 하는지 궁금해졌다.

예를 들어, 학습된 단어들이 아래와 같을 때

`go
gone
guild`

- `go`를 찾을 때 `go`를 모두 입력해야 한다.
- `gone`을 찾을 때 `gon` 까지 입력해야 한다. (`gon`이 입력되기 전까지는 `go` 인지 `gone`인지 확신할 수 없다.)
- `guild`를 찾을 때는 `gu` 까지만 입력하면 `guild`가 완성된다.

이 경우 총 입력해야 할 문자의 수는 `7`이다.

라이언을 도와 위와 같이 문자열이 입력으로 주어지면 학습을 시킨 후, 학습된 단어들을 순서대로 찾을 때 몇 개의 문자를 입력하면 되는지 계산하는 프로그램을 만들어보자.

### 문제 추상화 ⭐

문제 이름부터 **자동완성**이기 때문에 바로 `Trie`를 떠올릴 수 있다. 그리고 자동완성 기능이 되어야 최소 입력 글자를 알 수 있기에 이 문제에서 `Trie`가 가장 효율적인 자료구조라는 것을 알 수 있다.

### 전략 🔧

`Trie` 구조를 만들면서 하위에 어떤 문자들이 있는지 미리 알아야 셀 수 있다.

1. “go”를 넣는다.
    1. 루트의 자식 노드로 “g”를 추가한다. 이때 “g” 노드에 단어가 추가되었음을 알리기 위해 카운팅을 해준다. (”g”,1)
    2. “g”의 자식 노드로 “o”를 추가한다. 이때 “o” 노드에 단어가 추가되었음을 알리기 위해 카운팅을 해준다. (”o”,1)
2. “gone”을 넣는다.
    1. 루트의 자식 노드로 “g”를 추가한다. 이때 “g” 노드에 단어가 추가되었음을 알리기 위해 카운팅을 해준다. 이미 루트의 자식 노드에 “g”가 있기때문에 (”g”,2)가 된다.
    2. “g”의 자식 노드로 “o”를 추가한다. 이때 “o”가 추가되었음을 알리기 위해 카운팅을 해준다. “g”노드의 자식 노드에 “o”가 있기때문에 (”o”,2)가 된다.
    3. “o”의 자식 노드로 “n”을 추가한다. (”n”,1)
    4. “n”의 자식 노드로 “e”를 추가한다. (”e”,1)
3. “guild”를 넣는다.
    
    …
    

### 구현 🔨

```jsx
class Node {
  constructor(value = '') {
    this.value = value;
    this.children = new Map();
    this.count = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;

    for (let char of string) {
      if (!currentNode.children.get(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }

      currentNode.count[char] = 1 + (currentNode.count[char] ?? 0);
      currentNode = currentNode.children.get(char);
    }
  }

  has(string) {
    let currentNode = this.root;
    let count = 0;

    for (let char of string) {
      count = count + 1;

      if (currentNode.count[char] === 1) {
        return [true, count];
      }

      currentNode = currentNode.children.get(char);
    }

    return [true, count];
  }
}

function solution(words) {
  const trie = new Trie();

  for (let word of words) {
    trie.insert(word);
  }

  const array = [];
  for (let word of words) {
    array.push(trie.has(word)[1]);
  }

  answer = array.reduce((a, b) => a + b, 0);

  return answer;
}

const words = ['go', 'gone', 'guild'];
console.log(solution(words));

```

```jsx
function makeTrie(words) {
  const root = {}; // 먼저 루트 노드를 설정할 변수를 만든다.
  for (const word of words) { // Trie를 구성하기 위한 루프를 돌린다.
    let current = root; // 루프부터 시작
    for (const letter of word) { // 단어의 글자를 하나씩 춫출한 후
      if (!current[letter]) current[letter] = [0, {}]; // 값을 넣는다. 리스트의 첫 번째 값은 학습된 단어가 몇 개인지를 카운팅하고 두 번째 값은 트리 구조로 이용할 노드 값으로 사용한다.
      current[letter][0] = 1 + (current[letter][0] || 0); // 카운팅을 위해 1 더해준다.
      current = current[letter][1]; // current는 letter에 해당되는 노드로 이동한다.
    }
  }

  return root; // 반환
}

function solution(words) {
  let answer = 0;
  const trie = makeTrie(words); // Trie 자료구조를 만들어준다.

  for (const word of words) { // 입력받은 수 만큼 루프
    let count = 0; // 카운팅을 위한 변수
    let current = trie; // 루트부터 시작
    for (const [index, letter] of [...word].entries()) {
      count += 1;
      if (current[letter][0] <= 1) { // 단어가 하나 이하로 남을 경우 종료
        break;
      }
      current = current[letter][1]; // 다음 노드로 이동
    }
    answer += count; // 카운팅을 더해준다
  }

  return answer; // 반환
}
```

### 시행 착오

쉽게 접근했지만, 시간이 오래걸렸다. 시각화 하는 능력을 키워야겠다.