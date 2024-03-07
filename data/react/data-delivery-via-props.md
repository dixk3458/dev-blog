# Props을 통해 컴포넌트에게 값 전달

Props은 Properties의 줄임말로 외부로부터 받아오는 상태를 의미한다.

Props 역시 상태이기에 변경되면 해당 상태를 사용하는컴포넌트에서 re-rendering이 발생한다.

### Props 사용법

Props을 이용해서 컴포넌트의 재사용성을 높일 수 있다. 예를들어 보라색 버튼이 있을때 사용하는 곳마다 다른 Text와 다른 Click Event를 등록하고싶다면 Props을 이용해서 값을 받아오면된다.

`<Button/>` 컴포넌트를 만들어 실습해보자.

```tsx
type Props = {
  text: string;
  onClick: () => void;
};

export default function Button({ text, onClick }: Props) {
  return <button onClick={() => onClick()}>{text}</button>;
}
```

```tsx
import './App.css';
import Button from './Props/Button';

function App() {
  return (
    <div className="App">
      <Button
        text="안녕 나는 정재웅"
        onClick={() => console.log('안녕 나는 정재웅')}
      />
      <Button
        text="안녕 나는 남도형"
        onClick={() => console.log('안녕 나는 남도형')}
      />
    </div>
  );
}

export default App;
```

`<Button/>` 컴포넌트는 외부로부터 text와 onClick를 전달받기때문에 재사용성을 높일수있다.

### Props.children

이전에는 컴포넌트의 Props 속성에 작성해 값을 넘겨주었다면, 컨테이너 컴포넌트로 감싸 내부 요소를 다르게 하여 새로운 컴포넌트를 만들 수 있다.
아래처럼 `<Wrapper/>` 컴포넌트 사이에 렌더링하고자 하는 요소를 넘겨주면, children으로 전달되어 렌더링되는것을 볼 수 있다.
이러한 방식은 나중에 다루어볼 Context 에서 활용할 수 있다.

```tsx
// src/props/Wrapper.tsx

type Props = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: Props) {
  return (
    <div style={{ background: 'blue', padding: '4px' }}>
      <p>컨테이너 Wrapper 컴포넌트이다.</p>
      {children}
    </div>
  );
}
```

```tsx
import './App.css';
import Button from './props/Button';
import Wrapper from './props/Wrapper';

function App() {
  return (
    <div className="App">
      <Button
        text="안녕 나는 정재웅"
        onClick={() => console.log('안녕 나는 정재웅')}
      />
      <Button
        text="안녕 나는 남도형"
        onClick={() => console.log('안녕 나는 남도형')}
      />
      <Wrapper>
        <p style={{ background: 'yellow' }}>
          컨테이너 내부 요소로 전달되는 children
        </p>
      </Wrapper>
    </div>
  );
}

export default App;
```
