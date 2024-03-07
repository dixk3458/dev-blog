# 베스트 앨범 문제풀이

### 문제 추상화 ⭐

문제의 핵심은 장르별 총 재생횟수를 파악하여 많이 재생된 장르부터 조건에 맞게 노래 2개를 베스트 앨범에 수록하는것이다.
즉 장르별로 노래를 묶고 해당 노래를 특정 기준에 맞게 정렬하는것이 포인트이다.
그리고 장르의 종류가 최대 100개인것을 보아 시간복잡도가 높은 코드를 작성하더라도 통과될 가능성이 있다는것을 추측할 수 있다.

### 전략 🔧

1. 같은 장르끼리 노래를 묶어주자.
2. 묶인 노래들을 재생순으로 정렬하자 만약 재생수가 같다면 고유번호가 낮은것을 기준으로 정렬하자
3. 각 장르별 노래를 2개씩 잘라주자.

### 구현 🔨

```jsx
function solution(genres, plays) {
  let answer = [];

  const genreMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [
          ...data.songs,
          {
            // 재생횟수, 고유번호
            play: play,
            index: index,
          },
        ]
          .sort((a, b) => {
            if (a.play === b.play) {
              return a.index - b.index;
            } else {
              return b.play - a.play;
            }
          })
          .slice(0, 2),
      });
    });

  answer = [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap(item => item[1].songs)
    .map(song => song.index);

  return answer;
}

const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
const plays = [500, 600, 150, 800, 2500];

console.log(solution(genres, plays));

```

### 시행착오

이 문제를 처음 풀때 순회를 계속사용해서 2가지 케이스에 대해 런타임 시간을 초과했다.
이를 해결하기위해 자료구조 해시 테이블을 사용했고 그 결과 문제를 성공적으로 풀 수 있었다.

**이전 구현방법**

```jsx
function solution(genres, plays) {
  const answer = [];

  const table = new Map();

  for (let i = 0; i < genres.length; i++) {
    if (table.has(genres[i])) {
      const prev = table.get(genres[i]);
      table.set(genres[i], {
        total: prev.total + plays[i],
        songs: [...prev.songs, { index: i, play: plays[i] }],
      });
    } else {
      table.set(genres[i], {
        total: plays[i],
        songs: [{ index: i, play: plays[i] }],
      });
    }
  }

  table.forEach(genre => {
    genre.songs.sort((a, b) => {
      if (a.play === b.play) {
        return a.index - b - index;
      } else {
        return b.play - a.play;
      }
    });
  });

  const array = [...table].sort((a, b) => b[1].total - a[1].total);
  console.log(array);

  for (let x of array) {
    let count = 0;
    while (count !== 2) {
      if (x[1].songs[count]) {
        answer.push(x[1].songs[count].index);
        count = count + 1;
      } else {
        break;
      }
    }
  }

  return answer;
}

const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
const plays = [500, 600, 150, 800, 2500];

console.log(solution(genres, plays));

```