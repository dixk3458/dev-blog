# 이분검색

임의의 N개의 숫자가 입력으로 주어집니다. N개의 수를 오름차순으로 정렬한 다음 N개의 수
중 한 개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는
프로그램을 작성하세요. 단 중복값은 존재하지 않습니다.
▣ 입력설명
첫 줄에 한 줄에 자연수 N(3<=N<=1,000,000)과 M이 주어집니다.
두 번째 줄에 N개의 수가 공백을 사이에 두고 주어집니다.
▣ 출력설명
첫 줄에 정렬 후 M의 값의 위치 번호를 출력한다.

### 문제 추상화 ⭐

이진탐색(이분검색)으로 특정 숫자 M이 몇번째에 위치한지 출력하라

### 전략 🔧

1. 이진탐색을 해야하기때문에 정렬을 해야한다.
2. 가운데 인덱스값을 기준으로 `array[mid]`가 `M`보다 큰지 작은지를 통해서 위치를 판단한다.
3. 이것은 최소값을 반환하는것이 아니라, 특정 값을 반환하는것으로 `array[mid]`가 특정 값 `M`인지 판단해주자.

### 구현 🔨

```jsx
function solution(m, array) {
  let answer;
  const sortedArray = array.sort((a, b) => a - b); // O(n log n);

  let left = 0;
  let right = sortedArray.length - 1; // 마지막 인덱스

  while (left <= right) {
    console.log(`left :${left}`);
    console.log(`right :${right}`);
    const mid = Math.floor((left + right) / 2);
    console.log(`mid :${mid}`);

    if (array[mid] === m) {
      answer = mid;
      break;
    }

    // 중간값보다 더 오른쪽
    if (array[mid] < m) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return answer;
}

const array = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, array));
```
