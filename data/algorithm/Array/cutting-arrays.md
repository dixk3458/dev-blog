# n^2 배열 자르기

### 문제 추상화 ⭐

다음 과정을 거쳐서 1차원 배열을 만들자.

1. n행 n열 크기의 비어있는 2차원 배열 생성
2. i가 1부터 n까지 i행 i열 영역에 모든 빈칸을 숫자 i로 채운다.
3. 2차원 배열에서 1행 부터 n행까지 행을 잘라 모두 이어붙인 새로운 1차원 배열을 만든다.
4. arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지운다.

### 전략 🔧

left부터 right부분까지만 계산할 수 있도록 하는 방법을 생각해야했고

left와 n을 이용하여 시작점의 좌표를 구할 수 있는 것을 알아냈다.

그리고 그 특정한 좌표에 있는 숫자는 x좌표 또는 y좌표중 큰 숫자+1이라는 규칙을 확인하여 문제를 풀 수 있었다.

### 구현 🔨

```js
function solution(n, left, right) {
  let answer = [];
  let y = Math.floor(left / n);
  let x = left % n;

  for (let i = 0; i <= right - left; i++) {
    answer.push(Math.max(x, y) + 1);
    if (x + 1 < n) {
      x++;
    } else {
      y++;
      x = 0;
    }
  }
  return answer;
}
```

### 시행착오

아직도 잘 모르겠다. 수학적 지식/규칙을 이용해 문제를 해결하는것이 어렵다.
