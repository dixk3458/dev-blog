# 붕대 감기(PCCP 기출)

어떤 게임에는 `붕대 감기`라는 기술이 있습니다.

`붕대 감기`는 `t`초 동안 붕대를 감으면서 1초마다 `x`만큼의 체력을 회복합니다. `t`초 연속으로 붕대를 감는 데 성공한다면 `y`만큼의 체력을 추가로 회복합니다. 게임 캐릭터에는 최대 체력이 존재해 현재 체력이 최대 체력보다 커지는 것은 불가능합니다.

기술을 쓰는 도중 몬스터에게 공격을 당하면 기술이 취소되고, 공격을 당하는 순간에는 체력을 회복할 수 없습니다. 몬스터에게 공격당해 기술이 취소당하거나 기술이 끝나면 그 즉시 `붕대 감기`를 다시 사용하며, 연속 성공 시간이 0으로 초기화됩니다.

몬스터의 공격을 받으면 정해진 피해량만큼 현재 체력이 줄어듭니다. 이때, 현재 체력이 0 이하가 되면 캐릭터가 죽으며 더 이상 체력을 회복할 수 없습니다.

당신은 `붕대감기` 기술의 정보, 캐릭터가 가진 최대 체력과 몬스터의 공격 패턴이 주어질 때 캐릭터가 끝까지 생존할 수 있는지 궁금합니다.

`붕대 감기` 기술의 시전 시간, 1초당 회복량, 추가 회복량을 담은 1차원 정수 배열 `bandage`와 최대 체력을 의미하는 정수 `health`, 몬스터의 공격 시간과 피해량을 담은 2차원 정수 배열 `attacks`가 매개변수로 주어집니다. 모든 공격이 끝난 직후 남은 체력을 return 하도록 solution 함수를 완성해 주세요. **만약 몬스터의 공격을 받고 캐릭터의 체력이 0 이하가 되어 죽는다면 -1을 return 해주세요.**

### 문제 추상화 ⭐

- t초 동안 붕대를 감으면 tx + y만큼 체력을 회복한다.
- 몬스터에게 공격을 당하면 그 즉시 시간을 0으로 초기화한다.
- 몬스터에게 공격을 받으면 피해량만큼 체력이 준다.
- 만약 0이라면 죽어 더이상 체력 회복 X
- 몬스터의 모든 공격이 끝난 직후 남은 체력을 반환하라
- 만약 죽었다면 -1반환

### 전략 🔧

- 시간에 따라 각 값에 행동에 따른 연산을 해주자.
- 무한반복을 하는데, 그 안에서 시간 계산
  - total 시간
  - 붕대 시간

### 구현 🔨

```jsx
function solution(bandage, health, attacks) {
  let answer;

  let total = 0;
  // 지속시간
  let count = 0;
  let attackIndex = 0;
  let current = health;

  // 무한반복을 돌다가 잘 성공하면 탈출을 하고
  // answer 리턴
  // 실패하면 안쪽에서 answer 리턴

  while (true) {
    // 만약 health가 0이하라면 멈추고 answer -1반환
    if (current <= 0) {
      answer = -1;

      return answer;
    }

    if (attackIndex > attacks.length - 1) {
      break;
    }

    // 전체 시간 +1;
    total = total + 1;
    console.log('현재시간:', total);
    console.log('현재체력:', current);

    // 공격 들어왔는지 검사

    if (attacks[attackIndex][0] === total) {
      // 공격 들어온거
      console.log('공격 들어옴');
      console.log('공격 :', attacks[attackIndex]);

      current = current - attacks[attackIndex][1];

      attackIndex = attackIndex + 1;
      count = 0;
    } else {
      // 공격 안들어왔으면 회복
      current = current + bandage[1] >= health ? health : current + bandage[1];
      count = count + 1;
    }

    //만약 지속시간이 bandage[0]라면 0으로 초기화하고 추가회복
    if (count === bandage[0]) {
      current = current + bandage[2] >= health ? health : current + bandage[2];
      count = 0;
    }
    console.log('-------------------------------');
  }

  answer = current;

  return answer;
}

const bandage = [5, 1, 5];
const health = 30;
const attacks = [
  [2, 10],
  [9, 15],
  [10, 5],
  [11, 5],
];

console.log(solution(bandage, health, attacks));
```

### 성능 개선

```jsx
function solution(bandage, health, attacks) {
  let currHealth = health;
  let currTime = 0;

  for (let [attackTime, damage] of attacks) {
    let diffTime = attackTime - currTime - 1;

    currHealth +=
      diffTime * bandage[1] + Math.floor(diffTime / bandage[0]) * bandage[2];

    if (currHealth > health) currHealth = health;
    currHealth -= damage;
    if (currHealth <= 0) return -1;
    currTime = attackTime;
  }

  return currHealth;
}
```

### 시행착오

무한반복을 돌면서 마지막으로 공격이 들어온것만큼 반복을 해 비효율적이었다.
