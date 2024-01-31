# 두 배열 합치기

### :star: 문제 추상화

- 오름차순으로 정렬된 두 배열이 주어지면, 두 배열을 오름차순으로 합쳐 출력하라
- 투 포인터 알고리즘을 이용하라

<br>

### :wrench: 알고리즘 설계

- 정답 배열 answer를 생성한다.
- 두 배열을 순회하면서 크기가 작은것부터 하나씩 answer에 push를 해야한다.
- 두 배열의 pointer를 가리킬 변수 a,b를 0으로 초기화
- 크기가 작아 push가 되었다면, 하나 증가 시키자.

<br>

### :hammer: 알고리즘 구현

```js
function solution(arr1, arr2) {
  const answer = [];

  let a = 0;
  let b = 0;

  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] < arr2[b]) {
      answer.push(arr1[a]);
      a = a + 1;
    } else {
      answer.push(arr2[b]);
      b = b + 1;
    }
  }

  if (a < arr1.length) {
    while (a < arr1.length) {
      answer.push(arr1[a]);
      a = a + 1;
    }
  } else {
    while (b < arr2.length) {
      answer.push(arr2[b]);
      b = b + 1;
    }
  }

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 정답
