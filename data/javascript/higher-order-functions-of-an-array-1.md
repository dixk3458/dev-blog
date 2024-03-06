# 배열의 유용한 고차함수 Part 1

### Array.forEach()

이전에 배열의 요소를 탐색하기위해서 for를 이용해 반복문을 수행했다.
하지만 배열의 고차함수 `forEach()` 를 이용하면 더욱 간편히 배열의 요소를 탐색할 수 있다.

`forEach()` 는 배열을 **빙글빙글 돌면서 원하는것을 수행할때 사용된다.**

**for문**

```jsx
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  console.log(i);
  console.log(array);
}
```

**고차함수 적용**

```jsx
const array = ['정재웅', '남도형', '김진우', '한은서'];

// 필요한 인자만 받자 보통 value만 받는다.
array.forEach((value, index, array) => {
  console.log(value); // 각 요소의 value
  console.log(index); // 각 요소의 index
  console.log(array); // 고차함수를 호출한 배열
});
```

이렇게 더욱 간편하게 배열을 순회할 수 있다.

`find()` 는 배열의 고차함수로 배열안에 조건에 맞는 요소를 찾을때 유용하게 사용된다.

이전에는 배열을 for문으로 돌면서 if~else를 이용해 불편을 겪었다. 이것을 해결해주는것이 `find()`이다.

`find()`는 **가장 먼저 조건에 맞는 요소를 반환**해준다.
즉 조건에 해당하는 요소가 여러개라면 가장 먼저 발견된것을 반환해준다.

만약 해당 요소의 index가 궁금하다면 `findIndex()` 를 이용해주자.

**for문**

```jsx
const jaewoong = { name: '정재웅', age: 26 };
const dohyeong = { name: '남도형', age: 28 };
const jiheon = { name: '김지헌', age: 30 };

const array = [jaewoong, dohyeong, jiheon];

function find(array, name) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === name) {
      console.log('찾았다.');
      return array[i];
    }
  }
  console.log('못찾았다.');
  return undefined;
}

find(array, '정재웅');
find(array, '이승현');
```

**find()**

```jsx
const jaewoong = { name: '정재웅', age: 26 };
const dohyeong = { name: '남도형', age: 28 };
const jiheon = { name: '김지헌', age: 30 };

const array = [jaewoong, dohyeong, jiheon];

console.log(array.find(obj => obj.name === '정재웅')); // {name:'정재웅',age:26}
console.log(array.find(obj => obj.name === '이승현')); // undefined
```

### Array.find()

`find()` 는 배열의 고차함수로 배열안에 조건에 맞는 요소를 찾을때 유용하게 사용된다.

이전에는 배열을 for문으로 돌면서 if~else를 이용해 불편을 겪었다. 이것을 해결해주는것이 `find()`이다.

`find()`는 **가장 먼저 조건에 맞는 요소를 반환**해준다.
즉 조건에 해당하는 요소가 여러개라면 가장 먼저 발견된것을 반환해준다.

만약 해당 요소의 index가 궁금하다면 `findIndex()` 를 이용해주자.

**for문**

```jsx
const jaewoong = { name: '정재웅', age: 26 };
const dohyeong = { name: '남도형', age: 28 };
const jiheon = { name: '김지헌', age: 30 };

const array = [jaewoong, dohyeong, jiheon];

function find(array, name) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === name) {
      console.log('찾았다.');
      return array[i];
    }
  }
  console.log('못찾았다.');
  return undefined;
}

find(array, '정재웅');
find(array, '이승현');
```

**find()**

```jsx
const jaewoong = { name: '정재웅', age: 26 };
const dohyeong = { name: '남도형', age: 28 };
const jiheon = { name: '김지헌', age: 30 };

const array = [jaewoong, dohyeong, jiheon];

console.log(array.find(obj => obj.name === '정재웅')); // {name:'정재웅',age:26}
console.log(array.find(obj => obj.name === '이승현')); // undefined
```

### Array.some(),every()

`some()` 은 배열의 요소들이 부분적으로 조건에 해당하는지 검사하기위해 사용하는 고차함수이다.

반면 `every()` 는 배열의 요소들이 모두 조건에 해당하는지 안하는지 검사하기위해 사용하는 고차함수이다.

```jsx
const jaewoong = { name: '정재웅', age: 26 };
const dohyeong = { name: '남도형', age: 28 };
const jiheon = { name: '김지헌', age: 30 };

const array = [jaewoong, dohyeong, jiheon];

console.log(array.some(obj => obj.name === '정재웅'));
console.log(array.every(obj => obj.age === '26'));
```
