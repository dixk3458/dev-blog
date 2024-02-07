# 재귀함수

### ⭐ 문제 추상화

- 자연수 N이 입력되면 재귀함수를 이용해 1부터 N까지 출력하라.

### 🔧 알고리즘 설계

- 재귀함수는 자기 자신을 다시 호출하는것으로 탈출조건을 명시하는것이 중요하다.
- 탈출조건은 N이 될때 탈출하는것이다.

### 🔨 알고리즘 구현

```js
function solution(n) {
  let answer = '';
  function DFS(L) {
    if (L == 0) {
      return;
    } else {
      DFS(L - 1);
      answer = answer + L;
    }
  }

  DFS(n);
  return answer;
}

console.log(solution(3));
```

### ✅ 검증 및 트러블 슈팅

- 정답
- 풀었긴 했지만, 간단한 문제였음에도 재귀함수에 익숙하지 않다보니 고민을 오래했다.
