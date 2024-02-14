# Promise 개념 및 실습

Promise는 비동기 작업의 결과 상태를 알려주는 Object로 3가지 상태가 존재한다.

- pending : Promise가 등록되어 시작한 상태
- fullfilled : 성공적으로 작업을 완료한 상태
- rejected : 작업에 실패한 상태

**Promise**를 이용하게 되면, 비동기 코드를 더욱 깔끔하게 작성 할 수있게해준다. 깔끔하게 작성 한다는것은 Callback이 계속해서 chaining 되는 Callback Hell을 피할수있다는것을 말한다.

기존 **callback**을 사용해 비동기 코드를 작성한다면 아래와 같이 작성 할 수있다.

```jsx
function runInDelay(callback, second) {
  if (!callback) {
    throw new Error('함수가 전달되지 않았습니다.');
  }

  if (!seconds || seconds < 0) {
    throw new Error('잘못된 seconds입니다.');
  }

  setTimeout(callback, seconds * 1000);
}
```

**`Promise`**를 이용해 더욱 깔끔하게 작성해보자.

```jsx
function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject();
    }
    setTimeout(resolve(), seconds * 1000);
  });
}

runInDelay()
  .then(() => console.log('성공'))
  .catch(() => console.log('실패'))
  .finally(() => console.log('무조건 실행'));
```
