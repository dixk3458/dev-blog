# 큰 수 출력하기

### ⭐ 문제의 추상화

- 자신의 바로 앞 수 보다 큰 수만 출력하는 프로그램을 작성
- 한 줄로 출력

### 🔧 알고리즘 설계

자신의 바로 앞 수에 접근하기위해서는 index 번호가 필요하다.

for문으로 순회하면서 index를 이용해보자.

### 🔨 알고리즘 구현

```js
function solution(arr) {
  // 배열을 반환해야하기때문에 answer = [] 초기화
  const answer = [];
  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }

  return answer;
}

console.log(solution([7, 3, 9, 5, 6, 12]));
```

### ✅ 검증과 트러블 슈팅

- 정답
