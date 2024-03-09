# useRef란 무엇인가? (2)

컴포넌트에서 특정 DOM을 선택해야 할 때, `useRef` 를 사용해야한다고 했다. `useRef`는 DOM을 선택하는 용도 외에도 다른 용도로 활용할 수 있다. 바로 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하는것이다.
`useRef` 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않는다. React에서 상태는 상태를 바꾸는 set함수를 호출하고 나서 그 다음 렌더링 이후로 업데이트 된 상태를 조회할 수 있는 반면, `useRef` 로 관리하고 있는 변수는 설정 후 바로 조회할 수 있다. 이 변수를 사용하여 다음과 같은 값을 관리 할 수 있다.

- `setTimeout`, `setInterval` 를 통해서 만들어진 `id`
- 외부 라이브러리를 사용하여 생성된 인스턴스
- scroll 위치

`useRef` 를 사용해 변수를 관리하는 실습을 진행해보자.

text 상태가 변경될때마다 리렌더링이 발생해 count를 호출한다. 하지만 버튼을 통해 count를 증가시켜도 리렌더링이 발생하지 않는것을 볼 수 있다. 즉 `useRef`를 통해 관리하는 값은 변경되어도 리렌더링을 발생시키지 않는다. 

```tsx
import { ChangeEvent, useRef, useState } from 'react';

export default function RefVariable() {
  const [text, setText] = useState('');
  console.log(text);

  const count = useRef(0);
  console.log(count);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    count.current = count.current + 1;
  };
  return (
    <div>
      <label htmlFor="input-id">ID : </label>
      <input
        type="text"
        id="input-id"
        value={text}
        onChange={e => handleChange(e)}
      />
      <button onClick={() => handleClick()}>+</button>
    </div>
  );
}

```