# 회문 문자열

### :star: 문제 추상화

- 앞에서 읽으나 뒤에서 읽어도 같은 문자열은 회문 문자열이다.
- 문자열이 회문 문자열이라면 "YES"를 아니라면 "NO"를 출력하라
- 대소문자를 구분하지 않는다.

<br>

### :wrench: 알고리즘 설계

- "YES", "NO" 둘중 하나를 반환해야하므로 answer를 "YES"로 초기화
- 문자열을 소문자 혹은 대문자로 통일을 시키자.
- 문자열의 길이를 구하고, 반절만 순회할수있도록해준다.
- 만약 길이가 홀수라면 내림을 해준다.

<br>

### :hammer: 알고리즘 구현

```js
function solution(str) {
  let answer = 'YES';
  str = str.toUpperCase();
  const length = str.length;
  const halfLength = Math.floor(length / 2);
  for (let i = 0; i < halfLength; i++) {
    if (str[i] !== str[length - 1 - i]) {
      answer = 'NO';
      return answer;
    }
  }
  return answer;
}

let str = 'goooG';
console.log(solution(str));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 정답
