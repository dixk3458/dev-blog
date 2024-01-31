# 문자열 압축

### :star: 문제 추상화

- 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기
- 단 반복횟수가 1인 경우 생략한다.

<br>

### :wrench: 알고리즘 설계

- 정답을 반환할 answer 빈 문자열 생성
- 문자열을 순회하면서 다음 인덱스의 문자와 다르다면, 현재 인덱스의 문자와 반복횟수를 answer에 추가해주자.

<br>

### :hammer: 알고리즘 구현

```js
function solution(str) {
  let answer = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count = count + 1;
    } else {
      answer = answer + str[i];
      if (count > 1) {
        answer = answer + String(count);
      }
      count = 1;
    }
  }

  return answer;
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 정답
- 쉽게 풀었다.
