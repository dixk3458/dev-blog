# 이분검색

### ⭐ 문제 추상화

- N개의 수를 오름차순으로 정렬한다.
- N개의 수중 한개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하라.

### 🔧 알고리즘 설계

- 이진탐색을 하기위해서 배열이 정렬되어있어야한다.
- 오름차순으로 정렬을 하고 lt와 rt 인덱스번호를 구한다.
- 찾을 때 까지 반복해준다. while(true) or while(arr[mid] !== target)

### 🔨 알고리즘 구현

```js
function solution(target, arr) {
  let answer;

  arr.sort((a, b) => a - b);

  let lt = 0;
  let rt = arr.length - 1;

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
```

### ✅ 검증 및 트러블 슈팅

- 오답
- 이진탐색의 개념이 없었다.
- 이진탐색은 정렬되어있는 배열에서 특정 값의 위치를 검색할때 유용하다.
