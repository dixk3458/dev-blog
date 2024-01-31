Reducer를 사용하면 얻게되는 장점은 다음과 같다.

1. 서비스 로직과 컴포넌트 로직을 분리할수있다.
2. 상태관리 로직을 다른 컴포넌트에서도 재사용할수있다.

### ❓사용법

- state-reducer 파일을 생성한다.
- `export function stateReducer(state,action){}`을 선언
- state-reducer 파일에서 사용자가 전달하는 action에 따라서 상태를 관리해주는 로직을 작성한다. (`swtich~case`)
- `useReducer(reducerFunc,initialState);`

### 🚩적용

- AppReducer.tsx
  ```tsx
  import { useReducer } from 'react';
  import { personReducer } from '../reducer/person-reducer';

  export default function AppReducer() {
    const [person, dispatch] = useReducer(personReducer, initialPerson);

    const handleUpdate = () => {
      const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
      const current = prompt('이름을 무엇으로 바꾸고 싶은가요?');

      if (!prev || !current) {
        return;
      }

      dispatch({ type: 'updated', prev: prev, current: current });
    };

    const handleAdd = () => {
      const name = prompt('새로운 멘토의 이름을 입력해주세요.');
      const title = prompt('새로운 멘토의 타이틀을 입력해주세요.');

      if (!name || !title) {
        return;
      }

      dispatch({ type: 'added', name: name, title: title });
    };

    const handleDelete = () => {
      const name = prompt('삭제할 멘토의 이름을 입력해주세요.');

      if (!name) {
        return;
      }

      dispatch({ type: 'deleted', name: name });
    };

    return (
      <div className="w-full h-full">
        <h1 className="text-4xl font-bold">{`${person.name}은 ${person.title}`}</h1>
        <p className="text-xl mt-4">{`${person.name}의 멘토는`}</p>
        <ul>
          {person.mentors &&
            person.mentors.map((mentor, index) => {
              return (
                <li
                  key={index}
                  className="my-2"
                >{`${mentor.name}(${mentor.title})`}</li>
              );
            })}
        </ul>
        <div className="flex gap-2">
          <Button
            text="멘토 이름 바꾸기"
            action={handleUpdate}
            className="bg-sky-200 rounded-md py-1 px-2"
          />
          <Button
            text="멘토 추가하기"
            action={handleAdd}
            className="bg-orange-200 rounded-md py-1 px-2"
          />
          <Button
            text="멘토 삭제하기"
            action={handleDelete}
            className="bg-green-200 rounded-md py-1 px-2"
          />
        </div>
      </div>
    );
  }

  const initialPerson = {
    name: '정재웅',
    title: '개발자',
    mentors: [
      {
        name: '이상곤',
        title: '시니어 프론트엔드 개발자',
      },
      {
        name: '이완권',
        title: '시니어 백엔드 개발자',
      },
    ],
  };

  type Props = {
    text: string;
    action: () => void;
    className: string;
  };

  function Button({ text, action, className }: Props) {
    return (
      <button onClick={() => action()} className={className}>
        {text}
      </button>
    );
  }
  ```
- person-reducer.ts
  ```tsx
  export type Person = {
    name: string;
    title: string;
    mentors?: Person[];
  };

  type UpdatedAction = {
    type: 'updated';
    prev: string;
    current: string;
  };
  type AddedAction = {
    type: 'added';
    name: string;
    title: string;
  };
  type DeletedAction = {
    type: 'deleted';
    name: string;
  };

  export type Action = UpdatedAction | AddedAction | DeletedAction;

  export function personReducer(person: Person, action: Action): Person {
    switch (action.type) {
      case 'updated':
        const { prev, current } = action;

        return {
          ...person,
          mentors: person.mentors
            ? person.mentors.map(mentor => {
                if (mentor.name === prev) {
                  return { ...mentor, name: current };
                }
                return mentor;
              })
            : [],
        };
      case 'added':
        const { name, title } = action;

        //   if(!person.mentors){
        //     return
        //   }

        return {
          ...person,
          mentors: person.mentors
            ? [...person.mentors, { name: name, title: title }]
            : [{ name: name, title: title }],
        };
      case 'deleted':
        return {
          ...person,
          mentors: person.mentors?.filter(
            person => person.name !== action.name
          ),
        };
    }
  }
  ```

### ✅ 느낀점

컴포넌트 로직과 상태 변경로직을 분리해 파일마다 각자 기능에 집중할수있었지만, 나는 사용하는데 복잡했고 굳이 사용해야하나싶다.
