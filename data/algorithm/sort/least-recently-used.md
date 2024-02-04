# Least Recently User(카카오 캐시 문제 변형)

### ⭐ 문제 추상화

- LRU 알고리즘을 따른다. LRU는 가장 최근에 사용되지 않은 것을 말한다.
- 캐시에서 작업을 제거할 때 가장 오랫동안 사용하지 않은 것을 제거하자.
- Cache Miss : 해야할 작업이 캐시에 없어, 새로운 작업이 맨 앞에 위치하고 나머지가 한 칸식 밀린다.
- Cache Hit : 해야할 작업이 캐시에 있는 상태, 해당 작업이 맨 앞에 위치하고 나머지 밀린다.
- 캐시 크기가 주어지고, 캐시가 비어있는 상탱서 N개의 작업을 CPU가 차례로 처리한다면 N개의 작업을 처리한 후 캐시메모리의 상태를 출력하라.

### 🔧 알고리즘 설계

- size크기의 answer 배열을 0으로 초기화 준비한다.
- arr배열을 순회하면서 검사를 한다.
- for문을 i가 0부터 arr.length보다 작을때까지 수행한다.
- answer배열에 arr[i]가 있는지 없는지 검사
- 만약에 answer 배열에 arr[i]가 있다면 Cache Hit으로 answer.indexOf(arr[i])를 해준다.
- for let j가 index-1부터 0번째 인덱스까지 뒤로 밀어준다.
- answer[0]번째에 arr[i]값을 넣는다.
- 만약에 answer 배열에 arr[i]가 없다면 Cache Miss로 뒤로 밀어준다.
- for j가 answer.length -1 부터 시작해서 0번째 인덱스가 될때까지 answer[j]번째 값을
  answer [j+1]에 값을 추가해주는데 만약 j+1이 size라면 pass를 한다.

### 🔨 알고리즘 구현

```js
function solution(size, arr) {
  const answer = Array(size).fill(0);

  for (let i = 0; i < arr.length; i++) {
    if (answer.includes(arr[i])) {
      let index = answer.indexOf(arr[i]);
      for (let j = index; j > 0; j--) {
        answer[j] = answer[j - 1];
      }
      answer[0] = arr[i];
    } else {
      for (let j = size - 1; j > 0; j--) {
        answer[j] = answer[j - 1];
      }
      answer[0] = arr[i];
    }
  }

  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
```

### ✅ 검증 및 트러블 슈팅

- 오답
- 접근 방법은 맞았지만, 구현에 실패했다.
