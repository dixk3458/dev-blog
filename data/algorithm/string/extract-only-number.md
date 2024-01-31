# 숫자만 추출

### :star: 문제 추상화

- 문자와 숫자가 섞인 문자열에서 숫자만 추출
- 순서대로 자연수를 만든다.
- 만약 0이 맨 앞이라면 0은 생략한다.

<br>

### :wrench: 알고리즘 설계

- answer = '' 빈 문자열로 초기화
- 문자열을 순회하면서 숫자인지 아닌지를 검사한다.
- 숫자라면 answer에 문자를 추가한다.
- 이제 그것을 정수로 바꿔주면된다.

<br>

### :hammer: 알고리즘 구현

```js
function solution(str) {
  let answer = '';

  for (let s of str) {
    if (!isNaN(s)) answer = answer + s;
  }

  answer = Number.parseInt(answer);

  return answer;
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 정답
- 맨 앞자리의 0을 해결하는데 어려움을 겪었다.
- Number.parseInt(string)은 자동으로 맨 앞의 0을 없애준다.
