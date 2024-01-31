# 공통 원소 구하기

### :star: 문제 추상화

- A,B 두 개의 집합이 주어지면, 두 집합의 공통 원소를 추출하여 오름차순으로 출력하라
- 투 포인터 알고리즘을 이용하라

<br>

### :wrench: 알고리즘 설계

- 공통 원소를 저장할 배열 answer를 생성
- 두 집합을 가리키는 포인터 변수를 저장할 변수 a,b 생성
- 오름차순으로 정렬해야하기때문에 두 배열을 오름차순으로 정렬하자.
- 가리키는 곳의 원소가 공통원소인지 아닌지 검사
- 만약 값이 같다면, answer에 push한다.
- 값이 같지 않다면, 크기를 비교해주자.
- 크기가 작다면, 다른 배열에 그 원소의 값이 존재할수 없기에 크기가 작은쪽으 포인터를 증가시킨다.

<br>

### :hammer: 알고리즘 구현

```js
function solution(arr1, arr2) {
  const answer = [];

  let a = 0;
  let b = 0;

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] === arr2[b]) {
      answer.push(arr1[a]);
      a = a + 1;
      b = b + 1;
    } else {
      if (arr1[a] < arr2[b]) {
        a = a + 1;
      } else {
        b = b + 1;
      }
    }
  }

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 정답
- 굳이 투포인터를 이용해 구현을 해야할까 싶지만, 도움이 된다.
