# 나누어 떨어지는 숫자 배열

### 문제 추상화 ⭐

배열의 요소중 divisor로 나누어 떨어지는 값을 오름차순 정렬하여 배열로 반환하자.
만약 visior로 나누어 떨어지는 값이 한개도 없다면 배열에 -1을 담아 반환한다.

### 전략 🔧

1. 나누어 떨어지는 값들로 구성된 새로운 배열을 생성한다.
2. 만약 해당 배열의 길이가 0이라면 바로 [-1] 반환
3. 생성된 배열을 정렬하여 반환한다.

### 구현 🔨

```js
function solution(arr, divisor) {
  const answer = arr.filter(x => x % divisor === 0);

  if (answer.length === 0) {
    return [-1];
  }

  answer.sort((a, b) => a - b);

  return answer;
}
```

### 시행착오
깔끔하게 해결했다.😊 프로그래머스 난이도 1은 나름 쉽게 접근하고 해결할 수 있다.
