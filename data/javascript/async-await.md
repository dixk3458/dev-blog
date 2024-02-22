# async, await

### async & await는 무엇인가?

자바스크립트의 비동기 처리 패턴중 하나이다. 기존의 콜백 함수와 프로미스를 이용해 비동기 처리를 했던 방식의 단점을 보완하고 개발자가 읽기 좋은 코드를 작성할 수 있게 도와준다.

### 어떤 단점이죠? ⇒

대표적으로 콜백 헬과 과도한 체이닝으로 발생하는 가독성 저하가 있습니다.

### async & await를 이용해 비동기를 처리하면 어떤 장점이 있죠?

async & await를 이용하면 비동기 코드를 동기적으로 작성할 수 있게 해줍니다. 즉 동기적으로 코드를 작성할 수있어 가독성 높은 코드를 작성할수있습니다.

```jsx
function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}
function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}
function getChicken() {
  return Promise.reject(new Error('can not find 🐓'));
}

async function makeFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = '🐔';
  }
  const egg = await fetchEgg(chicken);
  const result_1 = await fryEgg(egg);
  console.log(result_1);
  return result_1;
}

makeFriedEgg().then(result => console.log(result));
```
