# 중첩 객체 상태 관리(AppMentor)

중첩된 객체로 이루어진 상태를 관리하기 위해선 `Spread`연산자를 활용 할 줄알아야한다. 
상태는 불변성을 유지해야하기때문에 만약 업데이트가 필요하다면, 새로운 객체를 만들어 진행해야한다. 즉 `Spread` 연산자를 이용해 이전 객체의 내부 값은 유지한채 변경이 필요한 부분만 바꿔 새로운 객체를 생성해야한다.

```tsx
import { useState } from 'react';ㅌ

type Person = {
  name: string;
  title: string;
  mentor?: Person;
};

type ButtonType = 'name' | 'title';

export default function AppMentor() {
  const [person, setPerson] = useState<Person>({
    name: '정재웅',
    title: '프론트엔드 주니어 개발자',
    mentor: {
      name: '남도형',
      title: '프론트엔드 시니어 개발자',
    },
  });

  const handleClick = (type: ButtonType) => {
    const value = prompt(
      `멘토의 ${type === 'name' ? '이름' : '타이틀'}을 변경해주세요 `
    );

    person.mentor &&
      setPerson({
        ...person,
        mentor: {
          ...person.mentor,
          [type]: value,
        },
      });
  };
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는{' '}
        {person.mentor && `${person.mentor.name}(${person.mentor.title})`}
      </p>
      <button
        onClick={() => {
          handleClick('name');
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          handleClick('title');
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}

```