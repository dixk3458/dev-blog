# useImmer란 무엇인가?

useImmer는 React의 외부 라이브러리로 복잡한 상태 관리를 더욱 직관적으로 할 수 있게해준다.

불변성의 상태를 업데이트 하기위해서 기존 상태를 이용해 새로운 상태를 만들어 업데이트 해주었다면, Immer는 가변성의 데이터를 업데이트 하는것처럼 직접 값에 접근해 업데이트를 해준다.

하지만 Immer 내부적으로는 새로운 상태를 만들어 업데이트 하고있다.

정리하자면 React의 상태는 읽기전용으로 불변성을 유지해야한다. 따라서 상태를 업데이트 하기위해서는 `Array.map()`, `spread 연산자` 등 다양한 방법으로 새로운 상태를 만들어 복잡한 로직에서는 가독성이 좋지 않았다. 이러한 점을 해결해주는것이 `useImmer`라이브러리로 상태를 직관적으로 업데이트 할수있게해준다.

하지만 무조건적으로 `useImmer` 를 사용하는것은 좋지않다. 오히려 `Immer` 를 사용했을때 더 복잡해지는 경우도 있다. ex) 변경하고자 하는 요소가 객체 깊은곳에 위치할때

그리고 Immer역시 외부 라이브러리이기때문에 성능을 약간 저하 시킨다는 단점도 존재한다.
Native Hooks을 이용하여 상태를 업데이트 했을때 6ms가 걸린반면, Immer의 경우 31ms가 걸린것을 확인할 수 있었다.

**큰 차이는 아니지만 성능에 영향을 준다는것을 알아두자.**

```tsx
import { useImmer } from 'use-immer';

type Person = {
  name: string;
  title: string;
  mentors?: Person[];
};

const initialPerson = {
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

export default function CreateMentorImmer() {
  const [person, updatePerson] = useImmer<Person>(initialPerson);

  const handleUpdate = () => {
    const prev = prompt('누구의 이름을 변경하시겠습니까?');
    const current = prompt('무엇으로 변경하시겠습니까?');

    if (!prev || !current) {
      throw new Error('잘못된 값입니다 다시 처리해주세요');
    }

    updatePerson(person => {
      const mentor = person.mentors?.find(m => m.name === prev);

      if (!mentor) {
        throw new Error('에러');
      }

      mentor.name = current;
    });
  };

  const handleCreate = () => {
    const newName = prompt('새로운 멘토의 이름을 입력해주세요.');
    const newTitle = prompt('새로운 멘토의 타이틀을 입력해주세요.');

    if (!newName || !newTitle) {
      throw new Error('에러');
    }

    updatePerson(person => {
      person.mentors?.push({ name: newName, title: newTitle });
    });
  };

  const handleRemove = () => {
    const remove = prompt('삭제할 멘토의 이름을 입력해주세요');

    if (!remove) {
      throw new Error('에러');
    }

    updatePerson(person => {
      if (!person || !person.mentors) {
        throw new Error('에러');
      }
      const index = person.mentors.findIndex(m => m.name === remove);

      person.mentors.slice(index, 1);
    });
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

[Introduction to Immer | Immer](https://immerjs.github.io/immer/)
