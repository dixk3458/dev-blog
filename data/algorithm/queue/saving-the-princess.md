# 공주 구하기

### ⭐ 문제 추상화

- 왕자들을 나이 순으로 1번부터 N번까지 차례로 번호를 매긴다.
- 1번 왕자부터 N번왕자까지 순서대로 시계방향으로 돌아가며 동그랗게 앉힌다.
- 1번부터 시계방향으로 돌아가며, 번호를 외치는데, K(특정숫자)를 외치면 그 왕자는 공주를 구하러 가는데서 제외되고 원 밖으로 나온다.
- 그리고 다음 왕자부터 다시 1부터 시작하여 번호를 외친다.
- 입력으로 N과 K가 주어질 때 공주를 구하러 갈 왕자의 번호를 출력하라.

### 🔧 알고리즘 설계

- 왕자들의 번호를 담는 Queue를 구현한다.
- Queue는 배열로 구현할수도있다.
- 크기가 N인 배열을 생성하고 1부터 N까지 채워준다.
- Queue를 순회하면서 제외될 왕자를 찾아야한다.
- Queue의 길이가 1일 아닐때까지 반복해준다.
- i가 1부터 K까지 순회를 하는데 i가 K가 아니라면 Queue에서 shift를 해주고 push를 해준다.
- K라면 shift만 해준다.

### 🔨 알고리즘 구현

```js
function solution(n, k) {
  let answer;

  const queue = Array(n);
  for (let i = 1; i <= n; i++) {
    queue[i - 1] = i;
  }

  while (queue.length !== 1) {
    for (let i = 1; i <= k; i++) {
      if (i === k) {
        queue.shift();
      } else {
        queue.push(queue.shift());
      }
    }
  }

  answer = queue[0];
  return answer;
}

console.log(solution(8, 3));
```

### ✅ 검증 및 트러블 슈팅

- 정답
