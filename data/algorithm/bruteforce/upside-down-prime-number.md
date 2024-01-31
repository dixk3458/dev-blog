# 뒤집은 소수

### ⭐ 문제 추상화

- N개의 자연수를 입력받는다.
- 각 자연수를 뒤집은 후 그 수가 소수이면 소수를 출력하는 프로그램을 작성하라
- 뒤집은 수가 소수가 아니라면 출력하지 않는다.
- 만약 원래 수의 1의 자릿수가 0이라면 뒤집은 수에서 0은 무시된다. 즉 첫 자리부터의 연속된 0은 무시된다.

### 🔧: 알고리즘 설계

- 소수를 담을 answer 빈 배열을 생성한다.
- 배열을 순회하면서 각 자연수를 뒤집고 소수 검사를 수행한다.
- 자연수를 10으로 나누고 나머지를 문자열로 바꾸고 num변수에 추가
- 10으로 나눈 몫은 target에 할당
- target이 존재할때까지 반복한다.
- 소수를 검사할 isPrime변수를 1으로 선언한다.
- 2부터 num/2까지의 수 중에 num을 나누어 나머지가 0이라면 isPrime을 0으로 할당하고 반복문을 멈춘다.
- isPrime이 1이라면 answer에 num을 push한다.

### 🔨 알고리즘 구현

```js
function isPrime(num) {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  const answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = Math.floor(x / 10);
    }

    if (isPrime(res)) answer.push(res);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
```

### :hammer: 알고리즘 구현(string)

```js
function isPrime(num) {
  if (num === 1) {
    return false;
  }

  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(arr) {
  const answer = [];
  for (let x of arr) {
    let res = Number.parseInt(x.toString().split('').reverse().join(''));
    if (isPrime(res)) {
      answer.push(res);
    }
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
```

### ✅ 검증 및 트러블 슈팅

- 정답
- 배열을 순회하면서 각 배열의 요소안에서도 탐색하는 완전탐색에 더 적응해야할것같다.
