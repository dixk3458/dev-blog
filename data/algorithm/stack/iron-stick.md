# 쇠막대기

여러 개의 쇠막대기를 레이저로 절단하려고 한다.
효율적인 작업을 위해서 쇠막대기를 아래에서 위로 겹쳐 놓고, 레이저를 위에서 수직으로 발사하여 쇠막대기들을 자른다. 쇠막대기와 레이저의 배치는 다음 조건을 만족한다.
• 쇠막대기는 자신보다 긴 쇠막대기 위에만 놓일 수 있다. - 쇠막대기를 다른 쇠막대기 위에
놓는 경우 완전히 포함되도록 놓되, 끝점은 겹치지 않도록 놓는다.
• 각 쇠막대기를 자르는 레이저는 적어도 하나 존재한다.
• 레이저는 어떤 쇠막대기의 양 끝점과도 겹치지 않는다.

1. 레이저는 여는 괄호와 닫는 괄호의 인접한 쌍 ‘( ) ’ 으로 표현된다. 또한, 모든 ‘( ) ’는 반
   드시 레이저를 표현한다.
2. 쇠막대기의 왼쪽 끝은 여는 괄호 ‘ ( ’ 로, 오른쪽 끝은 닫힌 괄호 ‘) ’ 로 표현된다.
   쇠막대기는 레이저에 의해 몇 개의 조각으로 잘려지는데, 위 예에서 가장 위에 있는 두 개의 쇠막대기는 각각 3개와 2개의 조각으로 잘려지고, 이와 같은 방식으로 주어진 쇠막대기들은 총 17개의 조각으로 잘려진다.
   쇠막대기와 레이저의 배치를 나타내는 괄호 표현이 주어졌을 때, 잘려진 쇠막대기 조각의 총개수를 구하는 프로그램을 작성하시오.

### 문제 추상화 ⭐

잘려진 쇠막대기 조각의 총개수를 반환하라.

### 전략 🔧

괄호를 사용하는것을 보아 자료구조 Stack유형 문제임을 알 수 있다.

1. 현재 사용중인 막대기를 저장할 Stack을 생성하자.
2. 문자열을 순회하면서 현재 인덱스순서에서 다음 인덱스 순서를 검사할 수 있어야한다.
   1. 현재 인덱스가 ( 이고 다음 인덱스가 ) 라면 레이저로서 현재 Stack의 길이만큼 answer에 추가한다. 그리고 다음 인덱스는 검사할 필요가 없어 반복자 i를 +1 한다.
   2. ( 라면 막대기 하나를 추가한다.
   3. 현재 인덱스가 ) 라면 막대기가 끝난것으로 Stack에서 -1해준다.

### 구현 🔨

```jsx
function solution(s) {
  let answer = 0;

  const stack = [];

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === '(') {
      if (s[i + 1] === '(') {
        stack.push(s[i]);
        answer = answer + 1;
      } else {
        answer = answer + stack.length;
        i++;
      }
    } else {
      stack.pop();
    }
  }

  return answer;
}

console.log(solution('()(((()())(())()))(())'));
console.log(solution('(((()(()()))(())()))(()())'));
```
