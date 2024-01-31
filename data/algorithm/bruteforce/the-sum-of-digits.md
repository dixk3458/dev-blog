# 자릿수의 합

### ⭐ 문제 추상화

- N개의 자연수를 입력받는다.
- 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력하는 프로그램
- 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 출력한다.

### 🔧 알고리즘 설계

- 가장 큰 수를 출력해야기에 변수 sum 가장 작은 정수로 초기화한다.
- 정답을 반환할 answer를 0으로 초기화한다.
- 배열을 순회하면서 각 자연수의 자릿수 합을 구한다.
- 10으로 나누었을때 나머지가 1의 자릿수인것을 이용하자.
- 10으로 나누었을때 몫이 1의 자릿수를 제외한 나머지수인것을 이용하자.
- 자연수의 합을 구했다면, sum과 비교를 해 교체를 해주자.
- 만약 sum과 현재 sum이 같다면, answer와 현재 자연수를 비교해 큰 answer로 교체

### 🔨 알고리즘 구현

```js
function solution(arr) {
  let answer = 0;
  let outerSum = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    // 배열을 순회할때마다 자릿수의 합을 구해야한다.
    let innerSum = 0;

    // 각 자릿수의 합을 구해야한다.
    // x를 나중에 answer과 비교를해야하기에 x자체를 변경해주지 말자.
    let target = x;
    while (target !== 0) {
      innerSum = innerSum + (target % 10);
      target = Math.floor(target / 10);
    }

    if (outerSum < innerSum) {
      answer = x;
      outerSum = innerSum;
    } else if (outerSum === innerSum) {
      if (answer < x) {
        answer = x;
      }
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
```

### :hammer: 알고리즘 구현(string)

```js
function solution(arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = Number.parseInt(
      x
        .toString()
        .split('')
        .reduce((a, b) => a + Number.parseInt(b), 0)
    );

    if (max < sum) {
      answer = x;
      max = sum;
    } else if (max === sum) {
      if (answer < x) {
        answer = x;
      }
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
```

### ✅ 검증 및 트러블 슈팅

- 정답
- 두번째 방법은 생각지 못했다.
- 핵심은 1의 자릿수를 구하는 방법과 나머지를 구하는 방법이다.
