# 선택 정렬

### ⭐ 문제 추상화

- 선택 정렬을 이용해 오름차순으로 정렬하라

### 🔧 알고리즘 설계

- 반복문을 돌면서 배열의 첫 번째 인덱스부터 마지막 전까지 정렬해나간다.
- 만약 조사중인 인덱스 번호에 해당하는 값보다 작은 값이 있다면 인덱스 번호를 바꿔준다.
- 반복문이 끝나면 값을 교체해준다.

### 🔨 알고리즘 구현

```js
function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    let swap = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = swap;

    // 값을 교환할때 참고
    // [arr[i],arr[minIndex] = [arr[minIndex],arr[i]]]
  }

  return arr;
}
let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
```

### ✅ 검증 및 트러블 슈팅

- 정답
- 다시 볼 문제
- 구현은 성공했지만, 선택정렬에 대한 개념을 몰랐다.
