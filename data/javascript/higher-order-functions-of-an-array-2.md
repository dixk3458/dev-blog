# 배열의 유용한 고차함수 Part 2

### Array.filter()

`filter()` 는 배열의 요소중 조건에 맞는 요소들로 구성된 새로운 배열을 생성할때 사용된다.

```jsx
const jaewoong = { name: '정재웅', age: 26 };
const dohyeong = { name: '남도형', age: 28 };
const jiheon = { name: '김지헌', age: 30 };

const array = [jaewoong, dohyeong, jiheon];

const newArray = array.filter(obj => obj.age >= 28);
console.log(newArray);
```

### Array.map()

`map()` 은 많이 사용되는 함수이니 잘 익혀두자.

`map()` 은 배열의 아이템들을 각각 다른 요소로 매핑할때 사용되는 고차함수이다. 즉 배열을 순회하면서 각각의 요소들에 콜백으로 전달한 함수를 적용하고 새로운 배열을 생성한다.

```jsx
const nums = [1, 2, 3, 4, 5];

console.log(nums.map(num => num * 2));
```

`forEach()` 는 반환값이 없다는것에 주목하자.

`map()`과 비슷한 `flatMap()`도 있다.

`flatMap()` 역시 배열의 요소를 다른 값으로 매핑하지만, 만약 중첩된 요소가 있다면, 한단계 풀어서 반환한다.

### Array.sort()

배열의 요소들을 특정 기준에 맞게 정렬해준다.

기본 기준값은 문자열 형태의 오름차순 정렬이다. 그리고 `sort()` 는 기존 배열을 변경해준다는것을 잊지 말자.

```jsx
const array = [0, 1, 7, 2, 50, 3, 6, 20];

console.log(array.sort((a, b) => a - b));
```

### Array.reduce()

`reduce()` 는 배열의 요소들을 접어가며 하나의 값으로 만들때 사용한다. 보통 배열의 모든 요소를 더한값을 구할때 사용했다.

```jsx
const array = [0, 1, 7, 2, 50, 3, 6, 20];

console.log(array.reduce((sum, value) => sum + value, 0));
```
