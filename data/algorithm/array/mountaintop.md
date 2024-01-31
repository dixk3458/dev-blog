# 봉우리

### :star: 문제 추상화

- N \* N 격자판안에 각 지역의 높이가 들어간다.
- 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역이다.
- 봉우리가 몇개인지 알아내는 프로그램을 작성하라.
- 격자판의 가장자리는 0으로 초기화 되어있다고 가정한다.

<br>

### :wrench: 알고리즘 설계

- 2차원 배열을 전달받는데, 배열을 순회하면서 봉우리의 개수를 조사해야한다. 따라서 봉우리 개수를 저장할 변수 answer를 0으로 초기화하자.
- 각 지역의 상하좌우를 조사하기위해 좌표 배열을 생성하자.
- 이중 for문을 이용해 차례대로 배열의 마지막 인덱스까지 조사까지 조사인덱스를 기준으로 상하좌우 지역보다 큰지 검사하자.

<br>

### :hammer: 알고리즘 구현

```js
function solution(arr) {
  let answer = 0;

  // 상하좌우 순
  const cx = [1, -1, 0, 0];
  const cy = [0, 0, 1, -1];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const target = arr[i][j];

      // 기본적으로 flag변수를 1로 초기화를 한다.
      // 상하좌우를 검사하면서 봉우리가 아니라면
      // flag에 0을할당하고
      // 검사를 멈춘다.
      let flag = 1;
      for (let q = 0; q < cx.length; q++) {
        let nx = i + cx[q];
        let ny = j + cy[q];
        if (
          nx >= 0 &&
          nx < arr.length &&
          ny >= 0 &&
          ny < arr.length &&
          target <= arr[nx][ny]
        ) {
          flag = 0;
          break;
        }
      }
      // 특정 지역에 대한 검사가 끝나면
      // answer를 더해줄지 말지
      if (flag) answer = answer + 1;
    }
  }

  return answer;
}
const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
```

<br>


### ✅ 검증 및 트러블 슈팅
- 정답
- 격자판의 가장자리가 0으로 초기화 되어있는것을 검사할때 많은 시간을 보냈다.
- 변수의 이름을 더욱 명확하게 작성하는 방법을 익혀야할것같다.