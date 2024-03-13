```tsx
import { useState } from 'react';

type Person = {
  name: string;
  title: string;
  mentors?: Person[];
};

export default function CreateMentor() {
  const [person, setPerson] = useState<Person>({
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
  });

  const handleUpdate = () => {
    try {
      const prev = prompt('누구의 이름을 변경하시겠습니까?');
      const updated = prompt('무엇으로 변경하시겠습니까?');

      if (!prev || !updated) {
        throw new Error('잘못된 값입니다 다시 처리해주세요');
      }

      setPerson(person => ({
        ...person,
        mentors:
          person.mentors &&
          person.mentors.map(mentor => {
            if (mentor.name === prev) {
              return {
                ...mentor,
                name: updated,
              };
            }
            return mentor;
          }),
      }));
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const handleCreate = () => {
    const newName = prompt('새로운 멘토의 이름을 입력해주세요.');
    const newTitle = prompt('새로운 멘토의 타이틀을 입력해주세요.');

    try {
      if (!newName || !newTitle) {
        throw new Error('잘못된 입력입니다.');
      }

      setPerson(person => ({
        ...person,
        mentors: person.mentors && [
          ...person.mentors,
          { name: newName, title: newTitle },
        ],
      }));
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

      setPerson(person => ({
        ...person,
        mentors:
          person.mentors &&
          person.mentors.filter(mentor => mentor.name !== remove),
      }));
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
