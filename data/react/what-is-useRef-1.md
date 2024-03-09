# useRef란 무엇인가? (1)

Javascript를 사용하여 특정 DOM을 선택하기위해서는 **`querySelector`**, `getElementById`와 같은 DOM Selector 함수를 이용했다.

흔한 경우는 아니지만, React를 사용할때에도 특정 DOM을 직접 선택해야 하는 상황도 있다. 예를들어 특정 요소의 크기를 가져오거나, 스크롤바 위치를 가져오거나, 또는 특정 요소에 포커스를 설정할때와 같은 상황이 있다. 이러한 상황에서는 `ref` 를 이용해야한다.

함수형 컴포넌트에서 `ref` 를 사용할 때에는 `useRef` 라는 Hook을 이용한다. `useRef` 를 `<RefForm/>` 컴포넌트를 만들어 실습해보자.

`useRef()`를 이용해 특정 DOM을 가리킬수 있는 Ref 객체를 만들고, 이 객체를 우리가 선택하고 싶은 DOM에 `ref` 값으로 지정해주자. 그러면 Ref객체의 `current` 값은 우리가 지정한 DOM을 가리키게된다. 이것을 활용해 특정 DOM에 `focus()`가 되도록 했다.

```tsx
// src/useRef/RefForm
import { FormEvent, useRef, useState } from 'react';

export default function RefForm() {
  const [text, setText] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleReset = () => {
    setText('');
    inputRef.current?.focus();
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('제출');
    handleReset();
  };

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="input-id">ID : </label>
        <input
          id="input-id"
          type="text"
          value={text}
          ref={inputRef}
          onChange={e => setText(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <button onClick={() => handleReset()}>Reset</button>
    </>
  );
}
```
