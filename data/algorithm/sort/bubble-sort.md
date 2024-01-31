# 버블정렬

### :star: 문제 추상화

- 전달받은 배열을 버블정렬을 이용해 오름차순 정렬하라

<br>

### :wrench: 알고리즘 설계

- 버블정렬은 첫 번째 인덱스와 두 번째 인덱스값을 비교해 큰 값이 뒤에오게 자리를 교체한 후
- 이어서 마지막 인덱스 번호까지 반복해 맨 마지막의 값을 결정하는것이다.
- 이렇게 1회전이 끝나면, 또 다시 첫 번째 인덱스부터 마지막 인덱스 전 까지 교환을해 끝에서부터 결정하는것

<br>

### :hammer: 알고리즘 구현

```js
function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 오답
- 다시 볼 문제
- 아직도 말로 풀이한것을 코드로 옮기지 못하는것같다.
