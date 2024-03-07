# Hash 개념

키와 값을 받아 키를 해싱하여 나온 index에 값을 저장하는 선형 자료구조이다.
해시 테이블의 삽입은 O(1)이며 키를 알고 있다면 삭제, 탐색도 O(1)로 수행한다.

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2Fb4e93f7f-7ba7-4adc-acd5-e323aec88981%2FUntitled.png?table=block&id=8d9b378e-179a-4412-a122-3da869c9f160&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=900&userId=&cache=v2)

### 해시 함수

해시 함수는 입력받은 값을 특정 범위 내 숫자로 변경하는 함수이다. 해시 테이블에서 index를 구성할때 사용된다.
해시 함수의 결과가 동일하게 겹칠수도 있다는 문제점(해시 충돌)이 있다.

문제점 해결 방법

- 선형 탐사법 - 충돌이 발생하면 옆으로 한 칸 이동한다.
- 제곱 탐사법 - 충돌이 발생하면 충돌이 발생한 횟수의 제곱만큼 옆으로 이동한다.
- 이중 해싱 - 충돌이 발생하면 다른 해시 함수를 이용한다.

### 해시 테이블의 사용 용도

실세계에서 학생 정보를 어떻게 관리할 것인가?

만약 연결리스트를 이용해 학생 정보를 관리한다면 특정 학생의 정보를 조회할때 O(n) 시간복잡도가 걸린다.

배열로 관리한다면 인덱스를 모를 경우 탐색에 O(n)이 걸린다.

반면 해시 테이블을 사용하면 O(1)에 찾을 수 있다.
따라서 고유한 위치에 값을 저장하고 빠르게 특정 값을 찾아야하는 경우 해시 테이블을 사용하는것이 좋다.

### 해시 함수의 구현방법

JavaScript에서 해시 테이블을 구현하는 방법으로는 배열과 자료구조 Map, Set이 있다.

1. 배열
2. Map
3. Set

- 배열

  ```jsx
  const table = [];

  // 삽입
  table['202068069'] = '정재웅';
  table['20240303'] = '남도형';
  console.log(table['202068069']); // 정재웅
  console.log(table['20240303']); // 남도형

  // 삭제
  delete table['202068069'];
  console.log(table['202068069']); // undefined
  ```

- Map

  ```jsx
  const hashMap = new Map();

  // 삽입
  hashMap.set('202068069', '정재웅');
  hashMap.set('20240303', '남도형');

  // 조회
  console.log(hashMap.get('202068069')); // 정재웅

  // 삭제
  hashMap.delete('202068069');
  console.log(hashMap.get('202068069')); // undefined

  hashMap.clear(); // 전부 삭제
  ```

- Set
