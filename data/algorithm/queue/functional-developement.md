# 기능 개발(Queue)

### 문제 추상화 ⭐

각 기능의 진도가 100%일 때 서비스에 반영할 수 있다. 그리고 각 기능의 개발속도가 모드 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에있는 기능은 앞에 있는 기능이 배포될 때 함께 배포된다.

즉 작업의 진도가 담긴 progresses와 각 작업의 개발 속도가 담긴 speeds가 주어질때 각 배포마다 몇 개의 기능이 배포되는지를 반환하라.

### 전략 🔧

1. progresses를 순회하면서 남은 작업양을 구한다.
2. speeds를 이용해 앞으로 걸릴시간을 구한다.
3. 자료구조 스택을 이용해 구한다.

### 구현 🔨

```jsx
function solution(progresses, speeds) {
  let answer = [];

  const days = [];

  for (let i = 0; i < progresses.length; i++) {
    const value = Math.ceil((100 - progresses[i]) / speeds[i]);
    days.push(value);
  }

  let maxDay = days[0];

  let count = 0;

  console.log(days);

  for (let i = 0; i < days.length; i++) {
    if (maxDay >= days[i]) {
      count = count + 1;
    } else {
      answer.push(count);
      count = 1;
      maxDay = days[i];
    }
  }

  answer.push(count);

  return answer;
}
```
