# 아나그램(해쉬)

### :star: 문제 추상화

- 아나그램은 두 문자열이 알파벳의 나열 순서는 다르지만, 구성이 일치한 경우를 아나그램이라고 한다.
- 즉 어느 한 단어를 재배열하면 상대편 단어가 될 수 있는 것을 아나그램이라고 한다.
- 길이가 같은 두 개의 단어가 주어지면, 아나그램인지 판별하라.

<br>

### :wrench: 알고리즘 설계

- 둘중 하나를 반환해야한다. 따라서 answer 변수를 YES로 초기화하자.
- 해쉬 맵을 이용해야하기 때문에, 해쉬 맵을 생성하자.
- 첫 번째 단어를 순회하면서 key에는 알파벳을 value에는 알파벳의 횟수를 저장하자.
- 해쉬 맵에 존재하는 key라면 해당 key의 value에 값을 1 증가시킨다.
- 아니라면 key에 1을 저장해주자.
- 두번째 단어를 순회하면서 아나그램을 검사한다.
- 만약 해쉬 맵의 key에 알파벳이 없다면, NO를 반환한다.
- 있다면, value에 접근해 -1을 해준다.
- 만약 0이라면 삭제를 한다.

<br>

### :hammer: 알고리즘 구현

```js
function solution(str1, str2) {
  let answer = 'YES';
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) == 0) return 'NO';
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 정답
