# 1. 멘토 이름 바꾸기

---

이전 실습에서 객체 안의 중첩된 객체 상태를 바꾸는 실습을 해보았는데, 이번에는 객체안에 객체들을 저장하는 배열을 관리해볼것이다.

### ⭐ 요구사항

- 변경 할 멘토를 조사하고 그 멘토의 상태를 변경해보자.

### 🔧 설계

- 버튼이 클릭되면 handleChange()가 호출된다.
- handleChange 내부에서 prompt를 이용해 변경할 멘토를 정한다.
- prompt를 이용해 어떤 이름으로 변경할지 값을 받아온다.
- 멘토의 상태를 변경한다.

### 🔨 구현

- Bad

  ```tsx
  import { useState } from 'react';

  export default function AppMentors() {
    const [person, setPerson] = useState({
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
    });

    const handleChange = () => {
      const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
      const current = prompt('이름을 무엇으로 바꾸고 싶은가요?');

      if (!prev || !current) {
        return;
      }

      for (const person of person.mentors) {
        if (person.name === prev) {
          person.name = current;
          break;
        }
      }

      setPerson(person);
    };
    return (
      <div className="w-full h-full">
        <h1 className="text-4xl font-bold">{`${person.name}은 ${person.title}`}</h1>
        <p className="text-xl mt-4">{`${person.name}의 멘토는`}</p>
        <ul>
          {person.mentors.map(mentor => {
            return (
              <li className="my-2">{`${mentor.name}(${mentor.title})`}</li>
            );
          })}
        </ul>
        <button
          onClick={() => handleChange()}
          className="bg-sky-200 rounded-md py-1 px-2"
        >
          멘토의 이름을 바꾸기
        </button>
      </div>
    );
  }
  ```

- Good

  ```tsx
  import { useState } from 'react';

  export default function AppMentors() {
    const [person, setPerson] = useState({
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
    });

    const handleChange = () => {
      const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
      const current = prompt('이름을 무엇으로 바꾸고 싶은가요?');

      if (!prev || !current) {
        return;
      }

      setPerson(person => ({
        ...person,
        mentors: person.mentors.map(mentor => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      }));
    };
    return (
      <div className="w-full h-full">
        <h1 className="text-4xl font-bold">{`${person.name}은 ${person.title}`}</h1>
        <p className="text-xl mt-4">{`${person.name}의 멘토는`}</p>
        <ul>
          {person.mentors.map(mentor => {
            return (
              <li className="my-2">{`${mentor.name}(${mentor.title})`}</li>
            );
          })}
        </ul>
        <button
          onClick={() => handleChange()}
          className="bg-sky-200 rounded-md py-1 px-2"
        >
          멘토의 이름을 바꾸기
        </button>
      </div>
    );
  }
  ```

### ✅ 느낀점

**React에서 사용하는 모든 State는 불변성을 유지해야한다**. 상태 내부에 값이 변경되어야 한다면, 내부에 직접 접근해 업데이트를 하는것이 아니라, **전체적인 새로운 상태를 만들어 전달해야한다.**

React는 상태의 값이 변경되어야 인지를 할 수 있기때문이다.

# 2. 멘토 추가/삭제하기

---

기존의 mentors 배열에서 새로운 mentor를 추가하거나 삭제를 할것이다.

### ⭐ 요구사항

- 새로운 멘토의 이름과 타이틀을 받아 배열에 새로운 객체를 추가하자.
- 삭제할 멘토의 이름을 받아 배열에서 제거하자

### 🔧 설계

- 버튼이 클릭되면 각각 handleAdd()와 handleDelete()가 호출된다.
- 함수 내부에서 요구사항에 맞게 값을 입력받아 setPerson()을 호출해 새로운 값으로 업데이트 해주자.

### 🔨 구현

- Refactoring X

  ```tsx
  import { useState } from 'react';

  export default function AppMentors() {
    const [person, setPerson] = useState(initialPerson);

    const handleUpdate = () => {
      const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
      const current = prompt('이름을 무엇으로 바꾸고 싶은가요?');

      if (!prev || !current) {
        return;
      }

      setPerson(person => ({
        ...person,
        mentors: person.mentors.map(mentor => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      }));
    };

    const handleAdd = () => {
      const name = prompt('새로운 멘토의 이름을 입력해주세요.');
      const title = prompt('새로운 멘토의 타이틀을 입력해주세요.');

      if (!name || !title) {
        return;
      }

      setPerson(person => ({
        ...person,
        mentors: [...person.mentors, { name: name, title: title }],
      }));
    };

    const handleDelete = () => {
      const name = prompt('삭제할 멘토의 이름을 입력해주세요.');

      if (!name) {
        return;
      }

      setPerson(person => ({
        ...person,
        mentors: person.mentors.filter(mentor => mentor.name !== name),
      }));
    };

    return (
      <div className="w-full h-full">
        <h1 className="text-4xl font-bold">{`${person.name}은 ${person.title}`}</h1>
        <p className="text-xl mt-4">{`${person.name}의 멘토는`}</p>
        <ul>
          {person.mentors.map(mentor => {
            return (
              <li className="my-2">{`${mentor.name}(${mentor.title})`}</li>
            );
          })}
        </ul>
        <div className="flex gap-2">
          <button
            onClick={() => handleUpdate()}
            className="bg-sky-200 rounded-md py-1 px-2"
          >
            멘토의 이름을 바꾸기
          </button>
          <button
            onClick={() => handleAdd()}
            className="bg-orange-200 rounded-md py-1 px-2"
          >
            멘토 추가하기
          </button>
          <button
            onClick={() => handleDelete()}
            className="bg-green-200 rounded-md py-1 px-2"
          >
            멘토 삭제하기
          </button>
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
  ```

- Refactoring O

  ```tsx
  import { useState } from 'react';

  export default function AppMentors() {
    const [person, setPerson] = useState(initialPerson);

    const handleUpdate = () => {
      const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
      const current = prompt('이름을 무엇으로 바꾸고 싶은가요?');

      if (!prev || !current) {
        return;
      }

      setPerson(person => ({
        ...person,
        mentors: person.mentors.map(mentor => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      }));
    };

    const handleAdd = () => {
      const name = prompt('새로운 멘토의 이름을 입력해주세요.');
      const title = prompt('새로운 멘토의 타이틀을 입력해주세요.');

      if (!name || !title) {
        return;
      }

      setPerson(person => ({
        ...person,
        mentors: [...person.mentors, { name: name, title: title }],
      }));
    };

    const handleDelete = () => {
      const name = prompt('삭제할 멘토의 이름을 입력해주세요.');

      if (!name) {
        return;
      }

      setPerson(person => ({
        ...person,
        mentors: person.mentors.filter(mentor => mentor.name !== name),
      }));
    };

    return (
      <div className="w-full h-full">
        <h1 className="text-4xl font-bold">{`${person.name}은 ${person.title}`}</h1>
        <p className="text-xl mt-4">{`${person.name}의 멘토는`}</p>
        <ul>
          {person.mentors.map((mentor, index) => {
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

### ✅ 느낀점

지금 Refactoring을 하지 않아 재사용성이 떨어진다. 비슷한 UI와 로직을 하진 버튼이 따로 작성되어있기 때문이다.

이것을 하나의 컴포넌트로 만들면 재사용성을 높일 수 있을것이다.

Refactoring 구현 완료
