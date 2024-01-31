# 삽입 정렬

### :star: 문제 추상화

- 삽입 정렬 방식을 이용해 배열을 오름차순으로 정렬하라

<br>

### :wrench: 알고리즘 설계

- 1번째 인덱스부터 마지막인덱스까지 순회하면서 검사 대상을 결정
- 검사 대상을 결정했다면, 그 대상이 어디에 삽입할것인지를 결정해야한다.
- 1회전 : 1번째 인덱스의 값이 1-1번째 인덱스의 값보다 작다면, 자리를 바꿔준다. 0보다 클때까지 반복.
- 2회전 : 2번째 인덱스의 값이 2-1번째 인덱스의 값보다 작다면, 자리를 바꿔준다. 1번째 인덱스 값이 1-1번째 값보다 작다면 자리를 바꿈
- ...

<br>

### :hammer: 알고리즘 구현

```js
function solution(arr) {
  const answer = arr;

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let swap = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = swap;
      } else {
        break;
      }
    }
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 오답
- 개념 부족 및 구현 실패
