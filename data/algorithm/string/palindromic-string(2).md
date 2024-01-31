# 유효한 팰린드롬

### ⭐ 문제 추상화

- 문자열이 팰린드롬이면 "YES"를 아니면 "NO"를 출력
- 팰린드롬 검사를 할때 알파벳만을 이용해 검사를한다.
- 대소문자를 구분 하지 않는다.
- 알파벳 이외의 문자들을 무시한다.

### 🔧 알고리즘 설계

- 대소문자를 구분하지 않기에 문자열을 대문자 또는 소문자로 통일시킨다.
- 알파벳이 아닌 문자를 필터링해준다.
- 필터링된 문자열의 길이를 구한다.
- 인덱스번호 0부터 반절까지 검사를 진행한다.

- 또는 reverse로 뒤집어 확인해주자.

### 🔨 알고리즘 구현

```js
function solution(str) {
  let answer = 'YES';
  str = str.toUpperCase().replace(/[^A-Z]/g, '');
  if (str.split('').reverse().join('') !== str) return 'NO';

  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
```

### ✅ 검증 및 트러블 슈팅

- 정답
