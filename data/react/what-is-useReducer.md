# useReducer란 무엇인가?

React에서 기본적으로 제공하는 Hook으로 상태관리 로직을 외부에서 사용할 수 있게 해준다.
즉 다른 컴포넌트에서도 동일한 로직을 사용할 수 있어 상태관리 로직의 재사용성을 높여준다. 뿐만아니라 외부에서 로직을 정의하기때문에 컴포넌트 내부에서 로직을 작성할 필요가 없어 가독성을 높여준다.

즉 정리하자면 `useReducer()` 는 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시켜 재사용성과 가독성을 높여주는 Hook이다.

### 사용법

`const [state,dispatch] = useReducer(function,initialValue)` 의 형태로 `useState()` 와 유사하다.

- state : 컴포넌트 내부 상태
- dispatch : `useReducer`의 인자로 전달한 `function()`을 호출해주는 상태변경 함수이다.
- function : 외부에서 작성한 상태변경 로직 함수이다.
- initialValue : `state`의 초기 상태

`function()` 을 작성할때 상태에 무엇을 해 어떠한 상태를 반환할지 작성해주자.

```tsx
import { useReducer } from 'react';
import { personReducer } from './personReducer';

export type Person = {
  name: string;
  title: string;
  mentors?: Person[];
};

const initialPerson: Person = {
  name: '정재웅',
  title: '프론트엔드 주니어 개발자',
  mentors: [
    {
      name: '남도형',
      title: '프론트엔드 시니어 개발자',
    },
    {
      name: '이승현',
      title: '백엔드 시니어 개발자',
    },
  ],
};

export default function CreateMentor() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt('누구의 이름을 변경하시겠습니까?');
    const current = prompt('무엇으로 변경하시겠습니까?');

    if (!prev || !current) {
      throw new Error('잘못된 값입니다 다시 처리해주세요');
    }

    dispatch({ type: 'updated', prev: prev, current: current });
  };

  const handleCreate = () => {
    const newName = prompt('새로운 멘토의 이름을 입력해주세요.');
    const newTitle = prompt('새로운 멘토의 타이틀을 입력해주세요.');

    try {
      if (!newName || !newTitle) {
        throw new Error('잘못된 입력입니다.');
      }

      dispatch({ type: 'added', name: newName, title: newTitle });
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const handleRemove = () => {
    const remove = prompt('삭제할 멘토의 이름을 입력해주세요');

    try {
      if (!remove) {
        throw new Error('잘못된 입력입니다.');
      }

      dispatch({ type: 'deleted', name: remove });
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>{person.name}의 멘토는 :</p>
      <ul>
        {person.mentors &&
          person.mentors.map(person => (
            <li key={person.name}>{`${person.name}(${person.title})`}</li>
          ))}
      </ul>
      <button onClick={() => handleUpdate()}>멘토 이름 바꾸기</button>
      <button onClick={() => handleCreate()}>멘토 추가하기</button>
      <button onClick={() => handleRemove()}>멘토 삭제하기</button>
    </div>
  );
}
```

```tsx
import { Person } from './CreateMentor';

export type Action = {
  type: 'updated' | 'added' | 'deleted';
  prev?: string;
  current?: string;
  name?: string;
  title?: string;
};

export function personReducer(person: Person, action: Action): Person {
  switch (action.type) {
    case 'updated': {
      const { prev, current } = action;

      if (!prev || !current) {
        throw new Error('잘못된 값입니다 다시 처리해주세요');
      }

      return {
        ...person,
        mentors:
          person.mentors &&
          person.mentors.map(mentor => {
            if (mentor.name === prev) {
              return {
                ...mentor,
                name: current,
              };
            }
            return mentor;
          }),
      };
    }
    case 'added': {
      const { name, title } = action;

      if (!name || !title) {
        throw new Error('잘못된 값');
      }

      return {
        ...person,
        mentors: person.mentors && [
          ...person.mentors,
          { name: name, title: title },
        ],
      };
    }
    case 'deleted': {
      const { name } = action;

      return {
        ...person,
        mentors:
          person.mentors &&
          person.mentors.filter(mentor => mentor.name !== name),
      };
    }
  }
}
```
