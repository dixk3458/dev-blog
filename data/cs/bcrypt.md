# bcrypt

bcrypt 비밀번호 해싱을 위해 설계된 암호화 함수이다.

### bcrypt의 특징

- 솔트(Salt)기능 내장

bcrypt는 각 비밀번호에 랜덤하게 생성된 솔트를 추가하여 해싱하여 해시 충돌을 방지하고 보안을 높여준다.

- 복잡성

복잡성을 높임으로서 해싱 난이도를 증가시켜 보안을 강화한다.

```jsx
const bcrypt = require('bcrypt');

const password1 = 'wodnd3458';
const password2 = 'wodnd';

const hashed1 = bcrypt.hashSync(password1, 10);
console.log(hashed1);

console.log(bcrypt.compareSync(password2, hashed1));
console.log(`password1 : ${password1} , hashed1 : ${hashed1}`);
```
