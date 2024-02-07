# Sanity는 무엇인가?

### Sanity란?

---

블로그, 쇼핑몰 등에서 사용하는 다양한 컨텐츠를 관리할 수 있는 컨텐츠 관리 시스템이다(CMS).

Sanity에서 관리해주는 컨텐츠 데이터는 Content Lake라는 클라우드 저장소에 저장되며, 그 저장소와 동기화되어 데이터에 접근할 수 있도록하는것이 Sanity Studio이다.

### Sanity 프로젝트 셋업시 발생하는 문제

---

❓ The content option in your Tailwind CSS configuration is missing or empty
Configure your content sources or your generated CSS will be missing styles
https://tailwindcss.com/docs/content-configuration

Sanity Studio를 프로젝트 내부 폴더에 셋업을 하면 위와 같은 에러가 발생한다.
해당 에러는 **Sanity-Studio 폴더에 tailwind.config파일이 없어 발생하는 문제**로
프로젝트에서 사용하는 **tailwind.config 파일과 동일한 이름으로 복제해 Sanity-Studio 폴더 내부에 생성**해주면된다.

### Sanity Schema 생성

---

데이터 모델에 대한 Schema를 생성하기위해서 다음과 같이 파일을 생성하고 index파일에서 활용해주면 된다.

- pet.js

  ```jsx
  // schemas/pet.js

  export default {
    name: 'pet',
    type: 'document',
    title: 'Pet',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
    ],
  };
  ```

- index.ts

  ```jsx
  // schemas/index.ts
  import pet from './pet';

  export const schemaTypes = [pet];
  ```

### 순수 데이터 베이스 와 차이점

---

Sanity는 Content Lake안에 있는 데이터베이스를 사용하는데 안에 데이터를 생성 수정 삭제 할 때 호출하는 함수들이 CMS안에 내장 돼있어서 **데이터베이스에 대한 깊은 지식없이도 편하게 사용할수 있고 코드를 전혀 모르는 사람도 sanity studio 인터페이스로 데이터를 조작할수 있습니다.**
추가로 코딩을 모르는 관리자분들이 sanity studio를 사용하면 코드를 건드리지 않고도 데이터베이스를 직관적으로 관리할수있습니다.
