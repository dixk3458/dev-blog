# 크레인 인형뽑기(카카오 기출)

### :star: 문제 추상화

- 게임 사용자는 크레인을 좌우로 움직여서 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있다.
- 집어 올린 인형은 바구니에 쌓인다.
- 만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이면 두 인형은 바구니에서 터져 사라진다.
- 입력으로 2차원 배열 board와 크레인을 작동시킨 위치가 담긴 배열 moves를 전달받는다.
- 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 반환하라

<br>

### :wrench: 알고리즘 설계

- moves 배열을 순회하면서 그 값을 기반으로 board 배열의 열을 조사해야한다.
- 열을 고정하고 0행부터 끝까지 조사를 하는데, 만약 0이 아닌 다른 숫자를 만나면 바구니에 그 값을 넣는다.
- 0을 할당한다.
- 바구니(Stack)에 숫자를 넣기전에 가장 위의 숫자(length-1번째 인덱스)와 동일하다면,
- 넣지말고 Stack에서 그 한개를 pop()하고 answer에 +2를 해준다.

<br>

### :hammer: 알고리즘 구현

```js
function solution(board, moves) {
  let answer = 0;
  const stack = [];

  for (let m of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][m - 1] !== 0) {
        if (stack.length > 0 && board[i][m - 1] === stack[stack.length - 1]) {
          answer = answer + 2;
          stack.pop();
        } else {
          stack.push(board[i][m - 1]);
        }

        board[i][m - 1] = 0;

        break;
      }
    }
  }
  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
```

<br>

### 검증 및 트러블 슈팅

- 정답
