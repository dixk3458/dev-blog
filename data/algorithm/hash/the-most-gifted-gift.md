# 가장 많이 받은 선물

### **문제 설명**

선물을 직접 전하기 힘들 때 카카오톡 선물하기 기능을 이용해 축하 선물을 보낼 수 있습니다. 당신의 친구들이 이번 달까지 선물을 주고받은 기록을 바탕으로 다음 달에 누가 선물을 많이 받을지 예측하려고 합니다.

- 두 사람이 선물을 주고받은 기록이 있다면, 이번 달까지 두 사람 사이에 더 많은 선물을 준 사람이 다음 달에 선물을 하나 받습니다.
  - 예를 들어 `A`가 `B`에게 선물을 5번 줬고, `B`가 `A`에게 선물을 3번 줬다면 다음 달엔 `A`가 `B`에게 선물을 하나 받습니다.
- 두 사람이 선물을 주고받은 기록이 하나도 없거나 주고받은 수가 같다면, 선물 지수가 더 큰 사람이 선물 지수가 더 작은 사람에게 선물을 하나 받습니다.
  - 선물 지수는 이번 달까지 자신이 친구들에게 준 선물의 수에서 받은 선물의 수를 뺀 값입니다.
  - 예를 들어 `A`가 친구들에게 준 선물이 3개고 받은 선물이 10개라면 `A`의 선물 지수는 -7입니다. `B`가 친구들에게 준 선물이 3개고 받은 선물이 2개라면 `B`의 선물 지수는 1입니다. 만약 `A`와 `B`가 선물을 주고받은 적이 없거나 정확히 같은 수로 선물을 주고받았다면, 다음 달엔 `B`가 `A`에게 선물을 하나 받습니다.
  - **만약 두 사람의 선물 지수도 같다면 다음 달에 선물을 주고받지 않습니다.**

위에서 설명한 규칙대로 다음 달에 선물을 주고받을 때, 당신은 선물을 가장 많이 받을 친구가 받을 선물의 수를 알고 싶습니다.

친구들의 이름을 담은 1차원 문자열 배열 `friends` 이번 달까지 친구들이 주고받은 선물 기록을 담은 1차원 문자열 배열 `gifts`가 매개변수로 주어집니다. 이때, 다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수를 return 하도록 solution 함수를 완성해 주세요.

---

### 제한사항

- 2 ≤ `friends`의 길이 = 친구들의 수 ≤ 50
  - `friends`의 원소는 친구의 이름을 의미하는 알파벳 소문자로 이루어진 길이가 10 이하인 문자열입니다.
  - 이름이 같은 친구는 없습니다.
- 1 ≤ `gifts`의 길이 ≤ 10,000
  - `gifts`의 원소는 `"A B"`형태의 문자열입니다. `A`는 선물을 준 친구의 이름을 `B`는 선물을 받은 친구의 이름을 의미하며 공백 하나로 구분됩니다.
  - `A`와 `B`는 `friends`의 원소이며 `A`와 `B`가 같은 이름인 경우는 존재하지 않습니다.

---

### 입출력 예

| friends                                         | gifts                                                                                                       | result |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------ |
| ["muzi", "ryan", "frodo", "neo"]                | ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"] | 2      |
| ["joy", "brad", "alessandro", "conan", "david"] | ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]           | 4      |
| ["a", "b", "c"]                                 | ["a b", "b a", "c a", "a c", "a c", "c a"]                                                                  | 0      |

### 문제 추상화 ⭐

규칙에 따라 다음 달 선물을 가장 많이 받게 될 사람의 선물 개수를 반환하자.

### 전략 🔧

1. 각 사람의 이름을 키로 선물 지수, 선물 내역을 접근 할 수있도록하자.
2. 자료구조 Hash를 생성해 각 사람의 이름을 키로 저장하고 그 사람의 정보를 접근할 수 있는 인덱스를 저장하자.
3. 선물 내역을 저장할 수 있는 2차원 배열 생성 후 gifts 배열을 순회하면서 해당 사람의 이름을 키로 하여 인덱스 번호를 알아낸뒤 저장
4. 선물 지수를 저장할 수 있는 배열 생성하여 값 저장
5. 다음 달 받을 선물의 개수를 저장 할 수있는 배열 생성

### 구현 🔨

```jsx
function solution(friends, gifts) {
  let answer;

  const length = friends.length;

  const hashMap = new Map();
  const giftsTable = Array.from(Array(length).fill(0), () =>
    Array(length).fill(0)
  );
  const rank = Array(length).fill(0);
  const next = Array(length).fill(0);

  friends.forEach((friend, index) => {
    hashMap.set(friend, index);
  });

  gifts.forEach(gift => {
    const [from, to] = gift.split(' ');
    const fromtIndex = hashMap.get(from);
    const toIndex = hashMap.get(to);
    giftsTable[fromtIndex][toIndex] = giftsTable[fromtIndex][toIndex] + 1;
  });

  // 2차원 배열의 가로, 세로 구하기
  for (let i = 0; i < length; i++) {
    // i를 박아두고 가로 합 구함(i번째 사람이 선물 준거)
    // for (let j = 0; j < length; j++) {
    //   rank[i] = rank[i] + giftTable[i][j];
    // }
    rank[i] = giftsTable[i].reduce((a, b) => a + b, 0);

    // 세로의 합을 빼줘야한다.(i번째 사람이 선물 받은거)
    for (let j = 0; j < length; j++) {
      rank[i] = rank[i] - giftsTable[j][i];
    }
  }

  // 포인터 두개를 이용해 giftsTable을 접근하여 다음 달 배열을 채워야한다.
  for (let i = 0; i < length; i++) {
    // i와 j가 같다면 자기가 자기한테 선물 주고 받은거?는 없다.

    for (let j = i + 1; j < length; j++) {
      // j가 i보다 선물을 더 줬다면
      if (giftsTable[i][j] < giftsTable[j][i]) {
        next[j] = next[j] + 1;
      }

      // i가 더 줬다면
      if (giftsTable[i][j] > giftsTable[j][i]) {
        next[i] = next[i] + 1;
      }

      // 같이 개수 줬다면(기본 0으로 설정되어있어 안준것도 포함)
      if (giftsTable[i][j] === giftsTable[j][i]) {
        if (rank[i] < rank[j]) {
          next[j] = next[j] + 1;
        }

        if (rank[i] > rank[j]) {
          next[i] = next[i] + 1;
        }
      }
    }
  }

  answer = Math.max(...next);

  return answer;
}

const friends = ['muzi', 'ryan', 'frodo', 'neo'];
const gifts = [
  'muzi frodo',
  'muzi frodo',
  'ryan muzi',
  'ryan muzi',
  'ryan muzi',
  'frodo muzi',
  'frodo ryan',
  'neo muzi',
];

console.log(solution(friends, gifts));
```

### 시행착오

처음에 너무 어렵게 생각했었다. 자료구조 Hash를 이용해 각 사람마다 정보를 저장해야한다는것까지는 접근 방식이 좋았지만, 모든 내용을 Hash에 접근하려해 굉장히 복잡해졌다.

해쉬를 이용해 각 사람의 접근 key(index)를 저장하고 그것을 이용해 접근하는 방법을 숙지해야할것같다.
