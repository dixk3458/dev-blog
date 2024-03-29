# 타겟 넘버(DFS)

n개의 음이 아닌 정수들이 있습니다. 이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

- `1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3`

사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

### 제한사항

- 주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
- 각 숫자는 1 이상 50 이하인 자연수입니다.
- 타겟 넘버는 1 이상 1000 이하인 자연수입니다.

### 입출력 예

| numbers         | target | return |
| --------------- | ------ | ------ |
| [1, 1, 1, 1, 1] | 3      | 5      |
| [4, 1, 2, 1]    | 4      | 2      |

### 입출력 예 설명

**입출력 예 #1**

문제 예시와 같습니다.

**입출력 예 #2**

`+4+1-2+1 = 4
+4-1+2-1 = 4`

- 총 2가지 방법이 있으므로, 2를 return 합니다.

### 문제 추상화 ⭐

정수들의 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 완성할 수 있는 경우의 수를 반환해야한다.

### 전략 🔧

정수들을 더할지 뺄지 선택해 만들 수 있는 경우의 수를 모두 구하는 문제로 DFS문제에 해당한다.

### 구현 🔨

```jsx
function solution(numbers, target) {
  let answer = 0;

  const arr = [];
  const temp = [];
  function DFS(index, current) {
    if (index >= numbers.length) {
      // current가 target과 같다면 answer 증가
      if (current === target) {
        arr.push(Array.from(temp));
        answer = answer + 1;
      }
      return;
    } else {
      // 다음 index값 처리하러감
      temp.push(+numbers[index]);
      DFS(index + 1, current + numbers[index]);
      temp.pop();

      // 돌아와서 다음 index값을 처리하러가는데, 이제는 빼는경우
      temp.push(-numbers[index]);
      DFS(index + 1, current - numbers[index]);
      temp.pop();
    }
  }

  DFS(0, 0);
  console.log(arr);
  return answer;
}

const numbers = [1, 1, 1, 1, 1];
const target = 4;
console.log(solution(numbers, target));
```

### 시행착오

부분집합을 구하는 문제와 원리는 동일하다.
