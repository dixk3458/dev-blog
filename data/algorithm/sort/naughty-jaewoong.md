# 장난꾸러기 재웅

### ⭐ 문제 추상화

- 선생님이 반 학생들에게 번호를 정해주기위해 키가 작은 학생부터 일렬로 세웠다.
- 제일 앞은 1번이다.
- 현수는 짝꿍보다 키가 큽니다.
- 현수는 앞 번호를 받고싶어 짝궁과 자리를 바꿧습니다.
- 선생님은 이 사실을 모르고 학생들에게 번호를 부여했다.
- 키 정보가 주어질 때 현수가 받은 번호와 짝꿍이 받은 번호를 차례로 출력하라.

### 🔧 알고리즘 설계

- 조작된 배열을 원래의 기준으로 정렬을 시켜 새로운 배열을 만든다.
- 조작된 배열과 정렬된 배열을 비교해 차이가 있는 부분이 현수와 현수의 짝궁이 된다.

### 🔨 알고리즘 구현

```js
function solution(arr) {
  const sortedArray = Array.from(arr).sort((a, b) => a - b);
  const answer = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (sortedArray[i] < arr[i]) {
  //       answer.push(i + 1);
  //     } else if (sortedArray[i] > arr[i]) {
  //       answer.push(i + 1);
  //     }
  //   }

  for (let i = 0; i < arr.length; i++) {
    if (sortedArray[i] !== arr[i]) {
      // 항상 현수부터 찾아짐
      // 현수가 앞에 오길 원했기에
      answer.push(i + 1);
    }
  }

  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr2 = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
console.log(solution(arr2));
```

### ✅ 검증 및 트러블 슈팅

- 오답
- 접근을 하지 못했다.
- 굉장히 쉬운문제였지만, 복잡하게 생각했다.
