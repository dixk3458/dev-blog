# 배열 렌더링

배열을 렌더링하는 방법을 알아보자. 다양한 정보가 들어있는 배열이 있다고 가정하자. 이 배열의 내용을 가지고 렌더링을 한다면 어떻게 해야할까?

다음 예시 처럼 배열의 인덱스에 일일이 접근해 렌더링을 해줘야할까? 매우 비효율적인 방법이다. 중복된 코드가 많이 발생해 가독성이 안좋은것을 확인할 수 있다.

```jsx
import React from 'react';

function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ];
  return (
    <div>
      <div>
        <b>{users[0].username}</b> <span>({users[0].email})</span>
      </div>
      <div>
        <b>{users[1].username}</b> <span>({users[1].email})</span>
      </div>
      <div>
        <b>{users[2].username}</b> <span>({users[1].email})</span>
      </div>
    </div>
  );
}

export default UserList;
```

그렇다면 좋은 방법은 무엇일까? 바로 배열의 `map()` 함수를 이용해 렌더링 하는것이다. 배열의 각 요소를 순회하면서 값에 접근해 렌더링 하는것이다. 주의해야할것이 있다면 React에서 배열을 렌더링 할 때에는 리스트마다 `key` 라는 고유한값을 설정해줘야한다. 편의상 이번 `<ArrayRender/>` 실습에서는 인덱스 번호를 고유한 `key`값으로 사용해주자.

```tsx
const users = [
  {
    name: '정재웅',
    age: 26,
  },
  {
    name: '남도형',
    age: 37,
  },
  {
    name: '이승현',
    age: 48,
  },
  {
    name: '김지헌',
    age: 59,
  },
];

export default function ArrayRender() {
  return (
    <div>
      {users.map(({ name, age }, index) => (
        <li key={index}>
          <span>{`이름 : ${name}`}</span>
          <span>{`나이 : ${age}`}</span>
        </li>
      ))}
    </div>
  );
}
```
