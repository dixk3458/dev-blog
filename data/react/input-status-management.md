# input 상태 관리

React는 상태를 기반으로 UI가 표기되어야한다. 하지만 `<input/>` 태그의 경우 입력칸에 상태와 관계없이 업데이트가 발생할 수 있는데 이러한 동작은 React의 철칙을 벗어난다. 따라서 이러한 태그를 제어가 가능한 Controlled Component로 만들어줘야한다.
`<Form/>` 컴포넌트를 통해 실습해보자.

`<input/>` 태그에 변경이 발생할때마다 text 상태를 업데이트 하는것을 볼 수 있다.

```tsx
import { FormEvent, useState } from 'react';

export default function Form() {
  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] =
    useState('현재 제출된 Text가 없습니다.');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmittedText(text);
  };
  return (
    <>
      <h1>{submittedText}</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
```

### 여러 개의 input 상태 관리하기

만약 ID, PW와 같이 여러개의 input 상태 관리가 필요하다면 어떻게해야할까?
각 input마다 상태를 만들어야할까? 그렇게 구현할수도 있지만 효율적으로 관리하기 위해선 연관된 데이터를 저장할 객체상태를 만들고 name property를 이용해 관리할 수 있다.

```tsx
import { ChangeEvent, FormEvent, useState } from 'react';

type User = {
  id: string;
  pw: string;
};

export default function Inputs() {
  const [user, setUser] = useState<User>({
    id: '',
    pw: '',
  });

  const [submittedUser, setSubmittedUser] = useState<User>({
    id: '',
    pw: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUser(user => ({ ...user, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmittedUser(user);
  };
  return (
    <>
      <h1>{`ID:${submittedUser.id}`}</h1>
      <h1>{`PW:${submittedUser.pw}`}</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          value={user.id}
          name="id"
          onChange={e => handleChange(e)}
        />
        <input
          type="text"
          value={user.pw}
          name="pw"
          onChange={e => handleChange(e)}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
```
