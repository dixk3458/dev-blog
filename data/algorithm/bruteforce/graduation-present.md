# 졸업 선물

### :star: 문제 추상화

- 학생들의 각자 원하는 상품의 가격과 배송비를 입력받는다.
- 선생님의 한정된 예산에서 최대 몇명의 학생에게 선물을 사줄 수 있는가?
- 선생님은 상품 하나를 50%할인해서 살수있다.
- 배송비는 할인에 포함되지 않는다.

<br>

### :wrench: 알고리즘 설계

- 사줄수있는 선물의 개수를 저장하기위해 변수 answer를 가장 큰 수로 정렬한다.
- 최대로 선물을 사주기 위해서 상품 가격 + 배송비가 낮은 선물부터 사주기 시작해야한다.
- 상품 가격 + 배송비가 낮은순으로 정렬을 해준다.(내림차순 정렬)
- 정렬된 배열을 순회하면서 각 상품마다 할인을 적용해 개수를 파악한다.
- 순회마다 변수 count를 0으로 선언후 마지막에 answer와 비교를 해준다.

<br>

### :hammer: 알고리즘 구현

```js
function solution(m, product) {
  let answer = 0;

  let length = product.length;

  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < length; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let count = 1;

    for (let j = 0; j < length; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money = money - product[j][0] + product[j][1];
        count = count + 1;
      }
    }

    answer = Math.max(answer, count);
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
```

<br>

### ✅ 검증 및 트러블 슈팅

- 오답
- 다시 볼 문제
- 블루투 포스에 익숙치않다.
- 접근을 못했다.
