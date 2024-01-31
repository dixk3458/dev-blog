# Special Sort(구글 인터뷰)

### :star:문제 추상화

- N개의 정수가 입력되면 정렬하라
- 음의 정수는 앞쪽에 양의 정수는 뒷쪽에 있어야한다.
- 양의 정수와 음의 정수의 순서에는 변함이 없어야 한다.

<br>

### :wrench: 알고리즘 설계

- 기존 순서를 유지하면서 음수는 왼쪽에 양수는 오른쪽에 가야한다.
- 0번째 인덱스부터 시작해 마지막-1번째 인덱스를 검사
- 현재 검사하는 인덱스가 양수이면서 검사하는 인덱스 + 1이 음수라면 자리를 바꿔야한다.
- 아니라면 패스

<br>

```js
function solution(arr) {
  const answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        let swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
  }

  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 오답
- 접근 자체를 못했다.
- 회전 마다 맨끝을 결정할때는 바깥쪽 반복문의 제어변수를 이용하자.
