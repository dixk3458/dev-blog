# useState란 무엇인가?

React는 사용자의 상호작용에 따라서 동적인 페이지를 구현하는데 유용합니다. 이것의 기초가되는 `useState()` 에 대해서 알아보자.

`useState()` 는 React에서 제공하는 상태관리 Hook 중 하나입니다. 컴포넌트 **내부상태를 관리**해줍니다. 대표적인 예시로 `<Counter/>` 컴포넌트를 구현해 알아보겠습니다.

`useState()` 는 배열을 반환한다. 첫 번째는 현재 상태, 두번째는 상태를 업데이트하는 Setter함수입니다. Setter함수에 직접 업데이트 하고자 하는 값을 전달해도 되지만 최적화를 위해 값을 업데이트 하는 함수를 인자로 넘겨주자. 이유는 나중에 알아보기로 하자.

주의해야할 점은 **컴포넌트끼리 상태를 공유하지 않는다**는것이다. 현재 두개의 `<Counter/>` 컴포넌트가 있는데, counter 상태를 공유 하지 않고 따로 작동하는것을 볼 수 있다.

React에서 상태는 **동적인 데이터**로 사용자의 상호작용을 통해 업데이트하여 UI를 변경할 수 있다. 상태가 변경되면 해당 상태를 관리하는 컴포넌트가 재호출되고 리렌더링이 발생한다. Virtual DOM 과 이전 DOM을 비교해 실제 업데이트가 필요한 부분만 업데이트가 발생

```tsx
// src/useState/Counter.tsx

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{`현재 Count : ${count}}`}</h1>
      <button onClick={() => setCount(count => count + 1)}>+1</button>
      <button onClick={() => setCount(count => count - 1)}>-1</button>
    </div>
  );
}
```

```tsx
// src/App.tsx

import './App.css';
import Counter from './useState/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
```
