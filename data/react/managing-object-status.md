React는 Component를 조합하여 쉽게 UI를 만들수있게해주는 Javascript 라이브러리이다.

Component에는 내부 상태(State)와 외부로부터 전달받는 상태(Props)가 있다.

상태가 변경될때 해당 상태를 사용하는 컴포넌트의 함수가 재호출되어 리렌더링이 발생한다.

# 1. 마우스 따라 가기

---

객체 상태 관리의 첫 번째 실습으로 사용자 마우스를 따라가는 포인터를 만들어 보자.

### ⭐ 요구 사항

- 마우스 포인터를 따라 움직이는 DOM 요소

### 🔧 설계

- 현재 마우스 좌표값을 기억하는 상태를 만들자.
- x, y좌표값은 서로 연관있는 값으로 객체를 이용해 관리해보자.
- 마우스 좌표값을 얻기위해서 mouseMove이벤트를 등록하자.

### 🔨 구현

- 객체이용 X

  ```tsx
  import { useState } from 'react';

  export default function AppXY() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMouseMove = (event: React.PointerEvent<HTMLDivElement>) => {
      setX(event.clientX);
      setY(event.clientY);
    };

    return (
      <div
        className="bg-black w-full h-full"
        onPointerMove={event => handleMouseMove(event)}
      >
        <div
          className="w-[40px] h-[40px] bg-yellow-500 rounded-full"
          style={{ transform: `translate(${x - 20}px,${y - 20}px)` }}
        ></div>
      </div>
    );
  }
  ```

- 객체이용 O

  ```tsx
  import { useState } from 'react';

  export default function AppXY() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.PointerEvent<HTMLDivElement>) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    return (
      <div
        className="bg-black w-full h-full"
        onPointerMove={event => handleMouseMove(event)}
      >
        <div
          className="w-[40px] h-[40px] bg-yellow-500 rounded-full"
          style={{
            transform: `translate(${position.x - 20}px,${position.y - 20}px)`,
          }}
        ></div>
      </div>
    );
  }
  ```

### ✅ 느낀점

객체를 이용하지 않고 상태마다 따로 관리를 했을때 이벤트가 발생하면 상태를 변경하는 set함수가 두번 발생한다. 물론 최신 **React는 콜백안에서 상태 변경이 발생하면 모든 상태를 변경한 후 에 Virtual DOM에 적용**시키기때문에 큰 문제는 안될것같지만, 연관있는 데이터를 객체로 관리하여 의미를 명확하게 해주는것을 추천한다.

# 2.중첩 객체 상태 관리(멘토 바꾸기)

---

prompt를 이용해 변경될 멘토의 이름과 타이틀을 받아서 person 객체상태를 바꾸어 보자.

### ⭐ 요구 사항

- prompt를 이용해 전달받은 값으로 객체의 상태를 변경하자.

### 🔧 설계

- prompt를 이용해 변경될 값을 저장한다.
- 그 값을 이용해 setState()를 진행하는데, 특정 프로퍼티만 바꾸고 나머지는 그대로 유지되어야하기때문에 spread 연산자를 활용하자.

### 🔨 구현

- 재사용성 고려 X

  ```tsx
  import { useState } from 'react';

  export default function AppMentor() {
    const [person, setPerson] = useState({
      name: '정재웅',
      title: '개발자',
      mentor: {
        name: '이상곤',
        title: '시니어 개발자',
      },
    });

    const handleNameChange = () => {
      const changedName = prompt('변경할 이름을 입력해주세요') ?? '';
      setPerson(prev => ({
        ...prev,
        mentor: { ...prev.mentor, name: changedName },
      }));
    };

    const handleTitleChange = () => {
      const changedTitle = prompt('변경할 타이틀을 입력해주세요') ?? '';
      setPerson(prev => ({
        ...prev,
        mentor: { ...person.mentor, title: changedTitle },
      }));
    };

    return (
      <div className="w-full h-full">
        <div>
          <h1 className="text-4xl">
            {person.name}은 {person.title}
          </h1>
          <p className="text-lg mt-4">
            {person.name}의 멘토는 {person.mentor.name}({person.mentor.title})
          </p>
          <div className="mt-4">
            <button
              onClick={() => handleNameChange()}
              className="bg-orange-200 rounded-md"
            >
              멘토 이름 바꾸기
            </button>
            <button
              onClick={() => handleTitleChange()}
              className="bg-green-200 rounded-md ml-4"
            >
              멘토 타이틀 바꾸기
            </button>
          </div>
        </div>
      </div>
    );
  }
  ```

- 재사용성 고려 O

  ```tsx
  import { useState } from 'react';

  type Action = 'name' | 'title';

  export default function AppMentor() {
    const [person, setPerson] = useState({
      name: '정재웅',
      title: '개발자',
      mentor: {
        name: '이상곤',
        title: '시니어 개발자',
      },
    });

    const handleChange = (action: Action) => {
      const changed = prompt(`what's your mentor's ${action}`);

      if (!changed) {
        return;
      }

      setPerson(prev => ({
        ...prev,
        mentor: { ...prev.mentor, [action]: changed },
      }));
    };

    return (
      <div className="w-full h-full">
        <div>
          <h1 className="text-4xl">
            {person.name}은 {person.title}
          </h1>
          <p className="text-lg mt-4">
            {person.name}의 멘토는 {person.mentor.name}({person.mentor.title})
          </p>
          <div className="mt-4">
            <button
              onClick={() => handleChange('name')}
              className="bg-orange-200 rounded-md"
            >
              멘토 이름 바꾸기
            </button>
            <button
              onClick={() => handleChange('title')}
              className="bg-green-200 rounded-md ml-4"
            >
              멘토 타이틀 바꾸기
            </button>
          </div>
        </div>
      </div>
    );
  }
  ```

### ✅ 느낀점

- spread 연산자를 활용해 이전 상태 값을 이용하자는건 알았지만, 객체의 이전 상태 값을 복사할때 **소괄호()를 사용하지 않아 코드블럭으로 간주**되어 시행착오를 겪었다.
