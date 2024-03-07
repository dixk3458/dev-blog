# 컴포넌트 생성 및 구조 분석

앞으로 컴포넌트를 만들때 함수형 컴포넌트를 이용해 생성할것이다.
함수형 컴포넌트를 만들기위해서는 파일을 만들고 대문자로 시작하는 함수를 생성해야한다.

간단하게 `<Hello/>` 컴포넌트를 생성해보자.

```tsx
// src/first-component/Hello.tsx

export default function Hello() {
  return <div>안녕하세요 저는 정재웅입니다.</div>;
}
```

```tsx
// src/App.tsx

import './App.css';
import Hello from './first-component/Hello';

function App() {
  return (
    <div className="App">
      <Hello />
    </div>
  );
}

export default App;
```

사용하는곳에서 `<Hello/>` 형태로 사용만 해주면된다. 그렇기에 쉽게 재사용할 수 있다.

코드를 더욱 자세히 분석해보겠다.

```tsx
// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

`ReactDOM.createRoot()` 을 이용해 html파일에서 id가 root인 요소를 찾아 root로 만들고 실제 DOM 내부에 리액트 컴포넌트를 렌더링 하겠다는것을 의미한다.

즉 사용자가 페이지를 요청했을때 즉각적으로 컨텐츠로 채워진 페이지를 보는것이 아니라 Javascript, CSS, React 등 리소스를 모두 받은 후에 id가 root인 요소에 컨텐츠가 채워져 정상적인 페이지를 볼수있는것이다.
